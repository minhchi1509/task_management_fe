import { ListItemButton, ListItemIcon, styled } from '@mui/material';

const bgColor = 'rgba(124, 77, 255, 0.15)';
const textColor = 'rgb(124, 77, 255)';

interface IStylesProps {
  isRootLevel: boolean;
  openSidebar: boolean;
  itemLevel: number;
}

const getColor = (isBgTransparent: boolean = false) => ({
  backgroundColor: isBgTransparent ? 'transparent' : bgColor,
  color: textColor
});

export const MuiListItemButton = styled(ListItemButton)<IStylesProps>(
  ({ isRootLevel, openSidebar, itemLevel }) => ({
    ...(isRootLevel && {
      paddingTop: openSidebar ? '10px' : 0,
      paddingBottom: openSidebar ? '10px' : 0,

      paddingRight: '16px',
      paddingLeft: openSidebar ? '24px' : '10px',
      '&.Mui-selected': {
        '& .MuiTypography-root': {
          fontWeight: 600
        },
        ...getColor(!openSidebar),
        '&:hover': {
          ...getColor(!openSidebar)
        },
        ...(!openSidebar && {
          '& .MuiButtonBase-root': {
            ...getColor(false),
            '&:hover': {
              ...getColor(false)
            }
          }
        })
      },
      ...(!openSidebar && {
        '& .MuiButtonBase-root': {
          '&:hover': {
            ...getColor(false)
          }
        }
      }),
      '&:hover': {
        ...getColor(!openSidebar)
      }
    }),
    ...(!isRootLevel && {
      '&:hover': { ...getColor(true) },
      '&.Mui-selected': {
        '& .MuiTypography-root': {
          fontWeight: 600
        },
        ...getColor(true),
        '&:hover': {
          ...getColor(true)
        }
      },
      paddingLeft: `${24 * itemLevel}px`
    }),
    borderRadius: '8px',
    marginBottom: '4px'
  })
);

export const MuiListItemIcon = styled(ListItemIcon)<IStylesProps>(
  ({ isRootLevel, openSidebar }) => ({
    color: 'inherit',
    ...(isRootLevel && {
      minWidth: '36px',
      ...(!openSidebar && {
        justifyContent: 'center',
        width: '46px',
        height: '46px'
      }),
      alignItems: 'center'
    }),
    ...(!isRootLevel && {
      minWidth: '18px'
    })
  })
);
