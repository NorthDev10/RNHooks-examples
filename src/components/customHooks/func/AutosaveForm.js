import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import useDraft from './useDraft';

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

const AutosaveForm = () => {
  const {
    fields,
    errors,
    draftIsSaving,
    draftLastSaved,
    handleChangeField,
  } = useDraft(sendDataAPICall, rules);

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
};

const styles = StyleSheet.create({
  autosaveForm: {
    margin: 10,
  },
});

export default AutosaveForm;
