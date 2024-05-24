'use client';
import { Box, Divider, List, Typography } from '@mui/material';

import { DefaultIcon } from 'src/assets/icons';
import ListItemButton from 'src/components/features/sidebar/ListItemButton/ListItemButton';
import { MuiDrawer } from 'src/components/layouts/sidebar/styles';
import { HEADER_HEIGHT } from 'src/constants/variables';
import useAppLayout from 'src/hooks/useAppLayout';
import { TSidebarGroupItem } from 'src/types/sidebar.type';

const sidebarMenu: TSidebarGroupItem[] = [
  {
    title: 'Dashboard',
    items: [
      {
        title: 'Home',
        redirectTo: '/home',
        icon: DefaultIcon,
        nestedItems: [
          {
            title: 'Starred',
            redirectTo: '/vi/logins',
            nestedItems: [
              {
                title: 'Model',
                redirectTo: '/vi/logina',
                nestedItems: [
                  {
                    title: 'Customer',
                    redirectTo: '/vi/loginp'
                  }
                ]
              },
              {
                title: 'Model',
                redirectTo: '/vi/logina',
                nestedItems: [
                  {
                    title: 'Customer',
                    redirectTo: '/vi/loginp'
                  }
                ]
              }
            ]
          },
          {
            title: 'Setting',
            redirectTo: '/default/starred',
            nestedItems: [
              {
                title: 'Calendar',
                redirectTo: '/vi/logins',
                nestedItems: [
                  {
                    title: 'Category',
                    redirectTo: '/vi/loginr'
                  }
                ]
              }
            ]
          },
          {
            title: 'Contact',
            redirectTo: '/default/starred'
          },
          {
            title: 'Starred',
            redirectTo: '/vi/login',
            nestedItems: [
              {
                title: 'Model',
                redirectTo: '/vi/login',
                nestedItems: [
                  {
                    title: 'Customer',
                    redirectTo: '/vi/login'
                  }
                ]
              },
              {
                title: 'Model',
                redirectTo: '/vi/logina',
                nestedItems: [
                  {
                    title: 'Customer',
                    redirectTo: '/vi/loginp'
                  }
                ]
              }
            ]
          },
          {
            title: 'Starred',
            redirectTo: '/vi/logins',
            nestedItems: [
              {
                title: 'Model',
                redirectTo: '/vi/logina',
                nestedItems: [
                  {
                    title: 'Customer',
                    redirectTo: '/vi/loginp'
                  }
                ]
              },
              {
                title: 'Model',
                redirectTo: '/vi/logina',
                nestedItems: [
                  {
                    title: 'Customer',
                    redirectTo: '/vi/loginp'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

const Sidebar = () => {
  const { openSidebar } = useAppLayout();
  const stylesProps = { isSidebarOpen: openSidebar };
  return (
    <MuiDrawer open={openSidebar} variant="permanent" {...stylesProps}>
      <Box sx={{ mt: `${HEADER_HEIGHT}px` }}></Box>
      <Box
        sx={{
          paddingX: +openSidebar * 2,
          height: '100%'
        }}
      >
        {sidebarMenu.map((group, index) => (
          <>
            <List
              key={index}
              {...(openSidebar &&
                group.title && {
                  subheader: (
                    <Typography
                      sx={{
                        margin: '10px 0px 0.35em',
                        padding: '6px',
                        fontWeight: 600,
                        pb: 1,
                        fontSize: 14,
                        lineHeight: '23px'
                      }}
                    >
                      {group.title}
                    </Typography>
                  )
                })}
            >
              {group.items.map((listItems, index) => (
                <ListItemButton key={index} {...listItems} />
              ))}
            </List>
            <Divider sx={{ mt: '2px', mb: '10px' }} />
          </>
        ))}
      </Box>
    </MuiDrawer>
  );
};

export default Sidebar;
