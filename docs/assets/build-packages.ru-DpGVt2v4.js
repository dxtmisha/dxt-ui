import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DTffVoCm.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/7. Команды/dxt-build-packages - Сборка пакетов`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-build-packages`,children:`dxt-build-packages`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-build-packages`}),` обеспечивает автоматическую инкрементальную сборку npm-пакетов в рабочем пространстве монорепозитория. Инструмент использует класс `,(0,c.jsx)(t.code,{children:`BuildPackages`}),` и обертку `,(0,c.jsx)(t.code,{children:`PackageFile`}),` для сканирования директорий пакетов, сортировки их по приоритету сборки, отслеживания изменений версий через локальный лог-кэш и компиляции только тех пакетов, версии которых обновились.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое сканирование монорепозитория`}),`: Сканирует директорию пакетов (`,(0,c.jsx)(t.code,{children:`packages/`}),`) и находит все активные модули, содержащие валидный файл `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Сортировка по приоритету сборки (`,(0,c.jsx)(t.code,{children:`ui-priority`}),`)`]}),`: Автоматически упорядочивает пакеты по свойству `,(0,c.jsx)(t.code,{children:`ui-priority`}),` из `,(0,c.jsx)(t.code,{children:`package.json`}),` (по умолчанию `,(0,c.jsx)(t.code,{children:`500`}),`), обеспечивая корректный порядок сборки зависимостей от базовых пакетов к высокоуровневым.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инкрементальное кэширование на основе версий`}),`: Предотвращает повторную сборку неизмененных пакетов, сохраняя версии в локальном кэше логов. Сборка выполняется только при обнаружении новой или измененной версии.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Пользовательский код сборки (`,(0,c.jsx)(t.code,{children:`--code`}),`)`]}),`: Возможность переопределить команду сборки (например, `,(0,c.jsx)(t.code,{children:`dxt-build-packages --code=types`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Пользовательский лог-файл и `,(0,c.jsx)(t.code,{children:`.gitignore`}),` (`,(0,c.jsx)(t.code,{children:`--log`}),`)`]}),`: Возможность указать имя файла лога (например, `,(0,c.jsx)(t.code,{children:`--log=ui-types`}),`), при этом путь к файлу автоматически регистрируется в `,(0,c.jsx)(t.code,{children:`.gitignore`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальный выбор скрипта сборки`}),`: При отсутствии явной команды автоматически выбирает первую доступную команду сборки из `,(0,c.jsx)(t.code,{children:`package.json`}),` в строгом порядке приоритета: `,(0,c.jsx)(t.code,{children:`prepublishOnly`}),`, затем `,(0,c.jsx)(t.code,{children:`build-recovery`}),`, затем `,(0,c.jsx)(t.code,{children:`build`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Исключение тестовых пакетов`}),`: Автоматически пропускает пакеты, помеченные свойством `,(0,c.jsx)(t.code,{children:`"ui-test": true`}),` в `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsx)(t.p,{children:`Процесс сборки пакетов выполняет следующий пошаговый алгоритм:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сканирование и загрузка кэша`}),`: Класс `,(0,c.jsx)(t.code,{children:`BuildPackages`}),` считывает файл кэша логов (`,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),` или пользовательский файл) и сканирует рабочую директорию пакетов (`,(0,c.jsx)(t.code,{children:`packages/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Фильтрация пакетов`}),`: Для каждой папки создается экземпляр `,(0,c.jsx)(t.code,{children:`PackageFile`}),`. Отфильтровываются папки без `,(0,c.jsx)(t.code,{children:`package.json`}),` и тестовые пакеты (`,(0,c.jsx)(t.code,{children:`"ui-test": true`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сортировка по приоритету`}),`: Оставшиеся пакеты сортируются по возрастанию значения `,(0,c.jsx)(t.code,{children:`ui-priority`}),` (при отсутствии свойства используется значение по умолчанию `,(0,c.jsx)(t.code,{children:`500`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Проверка согласованности версий`}),`: Для каждого пакета проверяется соответствие текущей версии в `,(0,c.jsx)(t.code,{children:`package.json`}),` значению из кэша логов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Выполнение команды сборки`}),`: Если версия изменилась (или пакет собирается впервые):`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Если задан `,(0,c.jsx)(t.code,{children:`--code`}),`, выполняется переданная команда или `,(0,c.jsx)(t.code,{children:`npm run <code-name>`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Иначе скрипт сборки определяется по порядку приоритета в `,(0,c.jsx)(t.code,{children:`package.json`}),` (`,(0,c.jsx)(t.code,{children:`prepublishOnly`}),` -> `,(0,c.jsx)(t.code,{children:`build-recovery`}),` -> `,(0,c.jsx)(t.code,{children:`build`}),`).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Обновление логов`}),`: При успешном выполнении сборки версия пакета фиксируется в оперативной памяти.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сохранение кэша и обновление .gitignore`}),`: Если хотя бы один пакет был собран (`,(0,c.jsx)(t.code,{children:`changed > 0`}),`), обновленный кэш сохраняется на диск, а путь к файлу лога добавляется в `,(0,c.jsx)(t.code,{children:`.gitignore`}),`. Если изменений не было, выводится сообщение `,(0,c.jsx)(t.code,{children:`Build packages - no changes`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsx)(t.p,{children:`Запустите команду сборки пакетов через CLI:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`# Стандартная инкрементальная сборка пакетов
npx dxt-build-packages

# Сборка типов с отдельным лог-файлом
npx dxt-build-packages --code=types --log=ui-types
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Либо добавьте вызов в скрипты `,(0,c.jsx)(t.code,{children:`package.json`}),` корневого репозитория:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "build:packages": "dxt-build-packages",
    "build:types": "dxt-build-packages --code=types --log=ui-types"
  }
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`доступные-флаги-cli`,children:`Доступные флаги CLI`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`-c, --code <CODE>`}),`: Пользовательская команда или имя скрипта для выполнения (например, `,(0,c.jsx)(t.code,{children:`types`}),` или `,(0,c.jsx)(t.code,{children:`npm run build:prod`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`-d, --dir <DIR>`}),`: Путь к директории пакетов (по умолчанию `,(0,c.jsx)(t.code,{children:`packages`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`-l, --log <LOG>`}),`: Пользовательское имя или путь к файлу лога сборки (по умолчанию `,(0,c.jsx)(t.code,{children:`ui-build.log.json`}),` в папке `,(0,c.jsx)(t.code,{children:`logs/`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`дополнительная-информация`,children:`Дополнительная информация`}),`
`,(0,c.jsxs)(t.h3,{id:`управление-приоритетом-сборки-ui-priority`,children:[`Управление приоритетом сборки (`,(0,c.jsx)(t.code,{children:`ui-priority`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Чтобы базовые библиотеки (например, утилиты или базовые стили) собирались раньше зависимых компонентов, укажите числовой приоритет в `,(0,c.jsx)(t.code,{children:`package.json`}),` пакета (меньшее число означает более ранний запуск сборки):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "name": "@dxtmisha/functional-basic",
  "ui-priority": 100
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Пакеты со значением `,(0,c.jsx)(t.code,{children:`ui-priority: 100`}),` будут скомпилированы раньше пакетов с `,(0,c.jsx)(t.code,{children:`ui-priority: 500`}),` или пакетов без указанного приоритета.`]}),`
`,(0,c.jsxs)(t.h3,{id:`исключение-тестовых-пакетов-ui-test`,children:[`Исключение тестовых пакетов (`,(0,c.jsx)(t.code,{children:`ui-test`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Чтобы сборщик полностью игнорировал пакет, добавьте в его `,(0,c.jsx)(t.code,{children:`package.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "ui-test": true
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};