module.exports = {
  src: './src',
  distPath: './dist',
  reexports: ['/adapters'],
  ignore: [
    'src/**/*.stories/**',
    'src/**/*.stories.*',
    'src/**/__tests__/**',
    'src/**/__stories__/**',
    'src/**/__stand__/**',
    'src/**/__mocks__/**',
    'src/**/__mock__/**',
  ],
};
