import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/styles/ru/Dir`}),`
`,(0,c.jsx)(n.h1,{id:`dir`,children:`Dir`}),`
`,(0,c.jsx)(n.p,{children:`Набор SCSS функций и миксинов для управления направлением текста (LTR/RTL) с поддержкой CSS Custom Properties.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Как это работает:`}),` Система использует CSS custom properties для управления двунаправленным текстом. По умолчанию установлен LTR (слева направо). При применении `,(0,c.jsx)(n.code,{children:`html[dir="rtl"]`}),` или класса `,(0,c.jsx)(n.code,{children:`.dir-rtl`}),` все переменные направления автоматически инвертируются, обеспечивая поддержку RTL без дублирования кода.`]}),`
`,(0,c.jsx)(n.h2,{id:`миксины-инициализации`,children:`Миксины инициализации`}),`
`,(0,c.jsx)(n.h3,{id:`initdir`,children:(0,c.jsx)(n.code,{children:`initDir`})}),`
`,(0,c.jsx)(n.p,{children:`Инициализирует систему направлений с CSS custom properties для поддержки LTR и RTL.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),` нет`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@include initDir;
`})}),`
`,(0,c.jsx)(n.h3,{id:`dirtortl`,children:(0,c.jsx)(n.code,{children:`dirToRtl`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет стили для RTL (справа налево) направления.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),` нет`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`html[dir="rtl"] {
  @include dirToRtl;
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`функции-валидации`,children:`Функции валидации`}),`
`,(0,c.jsx)(n.h3,{id:`isdir`,children:(0,c.jsx)(n.code,{children:`isDir`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает множитель направления (1 для LTR, -1 для RTL).`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),` нет`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$dir: isDir(); // var(--d-dir, 1)
`})}),`
`,(0,c.jsx)(n.h3,{id:`isdirleft`,children:(0,c.jsx)(n.code,{children:`isDirLeft`})}),`
`,(0,c.jsx)(n.p,{children:`Проверяет, является ли текущее направление выровненным по левому краю.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),` нет`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$isLeft: isDirLeft(); // var(--d-dir-left, 1)
`})}),`
`,(0,c.jsx)(n.h3,{id:`isdirright`,children:(0,c.jsx)(n.code,{children:`isDirRight`})}),`
`,(0,c.jsx)(n.p,{children:`Проверяет, является ли текущее направление выровненным по правому краю.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),` нет`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$isRight: isDirRight(); // var(--d-dir-right, 0)
`})}),`
`,(0,c.jsx)(n.h2,{id:`функции-направления`,children:`Функции направления`}),`
`,(0,c.jsx)(n.h3,{id:`dirleft`,children:(0,c.jsx)(n.code,{children:`dirLeft`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает значение выравнивания текста для левой стороны.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),` нет`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`text-align: dirLeft(); // left (LTR) или right (RTL)
`})}),`
`,(0,c.jsx)(n.h3,{id:`dirright`,children:(0,c.jsx)(n.code,{children:`dirRight`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает значение выравнивания текста для правой стороны.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),` нет`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`text-align: dirRight(); // right (LTR) или left (RTL)
`})}),`
`,(0,c.jsx)(n.h3,{id:`dirleftauto`,children:(0,c.jsx)(n.code,{children:`dirLeftAuto`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает значение 'auto' для свойства left.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),` нет`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`left: dirLeftAuto(); // auto (LTR) или unset (RTL)
`})}),`
`,(0,c.jsx)(n.h3,{id:`dirrightauto`,children:(0,c.jsx)(n.code,{children:`dirRightAuto`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает значение 'auto' для свойства right.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),` нет`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`right: dirRightAuto(); // unset (LTR) или auto (RTL)
`})}),`
`,(0,c.jsx)(n.h3,{id:`dirflexleft`,children:(0,c.jsx)(n.code,{children:`dirFlexLeft`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает значение flex-выравнивания для левой стороны.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),` нет`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`justify-content: dirFlexLeft(); // flex-start (LTR) или flex-end (RTL)
`})}),`
`,(0,c.jsx)(n.h3,{id:`dirflexright`,children:(0,c.jsx)(n.code,{children:`dirFlexRight`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает значение flex-выравнивания для правой стороны.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),` нет`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`justify-content: dirFlexRight(); // flex-end (LTR) или flex-start (RTL)
`})}),`
`,(0,c.jsx)(n.h2,{id:`функции-позиционирования`,children:`Функции позиционирования`}),`
`,(0,c.jsx)(n.h3,{id:`dirtoleft`,children:(0,c.jsx)(n.code,{children:`dirToLeft`})}),`
`,(0,c.jsx)(n.p,{children:`Вычисляет значение позиции для свойства left в зависимости от направления.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$left`}),` — переменная левой позиции`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$right`}),` — переменная правой позиции`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`left: dirToLeft(--pos-left, --pos-right);
`})}),`
`,(0,c.jsx)(n.h3,{id:`dirtoright`,children:(0,c.jsx)(n.code,{children:`dirToRight`})}),`
`,(0,c.jsx)(n.p,{children:`Вычисляет значение позиции для свойства right в зависимости от направления.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$left`}),` — переменная левой позиции`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$right`}),` — переменная правой позиции`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`right: dirToRight(--pos-left, --pos-right);
`})}),`
`,(0,c.jsx)(n.h3,{id:`dirorder`,children:(0,c.jsx)(n.code,{children:`dirOrder`})}),`
`,(0,c.jsx)(n.p,{children:`Вычисляет значение order на основе множителя направления.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение order`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`order: dirOrder(2); // 3 (LTR) или 999997 (RTL)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};