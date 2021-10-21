import { useEffect, useRef } from 'react'

import env from '@config/env';

const useDocumentTitle = (title: string) => {
  const initialTitle = useRef(document.title);

  useEffect(() => {
     // TODO: add logic for notifications count like: Fishing World | Page (2)
    document.title = `${env.APP_TITLE} | ${title}`;
  }, [title]);

  useEffect(() => () => {
      document.title = initialTitle.current;
  }, []);
}

export default useDocumentTitle