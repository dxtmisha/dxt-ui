import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/bin/dxt-component-wiki - ИИ Документация Компонентов`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-component-wiki`,children:`dxt-component-wiki`}),`
`,(0,c.jsxs)(n.p,{children:[`Команда `,(0,c.jsx)(n.code,{children:`dxt-component-wiki`}),` отвечает за автоматическую генерацию детализированной MDX-документации, типов компонентов и Storybook историй с помощью ИИ для дизайн-системы.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Точечная AI-генерация файлов`}),`: Учитывая путь к отдельному компоненту, генератор ИИ может полностью переопределить или обновить стандартные артефакты, такие как `,(0,c.jsx)(n.code,{children:`MDX`}),` заметки, `,(0,c.jsx)(n.code,{children:`types.ts`}),` и `,(0,c.jsx)(n.code,{children:`stories.ts`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Резервное копирование (Legacy Backup)`}),`: Безопасно сохраняет предыдущие версии измененных файлов, добавляя суффикс `,(0,c.jsx)(n.code,{children:`__old.txt`}),`, чтобы предотвратить случайную потерю кода.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Настраиваемые инструкции для ИИ`}),`: Включает возможность добавления ваших собственных точечных инструкций к выполняемому промпту ИИ при вызове команды.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsx)(n.p,{children:`Процесс AI Wiki генерации обрабатывает уже существующий путь компонента:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsx)(n.li,{children:`Скрипт запускает временную фоновую компиляцию во временную среду дистрибуции для получения корректной информации о поведении TypeScript.`}),`
`,(0,c.jsxs)(n.li,{children:[`Он читает конфигурацию для поиска файлов с локализованными системными промптами (например, `,(0,c.jsx)(n.code,{children:`componentPrompt.ru.txt`}),`) и объединяет их с вашим реальным оригинальным кодом компонента (MDX, исходники vue, истории storybook).`]}),`
`,(0,c.jsxs)(n.li,{children:[`Единый комплексный ответ от ИИ-модели интеллектуально распределяет новые фрагменты кода прямо в ваш репозиторий при помощи движка `,(0,c.jsx)(n.code,{children:`ComponentWikiFile`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`настройка-и-запуск`,children:`Настройка и запуск`}),`
`,(0,c.jsxs)(n.p,{children:[`Конфигурация генератора ИИ определяется централизованно в файле `,(0,c.jsx)(n.code,{children:`design.config.json`}),` вашего проекта. `,(0,c.jsx)(n.strong,{children:`Создайте этот файл в корне вашего проекта.`}),` Выполните эти точные шаги для настройки:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Настройте параметры ИИ в `,(0,c.jsx)(n.code,{children:`design.config.json`})]}),`:
Добавьте ключ API, целевую модель и язык документации напрямую в конфигурационный объект. Важно отметить, что `,(0,c.jsx)(n.code,{children:`wikiLanguage`}),` определяет не только язык текста, но и какой базовый промпт загрузит система (например, `,(0,c.jsx)(n.code,{children:`componentPrompt.ru.txt`}),`).`,`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "wikiLanguage": "ru",
  "aiType": "gemini",
  "aiModel": "gemini-2.0-flash",
  "aiKey": "ВАШ_API_КЛЮЧ"
}
`})}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Запуск AI-документирования для компонента`}),`:
Для анализа конкретного компонента с помощью ИИ, передайте генератору его относительный путь (например, `,(0,c.jsx)(n.code,{children:`Button`}),`). Вы можете опционально включить дополнительные инструкции для промпта:`,`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-component-wiki <component-path> "[optional-prompt-instruction]"
`})}),`
`,(0,c.jsx)(n.strong,{children:`Пример:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-component-wiki "ButtonBase" "Убедись, что в документации указано, что он отключен по умолчанию"
`})}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`дополнительная-информация`,children:`Дополнительная информация`}),`
`,(0,c.jsx)(n.h3,{id:`зависимость-от-сборки-проекта`,children:`Зависимость от сборки проекта`}),`
`,(0,c.jsxs)(n.p,{children:[`Генерация через ИИ глубоко связана со сборкой приложения в реальном времени. Скрипт инициирует `,(0,c.jsx)(n.code,{children:`npm run build`}),` во временную папку `,(0,c.jsx)(n.code,{children:`dist-temporary`}),`. `,(0,c.jsx)(n.strong,{children:`Если в вашем проекте есть ошибки компиляции TypeScript, то генерация контекста для ИИ систематически завершится сбоем.`})]}),`
`,(0,c.jsxs)(n.h3,{id:`автоматическое-создание-бэкапов-__oldtxt`,children:[`Автоматическое создание бэкапов (`,(0,c.jsx)(n.code,{children:`__old.txt`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Если `,(0,c.jsx)(n.code,{children:`ComponentWikiFile`}),` определяет, что применяемые ИИ обновления сильно отличаются от оригинальных исходных данных, механизм активно делает резервную копию файлов в формате `,(0,c.jsx)(n.code,{children:`[filename]__old.txt`}),`, что позволяет произвести откат без лишних сложностей.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};