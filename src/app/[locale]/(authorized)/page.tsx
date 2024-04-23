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
      <Button
        onClick={() => {
          push('/message');
        }}
        type="primary"
      >
        Go to message page
      </Button>
      {/* <Link href="/message">
        <Button type="primary">Go to message page</Button>
      </Link> */}
      <p>{session?.user?.fullName}</p>
      <Button onClick={() => handleSignOut()}>Logout</Button>
      <Button onClick={() => handleGetSession()}>Get Session</Button>
    </>
  );
};

export default HomePage;
