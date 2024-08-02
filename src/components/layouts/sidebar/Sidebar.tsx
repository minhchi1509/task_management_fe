'use client';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';

import './Sidebar.scss';
import {
  HEADER_HEIGHT,
  SIDEBAR_CLOSED_WIDTH,
  SIDEBAR_OPEN_WIDTH
} from 'src/constants/variables';
import useAppLayout from 'src/hooks/useAppLayout';

type MenuItem = Required<MenuProps>['items'][number];
const { Sider } = Layout;

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Item 1',
        type: 'group',
        children: [
          { key: '1', label: 'Option 1' },
          { key: '2', label: 'Option 2' }
        ]
      },
      {
        key: 'g2',
        label: 'Item 2',
        type: 'group',
        children: [
          { key: '3', label: 'Option 3' },
          { key: '4', label: 'Option 4' }
        ]
      }
    ]
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' }
        ]
      }
    ]
  },
  {
    type: 'divider'
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' }
    ]
  }
];

const Sidebar = () => {
  const { openSidebar } = useAppLayout();
  return (
    <Sider
      collapsed={!openSidebar}
      className="Sidebar"
      style={{
        position: 'fixed',
        left: 0,
        overflow: 'auto',
        height: `calc(100vh - ${HEADER_HEIGHT}px)`
      }}
      width={openSidebar ? SIDEBAR_OPEN_WIDTH : SIDEBAR_CLOSED_WIDTH}
    >
      <Menu
        defaultSelectedKeys={['7']}
        defaultOpenKeys={['sub2', 'sub3']}
        mode="inline"
        items={items}
        onClick={(info) => console.log(info)}
      />
    </Sider>
  );
};

export default Sidebar;
