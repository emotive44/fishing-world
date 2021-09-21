import React, { FC } from 'react';
import classes from './Toggle.module.scss';


interface ToggleProps {
  callbackChange  : React.ChangeEventHandler<HTMLInputElement>;
  checked         : boolean;
  name            : string;
  id              ?: string;
  label           ?: string;
  leftLabel       ?: boolean;
}

const Toggle: FC<ToggleProps> = ({
  id,
  name,
  label,
  checked,
  leftLabel,
  callbackChange,
}) => {
  const labelClasses: string[] = [classes.label];
  if(leftLabel) labelClasses.push(classes.left);

  return (
    <>
      <label htmlFor={id} className={labelClasses.join(' ')}>
        {label && <span>{label}</span>}
        <input 
          hidden 
          id         = {id} 
          name       = {name}
          checked    = {checked}
          type       = "checkbox" 
          className  = {classes.toggle} 
          onChange   = {callbackChange}
        />
        <p className={classes.wrapper}>
          <span className={classes.checked}></span>
        </p>
      </label>
    </>
  )
}

export default Toggle;
