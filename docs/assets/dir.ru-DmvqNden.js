import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/styles/dir - Направление текста LTR и RTL`}),`
`,(0,c.jsx)(n.h1,{id:`система-направления-текста`,children:`Система направления текста`}),`
`,(0,c.jsxs)(n.p,{children:[`Библиотека `,(0,c.jsx)(n.code,{children:`@dxtmisha/styles`}),` предоставляет мощный механизм для поддержки двунаправленного текста и раскладок (LTR и RTL) с использованием динамических CSS Custom Properties (CSS-переменных). Вместо дублирования CSS-кода или жесткого прописывания статических свойств, эта система автоматически управляет выравниванием, отступами, позиционированием и трансформациями прямо в браузере.`]}),`
`,(0,c.jsx)(n.p,{children:`Классический подход к зеркалированию раскладок требует написания отдельных переопределяющих стилей вручную (например, переопределение margin-left и margin-right). Данная утилита решает эту проблему путем привязки физических направлений к CSS-переменным, которые автоматически обновляются при изменении направления.`}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsx)(n.p,{children:`Система направления текста построена на динамическом обмене значений переменных:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глобальная инициализация`}),`: По умолчанию (в режиме LTR) библиотека задает переменные на уровне `,(0,c.jsx)(n.code,{children:`html`}),` (например, `,(0,c.jsx)(n.code,{children:`--d-dir: 1`}),` для смещений, выравнивания вроде `,(0,c.jsx)(n.code,{children:`--d-dir-start: flex-start`}),` и флаги стороны `,(0,c.jsx)(n.code,{children:`--d-dir-left: 1`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое переключение`}),`: Для каждого дочернего элемента физические отступы привязываются к динамическим переменным (например, `,(0,c.jsx)(n.code,{children:`--d-dir-margin-left`}),` считывает `,(0,c.jsx)(n.code,{children:`var(--sys-margin-left)`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Обмен при RTL`}),`: При активации RTL (через `,(0,c.jsx)(n.code,{children:`html[dir="rtl"]`}),` или `,(0,c.jsx)(n.code,{children:`.dir-rtl`}),`) система меняет значения флагов (`,(0,c.jsx)(n.code,{children:`--d-dir`}),` становится `,(0,c.jsx)(n.code,{children:`-1`}),`, `,(0,c.jsx)(n.code,{children:`--d-dir-start`}),` переключается на `,(0,c.jsx)(n.code,{children:`flex-end`}),`) и меняет местами переменные свойств на дочерних элементах (например, `,(0,c.jsx)(n.code,{children:`--d-dir-margin-left`}),` считывает `,(0,c.jsx)(n.code,{children:`var(--sys-margin-right)`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.h2,{id:`инициализация-системы-initdir`,children:[`Инициализация системы (`,(0,c.jsx)(n.code,{children:`initDir`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Для запуска системы направлений необходимо вызвать миксин `,(0,c.jsx)(n.code,{children:`initDir`}),` на глобальном уровне (обычно в файле инициализации глобальных стилей):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

@include styles.initDir;
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Этот миксин задает переменные LTR для элемента `,(0,c.jsx)(n.code,{children:`html`}),` по умолчанию, настраивает активные свойства направлений для всех дочерних элементов (`,(0,c.jsx)(n.code,{children:`*`}),`, `,(0,c.jsx)(n.code,{children:`*::before`}),`, `,(0,c.jsx)(n.code,{children:`*::after`}),`), а также добавляет триггеры, которые автоматически применяют миксин `,(0,c.jsx)(n.code,{children:`dirToRtl`}),` при добавлении к документу атрибута `,(0,c.jsx)(n.code,{children:`[dir="rtl"]`}),` или класса `,(0,c.jsx)(n.code,{children:`.dir-rtl`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`функции`,children:`Функции`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDir(): String`}),` — Возвращает множитель направления (`,(0,c.jsx)(n.code,{children:`1`}),` для LTR, `,(0,c.jsx)(n.code,{children:`-1`}),` для RTL).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDirLeft(): String`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`1`}),` для LTR, `,(0,c.jsx)(n.code,{children:`0`}),` для RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDirRight(): String`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`0`}),` для LTR, `,(0,c.jsx)(n.code,{children:`1`}),` для RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirLeft(): String`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`left`}),` для LTR, `,(0,c.jsx)(n.code,{children:`right`}),` для RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirRight(): String`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`right`}),` для LTR, `,(0,c.jsx)(n.code,{children:`left`}),` для RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirLeftAuto(): String`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`auto`}),` для LTR, `,(0,c.jsx)(n.code,{children:`unset`}),` для RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirRightAuto(): String`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`unset`}),` для LTR, `,(0,c.jsx)(n.code,{children:`auto`}),` для RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirFlexLeft(): String`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`flex-start`}),` для LTR, `,(0,c.jsx)(n.code,{children:`flex-end`}),` для RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirFlexRight(): String`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`flex-end`}),` для LTR, `,(0,c.jsx)(n.code,{children:`flex-start`}),` для RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirToLeft($left, $right): String`}),` — Возвращает значение перехода из левого положения в правое.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirToRight($left, $right): String`}),` — Возвращает значение перехода из правого положения в левое.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirOrder($value): String`}),` — Вычисляет значение order на основе направления.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`миксины`,children:`Миксины`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initDir()`}),` — Инициализирует систему направлений для поддержки LTR и RTL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dirToRtl()`}),` — Применяет стили и переменные для RTL направления.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};