import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/MetaOg - Open Graph мета-теги`}),`
`,(0,c.jsx)(t.h1,{id:`класс-metaog`,children:`Класс MetaOg`}),`
`,(0,c.jsxs)(t.p,{children:[`Наследует `,(0,c.jsx)(t.code,{children:`MetaManager`}),`. Управляет мета-тегами протокола `,(0,c.jsx)(t.a,{href:`https://ogp.me/`,rel:`nofollow`,children:`Open Graph`}),` — используются социальными сетями (VK, Facebook и др.) для формирования превью ссылок.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Атрибут мета-тегов — `,(0,c.jsx)(t.code,{children:`property`}),` (а не `,(0,c.jsx)(t.code,{children:`name`}),`), что соответствует стандарту Open Graph.`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Для управления данными Open Graph вызовите конструктор `,(0,c.jsx)(t.code,{children:`new MetaOg()`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Наследование`}),` — расширяет `,(0,c.jsx)(t.code,{children:`MetaManager`}),`, используя атрибут `,(0,c.jsx)(t.code,{children:`property`}),` для управления тегами.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Стандарт`}),` — предустановлен список всех основных тегов протокола `,(0,c.jsx)(t.a,{href:`https://ogp.me/`,rel:`nofollow`,children:`Open Graph`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { MetaOg } from '@dxtmisha/functional-basic'

const og = new MetaOg()
`})}),`
`,(0,c.jsx)(t.h2,{id:`поддерживаемые-теги`,children:`Поддерживаемые теги`}),`
`,(0,c.jsxs)(t.p,{children:[`Управляет следующими `,(0,c.jsx)(t.code,{children:`og:*`}),` тегами: `,(0,c.jsx)(t.code,{children:`og:title`}),`, `,(0,c.jsx)(t.code,{children:`og:type`}),`, `,(0,c.jsx)(t.code,{children:`og:url`}),`, `,(0,c.jsx)(t.code,{children:`og:image`}),`, `,(0,c.jsx)(t.code,{children:`og:description`}),`, `,(0,c.jsx)(t.code,{children:`og:locale`}),`, `,(0,c.jsx)(t.code,{children:`og:site_name`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`геттеры`,children:`Геттеры`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTitle(): string`}),` — заголовок страницы для превью.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getType(): MetaOpenGraphType`}),` — тип контента (например: `,(0,c.jsx)(t.code,{children:`'website'`}),`, `,(0,c.jsx)(t.code,{children:`'article'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getUrl(): string`}),` — канонический URL страницы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getImage(): string`}),` — URL изображения для превью.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDescription(): string`}),` — описание страницы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLocale(): string`}),` — локаль в формате `,(0,c.jsx)(t.code,{children:`en_US`}),`, `,(0,c.jsx)(t.code,{children:`ru_RU`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSiteName(): string`}),` — название сайта.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`сеттеры`,children:`Сеттеры`}),`
`,(0,c.jsxs)(t.p,{children:[`Все сеттеры обновляют соответствующий тег в DOM и возвращают `,(0,c.jsx)(t.code,{children:`this`}),` для цепочки вызовов.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setTitle(title: string): this`})}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setType(type: MetaOpenGraphType): this`}),` — тип: `,(0,c.jsx)(t.code,{children:`'website'`}),`, `,(0,c.jsx)(t.code,{children:`'article'`}),`, `,(0,c.jsx)(t.code,{children:`'book'`}),`, `,(0,c.jsx)(t.code,{children:`'music.song'`}),` и другие.`]}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setUrl(url: string): this`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setImage(url: string): this`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setDescription(description: string): this`})}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setLocale(locale: string): this`}),` — формат: `,(0,c.jsx)(t.code,{children:`'ru_RU'`}),`, `,(0,c.jsx)(t.code,{children:`'en_US'`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setSiteName(siteName: string): this`})}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { MetaOg } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};