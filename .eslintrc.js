const { peerDependencies } = require('./package.json');

module.exports = {
  extends: [
    '@edwmurph/eslint-config',
    '@edwmurph/eslint-config/react',
  ],
};
