import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/styles/ru/Media`}),`
`,(0,c.jsx)(n.h1,{id:`media`,children:`Media`}),`
`,(0,c.jsx)(n.p,{children:`Набор SCSS функций и миксинов для управления медиа-запросами и контейнерными запросами с поддержкой CSS Custom Properties.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Как это работает:`}),` Система использует значения контрольных точек, специфичных для дизайна, хранящиеся в карте `,(0,c.jsx)(n.code,{children:`variables.$designsMedia`}),`. Функция `,(0,c.jsx)(n.code,{children:`media()`}),` извлекает значения контрольных точек на основе текущей дизайн-системы. Миксины предоставляют удобные обертки для медиа-запросов и контейнерных запросов, автоматически обрабатывая расчеты min/max ширины и диапазонные запросы.`]}),`
`,(0,c.jsx)(n.h2,{id:`функции`,children:`Функции`}),`
`,(0,c.jsx)(n.h3,{id:`media-1`,children:(0,c.jsx)(n.code,{children:`media`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает значение контрольной точки для медиа-запросов.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$width`}),` — название размера (например, 'sm', 'md', 'lg')`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$breakpoint: media('md'); // возвращает значение контрольной точки
`})}),`
`,(0,c.jsx)(n.h2,{id:`миксины-медиа-запросов`,children:`Миксины медиа-запросов`}),`
`,(0,c.jsx)(n.h3,{id:`mediaminwidth`,children:(0,c.jsx)(n.code,{children:`mediaMinWidth`})}),`
`,(0,c.jsx)(n.p,{children:`Создает медиа-запрос с минимальной шириной контрольной точки.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$width`}),` — название размера`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include mediaMinWidth('md') {
    display: block;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`mediamaxwidth`,children:(0,c.jsx)(n.code,{children:`mediaMaxWidth`})}),`
`,(0,c.jsx)(n.p,{children:`Создает медиа-запрос с максимальной шириной контрольной точки.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$width`}),` — название размера`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include mediaMaxWidth('md') {
    display: none;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`mediaminmaxwidth`,children:(0,c.jsx)(n.code,{children:`mediaMinMaxWidth`})}),`
`,(0,c.jsx)(n.p,{children:`Создает медиа-запрос с диапазоном минимальной и максимальной ширины.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$min`}),` — название минимального размера`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$max`}),` — название максимального размера`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include mediaMinMaxWidth('sm', 'lg') {
    padding: 16px;
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`миксины-контейнерных-запросов`,children:`Миксины контейнерных запросов`}),`
`,(0,c.jsx)(n.h3,{id:`containerminwidth`,children:(0,c.jsx)(n.code,{children:`containerMinWidth`})}),`
`,(0,c.jsx)(n.p,{children:`Создает контейнерный запрос с минимальной шириной контрольной точки.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$width`}),` — название размера`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include containerMinWidth('md') {
    display: grid;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`containermaxwidth`,children:(0,c.jsx)(n.code,{children:`containerMaxWidth`})}),`
`,(0,c.jsx)(n.p,{children:`Создает контейнерный запрос с максимальной шириной контрольной точки.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$width`}),` — название размера`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include containerMaxWidth('md') {
    display: flex;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`containerminmaxwidth`,children:(0,c.jsx)(n.code,{children:`containerMinMaxWidth`})}),`
`,(0,c.jsx)(n.p,{children:`Создает контейнерный запрос с диапазоном минимальной и максимальной ширины.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$min`}),` — название минимального размера`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$max`}),` — название максимального размера`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include containerMinMaxWidth('sm', 'lg') {
    gap: 16px;
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};