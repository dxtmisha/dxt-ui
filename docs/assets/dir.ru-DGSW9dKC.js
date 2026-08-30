import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/styles/dir - Направление текста LTR и RTL`}),`
`,(0,c.jsx)(t.h1,{id:`система-направления-текста`,children:`Система направления текста`}),`
`,(0,c.jsxs)(t.p,{children:[`Библиотека `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` предоставляет мощный механизм для поддержки двунаправленного текста и раскладок (LTR и RTL) с использованием динамических CSS Custom Properties (CSS-переменных). Вместо дублирования CSS-кода или жесткого прописывания статических свойств, эта система автоматически управляет выравниванием, отступами, позиционированием и трансформациями прямо в браузере.`]}),`
`,(0,c.jsx)(t.p,{children:`Классический подход к зеркалированию раскладок требует написания отдельных переопределяющих стилей вручную (например, переопределение margin-left и margin-right). Данная утилита решает эту проблему путем привязки физических направлений к CSS-переменным, которые автоматически обновляются при изменении направления.`}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsx)(t.p,{children:`Система направления текста построена на динамическом обмене значений переменных:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Глобальная инициализация`}),`: По умолчанию (в режиме LTR) библиотека задает переменные на уровне `,(0,c.jsx)(t.code,{children:`html`}),` (например, `,(0,c.jsx)(t.code,{children:`--d-dir: 1`}),` для смещений, выравнивания вроде `,(0,c.jsx)(t.code,{children:`--d-dir-start: flex-start`}),` и флаги стороны `,(0,c.jsx)(t.code,{children:`--d-dir-left: 1`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое переключение`}),`: Для каждого дочернего элемента физические отступы привязываются к динамическим переменным (например, `,(0,c.jsx)(t.code,{children:`--d-dir-margin-left`}),` считывает `,(0,c.jsx)(t.code,{children:`var(--sys-margin-left)`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Обмен при RTL`}),`: При активации RTL (через `,(0,c.jsx)(t.code,{children:`html[dir="rtl"]`}),` или `,(0,c.jsx)(t.code,{children:`.dir-rtl`}),`) система меняет значения флагов (`,(0,c.jsx)(t.code,{children:`--d-dir`}),` становится `,(0,c.jsx)(t.code,{children:`-1`}),`, `,(0,c.jsx)(t.code,{children:`--d-dir-start`}),` переключается на `,(0,c.jsx)(t.code,{children:`flex-end`}),`) и меняет местами переменные свойств на дочерних элементах (например, `,(0,c.jsx)(t.code,{children:`--d-dir-margin-left`}),` считывает `,(0,c.jsx)(t.code,{children:`var(--sys-margin-right)`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`инициализация-системы-initdir`,children:[`Инициализация системы (`,(0,c.jsx)(t.code,{children:`initDir`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Для запуска системы направлений необходимо вызвать миксин `,(0,c.jsx)(t.code,{children:`initDir`}),` на глобальном уровне (обычно в файле инициализации глобальных стилей):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

@include styles.initDir;
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Этот миксин задает переменные LTR для элемента `,(0,c.jsx)(t.code,{children:`html`}),` по умолчанию, настраивает активные свойства направлений для всех дочерних элементов (`,(0,c.jsx)(t.code,{children:`*`}),`, `,(0,c.jsx)(t.code,{children:`*::before`}),`, `,(0,c.jsx)(t.code,{children:`*::after`}),`), а также добавляет триггеры, которые автоматически применяют миксин `,(0,c.jsx)(t.code,{children:`dirToRtl`}),` при добавлении к документу атрибута `,(0,c.jsx)(t.code,{children:`[dir="rtl"]`}),` или класса `,(0,c.jsx)(t.code,{children:`.dir-rtl`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`функции`,children:`Функции`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDir(): String`}),` — Возвращает множитель направления (`,(0,c.jsx)(t.code,{children:`1`}),` для LTR, `,(0,c.jsx)(t.code,{children:`-1`}),` для RTL).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDirLeft(): String`}),` — Возвращает `,(0,c.jsx)(t.code,{children:`1`}),` для LTR, `,(0,c.jsx)(t.code,{children:`0`}),` для RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDirRight(): String`}),` — Возвращает `,(0,c.jsx)(t.code,{children:`0`}),` для LTR, `,(0,c.jsx)(t.code,{children:`1`}),` для RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirLeft(): String`}),` — Возвращает `,(0,c.jsx)(t.code,{children:`left`}),` для LTR, `,(0,c.jsx)(t.code,{children:`right`}),` для RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirRight(): String`}),` — Возвращает `,(0,c.jsx)(t.code,{children:`right`}),` для LTR, `,(0,c.jsx)(t.code,{children:`left`}),` для RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirLeftAuto(): String`}),` — Возвращает `,(0,c.jsx)(t.code,{children:`auto`}),` для LTR, `,(0,c.jsx)(t.code,{children:`unset`}),` для RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirRightAuto(): String`}),` — Возвращает `,(0,c.jsx)(t.code,{children:`unset`}),` для LTR, `,(0,c.jsx)(t.code,{children:`auto`}),` для RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirFlexLeft(): String`}),` — Возвращает `,(0,c.jsx)(t.code,{children:`flex-start`}),` для LTR, `,(0,c.jsx)(t.code,{children:`flex-end`}),` для RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirFlexRight(): String`}),` — Возвращает `,(0,c.jsx)(t.code,{children:`flex-end`}),` для LTR, `,(0,c.jsx)(t.code,{children:`flex-start`}),` для RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirToLeft($left, $right): String`}),` — Возвращает значение перехода из левого положения в правое.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirToRight($left, $right): String`}),` — Возвращает значение перехода из правого положения в левое.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirOrder($value): String`}),` — Вычисляет значение order на основе направления.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`миксины`,children:`Миксины`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initDir()`}),` — Инициализирует систему направлений для поддержки LTR и RTL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirToRtl()`}),` — Применяет стили и переменные для RTL направления.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};