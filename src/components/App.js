import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { PersonIcon, SelectIcon, CheckoutIcon, PaymentInfoIcon } from './icons';
import { Wizard } from './';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wizardTabs: [{
        title: 'Intro',
        Icon: PersonIcon,
        forms: ['Full Name', 'Alias']
      },
      {
        title: 'Select',
        Icon: SelectIcon,
        forms: ['Phone Number', 'Email']
      },
      {
        title: 'Payment Info',
        Icon: PaymentInfoIcon,
        forms: ['Credit Card Number', 'Paypal Email']
      },
      {
        title: 'Checkout',
        Icon: CheckoutIcon,
        forms: []
      }]
    }
  }
  render() {
    return (
      <MuiThemeProvider >
        <Wizard
          tabsInfo={this.state.wizardTabs}
        />
      </MuiThemeProvider >
    );
  }
}

export default App;
