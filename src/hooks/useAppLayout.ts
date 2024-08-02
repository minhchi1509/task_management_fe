import { useContext } from 'react';

import { AuthLayoutContext } from 'src/components/providers/AuthLayoutProvider';

const useAppLayout = () => {
  const value = useContext(AuthLayoutContext);
  if (!value) {
    throw new Error('useAppLayout must be used within a AppLayoutProvider');
  }
  return { ...value };
};

export default useAppLayout;
