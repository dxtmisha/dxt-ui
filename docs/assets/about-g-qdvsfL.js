import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-C8vOrmRQ.js";import{M as e}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function r(i){const s={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/styles/ru/About"}),`
`,n.jsx(s.h1,{id:"dxtmishastyles",children:"@dxtmisha/styles"}),`
`,n.jsx(s.p,{children:"Библиотека SCSS утилит для экосистемы DXT UI. Содержит готовые миксины и функции для стилизации с поддержкой CSS Custom Properties, автоматической обработкой RTL и паттернами адаптивного дизайна."}),`
`,n.jsx(s.h2,{id:"что-входит-в-пакет",children:"Что входит в пакет"}),`
`,n.jsx(s.h3,{id:"управление-цветом",children:"Управление цветом"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Функции цвета"})," — валидация, конвертация, управление палитрой, обработка прозрачности"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"getColor"})," — извлечение значения цвета с поддержкой прозрачности"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"getPalette"})," — управление цветами палитры"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"toColorRbg"})," — конвертация цвета в формат RGB"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"toGradient"})," — преобразование цвета в градиент"]}),`
`]}),`
`,n.jsx(s.h3,{id:"раскладка-и-позиционирование",children:"Раскладка и позиционирование"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Миксины Flexbox"})," — горизонтальные/вертикальные раскладки, центрирование, пресеты отступов"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Миксины позиционирования"})," — абсолютное/относительное позиционирование с автоматической поддержкой RTL через inset-inline"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Миксины размеров"})," — ширина, высота, соотношение сторон, viewport единицы (dvw/dvh)"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Margin и Padding"})," — утилиты отступов с поддержкой RTL через margin-inline/padding-inline"]}),`
`]}),`
`,n.jsx(s.h3,{id:"типографика",children:"Типографика"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Миксины шрифтов"})," — размер шрифта, межстрочный интервал, отступы между параграфами с CSS переменными"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Выравнивание текста"})," — автоматическая инверсия выравнивания текста для RTL"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Переполнение текста"})," — обрезка, ограничение строк, обработка многоточия"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Преобразование текста"})," — утилиты uppercase, lowercase, capitalize"]}),`
`]}),`
`,n.jsx(s.h3,{id:"направление-и-поддержка-rtl",children:"Направление и поддержка RTL"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Система Dir"})," — автоматическое управление направлением LTR/RTL через CSS переменные"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"initDir"})," — инициализация с множителем --d-dir (1 для LTR, -1 для RTL)"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"dirLeft/dirRight"})," — автоматическая инверсия значений для RTL"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"dirFlexLeft/dirFlexRight"})," — flex-выравнивание с поддержкой RTL"]}),`
`]}),`
`,n.jsx(s.h3,{id:"адаптивный-дизайн",children:"Адаптивный дизайн"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Медиа-запросы"})," — контрольные точки min/max width из дизайн-системы"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Контейнерные запросы"})," — адаптивные компоненты на основе размера родительского контейнера"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"mediaMinWidth/mediaMaxWidth"})," — удобные обёртки для медиа-запросов"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"containerMinWidth/containerMaxWidth"})," — утилиты контейнерных запросов"]}),`
`]}),`
`,n.jsx(s.h3,{id:"трансформации-и-анимация",children:"Трансформации и анимация"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Миксины трансформаций"})," — translateX/Y, scale, rotate с CSS переменными"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"transformInit"})," — применяет все трансформации с автоматическим RTL для translateX"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"translateInit"})," — только translate-трансформации"]}),`
`]}),`
`,n.jsx(s.h3,{id:"интерактивные-состояния",children:"Интерактивные состояния"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Миксины селекторов"})," — состояния hover, active, focus, disabled, readonly"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"enabled"})," — автоматическое исключение состояний disabled/readonly/loading"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"focus"})," — включает :focus, :focus-within и поддержку BEM-модификатора"]}),`
`]}),`
`,n.jsx(s.h3,{id:"утилиты",children:"Утилиты"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Content Visibility"})," — оптимизация производительности для контента вне экрана"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Scrollbar"})," — скрытие полосы прокрутки с сохранением функциональности"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Rules"})," — операции с мапами, манипуляции строками, утилиты селекторов"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Custom Properties"})," — управление CSS переменными и валидация"]}),`
`]}),`
`,n.jsx(s.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Поддержка RTL:"})," Автоматическая поддержка раскладки справа налево через CSS Logical Properties (margin-inline, padding-inline, inset-inline) и интеграцию с системой направлений"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"CSS Custom Properties:"})," Все значения размеров, отступов и трансформаций хранятся как CSS переменные для динамического изменения темы"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Интеграция с дизайн-системой:"})," Контрольные точки, цвета и значения отступов из централизованных дизайн-токенов"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Производительность:"})," Оптимизации content visibility, эффективная генерация селекторов, минимальный вывод CSS"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Типобезопасность:"})," Функции валидации для цветов, custom properties и типов данных"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Совместимость с BEM:"})," Все миксины работают бесшовно с методологией BEM"]})]})}function o(i={}){const{wrapper:s}={...l(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(r,{...i})}):r(i)}export{o as default};
