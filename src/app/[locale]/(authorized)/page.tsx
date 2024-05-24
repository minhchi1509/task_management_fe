'use client';
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
      {/* <Link href="/message">
        <Button type="primary">Go to message page</Button>
      </Link> */}
      <p>{session?.user?.fullName}</p>
      <button onClick={() => handleSignOut()}>Logout</button>
      <button onClick={() => handleGetSession()}>Get Session</button>
    </>
  );
};

export default HomePage;
