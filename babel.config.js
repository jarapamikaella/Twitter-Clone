module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      require.resolve("expo-router/babel"),
      [
        "module-resolver",
        {
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          root: ['.'],
          alias: {
            '@app-hooks': './hooks',
            '@app-types': './types',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ]
  };
};
