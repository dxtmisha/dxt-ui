import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as n}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/ru/functional-basic/Classes/MetaTwitter - Twitter Card мета-теги"}),`
`,e.jsx(t.h1,{id:"класс-metatwitter",children:"Класс MetaTwitter"}),`
`,e.jsxs(t.p,{children:["Наследует ",e.jsx(t.code,{children:"MetaManager"}),". Управляет мета-тегами ",e.jsx(t.a,{href:"https://developer.twitter.com/en/docs/twitter-for-websites/cards",rel:"nofollow",children:"Twitter Card"})," — используются Twitter/X для формирования карточек при публикации ссылок."]}),`
`,e.jsx(t.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(t.p,{children:["Для управления данными Twitter Card вызовите конструктор ",e.jsx(t.code,{children:"new MetaTwitter()"}),"."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Особенности:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Наследование"})," — расширяет ",e.jsx(t.code,{children:"MetaManager"}),", используя стандартный атрибут ",e.jsx(t.code,{children:"name"})," для управления тегами."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Стандарт"})," — предустановлен список всех основных тегов протокола ",e.jsx(t.a,{href:"https://developer.twitter.com/en/docs/twitter-for-websites/cards",rel:"nofollow",children:"Twitter Card"}),"."]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter } from '@dxtmisha/functional-basic'

const twitter = new MetaTwitter()
`})}),`
`,e.jsx(t.h2,{id:"поддерживаемые-теги",children:"Поддерживаемые теги"}),`
`,e.jsxs(t.p,{children:["Управляет следующими ",e.jsx(t.code,{children:"twitter:*"})," тегами: ",e.jsx(t.code,{children:"twitter:card"}),", ",e.jsx(t.code,{children:"twitter:site"}),", ",e.jsx(t.code,{children:"twitter:creator"}),", ",e.jsx(t.code,{children:"twitter:url"}),", ",e.jsx(t.code,{children:"twitter:title"}),", ",e.jsx(t.code,{children:"twitter:description"}),", ",e.jsx(t.code,{children:"twitter:image"}),"."]}),`
`,e.jsx(t.h2,{id:"геттеры",children:"Геттеры"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getCard(): MetaTwitterCard"})," — тип карточки (",e.jsx(t.code,{children:"'summary'"}),", ",e.jsx(t.code,{children:"'summary_large_image'"}),", ",e.jsx(t.code,{children:"'app'"}),", ",e.jsx(t.code,{children:"'player'"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getSite(): string"})," — @username аккаунта сайта или бренда."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getCreator(): string"})," — @username автора контента."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getUrl(): string"})," — URL страницы."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getTitle(): string"})," — заголовок карточки."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getDescription(): string"})," — описание карточки."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getImage(): string"})," — URL изображения."]}),`
`]}),`
`,e.jsx(t.h2,{id:"сеттеры",children:"Сеттеры"}),`
`,e.jsxs(t.p,{children:["Все сеттеры обновляют тег в DOM и возвращают ",e.jsx(t.code,{children:"this"})," для цепочки вызовов."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setCard(card: MetaTwitterCard): this"})," — тип карточки."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setSite(site: string): this"})," — @username сайта."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setCreator(creator: string): this"})," — @username автора."]}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"setUrl(url: string): this"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"setTitle(title: string): this"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"setDescription(description: string): this"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"setImage(image: string): this"})}),`
`]}),`
`,e.jsx(t.h2,{id:"пример",children:"Пример"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter } from '@dxtmisha/functional-basic'

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
`})})]})}function x(r={}){const{wrapper:t}={...n(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(i,{...r})}):i(r)}export{x as default};
