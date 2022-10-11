module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:      Добавление нового функционала',
    },
    {
      value: 'fix',
      name: 'fix:       Исправление ошибок',
    },
    {
      value: 'build',
      name: 'build:     Сборка проекта или изменения внешних зависимостей',
    },
    {
      value: 'ci',
      name: 'ci:        Настройка CI и работа со скриптами',
    },
    {
      value: 'docs',
      name: 'docs:      Обновление документации',
    },
    {
      value: 'perf',
      name: 'perf:      Изменения направленные на улучшение производительности',
    },
    {
      value: 'refactor',
      name: 'refactor:  Правки кода без исправления ошибок или добавления новых функций',
    },
    {
      value: 'revert',
      name: 'revert:    Откат на предыдущие коммиты',
    },
    {
      value: 'style',
      name: 'style:     Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)',
    },
    {
      value: 'docs',
      name: 'docs:     Правки по документации проекта или отдельных частей проекта',
    },
    {
      value: 'test',
      name: 'test:      Добавление тестов',
    },
  ],
  // Область. Она характеризует фрагмент кода, которую затронули изменения
  scopes: [
    {
      name: 'components',
    },
    {
      name: 'docs',
    },
    {
      name: 'api',
    },
    {
      name: 'bundler',
    },
    {
      name: 'styles',
    },
  ],

  // Возможность задать спец ОБЛАСТЬ для определенного типа коммита (пример для 'fix')
  /*
  scopeOverrides: {
    fix: [
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */

  // Поменяем дефолтные вопросы
  messages: {
    type: 'Какие изменения вы вносите?',
    scope: '\nВыберите ОБЛАСТЬ, которую вы изменили (опционально):',
    // Спросим если allowCustomScopes в true
    customScope: 'Укажите свою ОБЛАСТЬ:',
    subject: 'Напишите КОРОТКОЕ описание в ПОВЕЛИТЕЛЬНОМ наклонении:\n',
    body: 'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
    breaking: 'Список BREAKING CHANGES (опционально):\n',
    footer: 'Место для мета данных (тикетов, ссылок и остального). Например: OGM-700, OGM-800:\n',
    confirmCommit: 'Вас устраивает получившийся коммит?',
  },

  // Разрешим собственную ОБЛАСТЬ
  allowCustomScopes: false,

  // Запрет на Breaking Changes
  allowBreakingChanges: false,

  // Префикс для нижнего колонтитула
  footerPrefix: 'НОМЕР ЗАДАЧИ:',

  // limit subject length
  subjectLimit: 72,
};
