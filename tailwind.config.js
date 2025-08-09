// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     // ... other config
//     theme: {
//       extend: {
//         fontFamily: {
//           inter: ['Inter', 'sans-serif'],
//         },
//       },
//     },
//     // ... rest of config
//   }

// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
