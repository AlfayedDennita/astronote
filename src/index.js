import './styles/_base.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Error404Page from './pages/Error404Page';
import NotesPage from './pages/NotesPage';
import WriteNotePage from './pages/WriteNotePage';
import ViewNotePage from './pages/ViewNotePage';

const root = createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<NotesPage key="unarchived" type="unarchived" />} />
        <Route path="archives" element={<NotesPage key="archived" type="archived" />} />
        <Route path="notes">
          <Route path=":id" element={<ViewNotePage />} />
          <Route path="new" element={<WriteNotePage key="add" type="add" />} />
          <Route path="edit/:id" element={<WriteNotePage key="edit" type="edit" />} />
        </Route>
        <Route path="*" element={<Error404Page />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
