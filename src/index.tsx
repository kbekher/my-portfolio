import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Menu } from './components/Menu';

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );