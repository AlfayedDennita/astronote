import { createContext } from 'react';

const ModalContext = createContext();
const ModalProvider = ModalContext.Provider;
const ModalConsumer = ModalContext.Consumer;

export { ModalProvider, ModalConsumer };
export default ModalContext;
