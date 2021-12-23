module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        index: "20% 50% 30%",
      },
      gridTemplateRows: {
        index: "20% 80% 20%",
      },
      backgroundImage: {
        imgindex: "url('/src/assets/images/home.webp')",
      },
      colors: {
        white: "#ffffff",
      },
      spacing: {
        "33percent": "33%",
        "5percent": "5%",
        "50percent": "50%",
        "20percent": "20%",
        "25percent": "25%",
        "40percent": "40%",
        "45percent": "45%",
        "60percent": "60%",
        "70percent": "70%",
        "80percent": "80%",
        "3percent": "3%",
        "2percent": "2%",
        "60vh": "60vh",
        "69vh": "69vh",
        "62vh": "62vh",
        "123px": "123px",
        "126px": "126px",
        "161px": "161px",
      },
      opacity: {
        50: ".5",
      },
      objectPosition: {
        "100percent0": "100% 0",
      },
    },
    fontSize: {
      "1vw": "1vw",
      "2vh": "2vh",
      "3vw": "3vw",
      "2vw": "2vw",
      "7vw": "7vw",
    },
    screens: {
      tablet: { max: "991.98px" },
      smartphone: { max: "767.98px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
