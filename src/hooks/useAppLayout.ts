import { useContext } from 'react';

import { AppLayoutContext } from 'src/components/layouts/AppLayout';

const useAppLayout = () => {
  const value = useContext(AppLayoutContext);
  if (!value) {
    throw new Error('useAppLayout must be used within a AppLayoutProvider');
  }
  return { ...value };
};

export default useAppLayout;
