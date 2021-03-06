import React, { FC } from 'react';

import classes from './Note.module.scss';


interface NoteProps {
  className   ?: string,
  size        ?: number,  // fontSize in px
}

const Note: FC<NoteProps> = ({ className, children, size }) => { 
  const mainClasses = [classes.note];
  if (className) {
    mainClasses.push(className);
  }

  return (
    <p 
      className    =  {mainClasses.join(' ')}
      style        =  {{ fontSize: `${size}px` }}
    >
      {children}
    </p>
  );
	
};

export default Note;