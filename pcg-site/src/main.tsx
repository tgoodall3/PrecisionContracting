import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from '@/routes/AppRoutes';
import '@/index.css';
import { UIProvider } from '@/store/ui';
import { SelectionsProvider } from '@/store/selections';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <UIProvider>
          <SelectionsProvider>
            <AppRoutes />
          </SelectionsProvider>
        </UIProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
