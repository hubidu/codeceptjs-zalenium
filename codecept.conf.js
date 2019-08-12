exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
    },

    REST: {},
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-zalenium'
}