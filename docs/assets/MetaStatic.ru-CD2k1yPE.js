import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/MetaStatic - Управление мета-тегами (Static)`}),`
`,(0,c.jsx)(t.h1,{id:`класс-metastatic`,children:`Класс MetaStatic`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`MetaStatic`}),` является `,(0,c.jsx)(t.strong,{children:`статической точкой входа`}),` для управления мета-тегами страницы, данными Open Graph (OG) и Twitter Card. Он представляет собой статическую обертку над глобально управляемым экземпляром `,(0,c.jsx)(t.code,{children:`Meta`}),`, предоставляя удобный синглтон-интерфейс для SEO и социальных сетей.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Статический интерфейс`}),` — управление заголовками, описаниями и другими данными без необходимости ручного создания экземпляров.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Единое управление`}),` — автоматическая синхронизация заголовков и другой информации между стандартными мета-тегами, OG и Twitter.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Изоляция в SSR`}),` — использует `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` для обеспечения изоляции данных между запросами во время рендеринга на стороне сервера.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Fluent API`}),` — поддержка цепочки вызовов (method chaining) в методах установки.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`доступ`,children:`Доступ`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItem(): Meta`}),` — Возвращает базовый экземпляр класса `,(0,c.jsx)(t.code,{children:`Meta`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getOg(): MetaOg`}),` — Получает экземпляр `,(0,c.jsx)(t.code,{children:`MetaOg`}),` для расширенных операций с Open Graph.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTwitter(): MetaTwitter`}),` — Получает экземпляр `,(0,c.jsx)(t.code,{children:`MetaTwitter`}),` для расширенных операций с Twitter Card.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`получение-getters`,children:`Получение (Getters)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTitle(): string`}),` — Возвращает текущий заголовок (без суффикса).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDescription(): string`}),` — Возвращает содержимое мета-тега description.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getKeywords(): string`}),` — Возвращает список ключевых слов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getImage(): string`}),` — Возвращает URL изображения (из настроек OG).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCanonical(): string`}),` — Возвращает канонический URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getRobots(): MetaRobots`}),` — Возвращает текущую директиву robots.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getAuthor(): string`}),` — Возвращает имя автора.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSiteName(): string`}),` — Возвращает название сайта (из настроек OG).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLocale(): string`}),` — Возвращает локаль (из настроек OG).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`установка-setters`,children:`Установка (Setters)`}),`
`,(0,c.jsxs)(t.p,{children:[`Все методы установки возвращают `,(0,c.jsx)(t.code,{children:`typeof MetaStatic`}),` для поддержки цепочки вызовов.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setTitle(title: string): typeof MetaStatic`}),` — Устанавливает заголовок страницы и обновляет заголовки OG/Twitter.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setDescription(description: string): typeof MetaStatic`}),` — Устанавливает мета-тег description.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKeywords(keywords: string | string[]): typeof MetaStatic`}),` — Устанавливает ключевые слова (строка или массив).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setImage(image: string): typeof MetaStatic`}),` — Устанавливает изображение для OG и Twitter.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCanonical(canonical: string): typeof MetaStatic`}),` — Устанавливает канонический URL и обновляет URL для OG/Twitter.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setRobots(robots: MetaRobots): typeof MetaStatic`}),` — Устанавливает директиву robots.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setAuthor(author: string): typeof MetaStatic`}),` — Устанавливает мета-тег author.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setSiteName(siteName: string): typeof MetaStatic`}),` — Устанавливает название сайта для OG и Twitter.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setLocale(locale: string): typeof MetaStatic`}),` — Устанавливает локаль для Open Graph.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setSuffix(suffix?: string): typeof MetaStatic`}),` — Устанавливает суффикс (например, " | Мой Сайт"), добавляемый к заголовкам.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`вывод`,children:`Вывод`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`html(): string`}),` — Генерирует полную строку HTML-тегов для всех управляемых свойств.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`htmlTitle(): string`}),` — Генерирует полную HTML-безопасную строку заголовка.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`архитектура`,children:`Архитектура`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`MetaStatic`}),` работает как `,(0,c.jsx)(t.strong,{children:`статический прокси`}),`. Все вызовы методов перенаправляются на внутренний экземпляр `,(0,c.jsx)(t.code,{children:`Meta`}),`, который управляется через `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`изоляция-запросов-ssr`,children:`Изоляция запросов (SSR)`}),`
`,(0,c.jsxs)(t.p,{children:[`Благодаря использованию `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`, `,(0,c.jsx)(t.code,{children:`MetaStatic`}),` гарантирует, что при рендеринге на стороне сервера (SSR) информация одного запроса не попадет в другой. Каждый запрос получает свой изолированный контекст.`]}),`
`,(0,c.jsx)(t.h3,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MetaStatic } from '@dxtmisha/functional-basic';

MetaStatic
  .setSuffix('Мой Интернет Магазин')
  .setTitle('Летняя коллекция')
  .setDescription('Ознакомьтесь с нашими новинками.')
  .setImage('https://example.com/cover.jpg')
  .setLocale('ru_RU');

console.log(MetaStatic.getTitle()); // "Летняя коллекция"
document.title; // "Летняя коллекция - Мой Интернет Магазин"
console.log(MetaStatic.htmlTitle()); // "Летняя коллекция - Мой Интернет Магазин"
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};