/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        '1/10' : "10%",
        '7/10' : '70%',
        '8/10' : '80%',
        '2/10' : '20%',
        "9/10" : "90%"
 
      },
      margin: {
        '1/5' : "20%"
      },
      minWidth: {
        '68' : "17rem",
      },
      screens: {
        // 'md' : '768px',
        // 'lg-md': '860px',
        // 'lg' : '1044px'
        'xxl': '1400px',
      },
    },
  },
  plugins: [],
}
