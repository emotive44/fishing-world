import React, { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './shared/routes/Routes';
import { LOCALSTORAGE_THEME, THEME_DEFAULT } from './shared/constants';
import styles from './App.module.scss';

function App() {
  useEffect(() => {
    const el = document.getElementsByTagName('html')[0]; 
    const theme = localStorage.getItem(LOCALSTORAGE_THEME);

    if(theme) {
      el?.classList.add(theme);
    } else {
      el?.classList.add(THEME_DEFAULT);
    }
  }, []);

  return (
    <main className={styles.modulesWrapper}>
      <aside className={styles.sideBar}>SideBar</aside>
      <section className={styles.routerCnt}>
        <Router>
          <Routes isAuth={false} />
        </Router>
      </section>
    </main>
  );
};

export default App;
