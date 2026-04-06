import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/! О библиотеке`}),`
`,(0,c.jsx)(n.h1,{id:`dxtmishafunctional-basic`,children:(0,c.jsx)(n.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/functional-basic`,rel:`nofollow`,children:`@dxtmisha/functional-basic`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`@dxtmisha/functional-basic`}),` — небольшая библиотека утилит для повседневной веб-разработки. Она не привязана к фреймворкам и может использоваться в любом TypeScript-проекте — от Vue и React до простого браузерного кода.`]}),`
`,(0,c.jsx)(n.h2,{id:`установка`,children:`Установка`}),`
`,(0,c.jsx)(n.p,{children:`Чтобы начать использовать библиотеку, установите ее через npm:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm i @dxtmisha/functional-basic
`})}),`
`,(0,c.jsx)(n.h2,{id:`для-чего-эта-библиотека`,children:`Для чего эта библиотека?`}),`
`,(0,c.jsx)(n.p,{children:`В большинстве веб-проектов возникают одни и те же задачи: запросы к API, работа с датами, куками или состоянием загрузки. Чтобы не копировать одни и те же функции из проекта в проект, мы собрали их в этой библиотеке.`}),`
`,(0,c.jsx)(n.p,{children:`Это не сложный фреймворк, а просто набор инструментов: вы можете брать только то, что нужно для конкретной задачи.`}),`
`,(0,c.jsx)(n.h2,{id:`что-в-ней-есть`,children:`Что в ней есть?`}),`
`,(0,c.jsx)(n.p,{children:`Библиотека содержит инструменты для обычных задач разработчика:`}),`
`,(0,c.jsxs)(n.p,{children:[`Для `,(0,c.jsx)(n.strong,{children:`работы с сетью`}),` — простой HTTP-клиент с поддержкой хуков, кешированием и индикацией загрузки. Это позволяет выполнять запросы без подключения тяжелых внешних зависимостей.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Для `,(0,c.jsx)(n.strong,{children:`локализации и географии`}),` — определение страны и языка пользователя, телефонные коды, флаги стран и форматирование данных через `,(0,c.jsx)(n.code,{children:`Intl`}),` API. Также есть инструменты для перевода интерфейса.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Для `,(0,c.jsx)(n.strong,{children:`управления состоянием`}),` — обертки для `,(0,c.jsx)(n.code,{children:`localStorage`}),`, `,(0,c.jsx)(n.code,{children:`sessionStorage`}),`, `,(0,c.jsx)(n.code,{children:`cookie`}),` и URL-хеша. Они помогают сохранять данные между сессиями с поддержкой типизации TypeScript.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Для `,(0,c.jsx)(n.strong,{children:`SEO`}),` — инструменты для управления `,(0,c.jsx)(n.code,{children:`<title>`}),`, Open Graph и Twitter Card. Помогают поддерживать актуальность мета-тегов в браузере и при SSR.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Для `,(0,c.jsx)(n.strong,{children:`работы с данными`}),` — утилиты для глубокого копирования объектов, обработки массивов, безопасного преобразования типов и форматирования строк.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Для `,(0,c.jsx)(n.strong,{children:`поиска и фильтрации`}),` — функции для сопоставления текста и удобного поиска по сложным спискам данных.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Для `,(0,c.jsx)(n.strong,{children:`событий и сообщений`}),` — инструменты для обмена данными между компонентами или вкладками браузера (через `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Для `,(0,c.jsx)(n.strong,{children:`DOM и UI`}),` — вспомогательные функции для работы с элементами, атрибутами, изображениями, клипбордом и прокруткой.`]}),`
`,(0,c.jsx)(n.h2,{id:`для-кого-это`,children:`Для кого это?`}),`
`,(0,c.jsx)(n.p,{children:`Библиотека подходит тем, кто хочет использовать готовые решения для простых задач вместо того, чтобы писать их с нуля в каждом проекте. Она работает как в небольших скриптах, так и в более крупных приложениях.`}),`
`,(0,c.jsxs)(n.p,{children:[`Хотя она входит в экосистему `,(0,c.jsx)(n.code,{children:`@dxtmisha`}),`, её можно использовать отдельно в любом проекте.`]}),`
`,(0,c.jsx)(n.h2,{id:`принципы`,children:`Принципы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Минимализм`}),` — библиотека не использует сторонние пакеты, что упрощает поддержку.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка TypeScript`}),` — все инструменты типизированы для удобства разработки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Понятный API`}),` — названия методов и их поведение стараются быть предсказуемыми.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Наличие тестов`}),` — основные функции проверяются тестами для стабильной работы.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`git`,children:`Git`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/functional-basic`,rel:`nofollow`,children:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/functional-basic`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};