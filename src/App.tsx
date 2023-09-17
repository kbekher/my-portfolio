import { Header } from './components/Header';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { Projects } from './components/Projects';

import './App.scss';

export const App = () => (
  <div className="App">
    <Header />

    <main className="App__main">
      <About />
      <Skills />
      <Certificates />
      <Projects />
      {/* <Contacts /> */}
    </main>

    {/* <Footer /> */}
  </div>
);
