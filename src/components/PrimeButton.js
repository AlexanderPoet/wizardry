import React from 'react';
import PropTypes from 'prop-types';
import Raisedbutton from 'material-ui/RaisedButton';

const PrimeButton = ({ activeStepIndex, stepCount, completeForm, handleNextClick, handleBeginClick }) => {
  const getLabel = () => {
    switch(activeStepIndex) {
      case -1:
        return 'Begin';
      case stepCount:
        return 'Done';
      default:
        return 'Save';
    }
  }
  return (
    <Raisedbutton
      label={getLabel()}
      backgroundColor="#7403ff"
      labelColor="#ffffff"
      onClick={ activeStepIndex < stepCount ?
        () => {
          activeStepIndex >= 0 ?
          handleNextClick() : handleBeginClick();
        } :
        () => {
          completeForm();
        }
      }
    />
  );
}

PrimeButton.propTypes = {
  activeStepIndex: PropTypes.number.isRequired,
  stepCount: PropTypes.number.isRequired,
  completeForm: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
  handleBeginClick: PropTypes.func.isRequired,
}

export default PrimeButton;