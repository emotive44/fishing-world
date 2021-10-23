import React, { FC } from 'react';

import classes from './NoneView.module.scss';

interface NoneViewProps {
  className    ?: string,
  text          : string,
  withIcon     ?: boolean,
}

const NoneView: FC<NoneViewProps> = ({ className, text, withIcon }) => {
  const containerClasses = [classes.container];
  if(className) {
    containerClasses.push(className);
  }

  return (
    <div className={containerClasses.join(' ')}>
      {withIcon && <i className={["far fa-frown", classes.icon].join(' ')} />}
      <p className={classes.text}>{text}</p>
    </div>
  );
}

NoneView.defaultProps = {
  withIcon: false,
}

export default NoneView;
