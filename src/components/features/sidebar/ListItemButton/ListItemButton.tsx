'use client';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
  ButtonBase,
  Collapse,
  List,
  // ListItemButton as MuiListItemButton,
  ListItemText,
  Typography
} from '@mui/material';
import { usePathname } from 'next/navigation';
import { FC, useRef, useState } from 'react';

import {
  MuiListItemButton,
  MuiListItemIcon
} from 'src/components/features/sidebar/ListItemButton/styles';
import ListItemPopper from 'src/components/features/sidebar/ListItemPopper';
import useAppLayout from 'src/hooks/useAppLayout';
import { TSidebarItem } from 'src/types/sidebar.type';

interface IListItemButtonProps extends TSidebarItem {
  treeLevel?: number;
}

const bgColor = 'rgba(124, 77, 255, 0.15)';
const textColor = 'rgb(124, 77, 255)';

const getColor = (isBgTransparent: boolean = false) => ({
  backgroundColor: isBgTransparent ? 'transparent' : bgColor,
  color: textColor
});

const ListItemButton: FC<IListItemButtonProps> = (props) => {
  const pathName = usePathname();
  const { title, treeLevel, redirectTo, nestedItems } = props;
  const [openSubItems, setOpenSubItems] = useState(
    pathName.includes(redirectTo)
  );
  const itemRef = useRef(null);
  const { openSidebar } = useAppLayout();
  const itemLevel = treeLevel || 1;
  const isRootLevel = itemLevel === 1;
  const isSelected = pathName.includes(redirectTo) || openSubItems;
  const haveSubItems = nestedItems && nestedItems.length > 0;

  const stylesProps = { isRootLevel, openSidebar, itemLevel };

  const handleClickOnListItemButton = () => {
    if (haveSubItems) {
      setOpenSubItems(!openSubItems);
    } else {
      console.log('Redirect to:', redirectTo);
    }
  };

  return (
    <>
      <MuiListItemButton
        ref={itemRef}
        onClick={handleClickOnListItemButton}
        disableRipple={!openSidebar}
        selected={isSelected}
        {...stylesProps}
      >
        <ButtonBase
          sx={{
            borderRadius: '8px'
          }}
          disableRipple={openSidebar}
        >
          <MuiListItemIcon {...stylesProps}>
            {props.icon ? (
              <props.icon style={{ width: '20px', height: '20px' }} />
            ) : (
              <FiberManualRecordIcon sx={{ width: '6px', height: '6px' }} />
            )}
          </MuiListItemIcon>
        </ButtonBase>
        <ListItemText sx={{ opacity: +openSidebar }}>
          <Typography noWrap fontSize={14} lineHeight="19px">
            {title}
          </Typography>
        </ListItemText>
        {haveSubItems &&
          openSidebar &&
          (openSubItems ? (
            <ExpandLess sx={{ width: 16, height: 16 }} />
          ) : (
            <ExpandMoreIcon sx={{ width: 16, height: 16 }} />
          ))}
        {nestedItems && !openSidebar && (
          <ListItemPopper
            parentItemRef={itemRef}
            item={{ title, nestedItems, redirectTo }}
          />
        )}
      </MuiListItemButton>
      <Collapse
        in={openSubItems}
        timeout="auto"
        unmountOnExit
        sx={{ display: openSidebar ? 'flex' : 'none' }}
      >
        <List component="div" disablePadding>
          {nestedItems?.map((item, index) => (
            <ListItemButton key={index} {...item} treeLevel={itemLevel + 1} />
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default ListItemButton;
