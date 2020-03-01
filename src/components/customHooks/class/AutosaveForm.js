import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

import withDraft from './withDraft';

import {sendDataAPICall} from '../api';

import Input from '../Input';

import {
  validateMinTextLength,
  validateFieldCantBeEmpty,
  validateTextOnlyLettersAndSpaces,
} from '../validators';

const rules = {
  firstName: [
    validateFieldCantBeEmpty(),
    validateMinTextLength(3),
    validateTextOnlyLettersAndSpaces(),
  ],
  lastName: [validateFieldCantBeEmpty()],
};

class AutosaveForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    draftIsSaving: PropTypes.bool.isRequired,
    draftLastSaved: PropTypes.string.isRequired,
    handleChangeField: PropTypes.func.isRequired,
  };

  render() {
    const {
      fields,
      draftIsSaving,
      draftLastSaved,
      errors,
      handleChangeField,
    } = this.props;

    return (
      <View style={styles.autosaveForm}>
        <Text>{draftIsSaving ? 'autosave...' : ''}</Text>
        <Text>{`${draftLastSaved}`}</Text>
        <Input
          label="First name"
          value={fields.firstName}
          name="firstName"
          errors={errors}
          onChange={handleChangeField}
        />
        <Input
          label="Last name"
          value={fields.lastName}
          name="lastName"
          errors={errors}
          onChange={handleChangeField}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  autosaveForm: {
    margin: 10,
  },
});

export default withDraft(fields => sendDataAPICall(fields), rules)(
  AutosaveForm,
);
