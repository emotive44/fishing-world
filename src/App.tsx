import React, { useEffect, MouseEvent } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

import '@config/axios';
import { setAuthToken, setThemeMode, withPreventEvents } from '@utils';
import { LOCALSTORAGE_TOKEN, LOCALSTORAGE_THEME } from '@constants';
import Routes from '@routes/Routes';
import { Button } from '@library';
import styles from './App.module.scss';

const token = localStorage.getItem(LOCALSTORAGE_TOKEN) || '';
const theme = localStorage.getItem(LOCALSTORAGE_THEME) || '';

function App() {
  useEffect(() => {
    setThemeMode(theme);
    setAuthToken(token);
  }, []);

  return (
    <Router>
      <aside className={styles.sideBar} onClick={() => console.log('aside')}>
        SideBar
        <button onClick={(e) => withPreventEvents(e, setThemeMode)}>Change theme</button>
        <form>
          <div>Form</div>
          <Button
            loading
            callback={(e: MouseEvent) => withPreventEvents(e, () => console.log('submit'))}
          >
            Submit
          </Button>
        </form>
        <Link to="/fishing-world/ui" >UI components</Link>
      </aside>
      <section className={styles.routerCnt}>
        <Routes isAuth={token !== ''} />
      </section>
    </Router>
  );
};

export default App;
