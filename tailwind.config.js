/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class", 
	theme: {
	  extend: {}, 
	},
	plugins: [
	  addVariablesForColors, 
	],
  };
  
  function addVariablesForColors({ addBase, theme }) {
	const colors = theme("colors");
	const newVars = Object.entries(colors).reduce((vars, [key, value]) => {
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
  