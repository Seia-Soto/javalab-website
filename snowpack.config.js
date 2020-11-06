module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    [
      'snowpack-plugin-import-map',
      {
        imports: {
          '*': true
        }
      }
    ]
  ]
}
