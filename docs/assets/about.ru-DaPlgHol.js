import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/styles/color/! О системе цветов`}),`
`,(0,c.jsx)(n.h1,{id:`о-системе-цветов-color-system`,children:`О системе цветов (Color System)`}),`
`,(0,c.jsxs)(n.p,{children:[`Библиотека `,(0,c.jsx)(n.code,{children:`@dxtmisha/styles`}),` предоставляет мощный и гибкий механизм для управления цветами в приложениях. В отличие от стандартного подхода с жестким кодированием HEX-цветов, эта система полностью построена на динамических CSS-переменных. Тем самым она обеспечивает мгновенное переключение тем (светлая/тёмная) и плавные переходы (transitions) без дублирования CSS-кода.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Она решает главную проблему комплексной стилизации: `,(0,c.jsx)(n.strong,{children:`как применять прозрачность к цветам, поступающим из переменных, не ломая при этом CSS-анимации?`})]}),`
`,(0,c.jsx)(n.h2,{id:`основная-концепция-разделение-rgb-и-прозрачности`,children:`Основная концепция: Разделение RGB и Прозрачности`}),`
`,(0,c.jsxs)(n.p,{children:[`Если вы сохраните цвет как обычную переменную (например, `,(0,c.jsx)(n.code,{children:`--primary: #ff0000;`}),`), вы не сможете применять к ней прозрачность «на лету» средствами CSS (без использования новых, пока еще не везде поддерживаемых функций вроде `,(0,c.jsx)(n.code,{children:`color-mix`}),`). Старая попытка сделать `,(0,c.jsx)(n.code,{children:`rgba(var(--primary), 0.5)`}),` просто не сработает с HEX-значениями.`]}),`
`,(0,c.jsx)(n.p,{children:`Чтобы решить эту проблему, наша дизайн-система автоматически конвертирует все базовые цвета в список каналов RGB:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`// Как это происходит под капотом:
--sys-primary: 255, 0, 0; // Вместо #ff0000
`})}),`
`,(0,c.jsx)(n.p,{children:`Это позволяет нам динамически «собирать» цвет в момент его применения:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`color: rgba(var(--sys-primary), 1);
background-color: rgba(var(--sys-primary), 0.5);
`})}),`
`,(0,c.jsx)(n.h3,{id:`независимая-прозрачность`,children:`Независимая прозрачность`}),`
`,(0,c.jsxs)(n.p,{children:[`Чтобы дать вам еще больше контроля и обеспечить `,(0,c.jsx)(n.strong,{children:`реактивные переходы (transitions)`}),` для прозрачности (когда меняется только уровень прозрачности, а не сам цвет), для каждого свойства генерируется собственная System-переменная прозрачности:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`--sys-color: 255, 0, 0;
--sys-color-opacity: 1;

--sys-background: 0, 255, 0;
--sys-background-opacity: 0.5;
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Финальная верстка в браузере выглядит так:
`,(0,c.jsx)(n.code,{children:`color: rgba(var(--sys-color), var(--sys-color-opacity));`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Вам `,(0,c.jsx)(n.strong,{children:`не нужно`}),` писать это вручную — библиотека предоставляет удобные миксины, которые сами генерируют этот код.`]}),`
`,(0,c.jsx)(n.h2,{id:`структура-библиотеки`,children:`Структура библиотеки`}),`
`,(0,c.jsxs)(n.p,{children:[`Библиотека `,(0,c.jsx)(n.code,{children:`color.scss`}),` концептуально разделена на три слоя абстракции:`]}),`
`,(0,c.jsx)(n.h3,{id:`1-системные-функции-генерации-утилиты`,children:`1. Системные функции генерации (Утилиты)`}),`
`,(0,c.jsxs)(n.p,{children:[`Функции вроде `,(0,c.jsx)(n.code,{children:`getColor`}),`, `,(0,c.jsx)(n.code,{children:`toColorRbg`}),` или `,(0,c.jsx)(n.code,{children:`toCustomVarRgb`}),`. Они служат низкоуровневым двигателем, который переводит обычные HEX-цвета в строковый RGB-формат и наоборот. Вы редко будете вызывать их напрямую в повседневной разработке, но они нужны для регистрации новых цветов на уровне дизайн-токенов (`,(0,c.jsx)(n.code,{children:`@dxtmisha/theme`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`2-базовые-миксины-свойств-base-mixins`,children:`2. Базовые миксины свойств (Base Mixins)`}),`
`,(0,c.jsxs)(n.p,{children:[`Это основные инструменты для применения цветов к UI-компонентам: `,(0,c.jsx)(n.code,{children:`@include color(...)`}),`, `,(0,c.jsx)(n.code,{children:`@include backgroundColor(...)`}),`, `,(0,c.jsx)(n.code,{children:`@include borderColor(...)`}),`, `,(0,c.jsx)(n.code,{children:`@include stroke(...)`}),` и т.д.
Они принимают цвет, обновляют системную переменную компонента и применяют CSS-свойство. Это ваш каждодневный инструмент стилизации компонентов.`]}),`
`,(0,c.jsx)(n.h3,{id:`3-миксины-палитр-и-тем-palette-mixins`,children:`3. Миксины палитр и тем (Palette Mixins)`}),`
`,(0,c.jsxs)(n.p,{children:[`Продвинутый уровень стилизации, предназначенный для компонентов, которые должны моментально адаптироваться к локальному контексту (например, кнопка, которая становится красной, если она находится внутри «опасного» блока). Используются миксины вроде `,(0,c.jsx)(n.code,{children:`@include paletteColor()`}),` и функция `,(0,c.jsx)(n.code,{children:`getPaletteItem()`}),`. Они выстраивают «цепочку поиска» переменных (найти `,(0,c.jsx)(n.code,{children:`--theme-primary`}),`, если нет — найти `,(0,c.jsx)(n.code,{children:`--sys-primary`}),`, если нет — использовать резервный HEX).`]}),`
`,(0,c.jsxs)(n.h2,{id:`почему-нельзя-просто-использовать-color-ff0000`,children:[`Почему нельзя просто использовать `,(0,c.jsx)(n.code,{children:`color: #ff0000;`}),`?`]}),`
`,(0,c.jsx)(n.p,{children:`Вы можете это сделать, однако это нарушит целостность дизайн-системы:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Жесткая привязка:`}),` При смене темы (например, на тёмную), ваш жестко прописанный цвет останется прежним.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Отсутствие гибкости:`}),` Если вы захотите сделать текст полупрозрачным при наведении, вам придется заново переопределять `,(0,c.jsx)(n.code,{children:`color: rgba(...)`}),`, вместо того чтобы просто изменить переменную прозрачности.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ошибки анимаций:`}),` Переход от полного цвета к полупрозрачному будет плавнее, если браузер анимирует независимую переменную `,(0,c.jsx)(n.code,{children:`--sys-color-opacity`}),`, а не пытается интерполировать сложные `,(0,c.jsx)(n.code,{children:`rgba`}),` или HEX-значения.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Воспользуйтесь миксинами, описанными в разделах `,(0,c.jsx)(n.strong,{children:`Базовые свойства`}),` и `,(0,c.jsx)(n.strong,{children:`Работа с палитрами`}),`, чтобы ваш интерфейс был масштабируемым и легко поддерживаемым.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};