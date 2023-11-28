module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-transform-flow-strip-types',
    'babel-plugin-transform-typescript-metadata',
    'babel-plugin-parameter-decorator',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '^@root/(.+)': '../\\1',
          '^@core/(.+)': './src/core/\\1',
          '^@store/(.+)': './src/core/config/store/\\1',
          '^@data/(.+)': './src/data/\\1',
          '^@di/(.+)': './src/di/\\1',
          '^@domain/(.+)': './src/domain/\\1',
          '^@presentation/(.+)': './src/presentation/\\1',
          '^assets/(.+)': './src/presentation/assets/\\1',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
