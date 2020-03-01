import {useState, useCallback} from 'react';

const useValidate = rules => {
  const [errors, setError] = useState({});

  const isValidField = useCallback(
    (fieldName, value) =>
      rules[fieldName].some(rule => {
        const {hasError, message} = rule(value);
        setError({...errors, [fieldName]: hasError ? message : null});
        return hasError;
      }),
    [errors, rules],
  );

  return {errors, isValidField};
};

export default useValidate;
