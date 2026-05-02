import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/MetaOg - Open Graph мета-теги`}),`
`,(0,c.jsx)(n.h1,{id:`класс-metaog`,children:`Класс MetaOg`}),`
`,(0,c.jsxs)(n.p,{children:[`Наследует `,(0,c.jsx)(n.code,{children:`MetaManager`}),`. Управляет мета-тегами протокола `,(0,c.jsx)(n.a,{href:`https://ogp.me/`,rel:`nofollow`,children:`Open Graph`}),` — используются социальными сетями (VK, Facebook и др.) для формирования превью ссылок.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Атрибут мета-тегов — `,(0,c.jsx)(n.code,{children:`property`}),` (а не `,(0,c.jsx)(n.code,{children:`name`}),`), что соответствует стандарту Open Graph.`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для управления данными Open Graph вызовите конструктор `,(0,c.jsx)(n.code,{children:`new MetaOg()`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Особенности:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Наследование`}),` — расширяет `,(0,c.jsx)(n.code,{children:`MetaManager`}),`, используя атрибут `,(0,c.jsx)(n.code,{children:`property`}),` для управления тегами.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандарт`}),` — предустановлен список всех основных тегов протокола `,(0,c.jsx)(n.a,{href:`https://ogp.me/`,rel:`nofollow`,children:`Open Graph`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { MetaOg } from '@dxtmisha/functional-basic'

const og = new MetaOg()
`})}),`
`,(0,c.jsx)(n.h2,{id:`поддерживаемые-теги`,children:`Поддерживаемые теги`}),`
`,(0,c.jsxs)(n.p,{children:[`Управляет следующими `,(0,c.jsx)(n.code,{children:`og:*`}),` тегами: `,(0,c.jsx)(n.code,{children:`og:title`}),`, `,(0,c.jsx)(n.code,{children:`og:type`}),`, `,(0,c.jsx)(n.code,{children:`og:url`}),`, `,(0,c.jsx)(n.code,{children:`og:image`}),`, `,(0,c.jsx)(n.code,{children:`og:description`}),`, `,(0,c.jsx)(n.code,{children:`og:locale`}),`, `,(0,c.jsx)(n.code,{children:`og:site_name`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`геттеры`,children:`Геттеры`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTitle(): string`}),` — заголовок страницы для превью.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getType(): MetaOpenGraphType`}),` — тип контента (например: `,(0,c.jsx)(n.code,{children:`'website'`}),`, `,(0,c.jsx)(n.code,{children:`'article'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getUrl(): string`}),` — канонический URL страницы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getImage(): string`}),` — URL изображения для превью.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDescription(): string`}),` — описание страницы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLocale(): string`}),` — локаль в формате `,(0,c.jsx)(n.code,{children:`en_US`}),`, `,(0,c.jsx)(n.code,{children:`ru_RU`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSiteName(): string`}),` — название сайта.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`сеттеры`,children:`Сеттеры`}),`
`,(0,c.jsxs)(n.p,{children:[`Все сеттеры обновляют соответствующий тег в DOM и возвращают `,(0,c.jsx)(n.code,{children:`this`}),` для цепочки вызовов.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setTitle(title: string): this`})}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setType(type: MetaOpenGraphType): this`}),` — тип: `,(0,c.jsx)(n.code,{children:`'website'`}),`, `,(0,c.jsx)(n.code,{children:`'article'`}),`, `,(0,c.jsx)(n.code,{children:`'book'`}),`, `,(0,c.jsx)(n.code,{children:`'music.song'`}),` и другие.`]}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setUrl(url: string): this`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setImage(url: string): this`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setDescription(description: string): this`})}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLocale(locale: string): this`}),` — формат: `,(0,c.jsx)(n.code,{children:`'ru_RU'`}),`, `,(0,c.jsx)(n.code,{children:`'en_US'`}),`.`]}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setSiteName(siteName: string): this`})}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { MetaOg } from '@dxtmisha/functional-basic'

const og = new MetaOg()

og
  .setTitle('Моя статья')
  .setType('article')
  .setUrl('https://example.com/article/1')
  .setImage('https://example.com/images/cover.jpg')
  .setDescription('Описание моей статьи')
  .setLocale('ru_RU')
  .setSiteName('Мой сайт')

// Для SSR
const html = og.html()
// '<meta property="og:title" content="Моя статья">...'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};