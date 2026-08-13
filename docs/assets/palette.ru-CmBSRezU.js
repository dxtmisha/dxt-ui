import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/styles/color/# Использование палитр`}),`
`,(0,c.jsx)(t.h1,{id:`использование-палитр`,children:`Использование палитр`}),`
`,(0,c.jsxs)(t.p,{children:[`Миксины палитр — это основной инструмент для работы с семантическими и системными цветами в DxtUI. Их главное назначение заключается в том, чтобы `,(0,c.jsx)(t.strong,{children:`автоматически поддерживать маршрутизацию CSS-переменных`}),`, позволяя динамически менять темы и цветовые палитры компонентов "на лету", не нарушая изначальную контрастность дизайна.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Вместо базового свойства `,(0,c.jsx)(t.code,{children:`backgroundColor()`}),`, при работе с дизайн-системой вы используете специальный миксин:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.my-button {
  // Применяем системный цвет 'primary'
  @include styles.paletteBackgroundColor('--d1-sys-palette-primary');
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Тандом использования префикса `,(0,c.jsx)(t.code,{children:`palette`}),` гарантирует, что цвет компонента будет правильно реагировать на все изменения цветовой схемы, например, при переключении глобального класса палитры с синей на желтую.`]}),`
`,(0,c.jsx)(t.h2,{id:`доступные-миксины-палитр`,children:`Доступные миксины палитр`}),`
`,(0,c.jsxs)(t.p,{children:[`Ниже представлены ключевые миксины, работающие по идентичному принципу. В качестве единственного аргумента они принимают `,(0,c.jsx)(t.strong,{children:`строковое название системной CSS-переменной`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`paletteColor()`}),` — Устанавливает цвет текста (`,(0,c.jsx)(t.code,{children:`color`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`paletteBackgroundColor()`}),` — Устанавливает цвет фона (`,(0,c.jsx)(t.code,{children:`background-color`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`paletteBorderColor()`}),` — Устанавливает цвет рамки (`,(0,c.jsx)(t.code,{children:`border-color`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`paletteOutlineColor()`}),` — Устанавливает цвет внешнего контура (`,(0,c.jsx)(t.code,{children:`outline-color`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`paletteFill()`}),` — Заливает векторные SVG-элементы (`,(0,c.jsx)(t.code,{children:`fill`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`paletteStroke()`}),` — Устанавливает цвет обводки SVG-элементов (`,(0,c.jsx)(t.code,{children:`stroke`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`пример-использования-нескольких-миксинов`,children:`Пример использования нескольких миксинов:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.card-alert {
  // Текст принимает системный цвет ошибки (красный)
  @include styles.paletteColor('--d1-sys-palette-error');
  
  // Фон принимает цвет поверхности
  @include styles.paletteBackgroundColor('--d1-sys-palette-surface');
  
  // Рамка принимает цвет рамки
  @include styles.paletteBorderColor('--d1-sys-palette-outline');
}
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает-архитектура-маршрутизации`,children:`Как это работает? (Архитектура маршрутизации)`}),`
`,(0,c.jsxs)(t.p,{children:[`Чтобы понять всю мощь миксинов `,(0,c.jsx)(t.code,{children:`palette`}),`, нужно взглянуть на то, как обрабатываются SCSS-строки во время сборки кода. Архитектура построена так, чтобы вам больше никогда не приходилось писать дополнительный CSS для переопределения цветов.`]}),`
`,(0,c.jsx)(t.h3,{id:`шаг-1-системные-переменные-и-базовые-веса`,children:`Шаг 1: Системные переменные и базовые веса`}),`
`,(0,c.jsxs)(t.p,{children:[`Для начала, в файле конфигурации(`,(0,c.jsx)(t.code,{children:`properties.scss`}),`) задан реестр, который сопоставляет семантическое имя (например, `,(0,c.jsx)(t.code,{children:`primary`}),`) с конкретным "базовым весом" контрастности для светлой и темной тем.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Например, системный цвет `,(0,c.jsx)(t.code,{children:`primary`}),` в светлой теме всегда соответствует уровню плотности `,(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`600`})}),`. По умолчанию этот уровень привязан к синему цвету (`,(0,c.jsx)(t.code,{children:`--d1-ref-palette-blue-600`}),`).`]}),`
`,(0,c.jsx)(t.h3,{id:`шаг-2-компиляция-миксина`,children:`Шаг 2: Компиляция миксина`}),`
`,(0,c.jsxs)(t.p,{children:[`Когда вы вызываете миксин `,(0,c.jsx)(t.code,{children:`paletteBackgroundColor('--d1-sys-palette-primary')`}),`, препроцессор SCSS пропускает вашу строку через этот реестр.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Вместо того чтобы просто вернуть синий цвет, он генерирует `,(0,c.jsx)(t.strong,{children:`умную каскадную CSS-переменную`}),`, которая жестко привязывает цвет фона к "базовому" уровню `,(0,c.jsx)(t.code,{children:`600`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`/* Упрощенный пример сгенерированного CSS: */
background-color: var(--d1-palette-basic600, var(--d1-sys-palette-primary));
`})}),`
`,(0,c.jsx)(t.h3,{id:`шаг-3-смена-палитры-через-html-dom`,children:`Шаг 3: Смена палитры через HTML (DOM)`}),`
`,(0,c.jsx)(t.p,{children:`Представим, что мы оборачиваем наш компонент в HTML-контейнер и добавляем класс другой палитры:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<div class="d1-palette--yellow">
  <button class="my-button">Нажми меня</button>
</div>
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`.d1-palette--yellow`}),` переопределяет переменную `,(0,c.jsx)(t.code,{children:`--d1-palette-basic600`}),` на локальном уровне: теперь она ссылается на желтый цвет плотности `,(0,c.jsx)(t.code,{children:`600`}),` (`,(0,c.jsx)(t.code,{children:`--d1-ref-palette-yellow-600`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Так как наша кнопка через миксин `,(0,c.jsx)(t.code,{children:`paletteBackgroundColor`}),` сгенерировала и привязала себя напрямую к `,(0,c.jsx)(t.code,{children:`basic600`}),`, её фон моментально перекрасится в желтый.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Главное преимущество:`}),`
Плотность цвета осталась ровно `,(0,c.jsx)(t.code,{children:`600`}),`. Это означает, что контрастность между белым текстом кнопки и её желтым фоном останется математически идеальной и выверенной. Разработчику не нужно писать ни строчки CSS (`,(0,c.jsx)(t.code,{children:`.d1-palette--yellow .my-button { ... }`}),`), чтобы перекрасить компонент вручную — всё происходит автоматически с помощью маршрутизации SCSS-переменных.`]}),`
`,(0,c.jsx)(t.h2,{id:`различие-между-базовыми-миксинами-и-палитрами`,children:`Различие между базовыми миксинами и палитрами`}),`
`,(0,c.jsx)(t.p,{children:`Важно понимать принципиальную разницу в их логике:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[`Базовые миксины (`,(0,c.jsx)(t.code,{children:`backgroundColor`}),`, `,(0,c.jsx)(t.code,{children:`color`}),` и др.)`]}),`
Они принимают `,(0,c.jsx)(t.strong,{children:`конкретное значение`}),` (HEX, RGB или результат функции `,(0,c.jsx)(t.code,{children:`getColor`}),`). Эти миксины устанавливают цвет "как есть". Да, они поддерживают системную прозрачность, но сам цвет остается статичным. Если вы передали синий цвет через `,(0,c.jsx)(t.code,{children:`getColor('primary')`}),`, он останется синим, даже если вы добавите класс желтой палитры на родителя.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[`Миксины палитр (`,(0,c.jsx)(t.code,{children:`paletteBackgroundColor`}),`, `,(0,c.jsx)(t.code,{children:`paletteColor`}),` и др.)`]}),`
Они принимают `,(0,c.jsx)(t.strong,{children:`строку-ключ`}),` (название системной переменной, например `,(0,c.jsx)(t.code,{children:`'--d1-sys-palette-primary'`}),`). Эти миксины не устанавливают цвет напрямую, а создают `,(0,c.jsx)(t.strong,{children:`динамический маршрут`}),` к переменным палитры (уровень `,(0,c.jsx)(t.code,{children:`basic`}),`). Именно это позволяет компоненту мгновенно "перекрашиваться" при смене класса палитры в DOM, сохраняя при этом нужный уровень контрастности.`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};