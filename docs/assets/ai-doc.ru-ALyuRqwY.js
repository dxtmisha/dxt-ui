import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as d}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"@dxtmisha/ru/scripts/bin/dxt-ai-doc - Генератор AI-документации"}),`
`,n.jsx(e.h1,{id:"dxt-ai-doc",children:"dxt-ai-doc"}),`
`,n.jsxs(e.p,{children:["Скрипт ",n.jsx(e.code,{children:"ai-doc.ts"})," представляет собой автоматизированный генератор документации проекта на базе ИИ. Он использует ",n.jsx(e.code,{children:"vite-node"})," для запуска процесса, который анализирует исходный код TypeScript (классы, композитные функции и обычные функции), связывается с моделью ИИ для получения описания кода и создаёт или обновляет файлы документации в формате MDX."]}),`
`,n.jsx(e.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Контекстные промпты"}),": Генерирует документацию с использованием различных шаблонов промптов в зависимости от типа файла (Class, Composable или стандартная функция)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Многоязычная поддержка"}),": Автоматически подставляет целевой язык документации (",n.jsx(e.code,{children:"[wikiLanguage]"}),") в промпт для ИИ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Компиляция в реальном времени"}),": Перед отправкой контекста ИИ скрипт создаёт сборку, чтобы получить точный контекст поведения TypeScript."]}),`
`]}),`
`,n.jsx(e.h2,{id:"как-это-работает",children:"Как это работает?"}),`
`,n.jsx(e.p,{children:"Скрипт координирует ряд ключевых процессов для автоматизации создания документации:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Скрипт считывает список файлов из директорий, указанных в ваших конфигурационных файлах свойств проекта."}),`
`,n.jsx(e.li,{children:"Он определяет тип кода (класс, композитная функция, обычная функция) и подготавливает специфичный для него контекст."}),`
`,n.jsx(e.li,{children:"Выполняется компиляция кода в реальном времени для получения точной информации о типах TypeScript."}),`
`,n.jsx(e.li,{children:"Собранный контекст вместе с шаблонами промптов отправляется в модель ИИ."}),`
`,n.jsxs(e.li,{children:["ИИ формирует ответ, скрипт анализирует его и напрямую создаёт или обновляет ",n.jsx(e.code,{children:"MDX"})," файлы в репозитории."]}),`
`]}),`
`,n.jsx(e.h2,{id:"настройка-и-запуск",children:"Настройка и запуск"}),`
`,n.jsxs(e.p,{children:["Конфигурация генератора ИИ определяется централизованно в файле ",n.jsx(e.code,{children:"design.config.json"})," вашего проекта. ",n.jsx(e.strong,{children:"Создайте этот файл в корне вашего проекта."})," Выполните эти точные шаги для настройки:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Настройте параметры ИИ в ",n.jsx(e.code,{children:"design.config.json"})]}),`:
Добавьте ключ API, целевую модель и язык напрямую в конфигурационный объект.`,`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "wikiLanguage": "ru",
  "aiType": "gemini",
  "aiModel": "gemini-2.0-flash",
  "aiKey": "ВАШ_API_КЛЮЧ"
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Настройте целевые директории"}),`:
В том же `,n.jsx(e.code,{children:"design.config.json"})," укажите, какие директории следует сканировать, переопределив пути по умолчанию ",n.jsx(e.code,{children:"aiDocDirectory"}),". (По умолчанию это ",n.jsx(e.code,{children:"/classes/"}),", ",n.jsx(e.code,{children:"/composables/"})," и ",n.jsx(e.code,{children:"/functions/"}),").",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "aiDocDirectory": [
    "/path/to/my/classes/",
    "/path/to/my/composables/"
  ]
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Запустите команду"}),`:
Скрипт зарегистрирован в `,n.jsx(e.code,{children:"package.json"})," как часть ",n.jsx(e.code,{children:"@dxtmisha/scripts"}),". Просто выполните команду ",n.jsx(e.code,{children:"dxt-ai-doc"})," через ",n.jsx(e.code,{children:"npx"})," или ",n.jsx(e.code,{children:"npm"}),":",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx dxt-ai-doc
`})}),`
`,"Скрипту не нужны никакие аргументы — он автоматически прочитает настройки из ",n.jsx(e.code,{children:"design.config.json"})," и обновит нужные файлы документации."]}),`
`]}),`
`,n.jsx(e.h2,{id:"дополнительная-информация",children:"Дополнительная информация"}),`
`,n.jsx(e.h3,{id:"зависимость-от-сборки-проекта",children:"Зависимость от сборки проекта"}),`
`,n.jsxs(e.p,{children:["Генератор сильно зависит от процесса сборки проекта. ",n.jsxs(e.strong,{children:["Он выполняет команду ",n.jsx(e.code,{children:"npm run build"})]})," во временной директории сборки (",n.jsx(e.code,{children:"dist-temporary"}),"), чтобы точно получить ваши определения TypeScript, экспорты и структуру компонентов. ",n.jsx(e.strong,{children:"Если в вашем проекте есть ошибки TypeScript или сборки, скрипт генерации документации завершится сбоем."})]}),`
`,n.jsx(e.h3,{id:"исключение-файлов-директива-пропуска",children:"Исключение файлов (Директива пропуска)"}),`
`,n.jsxs(e.p,{children:["Вы можете исключить конкретные файлы из обработки ",n.jsx(e.code,{children:"dxt-ai-doc"}),", добавив комментарий ",n.jsx(e.code,{children:"// wiki:build-none"})," в любом месте файла."]})]})}function t(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{t as default};
