module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deeppink: 'deeppink',
        lime: 'lime',
      },
      spacing: {
        margin: 'var(--margin)',
        gutter: 'var(--gutter)',
        "gutter-half": 'calc(var(--gutter) / 2)',
      },
    },
  },
  plugins: [],
}
