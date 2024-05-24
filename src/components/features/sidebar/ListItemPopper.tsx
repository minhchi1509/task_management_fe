'use client';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
  Box,
  Fade,
  ListItemButton as MuiListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Typography
} from '@mui/material';
import { usePathname } from 'next/navigation';
import { createRef, FC, RefObject, useEffect, useRef, useState } from 'react';
import { useHover } from 'usehooks-ts';

import { TSidebarItem } from 'src/types/sidebar.type';

interface IListItemPopperProps {
  parentItemRef: RefObject<any>;
  item: TSidebarItem;
}

const bgColor = 'rgba(124, 77, 255, 0.15)';
const textColor = 'rgb(124, 77, 255)';

const ListItemPopper: FC<IListItemPopperProps> = ({ item, parentItemRef }) => {
  const pathName = usePathname();
  const [openPopper, setOpenPopper] = useState(false);
  const [hoverSubItemIndex, setHoverSubItemIndex] = useState<number>();
  const [isHoverPopper, setIsHoverPopper] = useState(false);
  const itemsRef = useRef([]);
  const isParentItemHover = useHover(parentItemRef);

  const getColor = (isBgTransparent: boolean = false) => ({
    backgroundColor: isBgTransparent ? 'transparent' : bgColor,
    color: textColor
  });

  const handleClickOnListItemButton = (item: TSidebarItem) => {
    if (!item.nestedItems?.length) {
      console.log('Redirect to:', item.redirectTo);
    }
  };

  useEffect(() => {
    if (isParentItemHover) {
      setOpenPopper(true);
    }
    if (!isParentItemHover && !isHoverPopper) {
      setOpenPopper(false);
    }
  }, [isParentItemHover, isHoverPopper]);

  useEffect(() => {
    if (item.nestedItems) {
      const numberOfNestedItems = item.nestedItems.length;
      itemsRef.current = Array(numberOfNestedItems)
        .fill(1)
        .map((_, i) => itemsRef.current[i] || createRef());
    }
  }, [item.nestedItems]);

  return (
    <Popper
      onMouseLeave={() => {
        setIsHoverPopper(false);
      }}
      onMouseEnter={() => {
        setIsHoverPopper(true);
      }}
      sx={{ zIndex: 1200, minWidth: '180px' }}
      open={openPopper}
      anchorEl={parentItemRef.current}
      placement="right-start"
      transition
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper elevation={5} sx={{ borderRadius: '8px', mt: 2 }}>
            <Box>
              {item.nestedItems?.map((subItem, index) => (
                <MuiListItemButton
                  onMouseLeave={() => setHoverSubItemIndex(undefined)}
                  onMouseEnter={() => setHoverSubItemIndex(index)}
                  onClick={() => handleClickOnListItemButton(subItem)}
                  ref={itemsRef.current[index]}
                  key={index}
                  sx={{
                    py: 1,
                    pl: '10px',
                    pr: 2,
                    mb: 0.5,
                    '&:hover': {
                      ...getColor(true)
                    },
                    '&.Mui-selected': {
                      ...getColor(true),
                      '& .MuiTypography-root': {
                        fontWeight: 600
                      },
                      '&:hover': {
                        ...getColor(true)
                      }
                    }
                  }}
                  disableRipple
                  selected={pathName.includes(subItem.redirectTo)}
                >
                  <ListItemIcon sx={{ minWidth: '18px', color: 'inherit' }}>
                    <FiberManualRecordIcon
                      sx={{ width: '6px', height: '6px' }}
                    />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography noWrap fontSize={14} lineHeight="19px">
                      {subItem.title}
                    </Typography>
                  </ListItemText>
                  {subItem.nestedItems && (
                    <ExpandMoreIcon
                      sx={{
                        width: 16,
                        height: 16,
                        ml: 'auto',
                        rotate: hoverSubItemIndex === index ? 0 : '-90deg'
                      }}
                    />
                  )}
                  {subItem.nestedItems && (
                    <ListItemPopper
                      parentItemRef={itemsRef.current[index]}
                      item={subItem}
                    />
                  )}
                </MuiListItemButton>
              ))}
            </Box>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};

export default ListItemPopper;
