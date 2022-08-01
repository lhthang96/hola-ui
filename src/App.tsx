import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Border, Scrollbar } from './pages';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Scrollbar />} />
    </Routes>
  );
};
