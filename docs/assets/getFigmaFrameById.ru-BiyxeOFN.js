import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/figma-code/Functions/getFigmaFrameById - Получение FigmaFrame по ID`}),`
`,(0,c.jsx)(t.h1,{id:`getfigmaframebyid`,children:(0,c.jsx)(t.code,{children:`getFigmaFrameById`})}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает объект `,(0,c.jsx)(t.code,{children:`FigmaFrame`}),` по его идентификатору.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`id: string`}),` — Идентификатор (ID) узла Figma.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<FigmaFrame | undefined>`}),` — Объект `,(0,c.jsx)(t.code,{children:`FigmaFrame`}),` или `,(0,c.jsx)(t.code,{children:`undefined`}),`, если узел не найден.`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getFigmaFrameById } from '@dxtmisha/figma-code'

async function analyzeFrame(frameId: string) {
  const frame = await getFigmaFrameById(frameId)

  if (frame) {
    const info = await frame.getMainItemsInfo()
    console.log('Основные элементы во фрейме:', info)
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};