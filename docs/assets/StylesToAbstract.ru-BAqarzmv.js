import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/StylesToAbstract - Базовый класс для преобразования стилей"}),`
`,n.jsx(e.h1,{id:"класс-stylestoabstract",children:"Класс StylesToAbstract"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"StylesToAbstract"})," является основой для всех механизмов преобразования стилей. Он предоставляет стандартизированный интерфейс и набор вспомогательных методов для перевода свойств дизайна в CSS-совместимые структуры."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Стандартизированный конвейер обработки"})," — Гарантирует, что все подклассы следуют одному и тому же рабочему процессу: ",n.jsx(e.code,{children:"make"})," → ",n.jsx(e.code,{children:"treatment"})," → ",n.jsx(e.code,{children:"addSpace"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление контекстом свойств"})," — Автоматически управляет текущим свойством дизайна, уровнями отступов и положением в дереве."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Гибкое делегирование контента"})," — Поддерживает рекурсивную обработку свойств через вызываемых функций."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Разрешение путей и имен"})," — Встроенные помощники для извлечения и нормализации имен свойств и значений CSS."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Являясь абстрактным классом, ",n.jsx(e.code,{children:"StylesToAbstract"})," не может быть создан напрямую. Он служит базой для конкретных преобразователей стилей."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"property: PropertyItemsItem"})," — текущая ветка дерева свойств, которая обрабатывается."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"space: string"})," — строка отступа (например, ",n.jsx(e.code,{children:'"  "'})," или ",n.jsx(e.code,{children:'"\\t"'}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"content?: () => string[]"})," — вызываемая функция, используемая для обработки подсвойств (необязательно)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"first?: boolean"})," — указывает, является ли этот элемент первым в текущем списке или на уровне дерева (необязательно, по умолчанию: ",n.jsx(e.code,{children:"true"}),")."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { StylesToAbstract } from '@dxtmisha/scripts'

// Пример: Создание конкретной реализации
class StylesToCustom extends StylesToAbstract {
  protected treatment(): string[] {
    // Определите здесь логику преобразования
    return [
      \`\${this.getName()} {\`,
      \`  content: \${this.getValue()};\`,
      '}'
    ]
  }
}
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"make(): string[]"})," — Основная точка входа. Организует преобразование и добавляет необходимый отступ к каждой строке."]}),`
`]}),`
`,n.jsx(e.h3,{id:"абстрактные",children:"Абстрактные"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"treatment(): string[]"})," — Определяет конкретную логику преобразования данных свойства в структуру стиля. Подклассы должны реализовать этот метод."]}),`
`]})]})}function j(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
