import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/handleShare - Share data via Web Share API`}),`
`,(0,c.jsx)(t.h1,{id:`handleshare`,children:(0,c.jsx)(t.code,{children:`handleShare`})}),`
`,(0,c.jsxs)(t.p,{children:[`Invokes the native sharing mechanism of the device as part of the Web Share API.
Check support with `,(0,c.jsx)(t.code,{children:`isShare`}),` before calling.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ShareData`}),` — an object containing data to share (title, text, url).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` if the data was shared successfully, otherwise `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { handleShare, isShare } from '@dxtmisha/functional-basic'

const shareData = {
  title: 'Check out this website!',
  text: 'I found something interesting here.',
  url: 'https://example.com'
}

if (isShare()) {
  const success = await handleShare(shareData)
  
  if (success) {
    console.log('Shared successfully!')
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};