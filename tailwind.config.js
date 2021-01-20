const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    purge: [
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue"
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans]
            }
        },
        colors: {
            // Build your palette here
            transparent: "transparent",
            current: "currentColor",
            gray: colors.trueGray,
            purple: colors.purple,
            red: colors.red,
            blue: colors.lightBlue,
            pink: colors.pink,
            yellow: colors.amber,
            teal: colors.teal,
            orange: colors.orange,
            lime: colors.lime,
            emerald: colors.emerald,
            cyan: colors.cyan,
            indigo: colors.indigo,
            fuchsia: colors.fuchsia,
            violet: colors.violet,
            rose: colors.rose,
            white: colors.white
        },
        minHeight: {
            "0": "0",
            "1/4": "25%",
            "1/2": "50%",
            "3/4": "75%",
            full: "100%",
            screen: "100vh"
        }
    },

    variants: {
        extend: {
            opacity: ["disabled"]
        }
    },

    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
};
