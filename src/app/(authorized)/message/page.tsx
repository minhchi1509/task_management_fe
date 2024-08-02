import { delay } from 'src/utils/common-util';

const MessagePage = async () => {
  await delay(100);
  return <button>This is message page</button>;
};

export default MessagePage;
