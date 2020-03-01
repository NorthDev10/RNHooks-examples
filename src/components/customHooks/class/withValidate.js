import React, {Component} from 'react';

export default rules => WrappedComponent => {
  class withValidate extends Component {
    state = {};

    isValidField = (fieldName, value) =>
      rules[fieldName].some(rule => {
        const {hasError, message} = rule(value);
        this.setState({[fieldName]: hasError ? message : null});
        return hasError;
      });

    render() {
      return (
        <WrappedComponent
          {...this.props}
          errors={this.state}
          isValidField={this.isValidField}
        />
      );
    }
  }

  return withValidate;
};
