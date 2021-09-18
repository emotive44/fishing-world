import React from 'react';

import { Input } from '../../shared/library';

import classes from './Home.module.scss';

const Home = () => {
  return (
    <div className={classes.home}>
      Home
      <div className="row-4 row-m-wrap">
        <div className="col-33 col-t-100 col-m-100 p-4" style={{background: 'red'}}>
        <Input
            leftIcon
            largeInput
            labelInside
            name              = "name"
            type              = "text"
            label             = "Username"
            pattern           = {"[A-Z]+"}
            value             = "fdsfsfsfddsf"
            callbackChange    = {() => {}}
            icon              = {<i className="fas fa-user" />}
          />
        </div>
        <div className="col-33 col-t-50 col-m-100 p-4" style={{background: 'green'}}>
        <Input
            leftIcon
            largeInput
            labelInside
            name              = "name"
            type              = "text"
            label             = "Username"
            pattern           = {"[A-Z]+"}
            value             = "fdsfsfsfddsf"
            callbackChange    = {() => {}}
            icon              = {<i className="fas fa-user" />}
          />
        </div>
        <div className="col-33 col-t-50 col-m-100 p-4" style={{background: 'blue'}}>
        <Input
            leftIcon
            largeInput
            labelInside
            name              = "name"
            type              = "text"
            label             = "Username"
            pattern           = {"[A-Z]+"}
            value             = "fdsfsfsfddsf"
            callbackChange    = {() => {}}
            icon              = {<i className="fas fa-user" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
