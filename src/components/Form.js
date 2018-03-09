import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import SnackBar from 'material-ui/Snackbar';
import './css/Form.css';

const Form = ({id, formData, handleInput}) => {
  const errors = formData.filter(x => x.error);
  let error = errors.length > 0;
  const errorMessage = error ? errors.reduce((message, data) => {
    return message += ` "${data.name}"`
  },'Please fix field(s):') : '';
  return (
  <div className="form-field">
    {
      formData.map(data =>
      <div key={data.name}>
        <TextField
          floatingLabelText={data.name}
          value={data.val}
          errorText={data.error ? data.errorMessage : ''}
          underlineFocusStyle={{borderColor: '#7403ff'}}
          floatingLabelFocusStyle={{color: '#7403ff'}}
          onChange={e => handleInput(e.target.value, id, data.name)}
        />
      </div>
      )
    }
    <SnackBar
      open={error}
      message={errorMessage}
      autoHideDuration={2000}
    />
  </div>
)};

Form.proptypes = {
  id: PropTypes.number.isRequired,
  formData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      val: PropTypes.string.isRequired,
      error: PropTypes.bool.isRequired,
      errorMessage: PropTypes.string.isRequired,
    }).isRequired
  ),
  handleInput: PropTypes.func.isRequired
}

export default Form;