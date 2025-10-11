import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Dqnce8mp.js";import{M as c}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function d(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/styles/ru/Media"}),`
`,n.jsx(e.h1,{id:"media",children:"Media"}),`
`,n.jsx(e.p,{children:"Набор SCSS функций и миксинов для управления медиа-запросами и контейнерными запросами с поддержкой CSS Custom Properties."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Как это работает:"})," Система использует значения контрольных точек, специфичных для дизайна, хранящиеся в карте ",n.jsx(e.code,{children:"variables.$designsMedia"}),". Функция ",n.jsx(e.code,{children:"media()"})," извлекает значения контрольных точек на основе текущей дизайн-системы. Миксины предоставляют удобные обертки для медиа-запросов и контейнерных запросов, автоматически обрабатывая расчеты min/max ширины и диапазонные запросы."]}),`
`,n.jsx(e.h2,{id:"функции",children:"Функции"}),`
`,n.jsx(e.h3,{id:"media-1",children:n.jsx(e.code,{children:"media"})}),`
`,n.jsx(e.p,{children:"Возвращает значение контрольной точки для медиа-запросов."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$width"})," — название размера (например, 'sm', 'md', 'lg')"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"String"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`$breakpoint: media('md'); // возвращает значение контрольной точки
`})}),`
`,n.jsx(e.h2,{id:"миксины-медиа-запросов",children:"Миксины медиа-запросов"}),`
`,n.jsx(e.h3,{id:"mediaminwidth",children:n.jsx(e.code,{children:"mediaMinWidth"})}),`
`,n.jsx(e.p,{children:"Создает медиа-запрос с минимальной шириной контрольной точки."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$width"})," — название размера"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include mediaMinWidth('md') {
    display: block;
  }
}
`})}),`
`,n.jsx(e.h3,{id:"mediamaxwidth",children:n.jsx(e.code,{children:"mediaMaxWidth"})}),`
`,n.jsx(e.p,{children:"Создает медиа-запрос с максимальной шириной контрольной точки."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$width"})," — название размера"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include mediaMaxWidth('md') {
    display: none;
  }
}
`})}),`
`,n.jsx(e.h3,{id:"mediaminmaxwidth",children:n.jsx(e.code,{children:"mediaMinMaxWidth"})}),`
`,n.jsx(e.p,{children:"Создает медиа-запрос с диапазоном минимальной и максимальной ширины."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$min"})," — название минимального размера"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$max"})," — название максимального размера"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include mediaMinMaxWidth('sm', 'lg') {
    padding: 16px;
  }
}
`})}),`
`,n.jsx(e.h2,{id:"миксины-контейнерных-запросов",children:"Миксины контейнерных запросов"}),`
`,n.jsx(e.h3,{id:"containerminwidth",children:n.jsx(e.code,{children:"containerMinWidth"})}),`
`,n.jsx(e.p,{children:"Создает контейнерный запрос с минимальной шириной контрольной точки."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$width"})," — название размера"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include containerMinWidth('md') {
    display: grid;
  }
}
`})}),`
`,n.jsx(e.h3,{id:"containermaxwidth",children:n.jsx(e.code,{children:"containerMaxWidth"})}),`
`,n.jsx(e.p,{children:"Создает контейнерный запрос с максимальной шириной контрольной точки."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$width"})," — название размера"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include containerMaxWidth('md') {
    display: flex;
  }
}
`})}),`
`,n.jsx(e.h3,{id:"containerminmaxwidth",children:n.jsx(e.code,{children:"containerMinMaxWidth"})}),`
`,n.jsx(e.p,{children:"Создает контейнерный запрос с диапазоном минимальной и максимальной ширины."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$min"})," — название минимального размера"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$max"})," — название максимального размера"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include containerMinMaxWidth('sm', 'lg') {
    gap: 16px;
  }
}
`})})]})}function t(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(d,{...i})}):d(i)}export{t as default};
