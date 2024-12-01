/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class", // Enables dark mode using a class
	theme: {
	  extend: {}, // You can extend your Tailwind theme here
	},
	plugins: [
	  addVariablesForColors, // Your custom plugin
	],
  };
  
  // This plugin adds each Tailwind color as a global CSS variable, e.g., var(--gray-200)
  function addVariablesForColors({ addBase, theme }) {
	const colors = theme("colors");
	const newVars = Object.entries(colors).reduce((vars, [key, value]) => {
	  // Check if the color value is an object (nested colors)
	  if (typeof value === "object") {
		Object.entries(value).forEach(([nestedKey, nestedValue]) => {
		  vars[`--${key}-${nestedKey}`] = nestedValue;
		});
	  } else {
		vars[`--${key}`] = value;
	  }
	  return vars;
	}, {});
  
	addBase({
	  ":root": newVars,
	});
  }
  