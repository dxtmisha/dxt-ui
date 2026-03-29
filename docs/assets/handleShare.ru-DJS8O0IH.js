import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/handleShare - Обмен данными через Web Share API`}),`
`,(0,c.jsx)(n.h1,{id:`handleshare`,children:(0,c.jsx)(n.code,{children:`handleShare`})}),`
`,(0,c.jsxs)(n.p,{children:[`Вызывает встроенный механизм обмена данными мобильного устройства или операционной системы через Web Share API.
Рекомендуется проверять поддержку с помощью `,(0,c.jsx)(n.code,{children:`isShare`}),` перед вызовом.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: ShareData`}),` — объект, содержащий данные для обмена (заголовок, текст, ссылка).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<boolean>`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если данные были успешно переданы, иначе `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { handleShare, isShare } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};