import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiList object contains descriptions of all properties for the List component
 *
 * Объект wikiList содержит описание всех свойств для компонента List
 */
export const wikiList: StorybookArgsToList = {
  'list.focus': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Selected item for focus state. Defines which item should be visually focused in the list.',
        ru: 'Выбранный элемент для состояния фокуса. Определяет, какой элемент должен быть визуально сфокусирован в списке.'
      }
    }
  },
  'list.itemAttrs': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Additional attributes to apply to each list item element. Allows customization of HTML attributes for individual list items.',
        ru: 'Дополнительные атрибуты для применения к каждому элементу списка. Позволяет настраивать HTML-атрибуты для отдельных элементов списка.'
      }
    }
  },
  'list.list': {
    type: StorybookControl.array,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Array of list items data. Contains the data for all items to be rendered in the list.',
        ru: 'Массив данных элементов списка. Содержит данные для всех элементов, которые должны быть отображены в списке.'
      },
      value: [
        {
          label: 'Запустить проект',
          value: 'launch-project',
          icon: 'play_arrow'
        },
        {
          label: 'Управление задачами',
          value: 'task-management',
          icon: 'assignment'
        },
        { type: 'space' },
        {
          label: 'Команда',
          value: 'team',
          icon: 'group',
          badge: '12'
        },
        {
          label: 'Аналитика и отчеты',
          value: 'analytics',
          icon: 'analytics',
          description: 'Просмотр статистики'
        },
        {
          type: 'subtitle',
          label: 'Инструменты'
        },
        {
          label: 'Настройки системы',
          value: 'settings',
          icon: 'settings',
          disabled: true
        },
        {
          label: 'Файловый менеджер',
          value: 'file-manager',
          icon: 'folder',
          suffix: 245
        },
        {
          type: 'group',
          index: 'g1',
          label: 'Маркетинг',
          value: [
            {
              label: 'Email рассылки',
              value: 'email-campaigns',
              icon: 'email'
            },
            {
              label: 'Социальные сети',
              value: 'social-media',
              icon: 'share'
            },
            {
              label: 'Реклама',
              value: 'ads',
              icon: 'ads_click'
            }
          ],
          icon: 'campaign'
        },
        {
          type: 'group',
          index: 'g2',
          label: 'Разработка',
          value: [
            {
              label: 'Репозиторий кода',
              value: 'repository',
              icon: 'code'
            },
            {
              label: 'Система сборки',
              value: 'build-system',
              icon: 'build'
            },
            {
              type: 'group',
              index: 'g2-1',
              label: 'Тестирование',
              value: [
                {
                  label: 'Unit тесты',
                  value: 'unit-tests',
                  icon: 'science'
                },
                {
                  label: 'Интеграционные тесты',
                  value: 'integration-tests',
                  icon: 'integration_instructions'
                },
                {
                  label: 'E2E тесты',
                  value: 'e2e-tests',
                  icon: 'web'
                }
              ],
              icon: 'bug_report'
            },
            {
              label: 'Документация API',
              value: 'api-docs',
              icon: 'description'
            }
          ],
          icon: 'developer_mode'
        },
        {
          type: 'menu',
          index: 'm1',
          label: 'Администрирование',
          value: [
            {
              label: 'Управление пользователями',
              value: 'user-management',
              icon: 'people'
            },
            {
              label: 'Права доступа',
              value: 'permissions',
              icon: 'security'
            },
            {
              type: 'menu',
              index: 'm1-1',
              label: 'Системные настройки',
              value: [
                {
                  label: 'Конфигурация сервера',
                  value: 'server-config',
                  icon: 'dns'
                },
                {
                  label: 'База данных',
                  value: 'database-config',
                  icon: 'storage'
                },
                {
                  label: 'Резервное копирование',
                  value: 'backup',
                  icon: 'backup'
                }
              ],
              icon: 'tune'
            },
            {
              label: 'Мониторинг системы',
              value: 'monitoring',
              icon: 'monitor_heart'
            }
          ],
          icon: 'admin_panel_settings'
        },
        { type: 'line' },
        {
          label: 'Уведомления',
          value: 'notifications',
          icon: 'notifications',
          badge: 'Новое'
        },
        {
          label: 'Избранное',
          value: 'favorites',
          icon: 'star'
        }
      ]
    }
  },
  'list.lite': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Simplified display mode. When enabled, shows a lightweight version of the list with minimal styling and reduced visual elements.',
        ru: 'Упрощенный режим отображения. При включении показывает облегченную версию списка с минимальной стилизацией и уменьшенными визуальными элементами.'
      }
    }
  },
  'list.selected': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'List of selected items. Contains all currently selected items in the list for multi-selection scenarios.',
        ru: 'Список выбранных элементов. Содержит все текущие выбранные элементы списка для сценариев множественного выбора.'
      }
    }
  }
}
