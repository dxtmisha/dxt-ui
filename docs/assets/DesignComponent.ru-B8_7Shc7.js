import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/DesignComponent - Генератор компонентов дизайна"}),`
`,n.jsx(s.h1,{id:"класс-designcomponent",children:"Класс DesignComponent"}),`
`,n.jsxs(s.p,{children:["Класс ",n.jsx(s.code,{children:"DesignComponent"})," — это специализированная реализация ",n.jsx(s.code,{children:"DesignCommand"}),", предназначенная для автоматизированного создания и обслуживания компонентов дизайн-системы. Он координирует генерацию множества типов файлов — от стилей и логики компонентов до документации и метаданных интеграции."]}),`
`,n.jsx(s.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Полный цикл развертывания"})," — автоматически генерирует более 10 основных файлов для нового компонента (Vue, SCSS, TS, MDX)."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Интеллектуальное разрешение свойств"})," — использует ",n.jsx(s.code,{children:"DesignTypescript"})," для внедрения свойств компонентов непосредственно в сгенерированные файлы."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Автоматизация Storybook"})," — генерирует файлы ",n.jsx(s.code,{children:".stories.ts"})," и ",n.jsx(s.code,{children:".mdx"})," с автоматическим разрешением рендеринга и импорта."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"AI-усиленная Вики"})," — создает специальные сопутствующие компоненты для поиска и отображения документации с помощью ИИ."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Интеграция с воркспейсом"})," — бесшовно регистрирует новые компоненты в корневом ",n.jsx(s.code,{children:"package.json"})," и в глобальном списке экспорта библиотеки."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Маппинг стилевых токенов"})," — автоматически преобразует структуры проекта в SCSS-токены стилей."]}),`
`]}),`
`,n.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(s.p,{children:"Для инициализации экземпляра генератора используйте конструктор. Он настраивает целевую директорию на основе конфигурации проекта."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"command: string"})," — идентификатор компонента (например, ",n.jsx(s.code,{children:"'button'"}),", ",n.jsx(s.code,{children:"'input'"}),")."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"options: Record<string, string>"})," — необязательные конфигурационные флаги."]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { DesignComponent } from '@dxtmisha/scripts'

const generator = new DesignComponent('button')
generator.make()
`})}),`
`,n.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(s.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"make(): void"})," — запускает комплексный процесс генерации для всех файлов, связанных с компонентом."]}),`
`]}),`
`,n.jsx(s.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(s.h3,{id:"структура-генерируемых-файлов",children:"Структура генерируемых файлов"}),`
`,n.jsxs(s.p,{children:["При выполнении ",n.jsx(s.code,{children:"make()"})," внутри директории компонента создается или обновляется следующая иерархия файлов:"]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"properties.json"})," — хранит основные данные маппинга для компонента."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"props.ts"})," — TypeScript-определение пропсов компонента, разрешенное из шаблонов конструктора."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"styleToken.scss"})," — токены стилей SCSS на основе структуры дизайна компонента."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"[Name].vue"})," — основной файл компонента Vue с предварительно настроенными классами и стилями."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"[Name]AiWiki.vue"})," — сопутствующий компонент для AI-усиленной вики-документации."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"index.ts"})," — точка входа компонента для публичного экспорта."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"wiki.ts"})," и ",n.jsx(s.code,{children:"wikiData.ts"})," — метаданные и структурированная информация о свойствах для сайта документации."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"[Name].stories.ts"})," — автоматизированные истории Storybook с динамическим разрешением компонентов."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"[Name].mdx"})," — MDX-документация для Storybook с предварительно заполненными слотами и данными пропсов."]}),`
`]}),`
`,n.jsx(s.h3,{id:"процесс-интеграции",children:"Процесс интеграции"}),`
`,n.jsx(s.p,{children:"Класс обеспечивает полную интеграцию нового компонента в среду дизайн-системы:"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Обновление пакета"}),": добавляет запись в корневой ",n.jsx(s.code,{children:"package.json"})," в секцию ",n.jsx(s.code,{children:"exports"}),"."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Экспорт библиотеки"}),": создает прокси-файл в директории библиотеки для обеспечения возможности глобального импорта компонентов."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Сопоставление описаний Вики"}),": сканирует ",n.jsx(s.code,{children:"wikiDescriptions"})," для автоматического заполнения историй Storybook соответствующими примерами."]}),`
`]})]})}function j(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{j as default};
