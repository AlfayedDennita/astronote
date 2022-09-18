import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import { getUserLogged, putAccessToken } from './utils/network-data';
import getString from './utils/strings';
import { LocaleProvider } from './contexts/LocaleContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ModalProvider } from './contexts/ModalContext';
import Modal from './components/Modal/Modal';
import ConfirmModal from './components/Modal/ConfirmModal';
import Header from './components/Header/Header';
import LoadingPage from './pages/LoadingPage';
import Error404Page from './pages/Error404Page';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotesPage from './pages/NotesPage';
import WriteNotePage from './pages/WriteNotePage';
import ViewNotePage from './pages/ViewNotePage';

function App() {
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'en');
  const [theme, setTheme] = useState((
    localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light')
  ));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmProps, setConfirmProps] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authedUser, setAuthedUser] = useState(null);
  const [isAfterRegister, setIsAfterRegister] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('lang', locale);
  }, [locale]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('meta[name="theme-color"]').setAttribute('content', theme === 'light' ? '#ff6933' : '#1a1a1a');
  }, [theme]);

  const localeValue = useMemo(() => ({
    locale,
    setLocale: (newLocale) => {
      if (newLocale !== locale) {
        localStorage.setItem('locale', newLocale);
        setLocale(newLocale);
      }
    },
    toggleLocale: () => {
      setLocale((prevLocale) => {
        const newLocale = prevLocale === 'en' ? 'id' : 'en';
        localStorage.setItem('locale', newLocale);
        return newLocale;
      });
    },
    getString: (id) => getString(id, locale),
  }), [locale]);

  const themeValue = useMemo(() => ({
    theme,
    toggleTheme: () => {
      setTheme((prevTheme) => {
        const newTheme = prevTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        return newTheme;
      });
    },
  }), [theme]);

  const modalValue = useMemo(() => ({
    confirm: ({
      title, message, ConfirmIcon, confirmText, isDanger,
    }) => new Promise((resolve) => {
      setConfirmProps({
        title,
        message,
        ConfirmIcon,
        confirmText,
        isDanger,
        onAgree: () => {
          setIsModalOpen(false);
          resolve(true);
        },
        onDisagree: () => {
          setIsModalOpen(false);
          resolve(false);
        },
      });
      setIsModalOpen(true);
    }),
  }), []);

  useEffect(() => {
    const getAuthedUser = async () => {
      const { error, data } = await getUserLogged();
      if (!error) {
        setAuthedUser(data);
      }
      setIsLoading(false);
    };
    getAuthedUser();
  }, []);

  const onLoginHandler = async (loginData) => {
    putAccessToken(loginData.accessToken);
    const { error, data } = await getUserLogged();
    if (!error) {
      setAuthedUser(data);
    }
  };

  const onLogoutHandler = () => {
    putAccessToken('');
    setAuthedUser(null);
  };

  let elementToRender = null;

  if (authedUser === null) {
    elementToRender = (
      <Routes>
        <Route path="/register" element={<RegisterPage onAfterRegister={() => setIsAfterRegister(true)} />} />
        <Route path="/*" element={<LoginPage onLoginSuccess={onLoginHandler} isAfterRegister={isAfterRegister} />} />
      </Routes>
    );
  } else {
    elementToRender = (
      <>
        <Header onLogout={onLogoutHandler} />
        <Routes>
          <Route path="/">
            <Route index element={<NotesPage key="unarchived" type="unarchived" />} />
            <Route path="archives" element={<NotesPage key="archived" type="archived" />} />
            <Route path="notes">
              <Route path=":id" element={<ViewNotePage />} />
              <Route path="new" element={<WriteNotePage />} />
            </Route>
            <Route path="*" element={<Error404Page />} />
          </Route>
        </Routes>
      </>
    );
  }

  if (isLoading) {
    elementToRender = <LoadingPage />;
  }

  elementToRender = (
    <LocaleProvider value={localeValue}>
      <ThemeProvider value={themeValue}>
        <ModalProvider value={modalValue}>
          {elementToRender}
          <Modal isOpen={isModalOpen}>
            {
              confirmProps !== null
              && (
                <ConfirmModal
                  title={confirmProps.title}
                  message={confirmProps.message}
                  ConfirmIcon={confirmProps.ConfirmIcon}
                  confirmText={confirmProps.confirmText}
                  isDanger={confirmProps.isDanger}
                  onAgree={confirmProps.onAgree}
                  onDisagree={confirmProps.onDisagree}
                />
              )
            }
          </Modal>
        </ModalProvider>
      </ThemeProvider>
    </LocaleProvider>
  );

  return elementToRender;
}

export default App;
