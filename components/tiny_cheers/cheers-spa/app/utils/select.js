export const managerToSelectOption = manager => {
  if (!manager) {
    return manager;
  }

  if (
    Object.prototype.hasOwnProperty.call(manager, 'label') &&
    Object.prototype.hasOwnProperty.call(manager, 'value')
  ) {
    return manager;
  }

  const { id: value, firstName, lastName, email } = manager;

  const fullName = `${firstName || ''} ${lastName || ''}`.trim();
  const label = fullName ? `${fullName} (${email})` : email;

  return {
    value,
    label,
  };
};
