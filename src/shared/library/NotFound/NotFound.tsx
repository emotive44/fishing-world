import React, { FC, ReactElement } from 'react';
import classes from './NotFound.module.scss';


interface NotFoundProps {
  title       : string,
  message     ?: string,
  icon        ?: ReactElement,
}

const NoFound: FC<NotFoundProps> = ({
  icon,
  title,
  message,
  children,
}) => {
  const messageClasses = [classes.message];

  if (!title) {
    messageClasses.push(classes.nom);
  }

  //Check do we need additional class for childrens
  let childrenClasses = [];
  if (typeof children !== 'undefined') {
    childrenClasses.push(classes.mtop);
  }

  return (
    <section className={classes.nofound}>
      {icon && <span className={classes.icon}> {icon} </span>}
      {title && <h2> {title} </h2>}
      {message && <p className={messageClasses.join(' ')}> {message} </p>}
      <div className={childrenClasses.join(' ')}> {children} </div>
    </section>
  );
};

export default NoFound;
