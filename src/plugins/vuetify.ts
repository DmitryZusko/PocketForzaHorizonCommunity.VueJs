/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "lightTheme",
    themes: {
      lightTheme: {
        colors: {
          primaryLight: "#ed4384",
          primary: "#da206a",
          primaryDark: "#ae1b60",
          secondaryLight: "#f7f7f7",
          secondary: "#ccc",
          secondaryDark: "#707070",
        },
      },
    },
  },
});
