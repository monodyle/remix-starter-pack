import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  typescript: true,
  formatters: true,
  rules: {
    'no-console': ['warn', { allow: ['debug'] }],

    'ts/no-redeclare': 'off',

    'react/prop-types': 'off',
    'react-refresh/only-export-components': 'off',

    'n/prefer-global/process': 'off',
  },
  ignores: ['./tsconfig.json'],
})
