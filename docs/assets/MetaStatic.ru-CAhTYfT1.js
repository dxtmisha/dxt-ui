import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/MetaStatic - Управление мета-тегами (Static)`}),`
`,(0,c.jsx)(n.h1,{id:`класс-metastatic`,children:`Класс MetaStatic`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`MetaStatic`}),` является `,(0,c.jsx)(n.strong,{children:`статической точкой входа`}),` для управления мета-тегами страницы, данными Open Graph (OG) и Twitter Card. Он представляет собой статическую обертку над глобально управляемым экземпляром `,(0,c.jsx)(n.code,{children:`Meta`}),`, предоставляя удобный синглтон-интерфейс для SEO и социальных сетей.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Статический интерфейс`}),` — управление заголовками, описаниями и другими данными без необходимости ручного создания экземпляров.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Единое управление`}),` — автоматическая синхронизация заголовков и другой информации между стандартными мета-тегами, OG и Twitter.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Изоляция в SSR`}),` — использует `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` для обеспечения изоляции данных между запросами во время рендеринга на стороне сервера.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Fluent API`}),` — поддержка цепочки вызовов (method chaining) в методах установки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`доступ`,children:`Доступ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): Meta`}),` — Возвращает базовый экземпляр класса `,(0,c.jsx)(n.code,{children:`Meta`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOg(): MetaOg`}),` — Получает экземпляр `,(0,c.jsx)(n.code,{children:`MetaOg`}),` для расширенных операций с Open Graph.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTwitter(): MetaTwitter`}),` — Получает экземпляр `,(0,c.jsx)(n.code,{children:`MetaTwitter`}),` для расширенных операций с Twitter Card.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`получение-getters`,children:`Получение (Getters)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTitle(): string`}),` — Возвращает текущий заголовок (без суффикса).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDescription(): string`}),` — Возвращает содержимое мета-тега description.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getKeywords(): string`}),` — Возвращает список ключевых слов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getImage(): string`}),` — Возвращает URL изображения (из настроек OG).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCanonical(): string`}),` — Возвращает канонический URL.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getRobots(): MetaRobots`}),` — Возвращает текущую директиву robots.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAuthor(): string`}),` — Возвращает имя автора.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSiteName(): string`}),` — Возвращает название сайта (из настроек OG).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLocale(): string`}),` — Возвращает локаль (из настроек OG).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`установка-setters`,children:`Установка (Setters)`}),`
`,(0,c.jsxs)(n.p,{children:[`Все методы установки возвращают `,(0,c.jsx)(n.code,{children:`typeof MetaStatic`}),` для поддержки цепочки вызовов.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setTitle(title: string): typeof MetaStatic`}),` — Устанавливает заголовок страницы и обновляет заголовки OG/Twitter.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setDescription(description: string): typeof MetaStatic`}),` — Устанавливает мета-тег description.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setKeywords(keywords: string | string[]): typeof MetaStatic`}),` — Устанавливает ключевые слова (строка или массив).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setImage(image: string): typeof MetaStatic`}),` — Устанавливает изображение для OG и Twitter.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCanonical(canonical: string): typeof MetaStatic`}),` — Устанавливает канонический URL и обновляет URL для OG/Twitter.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setRobots(robots: MetaRobots): typeof MetaStatic`}),` — Устанавливает директиву robots.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setAuthor(author: string): typeof MetaStatic`}),` — Устанавливает мета-тег author.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSiteName(siteName: string): typeof MetaStatic`}),` — Устанавливает название сайта для OG и Twitter.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLocale(locale: string): typeof MetaStatic`}),` — Устанавливает локаль для Open Graph.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSuffix(suffix?: string): typeof MetaStatic`}),` — Устанавливает суффикс (например, " | Мой Сайт"), добавляемый к заголовкам.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`вывод`,children:`Вывод`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`html(): string`}),` — Генерирует полную строку HTML-тегов для всех управляемых свойств.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`htmlTitle(): string`}),` — Генерирует полную HTML-безопасную строку заголовка.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`архитектура`,children:`Архитектура`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`MetaStatic`}),` работает как `,(0,c.jsx)(n.strong,{children:`статический прокси`}),`. Все вызовы методов перенаправляются на внутренний экземпляр `,(0,c.jsx)(n.code,{children:`Meta`}),`, который управляется через `,(0,c.jsx)(n.code,{children:`ServerStorage`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`изоляция-запросов-ssr`,children:`Изоляция запросов (SSR)`}),`
`,(0,c.jsxs)(n.p,{children:[`Благодаря использованию `,(0,c.jsx)(n.code,{children:`ServerStorage`}),`, `,(0,c.jsx)(n.code,{children:`MetaStatic`}),` гарантирует, что при рендеринге на стороне сервера (SSR) информация одного запроса не попадет в другой. Каждый запрос получает свой изолированный контекст.`]}),`
`,(0,c.jsx)(n.h3,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { MetaStatic } from '@dxtmisha/functional-basic';

MetaStatic
  .setSuffix('Мой Интернет Магазин')
  .setTitle('Летняя коллекция')
  .setDescription('Ознакомьтесь с нашими новинками.')
  .setImage('https://example.com/cover.jpg')
  .setLocale('ru_RU');

console.log(MetaStatic.getTitle()); // "Летняя коллекция"
document.title; // "Летняя коллекция - Мой Интернет Магазин"
console.log(MetaStatic.htmlTitle()); // "Летняя коллекция - Мой Интернет Магазин"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};