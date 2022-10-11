module.exports = {
  syntax: 'scss',
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-order', 'stylelint-scss', 'stylelint-selector-bem-pattern'],
  rules: {
    'indentation': 2,
    'color-named': 'never',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'order/order': [
      'custom-properties',
      {
        type: 'at-rule',
        name: 'include',
      },
      'declarations',
      {
        type: 'at-rule',
        name: 'media',
      },
      {
        type: 'rule',
        selector: '^&:\\w+$',
      },
      {
        type: 'rule',
        selector: '^\\.[-_a-zA-Z0-9]+',
      },
      {
        type: 'rule',
        selector: '^&__[-a-z0-9]+',
      },
      {
        type: 'rule',
        selector: '^&--[-a-z0-9]+',
      },
    ],
    'order/properties-order': [
      {
        noEmptyLineBetween: true,
        emptyLineBefore: 'never',
        properties: ['all'],
      },
      {
        noEmptyLineBetween: true,
        emptyLineBefore: 'never',
        properties: ['content', 'quotes', 'counter-reset', 'counter-increment', 'resize'],
      },
      {
        noEmptyLineBetween: true,
        emptyLineBefore: 'never',
        properties: ['position', 'z-index', 'top', 'right', 'left', 'bottom'],
      },
      {
        noEmptyLineBetween: true,
        emptyLineBefore: 'never',
        properties: [
          'display',
          'visibility',
          'float',
          'clear',
          'overflow',
          'overflow-x',
          'overflow-y',
          'clip',
          'zoom',
          'flex-direction',
          'flex-order',
          'flex-pack',
          'flex-align',
          'flex',
          'justify-content',
          'align-items',
        ],
      },
      {
        noEmptyLineBetween: true,
        emptyLineBefore: 'never',
        properties: ['box-sizing', 'width', 'min-width', 'max-width', 'height', 'min-height', 'max-height'],
      },
      {
        noEmptyLineBetween: true,
        emptyLineBefore: 'never',
        properties: [
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'padding',
          'padding-top',
          'padding-right',
          'padding-left',
          'padding-bottom',
        ],
      },
      {
        noEmptyLineBetween: true,
        emptyLineBefore: 'never',
        properties: [
          'table-layout',
          'empty-cells',
          'caption-side',
          'border-spacing',
          'border-collapse',
          'list-style',
          'list-style-position',
          'list-style-type',
          'list-style-image',
        ],
      },
      {
        noEmptyLineBetween: true,
        emptyLineBefore: 'never',
        properties: [
          'color',
          'background',
          'background-color',
          'background-image',
          'background-repeat',
          'background-attachment',
          'background-position',
          'background-position-x',
          'background-position-y',
          'background-clip',
          'background-origin',
          'background-size',
          'border',
          'border-width',
          'border-style',
          'border-color',
          'border-top',
          'border-top-width',
          'border-top-style',
          'border-top-color',
          'border-left',
          'border-left-width',
          'border-left-style',
          'border-left-color',
          'border-right',
          'border-right-width',
          'border-right-style',
          'border-right-color',
          'border-bottom',
          'border-bottom-width',
          'border-bottom-style',
          'border-bottom-color',
          'border-radius',
          'border-top-left-radius',
          'border-top-right-radius',
          'border-bottom-right-radius',
          'border-bottom-left-radius',
          'border-image',
          'border-image-source',
          'border-image-slice',
          'border-image-width',
          'border-image-outset',
          'border-image-repeat',
          'outline',
          'outline-width',
          'outline-style',
          'outline-color',
          'outline-offset',
          'opacity',
          'box-shadow',
          'box-decoration-break',
        ],
      },
      {
        noEmptyLineBetween: true,
        emptyLineBefore: 'never',
        properties: [
          'font',
          'font-family',
          'font-size',
          'font-weight',
          'font-style',
          'font-variant',
          'font-size-adjust',
          'font-stretch',
          'font-effect',
          'font-emphasize',
          'font-emphasize-position',
          'font-emphasize-style',
          'font-smooth',
          'line-height',
          'text-align',
          'text-align-last',
          'vertical-align',
          'white-space',
          'text-decoration',
          'text-emphasis',
          'text-emphasis-color',
          'text-emphasis-style',
          'text-emphasis-position',
          'text-indent',
          'text-justify',
          'letter-spacing',
          'word-spacing',
          'text-outline',
          'text-transform',
          'text-wrap',
          'text-overflow',
          'text-overflow-ellipsis',
          'text-overflow-mode',
          'text-shadow',
          'word-wrap',
          'word-break',
          'tab-size',
          'hyphens',
        ],
      },
      {
        noEmptyLineBetween: true,
        emptyLineBefore: 'never',
        properties: ['cursor', 'user-select', 'pointer-events'],
      },
      {
        noEmptyLineBetween: true,
        emptyLineBefore: 'never',
        properties: ['nav-index', 'nav-up', 'nav-right', 'nav-down', 'nav-left'],
      },
      {
        noEmptyLineBetween: true,
        emptyLineBefore: 'never',
        properties: [
          'transition',
          'transition-duration',
          'transition-delay',
          'transition-timing-function',
          'transition-property',
          'transform',
          'transform-origin',
          'animation',
          'animation-name',
          'animation-duration',
          'animation-play-state',
          'animation-timing-function',
          'animation-delay',
          'animation-iteration-count',
          'animation-direction',
          'backface-visibility',
          'will-change',
        ],
      },
    ],
    'color-hex-case': [
      'lower',
      {
        severity: 'warning',
        message: 'HEX-цвета нужно указывать строчными буквами',
      },
    ],
    'color-named': [
      'never',
      {
        message: 'Цвета ключевыми словами нельзя писать',
      },
    ],
    'color-no-invalid-hex': [
      true,
      {
        message: 'Ошибка в написании HEX-цвета',
      },
    ],
    'no-duplicate-at-import-rules': [
      true,
      {
        message: 'Не должно быть повторного импорта файла',
      },
    ],
    'no-duplicate-selectors': [
      true,
      {
        message: 'Один и тот же селектор не должен дублироваться',
      },
    ],
    'no-extra-semicolons': [
      true,
      {
        message: 'Две точки с запятой подряд не должны быть',
      },
    ],
    'font-family-no-duplicate-names': [
      true,
      {
        message: 'Нельзя дублировать один и тот же шрифт',
      },
    ],
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        message: 'Необходимо указывать sans-serif или serif',
      },
    ],
    'font-weight-notation': [
      'numeric',
      {
        message: 'Необходимо указывать плотность шрифта цифрой',
        ignore: ['relative'],
      },
    ],
    'number-no-trailing-zeros': [
      true,
      {
        message: 'Лишний (необязательный) нуль в дроби',
      },
    ],
    'declaration-colon-space-after': [
      'always-single-line',
      {
        message: 'Следует ставить один пробел после двоеточия',
      },
    ],
    'declaration-colon-space-before': [
      'never',
      {
        message: 'Не следует ставить пробел перед двоеточием',
      },
    ],
    'declaration-no-important': [
      true,
      {
        severity: 'warning',
        message: 'Применяйте !important с осторожностью',
      },
    ],
    'declaration-block-no-duplicate-properties': [
      true,
      {
        message: 'Правила не должны повторяться',
      },
    ],
    'declaration-block-no-shorthand-property-overrides': [
      true,
      {
        message: 'Это свойство перебивает другое',
      },
    ],
    'declaration-block-semicolon-newline-after': [
      'always',
      {
        message: 'После точки с запятой необходим перенос',
      },
    ],
    'declaration-block-single-line-max-declarations': [
      1,
      {
        message: 'На одной строке должно быть одно правило',
      },
    ],
    'declaration-block-trailing-semicolon': [
      'always',
      {
        message: 'Каждое свойство должно заканчиваться точкой с запятой',
      },
    ],
    'declaration-block-semicolon-newline-before': [
      'never-multi-line',
      {
        message: 'Перенос перед символом ; недопустим',
      },
    ],
    'declaration-block-semicolon-space-before': [
      'never',
      {
        message: 'Пробел перед символом ; недопустим',
      },
    ],
    'block-closing-brace-empty-line-before': [
      'never',
      {
        message: 'Перед «}» не должно быть пустой строки',
      },
    ],
    'block-closing-brace-newline-after': [
      'always',
      {
        message: 'После «}» не должно быть переноса',
      },
    ],
    'block-closing-brace-newline-before': [
      'always',
      {
        message: 'Перед «}» должен быть перенос',
      },
    ],
    'block-opening-brace-newline-after': [
      'always',
      {
        message: 'После «{» должен быть перенос',
      },
    ],
    'block-opening-brace-space-before': [
      'always',
      {
        message: 'Перед «{» должен быть один пробел',
      },
    ],
    'property-case': [
      'lower',
      {
        message: 'Значения свойств следует писать строчными буквами',
      },
    ],
    'property-no-unknown': [
      true,
      {
        message: 'Такого свойства не существует',
      },
    ],
    'unit-case': [
      'lower',
      {
        message: 'Единицы измерения следует писать строчными надобно',
      },
    ],
    'unit-no-unknown': [
      true,
      {
        message: 'Не существует таких единиц измерения',
      },
    ],
    'value-keyword-case': [
      'lower',
      {
        message: 'Значения свойств следует писать строчными буквами',
        ignoreProperties: ['/font-/'],
      },
    ],
    'value-list-comma-space-after': [
      'always-single-line',
      {
        message: 'Необходим пробел в значениях после запятой',
      },
    ],
    'value-list-comma-space-before': [
      'never',
      {
        message: 'В значениях перед запятой пробел запрещен',
      },
    ],
    'value-list-comma-newline-after': [
      'always-multi-line',
      {
        message: 'Значения свойств должны быть без переносов',
      },
    ],
    'value-list-comma-newline-before': [
      'never-multi-line',
      {
        message: 'Значения свойств должны быть без переносов',
      },
    ],
    'string-no-newline': [
      true,
      {
        message: 'В строчных данных не должно быть переносов',
      },
    ],
    'string-quotes': [
      'single',
      {
        message: 'В проекте двойные кавычки',
      },
    ],
    'selector-attribute-operator-disallowed-list': [
      ['id'],
      {
        message: 'Для стилизации ID использовать нельзя',
      },
    ],
    'selector-pseudo-class-case': [
      'lower',
      {
        message: 'Псевдоклассы необходимо писать строчными буквами',
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        message: 'Такого псевдокласса не существует',
      },
    ],
    'selector-pseudo-class-parentheses-space-inside': [
      'never',
      {
        message: 'Внутри скобок в псевдоселекторах не должно быть пробелов',
      },
    ],
    'selector-pseudo-element-case': [
      'lower',
      {
        message: 'Псевдоэлементы необходимо писать строчными буквами',
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        message: 'Такого псевдоэлемента не существует',
      },
    ],
    'selector-type-case': [
      'lower',
      {
        message: 'Селекторы необходимо писать строчными буквами',
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        message: 'Такого селектора не существует',
      },
    ],
    'selector-max-empty-lines': [
      0,
      {
        message: 'Пустые строки в селекторах недопустимы',
      },
    ],
    'selector-list-comma-newline-after': [
      'always',
      {
        message: 'После запятой необходим перенос строки',
      },
    ],
    'selector-list-comma-newline-before': [
      'never-multi-line',
      {
        message: 'Перед запятой не должно быть переноса строки',
      },
    ],
    'selector-list-comma-space-after': [
      'always-single-line',
      {
        message: 'После запятой должен быть пробел',
      },
    ],
    'selector-list-comma-space-before': [
      'never',
      {
        message: 'Перед запятой не должно быть пробела',
      },
    ],
    'selector-descendant-combinator-no-non-space': [
      true,
      {
        message: 'Комбинированные селекторы нужно отделять одним пробелом',
      },
    ],
    'length-zero-no-unit': [
      true,
      {
        message: 'Единицы измерения не указываются, если значение равно нулю',
      },
    ],
    'function-comma-space-after': [
      'always',
      {
        message: 'После запятой необходим пробел',
      },
    ],
    'function-comma-space-before': [
      'never',
      {
        message: 'Перед запятой пробела быть не должно',
      },
    ],
    'function-comma-newline-before': [
      'never-multi-line',
      {
        message: 'Перед переносом запятой быть не должно',
      },
    ],
    'function-comma-newline-after': [
      'never-multi-line',
      {
        message: 'После переноса запятой быть не должно',
      },
    ],
    'function-parentheses-newline-inside': [
      'never-multi-line',
      {
        message: 'После переноса скобки быть не должно',
      },
    ],
    'function-max-empty-lines': [
      0,
      {
        message: 'Пустых строк не должно быть в функциях',
      },
    ],
    'function-name-case': [
      'lower',
      {
        message: 'Имена функций следует писать строчными буквами',
      },
    ],
    'function-whitespace-after': [
      'always',
      {
        message: 'Должны быть пробелы между функциями',
      },
    ],
    'media-feature-parentheses-space-inside': [
      'never',
      {
        message: 'Пробелы после «(» и перед «)» использовать нельзя',
      },
    ],
  },
};
