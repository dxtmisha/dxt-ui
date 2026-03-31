import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/figma/Classes/FigmaPostAbstract - Base Messaging Class`}),`
`,(0,c.jsx)(n.h1,{id:`figmapostabstract-class`,children:`FigmaPostAbstract Class`}),`
`,(0,c.jsx)(n.p,{children:`Base abstract class for managing messaging between the Figma plugin (backend) and the UI (frontend). It provides a structured foundation for bidirectional communication with built-in verification and multiple listener management.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bidirectional Support`}),` — Foundation for both `,(0,c.jsx)(n.code,{children:`FigmaPluginMessenger`}),` and `,(0,c.jsx)(n.code,{children:`FigmaUiMessenger`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Message Verification`}),` — Uses `,(0,c.jsx)(n.code,{children:`FigmaPostCode`}),` to ensure that messages originated from the same plugin instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Multicast Listeners`}),` — Supports multiple callbacks for a single message type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Method Chaining`}),` — Methods like `,(0,c.jsx)(n.code,{children:`make`}),` and `,(0,c.jsx)(n.code,{children:`add`}),` return `,(0,c.jsx)(n.code,{children:`this`}),`, allowing for a more concise initialization.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`public-methods`,children:`Public Methods`}),`
`,(0,c.jsx)(n.h3,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsxs)(n.p,{children:[`Initializes the message listener. This method ensures that the environment-specific setup (`,(0,c.jsx)(n.code,{children:`prepare`}),`) is executed exactly once, regardless of how many times `,(0,c.jsx)(n.code,{children:`make`}),` is called.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const messenger = new FigmaPluginMessenger().make()
`})}),`
`,(0,c.jsx)(n.h3,{id:`add`,children:(0,c.jsx)(n.code,{children:`add`})}),`
`,(0,c.jsx)(n.p,{children:`Registers a callback function to be executed when a message of a specific type is received.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — The unique identifier for the message type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: UiFigmaMessengerCallback<Message>`}),` — The function to call when the message is received. Receives the message data as its first argument.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`once: boolean = false`}),` — If set to `,(0,c.jsx)(n.code,{children:`true`}),`, the callback will be automatically removed after being called once.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`messenger
  .add('update-selection', (data) => console.log('Selection:', data.count))
  .add('init', (data) => console.log('Init:', data), true)
  .add('close', () => figma.closePlugin())
`})}),`
`,(0,c.jsx)(n.h3,{id:`remove`,children:(0,c.jsx)(n.code,{children:`remove`})}),`
`,(0,c.jsx)(n.p,{children:`Removes a previously registered callback function for a specific message type.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — The unique identifier for the message type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: UiFigmaMessengerCallback<Message>`}),` — The function to be removed from the listeners.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const onUpdate = (data) => console.log('Selection:', data.count)

messenger
  .add('update-selection', onUpdate)
  .remove('update-selection', onUpdate)
`})}),`
`,(0,c.jsx)(n.h2,{id:`data-structures`,children:`Data Structures`}),`
`,(0,c.jsx)(n.h3,{id:`uifigmamessengerdata`,children:(0,c.jsx)(n.code,{children:`UiFigmaMessengerData`})}),`
`,(0,c.jsx)(n.p,{children:`The structure of the data object passed through the messaging pipeline:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string`}),` — The verification code from `,(0,c.jsx)(n.code,{children:`FigmaPostCode`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — The identifier of the message.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message: Message`}),` — The actual payload data.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};