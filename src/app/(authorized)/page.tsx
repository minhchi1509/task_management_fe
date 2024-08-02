'use client';
import { Button } from 'antd';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next-nprogress-bar';

const HomePage = () => {
  const { data: session } = useSession();
  const { push } = useRouter();

  const handleSignOut = async () => {
    const signoutResult = await signOut({
      redirect: false,
      callbackUrl: '/login'
    });
    push(signoutResult.url);
  };

  const handleGetSession = async () => {
    console.log(session?.user);
  };

  return (
    <>
      <button
        onClick={() => {
          push('/message');
        }}
      >
        Go to message page
      </button>

      <p>{session?.user?.fullName}</p>
      <Button
        type="primary"
        onClick={() => handleSignOut()}
        style={{ marginRight: 5 }}
      >
        Logout
      </Button>
      <Button type="primary" onClick={() => handleGetSession()}>
        Get Session
      </Button>
    </>
  );
};

export default HomePage;
