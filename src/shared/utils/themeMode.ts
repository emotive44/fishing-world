import { THEME_DARK, THEME_DEFAULT, LOCALSTORAGE_THEME } from '../constants';

const setThemeMode = (theme?: string) => {
  const el = document.getElementsByTagName('html')[0]; 
  const classes = Array.from(el.classList);

  // set the initial theme mode color
  if(theme) {
    el?.classList.add(theme);
    return;
  }
  
  // toggle theme mode color
  if(classes.includes(THEME_DEFAULT)) {
    el?.classList.remove(THEME_DEFAULT);
    el?.classList.add(THEME_DARK);
    localStorage.setItem(LOCALSTORAGE_THEME, THEME_DARK);
  } else {
    el?.classList.remove(THEME_DARK);
    el?.classList.add(THEME_DEFAULT);
    localStorage.setItem(LOCALSTORAGE_THEME, THEME_DEFAULT);
  }
}

export default setThemeMode;
