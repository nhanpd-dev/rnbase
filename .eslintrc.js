module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'react', 'prettier', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@/features/*/*'],
      },
    ],
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/prop-types': 0,
    'no-shadow': 'off',
    'import/prefer-default-export': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'func-names': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-restricted-imports': 0,
    'react/jsx-no-bind': 'error',
    'no-empty-function': 'off',
    'no-extra-semi': 0,
    'react/function-component-definition': 0,
    'no-underscore-dangle': 'off',
    'no-param-reassign': 0,
    'default-param-last': 0,
    'import/extensions': 0,
    'react/sort-comp': 0,
    'react/static-property-placement': 0,
    '@typescript-eslint/ban-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    camelcase: 0,
    'react-hooks/exhaustive-deps': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-nested-ternary': 0,
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-empty-interface': 0,
  },
};
