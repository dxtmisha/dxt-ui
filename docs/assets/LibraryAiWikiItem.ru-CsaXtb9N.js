import{j as i}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{title:"@dxtmisha/ru/scripts/Classes/LibraryAiWikiItem - Обработчик компонента AI Wiki"}),`
`,i.jsx(n.h1,{id:"класс-libraryaiwikiitem",children:"Класс LibraryAiWikiItem"}),`
`,i.jsxs(n.p,{children:["Класс ",i.jsx(n.code,{children:"LibraryAiWikiItem"})," является оберткой над данными компонента, специально разработанной для обработки операций, связанных с AI Wiki, для отдельного компонента. Он предоставляет методы для проверки существования файлов AI Wiki, генерации кодов компонентов и создания строк импорта."]}),`
`,i.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"Проверка статуса"}),": Определяет, есть ли у компонента соответствующий файл реализации AI Wiki."]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"Генерация импорта"}),": Создает корректные строки импорта TypeScript для компонента AI Wiki."]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"Управление путями"}),": Обрабатывает разрешение путей к файлу AI Wiki компонента."]}),`
`]}),`
`,i.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,i.jsxs(n.p,{children:["Инициализируйте ",i.jsx(n.code,{children:"LibraryAiWikiItem"}),", предоставив объект ",i.jsx(n.code,{children:"LibraryData"}),"."]}),`
`,i.jsx(n.p,{children:i.jsx(n.strong,{children:"Параметры:"})}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"item: LibraryData"})," — объект, содержащий метаданные компонента (имя, дизайн, директория и т. д.)."]}),`
`]}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-typescript",children:`import { LibraryAiWikiItem } from '@dxtmisha/scripts'

const componentData = {
  name: 'button',
  design: 'dxt',
  alias: 'dxt.button',
  codeFull: 'DxtButton',
  dir: 'DxtButton'
}

const aiItem = new LibraryAiWikiItem(componentData)

// Проверка статуса
if (aiItem.isAiWiki()) {
  const importStr = aiItem.getImport()
  // "import DxtButton from '../../components/DxtButton/DxtButtonAiWiki.vue'"
}
`})}),`
`,i.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,i.jsx(n.h3,{id:"состояние",children:"Состояние"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"isAiWiki(): boolean"})," — проверяет, существует ли соответствующий файл ",i.jsx(n.code,{children:"*AiWiki.vue"})," в директории компонента."]}),`
`]}),`
`,i.jsx(n.h3,{id:"получение-данных",children:"Получение данных"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"getCode(): string"})," — возвращает полный идентификатор кода компонента (например, ",i.jsx(n.code,{children:"DxtButton"}),")."]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"getComponentFileNameAiWiki(): string"})," — возвращает ожидаемое имя файла для реализации AI Wiki (например, ",i.jsx(n.code,{children:"DxtButtonAiWiki.vue"}),")."]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"getImport(): string"})," — генерирует строку импорта TypeScript для компонента AI Wiki."]}),`
`]})]})}function j(e={}){const{wrapper:n}={...r(),...e.components};return n?i.jsx(n,{...e,children:i.jsx(t,{...e})}):t(e)}export{j as default};
