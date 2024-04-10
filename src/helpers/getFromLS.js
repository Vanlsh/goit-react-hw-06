export const getFromLS = (key) => {
  try {
    const serializedValue = localStorage.getItem(key);
    return serializedValue && JSON.parse(serializedValue);
  } catch (error) {
    console.error(
      `Error retrieving item with key "${key}" from local storage:`,
      error
    );
    return null;
  }
};
