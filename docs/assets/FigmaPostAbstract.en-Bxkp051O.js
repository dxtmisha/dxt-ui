import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/figma/Classes/FigmaPostAbstract - Base Messaging Class`}),`
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
`]}),`
`,(0,c.jsx)(n.h2,{id:`extending-the-class`,children:`Extending the Class`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`FigmaPostAbstract`}),` is an abstract class that serves as a foundation for creating custom messengers. To use it, you must create a subclass and implement two required methods:`]}),`
`,(0,c.jsx)(n.h3,{id:`post`,children:(0,c.jsx)(n.code,{children:`post`})}),`
`,(0,c.jsxs)(n.p,{children:[`An abstract method for implementing the logic to send messages to the other side. In a derived class, this method should encapsulate the system-specific send call (e.g., `,(0,c.jsx)(n.code,{children:`postMessage`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — The unique identifier for the message type.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message: Message`}),` — The message data to be sent.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`post<Message>(type: string, message?: Message): void {
  // Implementation of system sending
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`prepare`,children:(0,c.jsx)(n.code,{children:`prepare`})}),`
`,(0,c.jsxs)(n.p,{children:[`An abstract protected method for setting up the system's incoming event listener. This method is called automatically once when `,(0,c.jsx)(n.code,{children:`make()`}),` is executed. Within the implementation, `,(0,c.jsx)(n.code,{children:`this.onMessage(data)`}),` must be called whenever data is received.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`protected prepare(): void {
  // Setup subscription to system events
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(n.p,{children:`Once you have implemented your custom class, work with it as follows:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Initialization`}),`: Call the `,(0,c.jsx)(n.code,{children:`make()`}),` method to start the listener (triggers your `,(0,c.jsx)(n.code,{children:`prepare`}),` implementation).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Subscribing`}),`: Use the `,(0,c.jsx)(n.code,{children:`add(type, callback)`}),` method to handle incoming data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sending`}),`: Use the `,(0,c.jsx)(n.code,{children:`post(type, data)`}),` method.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const messenger = new MyMessenger().make();

messenger.add('my-event', (data) => {
  console.log('Message received:', data);
});

messenger.post('my-event', { hello: 'world' });
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};