import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/styles/color/# Использование свойств`}),`
`,(0,c.jsx)(n.h1,{id:`использование-базовых-свойств`,children:`Использование базовых свойств`}),`
`,(0,c.jsxs)(n.p,{children:[`Миксины базовых свойств — это ваш основной инструмент для применения цветов к UI-компонентам. Вместо написания обычного CSS-свойства, например `,(0,c.jsx)(n.code,{children:`color: black;`}),`, вы вызываете:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.my-text {
  @include styles.color(#000000);
}
`})}),`
`,(0,c.jsx)(n.p,{children:`Этот подход гарантирует, что цвет будет корректно разложен на RGB-каналы, а для компонента будут созданы и применены необходимые системные переменные прозрачности.`}),`
`,(0,c.jsx)(n.h2,{id:`доступные-базовые-миксины`,children:`Доступные базовые миксины`}),`
`,(0,c.jsx)(n.p,{children:`Ключевые миксины, работающие по идентичному принципу. Все эти миксины принимают общие параметры (значение цвета и прозрачность), которые подробно описаны ниже:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`color()`}),` — для цвета текста (`,(0,c.jsx)(n.code,{children:`color`}),`). Системная переменная: `,(0,c.jsx)(n.code,{children:`--sys-color`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`backgroundColor()`}),` — для цвета фона (`,(0,c.jsx)(n.code,{children:`background-color`}),`). Системная переменная: `,(0,c.jsx)(n.code,{children:`--sys-background`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`borderColor()`}),` — для обводки границ (`,(0,c.jsx)(n.code,{children:`border-color`}),`). Системная переменная: `,(0,c.jsx)(n.code,{children:`--sys-border`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`outlineColor()`}),` — для цвета внешнего контура (`,(0,c.jsx)(n.code,{children:`outline-color`}),`). Системная переменная: `,(0,c.jsx)(n.code,{children:`--sys-outline`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fill()`}),` — для заливки векторных элементов (`,(0,c.jsx)(n.code,{children:`fill`}),`). Системная переменная: `,(0,c.jsx)(n.code,{children:`--sys-fill`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`stroke()`}),` — для обводки векторных элементов (`,(0,c.jsx)(n.code,{children:`stroke`}),`). Системная переменная: `,(0,c.jsx)(n.code,{children:`--sys-stroke`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`gradient()`}),` — для сплошного цвета, применяемого к свойствам, ожидающим изображение (`,(0,c.jsx)(n.code,{children:`background-image`}),`). Системная переменная: `,(0,c.jsx)(n.code,{children:`--sys-gradient`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`параметр-color`,children:[`Параметр `,(0,c.jsx)(n.code,{children:`$color`})]}),`
`,(0,c.jsx)(n.p,{children:`Все эти миксины принимают цвет в качестве первого параметра, который может быть одним из трех типов:`}),`
`,(0,c.jsx)(n.h4,{id:`1-явный-цвет-hex-rgb-или-css-переменная`,children:`1. Явный цвет (HEX, RGB или CSS переменная)`}),`
`,(0,c.jsxs)(n.p,{children:[`Чаще всего вы будете передавать цвет из нашей дизайн-системы, используя функцию `,(0,c.jsx)(n.code,{children:`styles.getColor('название-цвета')`}),`, базовые HEX-значения или пользовательскую CSS переменную `,(0,c.jsx)(n.code,{children:`var(--my-color)`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card {
  @include styles.backgroundColor(styles.getColor('surface'));
  @include styles.color(#333333);
}
`})}),`
`,(0,c.jsxs)(n.h4,{id:`2-специальное-значение-as-color`,children:[`2. Специальное значение `,(0,c.jsx)(n.code,{children:`'as-color'`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Что делать, если вам нужно, чтобы цвет границы, контура или фона точно совпадал с текущим системным цветом текста (`,(0,c.jsx)(n.code,{children:`--sys-color`}),`)? Вы можете передать строку `,(0,c.jsx)(n.code,{children:`'as-color'`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button-outline {
  // Текст становится синим
  @include styles.color(styles.getColor('primary'));
  
  // Рамка автоматически подхватит синий цвет из --sys-color
  @include styles.borderColor('as-color');
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Это мощный инструмент для создания компонентов, меняющих свой цвет целиком (текст + рамка + иконки) с помощью изменения всего одной переменной `,(0,c.jsx)(n.code,{children:`--sys-color`}),`.`]}),`
`,(0,c.jsxs)(n.h4,{id:`3-специальное-значение-init`,children:[`3. Специальное значение `,(0,c.jsx)(n.code,{children:`'init'`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Передача `,(0,c.jsx)(n.code,{children:`'init'`}),` применяется при необходимости `,(0,c.jsx)(n.strong,{children:`форсированного обновления`}),` свойства без изменения базового цвета. Например, если прозрачность (`,(0,c.jsx)(n.code,{children:`--sys-color-opacity`}),`) была изменена напрямую через CSS, и вы хотите, чтобы браузер повторно применил свойство `,(0,c.jsx)(n.code,{children:`color`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text-reset {
  @include styles.color('init');
}
`})}),`
`,(0,c.jsxs)(n.h3,{id:`управление-прозрачностью-opacity`,children:[`Управление прозрачностью (`,(0,c.jsx)(n.code,{children:`$opacity`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Второй параметр миксинов — `,(0,c.jsx)(n.code,{children:`$opacity`}),`. Он позволяет управлять начальной прозрачностью элемента.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text-faded {
  // Текст с прозрачностью 50%
  @include styles.color(#000000, 0.5);
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Если передать `,(0,c.jsx)(n.code,{children:`null`}),` (или ничего не передавать), прозрачность будет сброшена до стандартной из системной переменной.
Вы также можете передать CSS переменную, если прозрачность должна динамически меняться:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.dynamic-fade {
  @include styles.backgroundColor(#ff0000, var(--custom-opacity));
}
`})}),`
`,(0,c.jsxs)(n.h2,{id:`работа-с-локальными-переменными-colorsys`,children:[`Работа с локальными переменными: `,(0,c.jsx)(n.code,{children:`colorSys`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Иногда вам нужно сохранить цвет в переменной, но не применять его сразу к свойству (например, для передачи цвета дочернему компоненту). Для этого используйте миксин `,(0,c.jsx)(n.code,{children:`colorSys`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.parent {
  // Устанавливает --sys-color и --sys-color-opacity: 0.8
  @include styles.colorSys('color', #ff0000, 0.8);
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Первый параметр — это «имя свойства», которое станет суффиксом в переменной `,(0,c.jsx)(n.code,{children:`--sys-[имя]`}),`. Затем этот цвет может быть применен в дочерних узлах через `,(0,c.jsx)(n.code,{children:`color('init')`}),` или считан в CSS `,(0,c.jsx)(n.code,{children:`rgba(var(--sys-color), 1)`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};