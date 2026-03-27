import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/styles/ru/Selector`}),`
`,(0,c.jsx)(n.h1,{id:`selector`,children:`Selector`}),`
`,(0,c.jsx)(n.p,{children:`Набор SCSS миксинов для управления селекторами состояний элементов с поддержкой CSS Custom Properties.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Как это работает:`}),` Система обеспечивает интеллектуальное управление состояниями интерактивных элементов. Миксин `,(0,c.jsx)(n.code,{children:`enabled`}),` автоматически добавляет селекторы `,(0,c.jsx)(n.code,{children:`:not()`}),` для исключения состояний disabled, readonly и loading. Миксины состояний, такие как `,(0,c.jsx)(n.code,{children:`hover`}),`, `,(0,c.jsx)(n.code,{children:`active`}),` и `,(0,c.jsx)(n.code,{children:`focus`}),`, оборачивают `,(0,c.jsx)(n.code,{children:`enabled`}),`, гарантируя работу взаимодействий только на активных элементах. Особая обработка для `,(0,c.jsx)(n.code,{children:`focus`}),` включает `,(0,c.jsx)(n.code,{children:`:focus`}),`, `,(0,c.jsx)(n.code,{children:`:focus-within`}),` и BEM-модификатор для программных состояний фокуса.`]}),`
`,(0,c.jsx)(n.h2,{id:`базовые-миксины`,children:`Базовые миксины`}),`
`,(0,c.jsx)(n.h3,{id:`selector-1`,children:(0,c.jsx)(n.code,{children:`selector`})}),`
`,(0,c.jsx)(n.p,{children:`Создает псевдокласс селектор с особой обработкой состояния focus.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$name`}),` — имя селектора (например, 'hover', 'active', 'focus')`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$parent: &`}),` — родительский селектор`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  @include selector('hover') {
    background: blue;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`enabled`,children:(0,c.jsx)(n.code,{children:`enabled`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет стили только к включенным (не disabled, не readonly, не loading) элементам.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$parent: &`}),` — родительский селектор`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  @include enabled {
    cursor: pointer;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`enabledselector`,children:(0,c.jsx)(n.code,{children:`enabledSelector`})}),`
`,(0,c.jsx)(n.p,{children:`Комбинирует состояние enabled с псевдоклассом селектора.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$name`}),` — имя селектора`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$parent: &`}),` — родительский селектор`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  @include enabledSelector('hover') {
    background: blue;
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`миксины-состояний`,children:`Миксины состояний`}),`
`,(0,c.jsx)(n.h3,{id:`hover`,children:(0,c.jsx)(n.code,{children:`hover`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет стили при наведении только для активных элементов.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$parent: &`}),` — родительский селектор`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  @include hover {
    background: blue;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`active`,children:(0,c.jsx)(n.code,{children:`active`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет стили при активном состоянии только для активных элементов.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$parent: &`}),` — родительский селектор`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  @include active {
    transform: scale(0.95);
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`focus`,children:(0,c.jsx)(n.code,{children:`focus`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет стили при фокусе только для активных элементов. Включает :focus, :focus-within и BEM-модификатор.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$parent: &`}),` — родительский селектор`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  @include focus {
    outline: 2px solid blue;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`disabled`,children:(0,c.jsx)(n.code,{children:`disabled`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет стили к отключенным элементам.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$parent: &`}),` — родительский селектор`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  @include disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`readonly`,children:(0,c.jsx)(n.code,{children:`readonly`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет стили к элементам только для чтения.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$parent: &`}),` — родительский селектор`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.input {
  @include readonly {
    background: #f5f5f5;
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};