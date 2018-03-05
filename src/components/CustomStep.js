import React from 'react';
import PropTypes from 'prop-types'
import { Step, StepButton } from 'material-ui/Stepper';
import { EditIcon, CheckCircle } from './icons';
import { grey400 } from 'material-ui/styles/colors';

const CustomStep = ({ data, handleTabClick }) => {
  const { progress, focus, Icon, title, id, disabled } = data;
  const color = focus ? '#7403ff' : grey400; 
  const pickIcon = state => {
    const possibilties = {
      unstarted: <Icon color={color}/>,
      inProgress: <EditIcon color={color}/>,
      done: <CheckCircle color={color}/>
    }
    return possibilties[state];
  };
  return (
    <Step>
      <StepButton
        disabled={disabled}
        icon={pickIcon(progress)}
        onClick={() => handleTabClick(id)} >
        {title}
      </StepButton>
    </Step >
  );
};

CustomStep.proptypes = {
  data: PropTypes.shape({
    progress: PropTypes.string.isRequired,
    focus: PropTypes.bool.isRequired,
    Icon: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired
  }),
  handleTabClick: PropTypes.func.isRequired
}

export default CustomStep;