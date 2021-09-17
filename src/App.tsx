import React, { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import './shared/config/axios';
import { setAuthToken } from './shared/utils/axios';
import setThemeMode from './shared/utils/themeMode';
import Routes from './shared/routes/Routes';
import { LOCALSTORAGE_TOKEN, LOCALSTORAGE_THEME, THEME_DEFAULT } from './shared/constants';
import styles from './App.module.scss';

const token = localStorage.getItem(LOCALSTORAGE_TOKEN) || '';
const theme = localStorage.getItem(LOCALSTORAGE_THEME);

function App() {
  useEffect(() => {
    const el = document.getElementsByTagName('html')[0]; 
    if(theme) {
      el?.classList.add(theme);
    } else {
      el?.classList.add(THEME_DEFAULT);
    }

    setAuthToken(token);
  }, []);

  return (
    <main className={styles.modulesWrapper}>
      <aside className={styles.sideBar}>
        SideBar
        <button onClick={setThemeMode}>Change theme</button>
      </aside>
      <section className={styles.routerCnt}>
        <Router>
          <Routes isAuth={token !== ''} />
        </Router>
      </section>
    </main>
  );
};

export default App;
