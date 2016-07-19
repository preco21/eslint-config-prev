'use strict';

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    // possible errors
    'comma-dangle': [2, 'always-multiline'],
    'no-cond-assign': [2, 'always'],
    'no-console': 1,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 1,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': [2, {allowEmptyCatch: true}],
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    // issue: https://github.com/eslint/eslint/issues/3107
    'no-extra-parens': [2, 'functions'],
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-prototype-builtins': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'use-isnan': 2,
    'valid-jsdoc': 0,
    'valid-typeof': 2,

    // best practices
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'block-scoped-var': 2, // rely on `no-var` rule
    'complexity': [1, 11],
    'consistent-return': 2,
    'curly': 2,
    'default-case': 2,
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    'eqeqeq': 2,
    'guard-for-in': 2, // rely on `no-restricted-syntax` rule
    'no-alert': 1,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 0,
    'no-else-return': 2,
    'no-empty-function': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2, // rely on `eqeqeq` rule
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': [2, {boolean: false}],
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    // issue: https://github.com/babel/eslint-plugin-babel/issues/12
    // 'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-magic-numbers': 0,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': [2, {props: true}],
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': [2, 'always'],
    'no-script-url': 0,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 2,
    'no-unused-labels': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-void': 2,
    'no-warning-comments': 1,
    'no-with': 2,
    'radix': [2, 'as-needed'],
    'vars-on-top': 2, // rely on `one-var` rule
    'wrap-iife': [2, 'inside'],
    'yoda': 2,

    // strict mode
    'strict': 0,

    // variables
    'init-declarations': 2,
    'no-catch-shadow': 0,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-restricted-globals': 0,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 0,
    'no-unused-vars': 2,
    'no-use-before-define': [2, 'nofunc'],

    // node.js and commonjs
    'callback-return': 0,
    'global-require': 0,
    'handle-callback-err': 2,
    'no-mixed-requires': 2, // rely on `one-var` rule
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-env': 0,
    'no-process-exit': 0,
    'no-restricted-modules': 0,
    'no-sync': 0,

    // stylistic issues
    'array-bracket-spacing': 2,
    'block-spacing': 2,
    'brace-style': [2, '1tbs', {allowSingleLine: true}],
    'camelcase': [2, {properties: 'never'}],
    'comma-spacing': 2,
    'comma-style': [2, 'last'],
    'computed-property-spacing': 2,
    'consistent-this': 0,
    'eol-last': 2,
    'func-names': [2, 'never'],
    'func-style': [2, 'declaration', {allowArrowFunctions: true}],
    'id-blacklist': 0,
    'id-length': 0,
    'id-match': 0,
    'indent': [2, 2, {SwitchCase: 1}],
    'jsx-quotes': 0,
    'key-spacing': 2,
    'keyword-spacing': 2,
    'linebreak-style': 2,
    'lines-around-comment': 0,
    'max-depth': 1,
    'max-len': 0,
    'max-lines': 1,
    'max-nested-callbacks': [1, 4],
    'max-params': [1, 5],
    'max-statements': 0,
    'max-statements-per-line': 1,
    'multiline-ternary': 0,
    'new-cap': 2,
    'new-parens': 2,
    'newline-after-var': 2,
    'newline-before-return': 2,
    'newline-per-chained-call': 2,
    'no-array-constructor': 2,
    'no-bitwise': 0,
    'no-continue': 2,
    'no-inline-comments': 0,
    'no-lonely-if': 2,
    'no-mixed-operators': [2, {allowSamePrecedence: true}],
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, {max: 1, maxBOF: 0}],
    'no-negated-condition': 2,
    // IMO, there is no better alternatives
    // http://stackoverflow.com/questions/32289340/alternative-to-nested-ternary-operator-in-js
    'no-nested-ternary': 0,
    'no-new-object': 2,
    'no-plusplus': 0,
    // use for-of with Object.keys() instead of for-in
    // https://hacks.mozilla.org/2015/04/es6-in-depth-iterators-and-the-for-of-loop/
    'no-restricted-syntax': [2, 'WithStatement', 'ForInStatement'],
    'no-spaced-func': 2,
    'no-ternary': 0,
    'no-trailing-spaces': [2, {skipBlankLines: true}],
    'no-underscore-dangle': [2, {allowAfterThis: true}],
    'no-unneeded-ternary': [2, {defaultAssignment: false}],
    'no-whitespace-before-property': 2,
    // TODO: ENABLE ?
    // issue: https://github.com/eslint/eslint/issues/6488
    // 'object-curly-newline': [2, {multiline: true, minProperties: 4}],
    'object-curly-spacing': 2,
    'object-property-newline': [2, {allowMultiplePropertiesPerLine: true}],
    'one-var': [2, 'never'],
    'one-var-declaration-per-line': 2, // rely on `one-var` rule
    'operator-assignment': [2, 'always'],
    'operator-linebreak': 2,
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'as-needed'],
    'quotes': [2, 'single'],
    'require-jsdoc': 0,
    'semi': 2,
    'semi-spacing': 2,
    'sort-imports': 0,
    'sort-vars': 0,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, {anonymous: 'always', named: 'never'}],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': 2,
    'unicode-bom': 2,
    'wrap-regex': 0,

    // ecmascript 6 rules
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': 2,
    'arrow-spacing': 2,
    'constructor-super': 2,
    'generator-star-spacing': 2,
    'no-class-assign': 2,
    'no-confusing-arrow': 0,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': [2, {includeExports: true}],
    'no-new-symbol': 2,
    'no-restricted-imports': 0,
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-reflect': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'require-yield': 2,
    'rest-spread-spacing': 2,
    'template-curly-spacing': 2,
    'yield-star-spacing': 2,
  },
};
