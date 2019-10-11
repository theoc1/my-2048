export default (number) => {
  if (number === 2) return {
    color: '#9c9c9c',
    bgColor: 'white',
  };

  if (number === 4) return {
    color: '#9c9c9c',
    bgColor: '#5e5e5e',
  }

  return {
    color: 'red',
    bgColor: 'white',
  }
};
