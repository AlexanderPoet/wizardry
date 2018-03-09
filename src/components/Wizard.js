import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Stepper } from 'material-ui/Stepper';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import { Checkout, CustomStep, Form, Completed, PrimeButton, Tutorial } from './';
import { formValidation } from '../utils';
import './css/Wizard.css';

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStepIndex: -1,
      status: 'unstarted',
      stepData: props.tabsInfo.map((info, index) => {
        const { title, Icon, forms } = info;
        const disabled = index > 0;
        return {
          title,
          id: index,
          progress: 'unstarted',
          disabled,
          Icon,
          formData: forms.map(name => (
            {
              name,
              val: '',
              error: false,
              errorMessage: ''
            }
          ))
        };
      })
    }
    this.completeForm = this.completeForm.bind(this);
    this.displayActiveStep = this.displayActiveStep.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
  }
  completeForm() {
    const stepData = this.state.stepData.map(step => {
      const _step = { ...step };
      _step.progress = 'done';
      _step.focus = false;
      _step.disabled = true;
      return _step;
    });
    this.setState({
      status: 'done',
      stepData
    });
  }
  displayActiveStep() {
    const { stepData, activeStepIndex } = this.state;
    switch (activeStepIndex) {
      case -1:
        return <Tutorial />;
      case stepData.length - 1:
        return <Checkout stepData={stepData}/>;
      default:
        return (
          <Form
            id={activeStepIndex}
            formData={stepData[activeStepIndex].formData}
            handleInput={this.handleFormInput}
          />
        );
    }
  }
  handleFormInput(val, id, name) {
    const stepData = this.state.stepData.map(step => {
      let _step;
      if (step.id === id) {
        const formData = step.formData.map(data => {
          let _data;
          if (data.name === name) {
            _data = { ...data };
            _data.error = false;
            _data.val = val;
          }
          return _data || data;
        });
        _step = { ...step };
        _step.formData = formData;
        _step.progress = 'inProgress';
      }
      return _step || step;
    })
    this.setState({ stepData })
  }
  handleNextButton() {
    const { activeStepIndex } = this.state
    const stepData = this.state.stepData.map(step => {
      const _step = { ...step }
      const { id, progress, formData } = _step;
      if (id === activeStepIndex && progress !== 'done') {
        if (formValidation(formData).length > 0) {
          _step.progress = 'done';
        }
      }
      return _step;
    });
    this.setState({ stepData }, () => {
      if (stepData[activeStepIndex].progress === 'done') {
        this.handleTabClick(activeStepIndex + 1);
      }
    });
  }
  handleTabClick(clickedTabId = 0) {
    const stepData = this.state.stepData.map(step => {
      const _step = { ...step };
      const { id } = _step;
      _step.focus = id === clickedTabId;
      _step.disabled = clickedTabId === -1 && id === 0 ?
        false : id > clickedTabId;
      return _step;
    });
    this.setState({
      status: 'inProgress',
      activeStepIndex: clickedTabId,
      stepData
    });
  }
  render() {
    const { activeStepIndex, stepData, status } = this.state;
    return (
      <Paper id="container-paper">
        <Stepper
          linear={false}
          >
          {
            stepData.map(step =>
              <CustomStep
                key={step.title}
                handleTabClick={this.handleTabClick}
                data={step}
              />
            )
          }
        </Stepper>
        <div id="form-container">
          {
            status === 'done' ?
            <Completed /> :
            this.displayActiveStep()
          }
        </div>
        {
          status !== 'done' && (
          <div>
            <FlatButton
              label="Back"
              disabled={activeStepIndex === -1}
              onClick={() => this.handleTabClick(activeStepIndex - 1)}
            />
            <PrimeButton
              activeStepIndex={activeStepIndex}
              stepCount={stepData.length - 1}
              completeForm={this.completeForm}
              handleNextClick={this.handleNextButton}
              handleBeginClick={this.handleTabClick}
            />
          </div> )
        }
      </Paper>
    );
  }
};

Wizard.propTypes = {
  tabsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      Icon: PropTypes.func.isRequired,
      forms: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
  ).isRequired
}

export default Wizard;