const theme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.TAILWIND_MODE === 'build',
    content: [
      './src/**/*.{html,ts}',
      './src/**/*.js',
    ],
  },
  theme: {
    extend: {
      colors: {
        product: {
          50: "#F3FAFC",
          100: "#E9F4F7",
          200: "#C6ECF7",
          300: "#7AC7DE",
          400: "#5CBEDC",
          500: "#0096C4",
          600: "#0083AB",
          700: "#006F91",
          800: "#005C78",
          900: "#00485E",
        },
        foo: {
          50: "#CCDAF0",
          100: "#B3C7E8",
          200: "#9AB4E1",
          300: "#80A2D9",
          400: "#678FD1",
          500: "#4D7DCA",
          600: "#346AC2",
          700: "#2762C2",
          800: "#1D5BC0",
          900: "##0644AA",
        },
        bar: {
          50: "#F2BFCA",
          100: "#EC9FAF",
          200: "#E68094",
          300: "#DF6079",
          400: "#D9405F",
          500: "#D22044",
          600: "#CC0029",
          700: "#BA0429",
          800: "#A60828",
          900: "#8C0521",
        },
        callout: colors.indigo,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ]
}
