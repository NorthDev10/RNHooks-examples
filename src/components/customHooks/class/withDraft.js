import React, {Component} from 'react';
import PropTypes from 'prop-types';

import withValidate from './withValidate';

export default (submit, rules) => WrappedComponent => {
  class withDraft extends Component {
    static propTypes = {
      errors: PropTypes.object.isRequired,
      isValidField: PropTypes.func.isRequired,
    };

    state = {
      fields: {},
      draftIsSaving: false,
      draftLastSaved: '',
    };

    timerId = null;

    componentDidUpdate(prevProps, prevState) {
      const {fields, draftIsSaving} = this.state;

      if (prevState.fields !== fields) {
        clearTimeout(this.timerId);

        this.timerId = setTimeout(() => {
          if (draftIsSaving) {
            return;
          }
          this.setState({draftIsSaving: true});
          submit(fields, this.props)
            .then(() =>
              this.setState({draftLastSaved: new Date().toISOString()}),
            )
            .finally(() => this.setState({draftIsSaving: false}));
        }, 5000);
      }
    }

    handleChangeField = ({fieldName, value}) => {
      const {isValidField} = this.props;
      isValidField(fieldName, value);
      this.setState(state => ({fields: {...state.fields, [fieldName]: value}}));
    };

    render() {
      const {errors} = this.props;
      const {fields, draftIsSaving, draftLastSaved} = this.state;

      return (
        <WrappedComponent
          {...this.props}
          fields={fields}
          errors={errors}
          draftIsSaving={draftIsSaving}
          draftLastSaved={draftLastSaved}
          handleChangeField={this.handleChangeField}
        />
      );
    }
  }

  return withValidate(rules)(withDraft);
};
