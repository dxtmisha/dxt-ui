import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/MetaTwitter - Twitter Card мета-теги`}),`
`,(0,c.jsx)(n.h1,{id:`класс-metatwitter`,children:`Класс MetaTwitter`}),`
`,(0,c.jsxs)(n.p,{children:[`Наследует `,(0,c.jsx)(n.code,{children:`MetaManager`}),`. Управляет мета-тегами `,(0,c.jsx)(n.a,{href:`https://developer.twitter.com/en/docs/twitter-for-websites/cards`,rel:`nofollow`,children:`Twitter Card`}),` — используются Twitter/X для формирования карточек при публикации ссылок.`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для управления данными Twitter Card вызовите конструктор `,(0,c.jsx)(n.code,{children:`new MetaTwitter()`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Особенности:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Наследование`}),` — расширяет `,(0,c.jsx)(n.code,{children:`MetaManager`}),`, используя стандартный атрибут `,(0,c.jsx)(n.code,{children:`name`}),` для управления тегами.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандарт`}),` — предустановлен список всех основных тегов протокола `,(0,c.jsx)(n.a,{href:`https://developer.twitter.com/en/docs/twitter-for-websites/cards`,rel:`nofollow`,children:`Twitter Card`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { MetaTwitter } from '@dxtmisha/functional-basic'

const twitter = new MetaTwitter()
`})}),`
`,(0,c.jsx)(n.h2,{id:`поддерживаемые-теги`,children:`Поддерживаемые теги`}),`
`,(0,c.jsxs)(n.p,{children:[`Управляет следующими `,(0,c.jsx)(n.code,{children:`twitter:*`}),` тегами: `,(0,c.jsx)(n.code,{children:`twitter:card`}),`, `,(0,c.jsx)(n.code,{children:`twitter:site`}),`, `,(0,c.jsx)(n.code,{children:`twitter:creator`}),`, `,(0,c.jsx)(n.code,{children:`twitter:url`}),`, `,(0,c.jsx)(n.code,{children:`twitter:title`}),`, `,(0,c.jsx)(n.code,{children:`twitter:description`}),`, `,(0,c.jsx)(n.code,{children:`twitter:image`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`геттеры`,children:`Геттеры`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCard(): MetaTwitterCard`}),` — тип карточки (`,(0,c.jsx)(n.code,{children:`'summary'`}),`, `,(0,c.jsx)(n.code,{children:`'summary_large_image'`}),`, `,(0,c.jsx)(n.code,{children:`'app'`}),`, `,(0,c.jsx)(n.code,{children:`'player'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSite(): string`}),` — @username аккаунта сайта или бренда.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCreator(): string`}),` — @username автора контента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getUrl(): string`}),` — URL страницы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTitle(): string`}),` — заголовок карточки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDescription(): string`}),` — описание карточки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getImage(): string`}),` — URL изображения.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`сеттеры`,children:`Сеттеры`}),`
`,(0,c.jsxs)(n.p,{children:[`Все сеттеры обновляют тег в DOM и возвращают `,(0,c.jsx)(n.code,{children:`this`}),` для цепочки вызовов.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCard(card: MetaTwitterCard): this`}),` — тип карточки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSite(site: string): this`}),` — @username сайта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCreator(creator: string): this`}),` — @username автора.`]}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setUrl(url: string): this`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setTitle(title: string): this`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setDescription(description: string): this`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setImage(image: string): this`})}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { MetaTwitter } from '@dxtmisha/functional-basic'

const twitter = new MetaTwitter()

twitter
  .setCard('summary_large_image')
  .setSite('@mycompany')
  .setCreator('@author')
  .setTitle('Заголовок поста')
  .setDescription('Краткое описание')
  .setUrl('https://example.com/post/1')
  .setImage('https://example.com/images/preview.jpg')

// Для SSR
const html = twitter.html()
// '<meta name="twitter:card" content="summary_large_image">...'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};