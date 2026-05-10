import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h4:`h4`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/# UI Figma/# Working with Styles`}),`
`,(0,c.jsx)(n.h1,{id:`working-with-styles`,children:`Working with Styles`}),`
`,(0,c.jsx)(n.p,{children:`The system for retrieving extended style data enables the transfer of detailed information (CSS, JSON structures, text content) from the Figma canvas to the plugin's interface upon request.`}),`
`,(0,c.jsx)(n.h2,{id:`backend-backend--plugincodets`,children:`Backend (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(n.p,{children:`On the plugin code side, you need to initialize a handler that will respond to data requests from the UI.`}),`
`,(0,c.jsx)(n.h4,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Call the `,(0,c.jsx)(n.code,{children:`setupFrameStyles()`}),` function once when the plugin starts:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { setupFrameStyles } from '@dxtmisha/figma-code'

// Initialize the style request handler
setupFrameStyles()
`})}),`
`,(0,c.jsx)(n.h2,{id:`interface-ui--iframe`,children:`Interface (UI / Iframe)`}),`
`,(0,c.jsx)(n.p,{children:`Tools for sending style requests and reactively observing the results.`}),`
`,(0,c.jsx)(n.h4,{id:`reactive-usage-vue`,children:`Reactive Usage (Vue)`}),`
`,(0,c.jsxs)(n.p,{children:[`The recommended way is through the `,(0,c.jsx)(n.code,{children:`useFigmaFrameStyles`}),` composable.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaFrameStyles } from '@dxtmisha/figma-ref'

const { 
  styles, // Computed list of retrieved styles (ComputedRef)
  send    // Method to send a request: send({ ids, children })
} = useFigmaFrameStyles()

// Example of requesting styles for specific nodes
const fetchDetails = () => {
  send({ ids: ['1:10', '1:25'], children: true })
}
`})}),`
`,(0,c.jsx)(n.h4,{id:`direct-management-javascript`,children:`Direct Management (JavaScript)`}),`
`,(0,c.jsx)(n.p,{children:`If you are not using Vue, you can use the base functions to send a request and subscribe to the response:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { sendFrameStyles, fetchFrameStyles } from '@dxtmisha/figma'

// Request styles
sendFrameStyles({ ids: '1:10', children: true })

// Subscribe to receiving data
fetchFrameStyles((data) => {
  console.log('Received style data:', data)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};