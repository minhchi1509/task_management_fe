import React from 'react';

const MessageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <div className="h-10 w-full bg-slate-400">Message header</div>
      {children}
    </>
  );
};

export default MessageLayout;
