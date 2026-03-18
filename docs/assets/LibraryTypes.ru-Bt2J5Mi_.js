import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/scripts/Classes/LibraryTypes - Генератор определений типов Vue"}),`
`,n.jsx(e.h1,{id:"класс-librarytypes",children:"Класс LibraryTypes"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"LibraryTypes"})," отвечает за генерацию файлов глобальных определений типов для компонентов Vue. Это обеспечивает полную поддержку IDE и проверку типов для компонентов дизайн-системы, используемых глобально в приложении Vue."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поддержка глобальных компонентов"})," — генерирует блоки ",n.jsx(e.code,{children:"declare module"})," для ",n.jsx(e.code,{children:"@vue/runtime-core"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическое сопоставление типов"})," — автоматически связывает программные имена компонентов с типами соответствующих ",n.jsx(e.code,{children:".vue"})," файлов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Улучшение DX"})," — включает IntelliSense и валидацию пропсов для компонентов дизайн-системы в шаблонах Vue."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Динамическое разрешение путей"})," — корректно вычисляет пути к исходным кодам компонентов на основе конфигурации дизайн-системы."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Для инициализации объекта вызовите конструктор ",n.jsx(e.code,{children:"LibraryTypes(items)"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"items: LibraryItems"})," — объект для работы со списком компонентов и управления записью файлов."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { LibraryTypes, LibraryItems } from '@dxtmisha/scripts'

// 1. Инициализация LibraryItems
const items = new LibraryItems()

// 2. Инициализация LibraryTypes
const typeGenerator = new LibraryTypes(items)
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"make(): void"})," — Запускает процесс генерации файла глобальных определений типов (",n.jsx(e.code,{children:"types.d.ts"}),")."]}),`
`]}),`
`,n.jsx(e.h2,{id:"структура-сгенерированного-файла",children:"Структура сгенерированного файла"}),`
`,n.jsxs(e.p,{children:["Метод ",n.jsx(e.code,{children:"make"})," формирует файл ",n.jsx(e.code,{children:"types"})," (обычно ",n.jsx(e.code,{children:"types.d.ts"}),"), который расширяет глобальный реестр компонентов Vue."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Профиль сгенерированного кода:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Модуль:"})," ",n.jsx(e.code,{children:"@vue/runtime-core"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интерфейс:"})," ",n.jsx(e.code,{children:"GlobalComponents"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Результат:"})," Сопоставление всех компонентов библиотеки."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Пример структуры:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import _DxtButton from '../components/dxt/button/DxtButton.vue'
import _DxtInput from '../components/dxt/input/DxtInput.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DxtButton: typeof _DxtButton
    DxtInput: typeof _DxtInput
  }
}
`})})]})}function j(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
