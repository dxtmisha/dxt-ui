import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/ru/scripts/Classes/DesignWikiStorm - Генератор метаданных для IDE"}),`
`,n.jsx(s.h1,{id:"класс-designwikistorm",children:"Класс DesignWikiStorm"}),`
`,n.jsxs(s.p,{children:["Класс ",n.jsx(s.code,{children:"DesignWikiStorm"})," — это специализированная утилита, предназначенная для сокращения разрыва между кодом дизайн-системы и инструментами продуктивности разработчиков. Он автоматизирует генерацию ",n.jsx(s.code,{children:"web-types.json"})," — стандартизированного формата метаданных, используемого IDE от JetBrains (WebStorm, IntelliJ IDEA) для обеспечения продвинутого IntelliSense, автодополнения и подсказок по документации для компонентов Vue."]}),`
`,n.jsx(s.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Соответствие стандарту Web-Types"})," — генерирует метаданные, строго соответствующие официальной JSON-схеме Web-Types."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Оптимизация IntelliSense"})," — преобразует свойства компонентов, события и слоты в определения, удобные для IDE."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Автоматическое обнаружение директорий"})," — рекурсивно сканирует библиотеку для идентификации всех компонентов и их соответствующих метаданных."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Динамическое управление версиями"})," — автоматически синхронизирует версию сгенерированных метаданных с текущей версией в ",n.jsx(s.code,{children:"package.json"}),"."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Интеграция с фреймворком"})," — специально настроен для Vue.js, что гарантирует правильное распознавание тегов и атрибутов компонентов в ",n.jsx(s.code,{children:".vue"})," файлах."]}),`
`]}),`
`,n.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(s.p,{children:["Инициализируйте генератор, указав целевую директорию, в которой должен быть сохранен файл ",n.jsx(s.code,{children:"web-types.json"}),"."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"dir: string"})," — путь к выходной директории (по умолчанию ",n.jsx(s.code,{children:"'dist'"}),")."]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { DesignWikiStorm } from '@dxtmisha/scripts'

const generator = new DesignWikiStorm('dist')
await generator.make()
`})}),`
`,n.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(s.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"make(): Promise<void>"})," — запускает основной процесс генерации."]}),`
`]}),`
`,n.jsx(s.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(s.h3,{id:"рабочий-процесс-генерации-web-types",children:"Рабочий процесс генерации Web-Types"}),`
`,n.jsxs(s.p,{children:["При вызове ",n.jsx(s.code,{children:"make()"})," класс координирует многоэтапный синтез данных:"]}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Получение контекста"}),": загружает ",n.jsx(s.code,{children:"package.json"})," для получения имени библиотеки и текущей версии."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Инициализация схемы"}),": создает объект на основе схемы Web-Types, устанавливая фреймворк Vue и определяя разметку документации как Markdown."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Итерация компонентов"}),": обходит каждый компонент, зарегистрированный в ",n.jsx(s.code,{children:"LibraryItems"}),"."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Анализ элементов"}),": для каждого компонента создает экземпляр ",n.jsx(s.code,{children:"DesignWikiStormItem"}),", который выполняет глубокий анализ исходных файлов компонента для извлечения:",`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Tags"}),": имена компонентов (например, ",n.jsx(s.code,{children:"d1-button"}),")."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Attributes"}),": имена свойств, типы и значения по умолчанию."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Events"}),": имена генерируемых событий и их полезная нагрузка."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Slots"}),": доступные точки настройки и их переменные области видимости."]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Сохранение"}),": финальный консолидированный объект метаданных записывается в ",n.jsx(s.code,{children:"web-types.json"})," в указанной директории."]}),`
`]}),`
`,n.jsx(s.h3,{id:"влияние-на-опыт-разработчика",children:"Влияние на опыт разработчика"}),`
`,n.jsxs(s.p,{children:["Благодаря генерации ",n.jsx(s.code,{children:"web-types.json"}),", дизайн-система гарантирует, что разработчики, использующие инструменты JetBrains, получают тот же уровень поддержки, что и при работе с нативными HTML-элементами. Типы свойств проверяются в реальном времени внутри IDE, а комментарии к документации отображаются прямо в редакторе кода, что значительно снижает необходимость обращения к внешним страницам вики."]})]})}function x(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{x as default};
