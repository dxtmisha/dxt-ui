import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/styles/ru/Font`}),`
`,(0,c.jsx)(n.h1,{id:`font`,children:`Font`}),`
`,(0,c.jsx)(n.p,{children:`Набор SCSS миксинов для управления типографикой и стилями текста с поддержкой CSS Custom Properties.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Как это работает:`}),` Система предоставляет миксины для стилизации текста с автоматической поддержкой RTL через интеграцию с dir. Миксины выравнивания текста автоматически инвертируются для RTL-раскладок. CSS custom properties используются для font-size, line-height и paragraph spacing, позволяя динамическое изменение темы и адаптивную типографику.`]}),`
`,(0,c.jsx)(n.h2,{id:`миксины-инициализации`,children:`Миксины инициализации`}),`
`,(0,c.jsx)(n.h3,{id:`initparagraphspacing`,children:(0,c.jsx)(n.code,{children:`initParagraphSpacing`})}),`
`,(0,c.jsx)(n.p,{children:`Инициализирует систему отступов между последовательными параграфами.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),` нет`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@include initParagraphSpacing;
// p + p { padding-top: var(--sys-paragraph-spacing, 0); }
`})}),`
`,(0,c.jsx)(n.h2,{id:`миксины-типографики`,children:`Миксины типографики`}),`
`,(0,c.jsx)(n.h3,{id:`fontsize`,children:(0,c.jsx)(n.code,{children:`fontSize`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает размер шрифта с CSS custom property.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение размера шрифта`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include fontSize(16px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`lineheight`,children:(0,c.jsx)(n.code,{children:`lineHeight`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает межстрочный интервал с CSS custom property.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение межстрочного интервала`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include lineHeight(1.5);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`paragraphspacing`,children:(0,c.jsx)(n.code,{children:`paragraphSpacing`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает отступ между последовательными параграфами.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение отступа`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.content {
  @include paragraphSpacing(1em);
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`миксины-выравнивания-текста`,children:`Миксины выравнивания текста`}),`
`,(0,c.jsx)(n.h3,{id:`textalign`,children:(0,c.jsx)(n.code,{children:`textAlign`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает выравнивание текста с автоматической поддержкой RTL.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение выравнивания ('left', 'right', 'center', 'justify')`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include textAlign('left'); // автоматически инвертируется для RTL
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`textcase`,children:(0,c.jsx)(n.code,{children:`textCase`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает преобразование текста.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение text-transform ('uppercase', 'lowercase', 'capitalize', 'none')`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include textCase('uppercase');
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`миксины-переполнения-текста`,children:`Миксины переполнения текста`}),`
`,(0,c.jsx)(n.h3,{id:`textoverflow`,children:(0,c.jsx)(n.code,{children:`textOverflow`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает поведение при переполнении текста.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение переполнения ('truncate', 'ellipsis', 'clip')`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include textOverflow('truncate');
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`truncate`,children:(0,c.jsx)(n.code,{children:`truncate`})}),`
`,(0,c.jsx)(n.p,{children:`Обрезает текст с многоточием на одной строке.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),` нет`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include truncate;
  // overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: nowrap;
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`clamp`,children:(0,c.jsx)(n.code,{children:`clamp`})}),`
`,(0,c.jsx)(n.p,{children:`Ограничивает текст указанным количеством строк с многоточием.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$clamp`}),` — количество строк`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include clamp(3);
  // -webkit-line-clamp: 3;
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`утилитарные-миксины`,children:`Утилитарные миксины`}),`
`,(0,c.jsx)(n.h3,{id:`textselectnone`,children:(0,c.jsx)(n.code,{children:`textSelectNone`})}),`
`,(0,c.jsx)(n.p,{children:`Отключает выделение текста.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Параметры:`}),` нет`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include textSelectNone;
  // user-select: none;
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};