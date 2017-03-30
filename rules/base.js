'use strict';

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    // Possible errors
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-console': 'warn',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'warn',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty': ['error', {allowEmptyCatch: true}],
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'all', {
      returnAssign: false,
      nestedBinaryExpressions: false,
      ignoreJSX: 'multi-line',
    }],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': ['error', {requireStringLiterals: true}],

    // Best practices
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'off',
    'complexity': ['warn', 11],
    'consistent-return': 'error',
    'curly': 'error',
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'guard-for-in': 'error',
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'off',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': ['error', {boolean: false}],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-param-reassign': ['error', {props: true}],
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': [
      'error',
      {
        object: 'Object',
        property: 'assign',
        message: 'Use object spread operator `{...obj}` instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use exponentiation operator `**` instead.',
      },
    ],
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'off',
    'no-self-assign': ['error', {props: true}],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'warn',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    'radix': ['error', 'as-needed'],
    'require-await': 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside', {functionPrototypeMethods: true}],
    'yoda': 'error',

    // Strict mode
    'strict': 'error',

    // Variables
    'init-declarations': 'error',
    'no-catch-shadow': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    // Use `Number` property functions instead
    'no-restricted-globals': ['error', 'isNaN', 'parseInt', 'parseFloat'],
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-undefined': 'off',
    'no-unused-vars': 'error',
    'no-use-before-define': ['error', {functions: false, variables: false}],

    // Node.js and CommonJS
    'callback-return': 'off',
    'global-require': 'off',
    'handle-callback-err': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',

    // Stylistic issues
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],
    'camelcase': ['error', {properties: 'never'}],
    // TODO: Enable when false positive issue has been fixed
    // 'capitalized-comments': ['error', 'always', {ignoreInlineComments: true}],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-spacing': 'error',
    'comma-style': ['error', 'last'],
    'computed-property-spacing': 'error',
    'consistent-this': 'off',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'func-names': ['error', 'never'],
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 1,
        },
        FunctionExpression: {
          parameters: 1,
        },
        CallExpression: {
          arguments: 1,
        },
      },
    ],
    'jsx-quotes': 'off',
    'key-spacing': 'error',
    'line-comment-position': 'off',
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'lines-around-comment': 'off',
    'lines-around-directive': ['error', {before: 'never', after: 'always'}],
    'max-depth': 'warn',
    'max-len': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': ['warn', 4],
    'max-params': ['warn', 5],
    'max-statements-per-line': 'warn',
    'max-statements': 'off',
    'multiline-ternary': 'off',
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', {max: 1, maxBOF: 0}],
    'no-negated-condition': 'error',
    // TODO: Consider about disabling this rule again
    // Use separated function or switch-case
    // http://stackoverflow.com/questions/32289340/alternative-to-nested-ternary-operator-in-js
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    // Use `for-of` with `Object.keys()` instead of `for-in`
    // https://hacks.mozilla.org/2015/04/es6-in-depth-iterators-and-the-for-of-loop/
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': ['error', {skipBlankLines: true}],
    'no-underscore-dangle': ['error', {allowAfterThis: true, allowAfterSuper: true}],
    'no-unneeded-ternary': ['error', {defaultAssignment: false}],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'off',
    // TODO: Enable when issue has been fixed: https://github.com/eslint/eslint/issues/6488
    // 'object-curly-newline': ['error', {multiline: true, minProperties: 4}],
    'object-curly-spacing': 'error',
    'object-property-newline': ['error', {allowMultiplePropertiesPerLine: true}],
    'one-var-declaration-per-line': 'error',
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': 'error',
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'as-needed'],
    'quotes': ['error', 'single'],
    'require-jsdoc': 'off',
    'semi-spacing': 'error',
    'semi': 'error',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {anonymous: 'always', named: 'never', asyncArrow: 'always'}],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always', {block: {balanced: true}}],
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'wrap-regex': 'off',

    // ECMAScript 6 (2015)
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'generator-star-spacing': 'error',
    'no-class-assign': 'error',
    'no-confusing-arrow': 'off',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': ['error', {includeExports: true}],
    'no-new-symbol': 'error',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always', {avoidExplicitReturnArrows: true}],
    'prefer-arrow-callback': 'error',
    'prefer-const': ['error', {destructuring: 'all'}],
    'prefer-destructuring': ['error', {}, {enforceForRenamedProperties: true}],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': 'error',
    'sort-imports': 'off',
    'symbol-description': 'off',
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'error',
  },
};
