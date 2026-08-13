import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h4:`h4`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/# UI Figma/# Working with Styles`}),`
`,(0,c.jsx)(t.h1,{id:`working-with-styles`,children:`Working with Styles`}),`
`,(0,c.jsx)(t.p,{children:`The system for retrieving extended style data enables the transfer of detailed information (CSS, JSON structures, text content) from the Figma canvas to the plugin's interface upon request.`}),`
`,(0,c.jsx)(t.h2,{id:`backend-backend--plugincodets`,children:`Backend (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(t.p,{children:`On the plugin code side, you need to initialize a handler that will respond to data requests from the UI.`}),`
`,(0,c.jsx)(t.h4,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Call the `,(0,c.jsx)(t.code,{children:`setupFrameStyles()`}),` function once when the plugin starts:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setupFrameStyles } from '@dxtmisha/figma-code'

// Initialize the style request handler
setupFrameStyles()
`})}),`
`,(0,c.jsx)(t.h2,{id:`interface-ui--iframe`,children:`Interface (UI / Iframe)`}),`
`,(0,c.jsx)(t.p,{children:`Tools for sending style requests and reactively observing the results.`}),`
`,(0,c.jsx)(t.h4,{id:`reactive-usage-vue`,children:`Reactive Usage (Vue)`}),`
`,(0,c.jsxs)(t.p,{children:[`The recommended way is through the `,(0,c.jsx)(t.code,{children:`useFigmaFrameStyles`}),` composable.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaFrameStyles } from '@dxtmisha/figma-ref'

const { 
  styles, // Computed list of retrieved styles (ComputedRef)
  send    // Method to send a request: send({ ids, children })
} = useFigmaFrameStyles()

// Example of requesting styles for specific nodes
const fetchDetails = () => {
  send({ ids: ['1:10', '1:25'], children: true })
}
`})}),`
`,(0,c.jsx)(t.h4,{id:`direct-management-javascript`,children:`Direct Management (JavaScript)`}),`
`,(0,c.jsx)(t.p,{children:`If you are not using Vue, you can use the base functions to send a request and subscribe to the response:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { sendFrameStyles, fetchFrameStyles } from '@dxtmisha/figma'

// Request styles
sendFrameStyles({ ids: '1:10', children: true })

// Subscribe to receiving data
fetchFrameStyles((data) => {
  console.log('Received style data:', data)
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};