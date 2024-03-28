// Optimized utility function to convert a string or array to an array
const toArray = (value) => {
  return typeof value === 'string' ? value.split(' ') : (Array.isArray(value) ? value : []);
};

// Example usage
const classNameOrNames = 'class1 class2 class3';
const allClassNames = toArray(classNameOrNames);
console.log(allClassNames); // Output: ['class1', 'class2', 'class3']
