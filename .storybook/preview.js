import "../src/styles/tailwind.css";
import "../src/styles/fonts.css";
import "../src/styles/forms.css";
import "../src/styles/menu.css";
import "../src/styles/globals.css";
import "../src/icomoon/style.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", right: "🇺🇸", title: "English" },
        { value: "fr", right: "🇫🇷", title: "Français" },
      ],
    },
  },
};
