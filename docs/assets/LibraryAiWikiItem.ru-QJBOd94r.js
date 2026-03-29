import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/LibraryAiWikiItem - Обработчик компонента AI Wiki`}),`
`,(0,c.jsx)(n.h1,{id:`класс-libraryaiwikiitem`,children:`Класс LibraryAiWikiItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`LibraryAiWikiItem`}),` является оберткой над данными компонента, специально разработанной для обработки операций, связанных с AI Wiki, для отдельного компонента. Он предоставляет методы для проверки существования файлов AI Wiki, генерации кодов компонентов и создания строк импорта.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Проверка статуса`}),`: Определяет, есть ли у компонента соответствующий файл реализации AI Wiki.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Генерация импорта`}),`: Создает корректные строки импорта TypeScript для компонента AI Wiki.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление путями`}),`: Обрабатывает разрешение путей к файлу AI Wiki компонента.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Инициализируйте `,(0,c.jsx)(n.code,{children:`LibraryAiWikiItem`}),`, предоставив объект `,(0,c.jsx)(n.code,{children:`LibraryData`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: LibraryData`}),` — объект, содержащий метаданные компонента (имя, дизайн, директория и т. д.).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryAiWikiItem } from '@dxtmisha/scripts'

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
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`состояние`,children:`Состояние`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isAiWiki(): boolean`}),` — проверяет, существует ли соответствующий файл `,(0,c.jsx)(n.code,{children:`*AiWiki.vue`}),` в директории компонента.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`получение-данных`,children:`Получение данных`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCode(): string`}),` — возвращает полный идентификатор кода компонента (например, `,(0,c.jsx)(n.code,{children:`DxtButton`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getComponentFileNameAiWiki(): string`}),` — возвращает ожидаемое имя файла для реализации AI Wiki (например, `,(0,c.jsx)(n.code,{children:`DxtButtonAiWiki.vue`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getImport(): string`}),` — генерирует строку импорта TypeScript для компонента AI Wiki.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};