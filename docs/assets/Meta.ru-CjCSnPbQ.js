import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/Meta - Управление SEO мета-тегами`}),`
`,(0,c.jsx)(n.h1,{id:`класс-meta`,children:`Класс Meta`}),`
`,(0,c.jsxs)(n.p,{children:[`Унифицированный фасад для управления всеми мета-тегами документа. Наследует `,(0,c.jsx)(n.code,{children:`MetaManager`}),` и объединяет стандартные HTML-теги, Open Graph (`,(0,c.jsx)(n.code,{children:`MetaOg`}),`) и Twitter Card (`,(0,c.jsx)(n.code,{children:`MetaTwitter`}),`) в единый интерфейс.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Единая точка управления`}),` — один объект управляет `,(0,c.jsx)(n.code,{children:`<title>`}),`, мета-тегами `,(0,c.jsx)(n.code,{children:`name`}),`, `,(0,c.jsx)(n.code,{children:`og:*`}),` и `,(0,c.jsx)(n.code,{children:`twitter:*`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синхронизация`}),` — `,(0,c.jsx)(n.code,{children:`setTitle`}),`, `,(0,c.jsx)(n.code,{children:`setImage`}),`, `,(0,c.jsx)(n.code,{children:`setCanonical`}),` и `,(0,c.jsx)(n.code,{children:`setSiteName`}),` автоматически обновляют соответствующие теги во всех трёх системах.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Суффикс заголовка`}),` — поддержка автоматического добавления названия сайта к заголовку страницы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`SSR-совместимость`}),` — метод `,(0,c.jsx)(n.code,{children:`html()`}),` генерирует полный HTML всех тегов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для создания объекта управления мета-данными вызовите конструктор `,(0,c.jsx)(n.code,{children:`new Meta()`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Особенности:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматизация`}),` — конструктор автоматически инициализирует реестры для стандартных HTML, Open Graph и Twitter Card тегов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция`}),` — сразу создаёт внутренние экземпляры `,(0,c.jsx)(n.code,{children:`MetaOg`}),` и `,(0,c.jsx)(n.code,{children:`MetaTwitter`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Meta } from '@dxtmisha/functional-basic'

const meta = new Meta()
`})}),`
`,(0,c.jsx)(n.h2,{id:`геттеры`,children:`Геттеры`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTitle(): string`}),` — заголовок страницы без суффикса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getKeywords(): string`}),` — мета-тег `,(0,c.jsx)(n.code,{children:`keywords`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDescription(): string`}),` — мета-тег `,(0,c.jsx)(n.code,{children:`description`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getImage(): string`}),` — URL изображения из Open Graph.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCanonical(): string`}),` — канонический URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getRobots(): MetaRobots`}),` — мета-тег `,(0,c.jsx)(n.code,{children:`robots`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAuthor(): string`}),` — мета-тег `,(0,c.jsx)(n.code,{children:`author`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSiteName(): string`}),` — название сайта из Open Graph.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLocale(): string`}),` — локаль из Open Graph.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOg(): MetaOg`}),` — прямой доступ к экземпляру `,(0,c.jsx)(n.code,{children:`MetaOg`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTwitter(): MetaTwitter`}),` — прямой доступ к экземпляру `,(0,c.jsx)(n.code,{children:`MetaTwitter`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`сеттеры`,children:`Сеттеры`}),`
`,(0,c.jsxs)(n.p,{children:[`Все сеттеры возвращают `,(0,c.jsx)(n.code,{children:`this`}),` для цепочки вызовов.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setTitle(title: string)`}),` — устанавливает `,(0,c.jsx)(n.code,{children:`document.title`}),` (с суффиксом), `,(0,c.jsx)(n.code,{children:`og:title`}),` и `,(0,c.jsx)(n.code,{children:`twitter:title`}),` одновременно.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setKeywords(keywords: string | string[])`}),` — принимает строку или массив; массив объединяется через запятую.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setDescription(description: string)`}),` — устанавливает `,(0,c.jsx)(n.code,{children:`<meta name="description">`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setImage(image: string)`}),` — устанавливает `,(0,c.jsx)(n.code,{children:`og:image`}),` и `,(0,c.jsx)(n.code,{children:`twitter:image`}),` одновременно.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCanonical(canonical: string)`}),` — устанавливает `,(0,c.jsx)(n.code,{children:`<meta name="canonical">`}),`, `,(0,c.jsx)(n.code,{children:`og:url`}),` и `,(0,c.jsx)(n.code,{children:`twitter:url`}),` одновременно.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setRobots(robots: MetaRobots)`}),` — устанавливает `,(0,c.jsx)(n.code,{children:`<meta name="robots">`}),` (`,(0,c.jsx)(n.code,{children:`'index, follow'`}),`, `,(0,c.jsx)(n.code,{children:`'noindex, nofollow'`}),` и др.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setAuthor(author: string)`}),` — устанавливает `,(0,c.jsx)(n.code,{children:`<meta name="author">`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSiteName(siteName: string)`}),` — устанавливает `,(0,c.jsx)(n.code,{children:`og:site_name`}),` и `,(0,c.jsx)(n.code,{children:`twitter:site`}),` одновременно.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLocale(locale: string)`}),` — устанавливает `,(0,c.jsx)(n.code,{children:`og:locale`}),` (формат: `,(0,c.jsx)(n.code,{children:`'ru_RU'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSuffix(suffix?: string)`}),` — суффикс заголовка. `,(0,c.jsx)(n.code,{children:`setTitle('Статья')`}),` + `,(0,c.jsx)(n.code,{children:`setSuffix('Сайт')`}),` → `,(0,c.jsx)(n.code,{children:`'Статья - Сайт'`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`генерация-html`,children:`Генерация HTML`}),`
`,(0,c.jsx)(n.h3,{id:`html-string`,children:(0,c.jsx)(n.code,{children:`html(): string`})}),`
`,(0,c.jsx)(n.p,{children:`Генерирует полную HTML-строку всех мета-тегов: стандартных + Open Graph + Twitter Card. Используется для SSR.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const meta = new Meta()
meta.setTitle('Статья').setDescription('Описание').setImage('https://example.com/img.jpg')

const html = meta.html()
// <meta name="description" content="Описание">
// <meta property="og:title" content="Статья">
// <meta property="og:image" content="https://example.com/img.jpg">
// <meta name="twitter:title" content="Статья">
// ...
`})}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Meta } from '@dxtmisha/functional-basic'

const meta = new Meta()
meta.setSuffix('Мой Сайт')

meta
  .setTitle('Как использовать Vue 3')
  .setDescription('Подробное руководство по Vue 3')
  .setKeywords(['vue', 'javascript', 'typescript'])
  .setImage('https://example.com/images/vue.jpg')
  .setCanonical('https://example.com/articles/vue-3')
  .setRobots('index, follow')
  .setAuthor('Иван Иванов')
  .setSiteName('Мой Сайт')
  .setLocale('ru_RU')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};