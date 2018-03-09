import React from 'react';
import wizard from '../wizard.png';
import logo from '../logo.svg';
import './css/Completed.css';

export default () => (
  <div className="completed-container">
    <div>Congratulations, you did it!</div>
    <div>Thanks for completing my wizard prototype</div>
    <div>
    <img src={ wizard } className="wizard" alt="sweet wizard"/>
    <img src={ logo } className="App-logo" alt="react logo" />
    </div>
  </div>
);