import React, { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import classes from  './Button.module.scss';

import Spinner from '../Spinner/Spinner';


interface ButtonProps {
  type          ?: 'secondary' | 'success' | 'danger' | 'warning' | 'dark' | 'light' | 'link',
  size          ?: 'small' | 'medium' | 'large',
  href          ?: string, // url link
  newBlank      ?: boolean, // if want open url link at new page
  className     ?: string,
  outline       ?: boolean, // if want button to be with transparent background
  callback      ?: (e: MouseEvent) => any,
  disabled      ?: boolean,
  loading       ?: boolean,
  fullWidth     ?: boolean,
}

const Button: FC<ButtonProps> = ({
  type,
  size,
  href,
  outline,
  callback,
  disabled,
  loading,
  children,
  newBlank,
  fullWidth,
  className,
}) => {
  const mainClasses: string[] = [classes.medium, classes.button];
  let cursor = 'pointer';

  if(loading) {
    cursor = 'wait';
  }

  if(disabled) {
    cursor = 'not-allowed';
  }

  if(className) {
    mainClasses.push(className);
  }

  if (type) {
    mainClasses.push(classes[type]);
  }

  if(size) {
    mainClasses.push(classes[size]);
  }

  if(fullWidth) {
    mainClasses.push(classes.block);
  }

  // check if want button to be transparent background
  if(outline) {
    mainClasses.push(classes.outline);
  }

  const linkClasses: string[] = [];
  // check if want basic link or link like button
  if(type === 'link') {
    linkClasses.push(classes.link);
  } else {
    linkClasses.push(...mainClasses, classes.btnLink);
  }

  if(href) {
    return (
      <Link 
        style       = {{ cursor }}
        to          = {href ? href : ''}
        className   = {linkClasses.join(' ')}
        target      = {newBlank ? '_blank' : ''}
      >
        <div className={classes.childrenContainer}>
          {children}
        </div>
      </Link>
    )
  }

  return (
    <button
      onClick       = {callback}
      style         = {{ cursor }}
      disabled      = {disabled || loading}
      className     = {mainClasses.join(' ')}
    >
      {loading ? <Spinner btnSpinner /> : children}
    </button>
  );
}

export default Button;
