const path = require('path');

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  jest: {
    configure: {
      verbose: true,
      moduleNameMapper: {
        '^@/(.+)': '<rootDir>/src/$1'
      }
    }
  }
}