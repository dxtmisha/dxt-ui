import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/ru/functional-basic/Classes/MetaOg - Open Graph мета-теги"}),`
`,e.jsx(n.h1,{id:"класс-metaog",children:"Класс MetaOg"}),`
`,e.jsxs(n.p,{children:["Наследует ",e.jsx(n.code,{children:"MetaManager"}),". Управляет мета-тегами протокола ",e.jsx(n.a,{href:"https://ogp.me/",rel:"nofollow",children:"Open Graph"})," — используются социальными сетями (VK, Facebook и др.) для формирования превью ссылок."]}),`
`,e.jsxs(n.p,{children:["Атрибут мета-тегов — ",e.jsx(n.code,{children:"property"})," (а не ",e.jsx(n.code,{children:"name"}),"), что соответствует стандарту Open Graph."]}),`
`,e.jsx(n.h2,{id:"поддерживаемые-теги",children:"Поддерживаемые теги"}),`
`,e.jsxs(n.p,{children:["Управляет следующими ",e.jsx(n.code,{children:"og:*"})," тегами: ",e.jsx(n.code,{children:"og:title"}),", ",e.jsx(n.code,{children:"og:type"}),", ",e.jsx(n.code,{children:"og:url"}),", ",e.jsx(n.code,{children:"og:image"}),", ",e.jsx(n.code,{children:"og:description"}),", ",e.jsx(n.code,{children:"og:locale"}),", ",e.jsx(n.code,{children:"og:site_name"}),"."]}),`
`,e.jsx(n.h2,{id:"геттеры",children:"Геттеры"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getTitle(): string"})," — заголовок страницы для превью."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getType(): MetaOpenGraphType"})," — тип контента (например: ",e.jsx(n.code,{children:"'website'"}),", ",e.jsx(n.code,{children:"'article'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getUrl(): string"})," — канонический URL страницы."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getImage(): string"})," — URL изображения для превью."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDescription(): string"})," — описание страницы."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getLocale(): string"})," — локаль в формате ",e.jsx(n.code,{children:"en_US"}),", ",e.jsx(n.code,{children:"ru_RU"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getSiteName(): string"})," — название сайта."]}),`
`]}),`
`,e.jsx(n.h2,{id:"сеттеры",children:"Сеттеры"}),`
`,e.jsxs(n.p,{children:["Все сеттеры обновляют соответствующий тег в DOM и возвращают ",e.jsx(n.code,{children:"this"})," для цепочки вызовов."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"setTitle(title: string): this"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setType(type: MetaOpenGraphType): this"})," — тип: ",e.jsx(n.code,{children:"'website'"}),", ",e.jsx(n.code,{children:"'article'"}),", ",e.jsx(n.code,{children:"'book'"}),", ",e.jsx(n.code,{children:"'music.song'"})," и другие."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"setUrl(url: string): this"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"setImage(url: string): this"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"setDescription(description: string): this"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setLocale(locale: string): this"})," — формат: ",e.jsx(n.code,{children:"'ru_RU'"}),", ",e.jsx(n.code,{children:"'en_US'"}),"."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"setSiteName(siteName: string): this"})}),`
`]}),`
`,e.jsx(n.h2,{id:"пример",children:"Пример"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg } from '@dxtmisha/functional-basic'

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
`})})]})}function j(i={}){const{wrapper:n}={...c(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{j as default};
