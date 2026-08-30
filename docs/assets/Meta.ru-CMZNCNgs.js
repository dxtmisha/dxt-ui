import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/Meta - Управление SEO мета-тегами`}),`
`,(0,c.jsx)(t.h1,{id:`класс-meta`,children:`Класс Meta`}),`
`,(0,c.jsxs)(t.p,{children:[`Унифицированный фасад для управления всеми мета-тегами документа. Наследует `,(0,c.jsx)(t.code,{children:`MetaManager`}),` и объединяет стандартные HTML-теги, Open Graph (`,(0,c.jsx)(t.code,{children:`MetaOg`}),`) и Twitter Card (`,(0,c.jsx)(t.code,{children:`MetaTwitter`}),`) в единый интерфейс.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Единая точка управления`}),` — один объект управляет `,(0,c.jsx)(t.code,{children:`<title>`}),`, мета-тегами `,(0,c.jsx)(t.code,{children:`name`}),`, `,(0,c.jsx)(t.code,{children:`og:*`}),` и `,(0,c.jsx)(t.code,{children:`twitter:*`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Синхронизация`}),` — `,(0,c.jsx)(t.code,{children:`setTitle`}),`, `,(0,c.jsx)(t.code,{children:`setImage`}),`, `,(0,c.jsx)(t.code,{children:`setCanonical`}),` и `,(0,c.jsx)(t.code,{children:`setSiteName`}),` автоматически обновляют соответствующие теги во всех трёх системах.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Суффикс заголовка`}),` — поддержка автоматического добавления названия сайта к заголовку страницы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SSR-совместимость`}),` — метод `,(0,c.jsx)(t.code,{children:`html()`}),` генерирует полный HTML всех тегов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для создания объекта управления мета-данными вызовите конструктор `,(0,c.jsx)(t.code,{children:`new Meta()`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматизация`}),` — конструктор автоматически инициализирует реестры для стандартных HTML, Open Graph и Twitter Card тегов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция`}),` — сразу создаёт внутренние экземпляры `,(0,c.jsx)(t.code,{children:`MetaOg`}),` и `,(0,c.jsx)(t.code,{children:`MetaTwitter`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Meta } from '@dxtmisha/functional-basic'

const meta = new Meta()
`})}),`
`,(0,c.jsx)(t.h2,{id:`геттеры`,children:`Геттеры`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTitle(): string`}),` — заголовок страницы без суффикса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getKeywords(): string`}),` — мета-тег `,(0,c.jsx)(t.code,{children:`keywords`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDescription(): string`}),` — мета-тег `,(0,c.jsx)(t.code,{children:`description`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getImage(): string`}),` — URL изображения из Open Graph.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCanonical(): string`}),` — канонический URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getRobots(): MetaRobots`}),` — мета-тег `,(0,c.jsx)(t.code,{children:`robots`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAuthor(): string`}),` — мета-тег `,(0,c.jsx)(t.code,{children:`author`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSiteName(): string`}),` — название сайта из Open Graph.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLocale(): string`}),` — локаль из Open Graph.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getOg(): MetaOg`}),` — прямой доступ к экземпляру `,(0,c.jsx)(t.code,{children:`MetaOg`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTwitter(): MetaTwitter`}),` — прямой доступ к экземпляру `,(0,c.jsx)(t.code,{children:`MetaTwitter`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы-для-генерации-html`,children:`Методы для генерации HTML`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`html(): string`}),` — генерирует полную HTML-строку всех мета-тегов: стандартных + Open Graph + Twitter Card. Используется для SSR.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`htmlTitle(): string`}),` — генерирует заголовок страницы.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`сеттеры`,children:`Сеттеры`}),`
`,(0,c.jsxs)(t.p,{children:[`Все сеттеры возвращают `,(0,c.jsx)(t.code,{children:`this`}),` для цепочки вызовов.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setTitle(title: string)`}),` — устанавливает `,(0,c.jsx)(t.code,{children:`document.title`}),` (с суффиксом), `,(0,c.jsx)(t.code,{children:`og:title`}),` и `,(0,c.jsx)(t.code,{children:`twitter:title`}),` одновременно.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKeywords(keywords: string | string[])`}),` — принимает строку или массив; массив объединяется через запятую.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setDescription(description: string)`}),` — устанавливает `,(0,c.jsx)(t.code,{children:`<meta name="description">`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setImage(image: string)`}),` — устанавливает `,(0,c.jsx)(t.code,{children:`og:image`}),` и `,(0,c.jsx)(t.code,{children:`twitter:image`}),` одновременно.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCanonical(canonical: string)`}),` — устанавливает `,(0,c.jsx)(t.code,{children:`<meta name="canonical">`}),`, `,(0,c.jsx)(t.code,{children:`og:url`}),` и `,(0,c.jsx)(t.code,{children:`twitter:url`}),` одновременно.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setRobots(robots: MetaRobots)`}),` — устанавливает `,(0,c.jsx)(t.code,{children:`<meta name="robots">`}),` (`,(0,c.jsx)(t.code,{children:`'index, follow'`}),`, `,(0,c.jsx)(t.code,{children:`'noindex, nofollow'`}),` и др.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setAuthor(author: string)`}),` — устанавливает `,(0,c.jsx)(t.code,{children:`<meta name="author">`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setSiteName(siteName: string)`}),` — устанавливает `,(0,c.jsx)(t.code,{children:`og:site_name`}),` и `,(0,c.jsx)(t.code,{children:`twitter:site`}),` одновременно.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setLocale(locale: string)`}),` — устанавливает `,(0,c.jsx)(t.code,{children:`og:locale`}),` (формат: `,(0,c.jsx)(t.code,{children:`'ru_RU'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setSuffix(suffix?: string)`}),` — суффикс заголовка. `,(0,c.jsx)(t.code,{children:`setTitle('Статья')`}),` + `,(0,c.jsx)(t.code,{children:`setSuffix('Сайт')`}),` → `,(0,c.jsx)(t.code,{children:`'Статья - Сайт'`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`генерация-html`,children:`Генерация HTML`}),`
`,(0,c.jsx)(t.h3,{id:`html-string`,children:(0,c.jsx)(t.code,{children:`html(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Генерирует полную HTML-строку всех мета-тегов: стандартных + Open Graph + Twitter Card. Используется для SSR.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const meta = new Meta()
meta.setTitle('Статья').setDescription('Описание').setImage('https://example.com/img.jpg')

const html = meta.html()
// <meta name="description" content="Описание">
// <meta property="og:title" content="Статья">
// <meta property="og:image" content="https://example.com/img.jpg">
// <meta name="twitter:title" content="Статья">
// ...
`})}),`
`,(0,c.jsx)(t.h3,{id:`htmltitle-string`,children:(0,c.jsx)(t.code,{children:`htmlTitle(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Генерирует текущий заголовок (включая суффикс).`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const meta = new Meta()
meta.setSuffix('Мой Сайт').setTitle('Главная')

meta.htmlTitle() // "Главная - Мой Сайт"
`})}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Meta } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};