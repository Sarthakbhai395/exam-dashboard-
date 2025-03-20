module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        // Tailwind includes slate by default, but making it explicit here
        colors: {
          slate: {
            800: '#1e293b',
            // You can include other slate variations if needed
          }
        }
      },
    },
    plugins: [],
  }