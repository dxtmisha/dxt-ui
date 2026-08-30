import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/constructor/# О библиотеке`}),`
`,(0,c.jsx)(t.h1,{id:`о-библиотеке`,children:`О библиотеке`}),`
`,(0,c.jsxs)(t.p,{children:[`Пакет `,(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`})}),` — это ядро и технологический двигатель дизайн-системы, предоставляющий более 110 готовых конструкторов компонентов для Vue 3 и TypeScript.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Библиотека построена по принципу `,(0,c.jsx)(t.strong,{children:`Headless UI`}),`: вся бизнес-логика, управление реактивными состояниями, обработка событий, доступность (WAI-ARIA) и клавиатурная навигация инкапсулированы внутри независимых классов конструктора и полностью отделены от визуального оформления.`]}),`
`,(0,c.jsx)(t.h2,{id:`архитектура-взаимодействия-с-дизайн-системами`,children:`Архитектура взаимодействия с дизайн-системами`}),`
`,(0,c.jsxs)(t.p,{children:[`Пакет `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),` служит фундаментом для создания конечных библиотек компонентов (таких как `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`┌─────────────────────────────────────────────────────────────────────────┐
│                 1. Ядро логики (@dxtmisha/constructor)                  │
│  • 110+ абстрактных классов (Button, Modal, Input, Table, Select...)    │
│  • WAI-ARIA доступность, навигация с клавиатуры и Focus Trap            │
│  • Реактивные состояния (:focus, :active, :hover, loading, disabled)   │
│  • Управление вводом данных, валидацией и масками                       │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                   2. Инструменты сборки (@dxtmisha/scripts)             │
│  • Генератор dxt-ui: связывает конструктор с дизайн-токенами            │
│  • Автоматическое формирование props.ts, styleToken.scss и экспортов    │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│               3. Дизайн-система (на примере @dxtmisha/d1)               │
│  • Настройка дизайн-токенов в src/media/ (цвета, шрифты, отступы)       │
│  • Компоненты D1*.vue: используют конструкторы и BEM-классы             │
│  • SCSS-стили: стилизация через миксины пакета @dxtmisha/styles         │
└─────────────────────────────────────────────────────────────────────────┘
`})}),`
`,(0,c.jsx)(t.h2,{id:`преимущества-использования-конструктора`,children:`Преимущества использования конструктора`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Мульти-дизайн и масштабируемость`}),`: на едином ядре Конструктора можно параллельно развивать множество разных UI-китов (например, `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, корпоративную тему, мобильный дизайн). Создание нового дизайна не требует повторного написания логики 110+ компонентов — достаточно настроить дизайн-токены и шаблоны.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Централизованные исправления (Single Point of Fix)`}),`: любые исправления багов (краевые случаи захвата фокуса, специфика браузеров на iOS/Android, тонкости навигации с клавиатуры или масок) вносятся один раз в ядро. Все подключенные дизайн-системы получают обновления автоматически.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Безопасная эволюция без регрессий (Zero Regression)`}),`: добавление новых возможностей в Конструктор расширяет функционал всех UI-китов без риска сломать их верстку, а редизайн стилей и смена токенов не могут нарушить сложную логику поведения (a11y, оверлеи, валидацию).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Гарантированная доступность (a11y)`}),`: каждый конструктор полностью соответствует спецификации WAI-ARIA "из коробки".`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Снижение затрат на поддержку (TCO)`}),`: бизнес-логика тестируется один раз на уровне Конструктора. Тестирование конкретных дизайн-систем фокусируется только на токенах и верстке.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Чистота кода и скорость разработки`}),`: разработчик освобожден от написания бойлерплейта и сложных обработчиков — новый компонент создается за считанные минуты подключением готового класса конструктора.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`функциональные-возможности-dxtmishaconstructor`,children:`Функциональные возможности @dxtmisha/constructor`}),`
`,(0,c.jsx)(t.p,{children:`Конструктор закрывает все ключевые задачи современной фронтенд-разработки:`}),`
`,(0,c.jsx)(t.h3,{id:`1-формы-и-ввод-данных`,children:`1. Формы и ввод данных`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Текстовые поля и маски`}),`: `,(0,c.jsx)(t.code,{children:`Input`}),`, `,(0,c.jsx)(t.code,{children:`InputPhone`}),` (с международными кодами стран и автоформатированием), `,(0,c.jsx)(t.code,{children:`InputCode`}),` (для SMS/2FA), `,(0,c.jsx)(t.code,{children:`InputImage`}),` и `,(0,c.jsx)(t.code,{children:`ImageCrop`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Элементы выбора`}),`: `,(0,c.jsx)(t.code,{children:`Checkbox`}),`, `,(0,c.jsx)(t.code,{children:`Radio`}),`, `,(0,c.jsx)(t.code,{children:`Switch`}),`, `,(0,c.jsx)(t.code,{children:`SegmentControl`}),`, `,(0,c.jsx)(t.code,{children:`Chip`}),`, `,(0,c.jsx)(t.code,{children:`ChipGroup`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Селекты и выпадающие списки`}),`: `,(0,c.jsx)(t.code,{children:`Select`}),`, `,(0,c.jsx)(t.code,{children:`SelectValue`}),`, `,(0,c.jsx)(t.code,{children:`SelectableArea`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Служебные элементы форм`}),`: автоматические счетчики символов (`,(0,c.jsx)(t.code,{children:`FieldCounter`}),`), сообщения валидации и подсказок (`,(0,c.jsx)(t.code,{children:`FieldMessage`}),`), адаптивные лейблы (`,(0,c.jsx)(t.code,{children:`FieldLabel`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`2-оверлеи-диалоги-и-всплывающие-окна`,children:`2. Оверлеи, диалоги и всплывающие окна`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Модальные интерфейсы`}),`: `,(0,c.jsx)(t.code,{children:`Modal`}),`, `,(0,c.jsx)(t.code,{children:`Dialog`}),`, `,(0,c.jsx)(t.code,{children:`Window`}),`, `,(0,c.jsx)(t.code,{children:`ActionSheet`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Всплывающие элементы`}),`: `,(0,c.jsx)(t.code,{children:`Tooltip`}),`, `,(0,c.jsx)(t.code,{children:`Menu`}),`, `,(0,c.jsx)(t.code,{children:`MenuButton`}),`, `,(0,c.jsx)(t.code,{children:`MenuCountry`}),`, `,(0,c.jsx)(t.code,{children:`MenuLanguage`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Уведомления`}),`: `,(0,c.jsx)(t.code,{children:`Snackbar`}),`, `,(0,c.jsx)(t.code,{children:`SnackbarItem`}),` с очередями показа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Встроенная механика оверлеев`}),`: автоматический захват фокуса (Focus Trap), блокировка скролла страницы при открытии, закрытие по `,(0,c.jsx)(t.code,{children:`Escape`}),` и клику вне области (Click Outside), позиционирование относительно якорных элементов (Anchor).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`3-навигация-и-списки`,children:`3. Навигация и списки`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Навигационные структуры`}),`: `,(0,c.jsx)(t.code,{children:`NavigationRail`}),`, `,(0,c.jsx)(t.code,{children:`Tabs`}),`, `,(0,c.jsx)(t.code,{children:`TabsNavigation`}),`, `,(0,c.jsx)(t.code,{children:`Breadcrumbs`}),`, `,(0,c.jsx)(t.code,{children:`Pagination`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Списки и аккордеоны`}),`: `,(0,c.jsx)(t.code,{children:`Accordion`}),`, `,(0,c.jsx)(t.code,{children:`List`}),`, `,(0,c.jsx)(t.code,{children:`ListMenu`}),`, `,(0,c.jsx)(t.code,{children:`ListGroup`}),`, `,(0,c.jsx)(t.code,{children:`ListItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`4-отображение-данных-и-контент`,children:`4. Отображение данных и контент`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Таблицы`}),`: `,(0,c.jsx)(t.code,{children:`Table`}),`, `,(0,c.jsx)(t.code,{children:`TableFlex`}),`, `,(0,c.jsx)(t.code,{children:`TableHeaderItem`}),`, `,(0,c.jsx)(t.code,{children:`TableRecord`}),` (поддержка сортировки, выбора строк и адаптивных колонок).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Индикаторы и скелетоны`}),`: `,(0,c.jsx)(t.code,{children:`Skeleton`}),`, `,(0,c.jsx)(t.code,{children:`Progress`}),`, `,(0,c.jsx)(t.code,{children:`ProgressBar`}),`, `,(0,c.jsx)(t.code,{children:`Badge`}),`, `,(0,c.jsx)(t.code,{children:`Avatar`}),`, `,(0,c.jsx)(t.code,{children:`Bullet`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Форматирование`}),`: `,(0,c.jsx)(t.code,{children:`FormattedNumber`}),`, `,(0,c.jsx)(t.code,{children:`FormattedUnit`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`5-анимации-скролл-и-интерактивность`,children:`5. Анимации, скролл и интерактивность`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Скролл и фиксация`}),`: `,(0,c.jsx)(t.code,{children:`Headroom`}),`, `,(0,c.jsx)(t.code,{children:`ScrollSticky`}),`, `,(0,c.jsx)(t.code,{children:`HorizontalScroll`}),`, `,(0,c.jsx)(t.code,{children:`Scrollbar`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Анимации движения`}),`: `,(0,c.jsx)(t.code,{children:`MotionAxis`}),`, `,(0,c.jsx)(t.code,{children:`MotionFlip`}),`, `,(0,c.jsx)(t.code,{children:`MotionTransform`}),`, `,(0,c.jsx)(t.code,{children:`MotionSticky`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интерактивные эффекты`}),`: `,(0,c.jsx)(t.code,{children:`Ripple`}),`, `,(0,c.jsx)(t.code,{children:`DraggableWrapper`}),`, `,(0,c.jsx)(t.code,{children:`Dropzone`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`поддерживающие-пакеты-экосистемы`,children:`Поддерживающие пакеты экосистемы`}),`
`,(0,c.jsx)(t.p,{children:`Для полноценной работы конструктора в экосистеме предусмотрены специализированные пакеты:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@dxtmisha/styles`})}),` — SCSS-фреймворк с системой токенов, двухуровневой прозрачностью, адаптивными миксинами и динамическими палитрами (`,(0,c.jsx)(t.code,{children:`paletteBackgroundColor`}),`, `,(0,c.jsx)(t.code,{children:`paletteColor`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@dxtmisha/functional`})}),` — утилиты для Vue 3 Composition API, SSR-изоляция (`,(0,c.jsx)(t.code,{children:`ServerStorage`}),`), интернационализация (i18n) и централизованный менеджер иконок (`,(0,c.jsx)(t.code,{children:`Icons`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`})}),` — CLI-утилиты для скаффолдинга компонентов (`,(0,c.jsx)(t.code,{children:`dxt-ui`}),`), сборки библиотек (`,(0,c.jsx)(t.code,{children:`dxt-library`}),`) и формирования документации.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`репозиторий-проекта`,children:`Репозиторий проекта`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/constructor`,rel:`nofollow`,children:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/constructor`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};