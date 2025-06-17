import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './index.css'
import ColorProvider from './Context/bgContext.js';
import { SidebarProvider } from './Context/sideBarContext.js';
import React from 'react';

const rootElement: HTMLElement | null = document.getElementById('root');
if (!rootElement) {
  throw new Error("Element with id 'root' not found");
}
const root = createRoot(rootElement);

root.render(
    <ColorProvider>
      <SidebarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SidebarProvider>
    </ColorProvider>
);

