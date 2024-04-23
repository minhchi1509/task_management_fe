import en from './messages/vi.json';

type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}
}
