import {useState, useEffect, useCallback} from 'react';

import useValidate from './useValidate';

const useDraft = (sendDataAPICall, rules) => {
  const [fields, setFields] = useState({});
  const [draftIsSaving, setDraftIsSaving] = useState(false);
  const [draftLastSaved, setDraftLastSaved] = useState('');
  const {errors, isValidField} = useValidate(rules);

  useEffect(() => {
    const id = setTimeout(() => {
      if (draftIsSaving) {
        return;
      }
      setDraftIsSaving(true);
      sendDataAPICall(fields)
        .then(() => setDraftLastSaved(new Date().toISOString()))
        .finally(() => setDraftIsSaving(false));
    }, 5000);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields, sendDataAPICall]);

  const handleChangeField = useCallback(
    ({fieldName, value}) => {
      isValidField(fieldName, value);
      setFields({...fields, [fieldName]: value});
    },
    [fields, isValidField],
  );

  return {fields, errors, draftIsSaving, draftLastSaved, handleChangeField};
};

export default useDraft;
