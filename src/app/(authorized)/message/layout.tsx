import React from 'react';

const MessageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <div className="w-full h-10 bg-slate-400">Message header</div>
      {children}
    </>
  );
};

export default MessageLayout;
