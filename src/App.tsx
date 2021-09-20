import React, { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import './shared/config/axios';
import { setAuthToken, setThemeMode } from './shared/utils';
import Routes from './shared/routes/Routes';
import { LOCALSTORAGE_TOKEN, LOCALSTORAGE_THEME } from './shared/constants';
import styles from './App.module.scss';

const token = localStorage.getItem(LOCALSTORAGE_TOKEN) || '';
const theme = localStorage.getItem(LOCALSTORAGE_THEME) || '';

function App() {
  useEffect(() => {
    setThemeMode(theme);
    setAuthToken(token);
  }, []);

  return (
    <>
      <aside className={styles.sideBar}>
        SideBar
        <button onClick={() => setThemeMode()}>Change theme</button>
      </aside>
      <section className={styles.routerCnt}>
        <Router>
          <Routes isAuth={token !== ''} />
        </Router>
      </section>
    </>
  );
};

export default App;
