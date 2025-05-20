import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import ColorProvider from './Context/bgContext.jsx';
import { SidebarProvider } from './Context/sideBarContext.jsx';

const rootElement = document.getElementById('root');
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
