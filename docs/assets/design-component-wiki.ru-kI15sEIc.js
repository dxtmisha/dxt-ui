import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/bin/dxt-component-wiki - ИИ Документация Компонентов"}),`
`,n.jsx(e.h1,{id:"dxt-component-wiki",children:"dxt-component-wiki"}),`
`,n.jsxs(e.p,{children:["Команда ",n.jsx(e.code,{children:"dxt-component-wiki"})," отвечает за автоматическую генерацию детализированной MDX-документации, типов компонентов и Storybook историй с помощью ИИ для дизайн-системы."]}),`
`,n.jsx(e.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Точечная AI-генерация файлов"}),": Учитывая путь к отдельному компоненту, генератор ИИ может полностью переопределить или обновить стандартные артефакты, такие как ",n.jsx(e.code,{children:"MDX"})," заметки, ",n.jsx(e.code,{children:"types.ts"})," и ",n.jsx(e.code,{children:"stories.ts"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Резервное копирование (Legacy Backup)"}),": Безопасно сохраняет предыдущие версии измененных файлов, добавляя суффикс ",n.jsx(e.code,{children:"__old.txt"}),", чтобы предотвратить случайную потерю кода."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Настраиваемые инструкции для ИИ"}),": Включает возможность добавления ваших собственных точечных инструкций к выполняемому промпту ИИ при вызове команды."]}),`
`]}),`
`,n.jsx(e.h2,{id:"как-это-работает",children:"Как это работает?"}),`
`,n.jsx(e.p,{children:"Процесс AI Wiki генерации обрабатывает уже существующий путь компонента:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Скрипт запускает временную фоновую компиляцию во временную среду дистрибуции для получения корректной информации о поведении TypeScript."}),`
`,n.jsxs(e.li,{children:["Он читает конфигурацию для поиска файлов с локализованными системными промптами (например, ",n.jsx(e.code,{children:"componentPrompt.ru.txt"}),") и объединяет их с вашим реальным оригинальным кодом компонента (MDX, исходники vue, истории storybook)."]}),`
`,n.jsxs(e.li,{children:["Единый комплексный ответ от ИИ-модели интеллектуально распределяет новые фрагменты кода прямо в ваш репозиторий при помощи движка ",n.jsx(e.code,{children:"ComponentWikiFile"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"настройка-и-запуск",children:"Настройка и запуск"}),`
`,n.jsxs(e.p,{children:["Конфигурация генератора ИИ определяется централизованно в файле ",n.jsx(e.code,{children:"design.config.json"})," вашего проекта. ",n.jsx(e.strong,{children:"Создайте этот файл в корне вашего проекта."})," Выполните эти точные шаги для настройки:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Настройте параметры ИИ в ",n.jsx(e.code,{children:"design.config.json"})]}),`:
Добавьте ключ API, целевую модель и язык документации напрямую в конфигурационный объект. Важно отметить, что `,n.jsx(e.code,{children:"wikiLanguage"})," определяет не только язык текста, но и какой базовый промпт загрузит система (например, ",n.jsx(e.code,{children:"componentPrompt.ru.txt"}),").",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "wikiLanguage": "ru",
  "aiType": "gemini",
  "aiModel": "gemini-2.0-flash",
  "aiKey": "ВАШ_API_КЛЮЧ"
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Запуск AI-документирования для компонента"}),`:
Для анализа конкретного компонента с помощью ИИ, передайте генератору его относительный путь (например, `,n.jsx(e.code,{children:"Button"}),"). Вы можете опционально включить дополнительные инструкции для промпта:",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx dxt-component-wiki <component-path> "[optional-prompt-instruction]"
`})}),`
`,n.jsx(e.strong,{children:"Пример:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx dxt-component-wiki "ButtonBase" "Убедись, что в документации указано, что он отключен по умолчанию"
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"дополнительная-информация",children:"Дополнительная информация"}),`
`,n.jsx(e.h3,{id:"зависимость-от-сборки-проекта",children:"Зависимость от сборки проекта"}),`
`,n.jsxs(e.p,{children:["Генерация через ИИ глубоко связана со сборкой приложения в реальном времени. Скрипт инициирует ",n.jsx(e.code,{children:"npm run build"})," во временную папку ",n.jsx(e.code,{children:"dist-temporary"}),". ",n.jsx(e.strong,{children:"Если в вашем проекте есть ошибки компиляции TypeScript, то генерация контекста для ИИ систематически завершится сбоем."})]}),`
`,n.jsxs(e.h3,{id:"автоматическое-создание-бэкапов-__oldtxt",children:["Автоматическое создание бэкапов (",n.jsx(e.code,{children:"__old.txt"}),")"]}),`
`,n.jsxs(e.p,{children:["Если ",n.jsx(e.code,{children:"ComponentWikiFile"})," определяет, что применяемые ИИ обновления сильно отличаются от оригинальных исходных данных, механизм активно делает резервную копию файлов в формате ",n.jsx(e.code,{children:"[filename]__old.txt"}),", что позволяет произвести откат без лишних сложностей."]})]})}function j(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{j as default};
