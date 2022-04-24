module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "470px",
      sm: "640px",
      md: "768px",
      "2md": "850px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#465FFC",
        "primary-dark": "#14279B",
        secondary: "#FB4214",
        text: "#4F4F4F",
        "text-light": "#CBC5C5",
        "line": "#e6e6e6",
        "button": "#E6E6E6"
      },
    },
  },
  plugins: [],
};
