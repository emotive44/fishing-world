import React, { FC } from 'react';

import { spinnerSrc } from '@assets/images';
import classes from './Spinner.module.scss';

interface SpinnerProps {
  btnSpinner?: boolean
}

const Spinner: FC<SpinnerProps> = ({
  btnSpinner
}) => {
  const spinnerClasses = [classes.spinner];

  if(btnSpinner) {
    spinnerClasses.push(classes['button-spinner']);
  }

  return (
    <span className={spinnerClasses.join(' ')} onClick={(e) => e.stopPropagation()}>
      <img
        src={spinnerSrc}
        alt=""
      />
    </span>
  );
}

export default Spinner;