import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0d6efd",
          secondary: "#6c757d",
          accent: "#6610f2",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          info: "#0dcaf0",
          success: "#198754",
          warning: "#ffc107",
          error: "#dc3545",
        },
      },
      "light",
    ],
    darkTheme: false,
  },
  plugins: [daisyui],
};
