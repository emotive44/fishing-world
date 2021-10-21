import React, { FC, useState } from 'react';
import moment from 'moment';

import { calendarSrc } from '../../../assets/images';
import { getPlaceHolder, getCurrDateFormat } from './helpers';
import classes from './Datepicker.module.scss';

type TFormat = 'DD-MM-YYYY' | 'MM-DD-YYYY' | 'YYYY-MM-DD';

interface DatepickerProps {
  name                :  string,
  label               ?: string,
  minDate             ?: string,
  maxDate             ?: string,
  format              ?: TFormat,
  callbackChange      :  (date: string, name: string) => void,
}

const Datepicker:FC<DatepickerProps> = ({
  name,
  label,
  format,
  minDate,
  maxDate,
  callbackChange,
}) => {
  const [inputValue, setInputValue] =useState('');
  
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    let date = e.target.value;

    // convert date for specific date-format
    const momentObj = moment(date, 'YYYY-MM-DD');
    date = momentObj.format(format ? format : 'DD-MM-YYYY');

    // set input value only for frontend
    setInputValue(getCurrDateFormat(format || '', date))

    callbackChange(date, name);
  }

  return (
    <div>
      <span>{label}</span>
      <div className={classes['date-picker']}>
        <div className={classes['input-wrapper']}>
          <span className={classes.value}>
            {inputValue ? inputValue : getPlaceHolder(format || '')}
          </span>
          <input 
            type            = 'date'
            name            = {name}
            min             = {minDate}
            max             = {maxDate}
            defaultValue    = {maxDate}
            onChange        = {onChange}
            className       = {classes.input} 
          />
        </div>
        <span className={classes.button}>
          <img src={calendarSrc} alt='' />
        </span>
      </div>
    </div>
  );
}

export default Datepicker