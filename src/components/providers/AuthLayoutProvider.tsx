'use client';
import { Layout } from 'antd';
import { createContext, PropsWithChildren, useState } from 'react';

import Content from 'src/components/layouts/content/Content';
import Header from 'src/components/layouts/header/Header';
import Sidebar from 'src/components/layouts/sidebar/Sidebar';

interface IAuthLayoutContext {
  openSidebar: boolean;
  toggleSidebar: () => void;
}

export const AuthLayoutContext = createContext<IAuthLayoutContext | null>(null);

const AuthLayoutProvider = ({ children }: PropsWithChildren) => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <AuthLayoutContext.Provider value={{ openSidebar, toggleSidebar }}>
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Layout>
          <Sidebar />
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </AuthLayoutContext.Provider>
  );
};

export default AuthLayoutProvider;
