import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import './css/Checkout.css';

const Checkout = ({ stepData }) => (
  <div>
  {
    stepData.map(step => {
      const { title, Icon, formData } = step;
      return (
        <div key={title}>
        <div className="checkout-summary-item">
          <Icon color='#7403ff' className="checkout-summary-item-small"/>
          {
            formData.reduce((children, data) => {
              if (data.val && !data.error) {
                children.push(
                  <div key={data.name} className="checkout-summary-item-small">
                    <div className="checkout-title">{data.name}:</div>
                    <div className="checkout-info">{data.val}</div>
                  </div>
                );
              }
              return children;
            },[])
          }
        </div>
        <Divider />
        </div>
      );
    }).slice(0, -1)
  }
  </div>
);

Checkout.propTypes = {
  stepData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number,
      progress: PropTypes.string,
      disabled: PropTypes.bool,
      Icon: PropTypes.func.isRequired,
      formData: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          val: PropTypes.string.isRequired,
          error: PropTypes.bool.isRequired,
          errorMessage: PropTypes.string,
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired
};

export default Checkout;