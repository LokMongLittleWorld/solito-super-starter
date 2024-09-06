const { withExpo } = require('@expo/next-adapter')
const dotenv = require('dotenv');

dotenv.config({ path: '../../.env' });

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'nativewind',
    'solito',
    'dripsy',
    '@dripsy/core',
    'moti',
    'app',
    'react-native-reanimated',
    '@expo/html-elements',
    'nativewind',
    'react-native-gesture-handler',
  ],
  env: {
    REACT_APP_JWT_SECRET: process.env.REACT_APP_JWT_SECRET,
  },
}

module.exports = withExpo(nextConfig)
