// Define the radius
const r = 10;

// Define the angle in degrees
const degrees = 45;

// Convert degrees to radians
const a0 = degrees * (Math.PI / 180);

// Calculate the vertical displacement
const dy = r * Math.sin(a0);

console.log(dy); // Output: 7.0710678118654755
