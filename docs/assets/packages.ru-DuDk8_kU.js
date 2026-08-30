import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/3. Создание пакетов`}),`
`,(0,c.jsx)(t.h1,{id:`создание-и-инициализация-пакетов-монорепозитория`,children:`Создание и инициализация пакетов монорепозитория`}),`
`,(0,c.jsxs)(t.p,{children:[`В дизайн-системе `,(0,c.jsx)(t.strong,{children:`DXT UI`}),` процесс создания новых пакетов и библиотек в монорепозитории полностью автоматизирован с помощью утилиты `,(0,c.jsx)(t.code,{children:`dxt-package`}),`. Разработчику больше не нужно вручную настраивать сборочные конфигурации, прописывать TypeScript-конфиги, формировать `,(0,c.jsx)(t.code,{children:`package.json`}),` или подключать новый модуль к Storybook.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-package`}),` (исполняемый файл `,(0,c.jsx)(t.code,{children:`bin/design-package.ts`}),`, класс `,(0,c.jsx)(t.code,{children:`PackageInit`}),`) сканирует монорепозиторий на наличие пустых директорий и за секунду разворачивает готовое изолированное рабочее пространство со всеми необходимыми файлами и интеграциями.`]}),`
`,(0,c.jsx)(t.h2,{id:`преимущества-автоматизации`,children:`Преимущества автоматизации`}),`
`,(0,c.jsx)(t.h3,{id:`1-эталонное-окружение-с-нуля-zero-boilerplate`,children:`1. Эталонное окружение с нуля (Zero Boilerplate)`}),`
`,(0,c.jsxs)(t.p,{children:[`Вместо ручного создания десятков конфигурационных файлов разработчик создает только одну пустую папку в `,(0,c.jsx)(t.code,{children:`packages/`}),`. Утилита автоматически генерирует полную инфраструктуру: TypeScript, Vite, ESLint/Prettier-совместимые настройки, скрипты сборки, тестирования и публикации.`]}),`
`,(0,c.jsx)(t.h3,{id:`2-автоматическая-интеграция-в-storybook`,children:`2. Автоматическая интеграция в Storybook`}),`
`,(0,c.jsxs)(t.p,{children:[`При создании пакета скрипт автоматически обновляет конфигурацию `,(0,c.jsx)(t.code,{children:`.storybook/main.ts`}),` в `,(0,c.jsx)(t.code,{children:`packages/storybook`}),`, добавляя пути к MDX-документации и историям нового пакета. Истории и документация становятся доступны сразу без ручной правки настроек.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-готовая-интеграция-с-ии-и-стандартами-типизации`,children:`3. Готовая интеграция с ИИ и стандартами типизации`}),`
`,(0,c.jsxs)(t.p,{children:[`Каждый новый пакет сразу содержит структуру `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`, системные файлы `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` и `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),`, а также эталонную точку входа `,(0,c.jsx)(t.code,{children:`src/library.ts`}),` со строгой типизацией.`]}),`
`,(0,c.jsx)(t.h2,{id:`пошаговое-руководство-что-нужно-делать`,children:`Пошаговое руководство (Что нужно делать)`}),`
`,(0,c.jsx)(t.h3,{id:`шаг-1-создайте-пустую-папку-для-пакета`,children:`Шаг 1. Создайте пустую папку для пакета`}),`
`,(0,c.jsxs)(t.p,{children:[`В директории `,(0,c.jsx)(t.code,{children:`packages/`}),` создайте новую пустую папку с именем будущего пакета в kebab-case (например, `,(0,c.jsx)(t.code,{children:`media-player`}),` или `,(0,c.jsx)(t.code,{children:`notifications`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`mkdir packages/media-player
`})}),`
`,(0,c.jsx)(t.h3,{id:`шаг-2-запустите-команду-генерации-пакета`,children:`Шаг 2. Запустите команду генерации пакета`}),`
`,(0,c.jsxs)(t.p,{children:[`Выполните команду `,(0,c.jsx)(t.code,{children:`dxt-package`}),` в терминале:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package
`})}),`
`,(0,c.jsx)(t.p,{children:`Генератор автоматически обнаружит пустую папку и создаст в ней полный комплект файлов:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Initializing package of type: library with templates: undefined
Package init in: packages/media-player
Update storybook...
`})}),`
`,(0,c.jsx)(t.h3,{id:`шаг-3-изучите-сгенерированную-структуру`,children:`Шаг 3. Изучите сгенерированную структуру`}),`
`,(0,c.jsx)(t.p,{children:`Внутри новой папки будет развернута полноценная среда пакета:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`packages/media-player/
├── package.json               # Манифест с зависимостями, скриптами сборки и экспортами
├── tsconfig.json              # Базовая конфигурация TypeScript
├── tsconfig.app.json          # Настройки сборщика приложения
├── tsconfig.node.json         # Настройки Node.js окружения
├── vite.config.ts             # Конфигурация сборки библиотеки Vite
├── .gitignore                 # Изоляция локальных файлов и артефактов сборки
├── README.md                  # Документация пакета
├── LICENSE                    # Лицензия проекта (MIT)
├── CHANGELOG.md               # История изменений и версий
├── ai-prompt.md               # Системный контекст пакета для ИИ
├── ai-memory.md               # Локальная память ИИ-ассистента
├── src/
│   ├── library.ts             # Главная точка входа и barrel-экспорт
│   ├── config.ts              # Конфигурация и константы пакета
│   └── types.ts               # Типы и интерфейсы
`})}),`
`,(0,c.jsx)(t.h3,{id:`шаг-4-дополнительные-опции-команды-типы-пакетов-и-шаблоны`,children:`Шаг 4. Дополнительные опции команды (типы пакетов и шаблоны)`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-package`}),` поддерживает гибкие опции командной строки:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`По умолчанию (библиотека TypeScript)`}),`:`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Указание типа пакета (например, vue)`}),`:`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package --type vue
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Передача пользовательских шаблонов`}),`:`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package --type vue --templates "template1,template2"
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Указание нестандартной базовой директории`}),`:`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package --dir custom-packages
`})}),`
`,(0,c.jsx)(t.p,{children:`Доступные опции:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--type`}),` (`,(0,c.jsx)(t.code,{children:`-t`}),`): Тип шаблона пакета. По умолчанию `,(0,c.jsx)(t.code,{children:`library`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--templates`}),`: Директория с шаблонами пакетов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--dir`}),` (`,(0,c.jsx)(t.code,{children:`-d`}),`): Целевая директория пакетов. По умолчанию `,(0,c.jsx)(t.code,{children:`packages`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Выполните `,(0,c.jsx)(t.code,{children:`npx dxt-package --help`}),`, чтобы вывести полный список доступных опций.`]}),`
`,(0,c.jsx)(t.h2,{id:`автоматические-интеграции-пакета`,children:`Автоматические интеграции пакета`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Storybook (`,(0,c.jsx)(t.code,{children:`.storybook/main.ts`}),`)`]}),`: Скрипт проверяет наличие Storybook и добавляет паттерны `,(0,c.jsx)(t.code,{children:"../../${name}/src/**/*.mdx"}),` и `,(0,c.jsx)(t.code,{children:"../../${name}/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Имя пакета и префикс`}),`: Автоматически генерируется полное имя пакета вида `,(0,c.jsx)(t.code,{children:`@dxtmisha/<name>`}),` на основе конфигурации проекта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Стандартные скрипты `,(0,c.jsx)(t.code,{children:`package.json`})]}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"dev"`}),`: Запуск локального сервера разработки Vite.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"build"`}),`: Компиляция библиотеки (`,(0,c.jsx)(t.code,{children:`vite build`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"test"`}),`: Запуск тестов через Vitest.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"prepublishOnly"`}),`: Автоматическая пересборка перед публикацией.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"publish-to-npm"`}),`: Публикация в публичный реестр npm (`,(0,c.jsx)(t.code,{children:`npm publish --access public`}),`).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`преимущества-перед-ручным-созданием`,children:`Преимущества перед ручным созданием`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Мгновенный старт`}),`: Создание готовой рабочей среды пакета занимает менее секунды.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`100% архитектурная точность`}),`: Исключены ошибки конфигурации Vite, TypeScript и забытые экспорты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сквозная связность монорепозитория`}),`: Автоматическая регистрация в Storybook и единые стандарты версионирования.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};