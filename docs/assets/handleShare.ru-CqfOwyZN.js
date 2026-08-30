import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/handleShare - Обмен данными через Web Share API`}),`
`,(0,c.jsx)(t.h1,{id:`handleshare`,children:(0,c.jsx)(t.code,{children:`handleShare`})}),`
`,(0,c.jsxs)(t.p,{children:[`Вызывает встроенный механизм обмена данными мобильного устройства или операционной системы через Web Share API.
Рекомендуется проверять поддержку с помощью `,(0,c.jsx)(t.code,{children:`isShare`}),` перед вызовом.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ShareData`}),` — объект, содержащий данные для обмена (заголовок, текст, ссылка).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если данные были успешно переданы, иначе `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { handleShare, isShare } from '@dxtmisha/functional-basic'

const shareData = {
  title: 'Посмотрите этот сайт!',
  text: 'Я нашел здесь кое-что интересное.',
  url: 'https://example.com'
}

if (isShare()) {
  const success = await handleShare(shareData)
  
  if (success) {
    console.log('Данные успешно переданы!')
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};