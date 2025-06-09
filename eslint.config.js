// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import stylistic from '@stylistic/eslint-plugin'

export default [{
  files: ['**/*.{js,mjs,cjs,ts,vue}']
}, {
  languageOptions: {
    globals: globals.browser
  }
}, pluginJs.configs.recommended, ...tseslint.configs.recommended, ...pluginVue.configs['flat/essential'], {
  files: ['**/*.vue'],
  languageOptions: {
    parserOptions: {
      parser: tseslint.parser
    }
  }
}, stylistic.configs['disable-legacy'], stylistic.configs.customize({
  blockSpacing: true,
  braceStyle: '1tbs',
  commaDangle: 'never',
  indent: 2,
  quotes: 'single'
}), {
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }
    ]
  }
}, ...storybook.configs["flat/recommended"]];
