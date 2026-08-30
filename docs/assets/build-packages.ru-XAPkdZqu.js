import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/5. Сборка пакетов`}),`
`,(0,c.jsx)(t.h1,{id:`сборка-пакетов-монорепозитория`,children:`Сборка пакетов монорепозитория`}),`
`,(0,c.jsxs)(t.p,{children:[`В дизайн-системе `,(0,c.jsx)(t.strong,{children:`DXT UI`}),` процесс компиляции всех взаимосвязанных пакетов монорепозитория полностью автоматизирован с помощью утилиты `,(0,c.jsx)(t.code,{children:`dxt-build-packages`}),`. Разработчику больше не нужно вручную определять порядок сборки модулей или тратить время на повторную компиляцию неизмененных пакетов.`]}),`
`,(0,c.jsx)(t.p,{children:`Инструмент берет на себя весь сборочный конвейер, автоматически анализирует граф зависимостей через приоритеты и применяет инкрементальное кэширование.`}),`
`,(0,c.jsx)(t.h2,{id:`преимущества-автоматизации`,children:`Преимущества автоматизации`}),`
`,(0,c.jsx)(t.h3,{id:`1-интеллектуальное-кэширование-и-мгновенный-инкрементальный-билд`,children:`1. Интеллектуальное кэширование и мгновенный инкрементальный билд`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-build-packages`}),` отслеживает состояние собранных пакетов через локальный файл кэша `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`. Если исходный код и версия пакета не изменялись с момента последней сборки, шаг компиляции мгновенно пропускается.`]}),`
`,(0,c.jsxs)(t.h3,{id:`2-гарантированный-порядок-сборки-через-приоритеты-ui-priority`,children:[`2. Гарантированный порядок сборки через приоритеты (`,(0,c.jsx)(t.code,{children:`ui-priority`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Каждый пакет в `,(0,c.jsx)(t.code,{children:`package.json`}),` может объявить свой сборочный приоритет `,(0,c.jsx)(t.code,{children:`ui-priority`}),`. Оркестратор строго упорядочивает сборку по возрастанию приоритета, компилируя фундаментальные базовые библиотеки (`,(0,c.jsx)(t.code,{children:`functional`}),`, `,(0,c.jsx)(t.code,{children:`styles`}),`, `,(0,c.jsx)(t.code,{children:`constructor`}),`) до зависимых от них компонентов (`,(0,c.jsx)(t.code,{children:`d1`}),`) и документации.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-автоматический-выбор-скрипта-компиляции`,children:`3. Автоматический выбор скрипта компиляции`}),`
`,(0,c.jsxs)(t.p,{children:[`Оркестратор самостоятельно определяет наилучшую команду сборки для каждого пакета по прозрачной цепочке приоритетов: `,(0,c.jsx)(t.code,{children:`prepublishOnly`}),` -> `,(0,c.jsx)(t.code,{children:`build-recovery`}),` -> `,(0,c.jsx)(t.code,{children:`build`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`пошаговое-руководство-что-нужно-делать`,children:`Пошаговое руководство (Что нужно делать)`}),`
`,(0,c.jsx)(t.h3,{id:`шаг-1-настройте-конфигурацию-packagejson`,children:`Шаг 1. Настройте конфигурацию package.json`}),`
`,(0,c.jsxs)(t.p,{children:[`В файле `,(0,c.jsx)(t.code,{children:`package.json`}),` каждого пакета убедитесь в наличии скрипта сборки и при необходимости укажите приоритет `,(0,c.jsx)(t.code,{children:`ui-priority`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "name": "@dxtmisha/example-package",
  "version": "1.0.0",
  "ui-priority": 400,
  "scripts": {
    "build": "vite build",
    "prepublishOnly": "npm run build"
  }
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`шаг-2-запустите-команду-сборки`,children:`Шаг 2. Запустите команду сборки`}),`
`,(0,c.jsxs)(t.p,{children:[`Выполните команду `,(0,c.jsx)(t.code,{children:`dxt-build-packages`}),` в терминале:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-build-packages
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Сборщик просканирует директорию `,(0,c.jsx)(t.code,{children:`packages/`}),`, отсортирует найденные пакеты по приоритетам и скомпилирует только те, у которых изменилась версия:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Build packages(14)...
Build packages changed: 2
`})}),`
`,(0,c.jsx)(t.p,{children:`Если ни один пакет не требует обновления, сборщик завершит работу без лишних действий:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Build packages(14)...
Build packages - no changes
`})}),`
`,(0,c.jsx)(t.h3,{id:`шаг-3-изучите-кэш-сборки`,children:`Шаг 3. Изучите кэш сборки`}),`
`,(0,c.jsxs)(t.p,{children:[`После завершения процесса версии скомпилированных пакетов автоматически сохраняются в `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "@dxtmisha/functional-basic": "1.0.0",
  "@dxtmisha/functional": "1.0.0",
  "@dxtmisha/styles": "1.0.0",
  "@dxtmisha/constructor": "1.0.0",
  "@dxtmisha/d1": "1.0.0"
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`шаг-4-пересборка-при-обновлении-кода`,children:`Шаг 4. Пересборка при обновлении кода`}),`
`,(0,c.jsxs)(t.p,{children:[`Когда вы вносите изменения в пакет и обновляете его версию в `,(0,c.jsx)(t.code,{children:`package.json`}),`, повторный запуск `,(0,c.jsx)(t.code,{children:`npx dxt-build-packages`}),` автоматически обнаружит несовпадение с версией в логе и пересоберет только данный пакет.`]}),`
`,(0,c.jsxs)(t.h2,{id:`управление-приоритетами-сборки-ui-priority`,children:[`Управление приоритетами сборки (`,(0,c.jsx)(t.code,{children:`ui-priority`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Числовое свойство `,(0,c.jsx)(t.code,{children:`ui-priority`}),` в `,(0,c.jsx)(t.code,{children:`package.json`}),` задает последовательность компиляции. Чем меньше значение, тем раньше собирается пакет:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`100 – 200 (Базовые утилиты и стили)`}),`: Фундаментальные библиотеки без внешних зависимостей внутри монорепозитория (`,(0,c.jsx)(t.code,{children:`@dxtmisha/functional-basic`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`300 – 400 (Абстракции и конструкторы)`}),`: Ядро компонентов и протоколы (`,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/mcp`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`500 (Стандартный приоритет)`}),`: Библиотеки готовых UI-компонентов и дизайн-системы (`,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/figma`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`600 – 900 (Интеграции и документация)`}),`: Верхнеуровневые потребители и сборочные приложения (`,(0,c.jsx)(t.code,{children:`@dxtmisha/wiki`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/storybook`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`специальные-параметры-packagejson`,children:`Специальные параметры package.json`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ui-priority`}),` (number)`]}),`: Вес пакета в очереди сборки (по умолчанию `,(0,c.jsx)(t.code,{children:`500`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ui-test`}),` (boolean)`]}),`: Если установлено в `,(0,c.jsx)(t.code,{children:`true`}),`, пакет считается тестовым и полностью исключается из процесса автоматической сборки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Приоритет выбора скриптов`}),`: Оркестратор проверяет `,(0,c.jsx)(t.code,{children:`scripts`}),` пакета и запускает первую найденную команду: `,(0,c.jsx)(t.code,{children:`prepublishOnly`}),`, затем `,(0,c.jsx)(t.code,{children:`build-recovery`}),`, затем `,(0,c.jsx)(t.code,{children:`build`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`преимущества-перед-ручной-сборкой`,children:`Преимущества перед ручной сборкой`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Экономия до 90% времени`}),`: Компилируются только реально изменившиеся модули.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Исключение циклических и сломанных зависимостей`}),`: Гарантированная сборка базовых библиотек до компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Чистый лог и прозрачность`}),`: Полный учет текущего состояния сборок в локальном файле кэша.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};