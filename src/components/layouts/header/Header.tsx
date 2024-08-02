'use client';

import { Layout } from 'antd';

import './Header.scss';
import useAppLayout from 'src/hooks/useAppLayout';

const { Header: AntdHeader } = Layout;

const Header = () => {
  const { toggleSidebar } = useAppLayout();
  return (
    <AntdHeader className="Header">
      <button onClick={toggleSidebar}>Toggle open sidebar</button>
    </AntdHeader>
  );
};

export default Header;
