import { createContext } from 'react';

const LocaleContext = createContext();
const LocaleProvider = LocaleContext.Provider;
const LocaleConsumer = LocaleContext.Consumer;

export { LocaleProvider, LocaleConsumer };
export default LocaleContext;
