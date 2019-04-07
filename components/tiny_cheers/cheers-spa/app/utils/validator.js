const validate = component => {
  const validationResult = component.validate();

  const hasErrors = Object.keys(validationResult).reduce(
    (error, key) => error || validationResult[key],
    false,
  );

  component.setState({
    errors: { ...validationResult },
  });

  return !hasErrors;
};

export default {
  validate,
};
