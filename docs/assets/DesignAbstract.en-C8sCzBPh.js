import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Classes/DesignAbstract - Base Constructor Class`}),`
`,(0,c.jsx)(n.h1,{id:`designabstract-class`,children:`DesignAbstract Class`}),`
`,(0,c.jsx)(n.p,{children:`An abstract base class designed for managing constructor properties and state changes. It provides a structured way to handle input properties, track changes, and execute callbacks upon data updates.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Property Management`}),` — structured handling of input data (`,(0,c.jsx)(n.code,{children:`props`}),`) and event storage (`,(0,c.jsx)(n.code,{children:`event`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Change Tracking`}),` — integration with `,(0,c.jsx)(n.code,{children:`DesignChanged`}),` for efficient monitoring and updating of property changes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lifecycle Management`}),` — automatic execution of `,(0,c.jsx)(n.code,{children:`makeCallback`}),` and `,(0,c.jsx)(n.code,{children:`initEvent`}),` during data updates.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DesignAbstract`}),` is an abstract base class and cannot be initialized directly. It serves as a foundation for creating design classes that manage state based on input properties (`,(0,c.jsx)(n.code,{children:`props`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsx)(n.p,{children:`The class uses two types of generics to ensure strict typing:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T extends Record<string, any>`}),` — Type for input properties (`,(0,c.jsx)(n.code,{children:`props`}),`). Defines the data structure passed to the constructor and used for tracking changes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`C extends Record<string, any>`}),` — Type for output data or state (`,(0,c.jsx)(n.code,{children:`event`}),`). Defines the structure of the object formed in `,(0,c.jsx)(n.code,{children:`initEvent`}),` and passed to callbacks.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props: T`}),` — an object with initial initialization data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback?: (event: C) => void`}),` — an optional callback function executed after each data update.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`changed?: string[]`}),` — a list of property names from `,(0,c.jsx)(n.code,{children:`props`}),` to watch. If not specified, all keys of `,(0,c.jsx)(n.code,{children:`props`}),` are tracked.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Required Method to Implement:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`protected abstract initEvent(): void`}),` — a method that describes the logic for transforming or filtering `,(0,c.jsx)(n.code,{children:`props`}),` into a state object `,(0,c.jsx)(n.code,{children:`event`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignAbstract } from '@dxtmisha/functional'

// 1. Defining structures
interface MyProps { label: string; value: number }
interface MyState { display: string }

// 2. Implementing a concrete class
class MyDesign extends DesignAbstract<MyProps, MyState> {
  protected initEvent(): void {
    this.event.display = \`\${this.props.label}: \${this.props.value}\`
  }
}

// 3. Creating an instance
const design = new MyDesign(
  { label: 'Counter', value: 10 }, 
  (state) => console.log('New state:', state.display)
)
`})}),`
`,(0,c.jsx)(n.h2,{id:`data-management-methods`,children:`Data Management Methods`}),`
`,(0,c.jsx)(n.h3,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsxs)(n.p,{children:[`Initiates the callback update process. Calls `,(0,c.jsx)(n.code,{children:`makeCallback`}),` and returns the instance for method chaining.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`compelled?: boolean`}),` — if `,(0,c.jsx)(n.code,{children:`true`}),`, forces a data update regardless of changes.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.h3,{id:`makecallback`,children:(0,c.jsx)(n.code,{children:`makeCallback`})}),`
`,(0,c.jsx)(n.p,{children:`The primary execution logic for state updates. Checks for changes or forced updates, then initializes the event and triggers callbacks.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`compelled: boolean`}),` — forces data update. Default: `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h2,{id:`protected-methods-for-subclasses`,children:`Protected Methods (for Subclasses)`}),`
`,(0,c.jsx)(n.h3,{id:`is`,children:(0,c.jsx)(n.code,{children:`is`})}),`
`,(0,c.jsxs)(n.p,{children:[`Checks if a value exists in the `,(0,c.jsx)(n.code,{children:`props`}),` by name.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: keyof T`}),` — property name.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`boolean`})]}),`
`,(0,c.jsx)(n.h3,{id:`ischanged`,children:(0,c.jsx)(n.code,{children:`isChanged`})}),`
`,(0,c.jsx)(n.p,{children:`Checks if a property value has been changed. Used to prevent redundant calculations.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: keyof C`}),` — property name in the event.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nameProp?: keyof T | (keyof T)[]`}),` — property name or list of property names in `,(0,c.jsx)(n.code,{children:`props`}),` that this value depends on. If not specified, `,(0,c.jsx)(n.code,{children:`name`}),` is used.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`boolean`})]}),`
`,(0,c.jsx)(n.h3,{id:`makecallbackitem`,children:(0,c.jsx)(n.code,{children:`makeCallbackItem`})}),`
`,(0,c.jsx)(n.p,{children:`Executes the callback function passed to the constructor.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsxs)(n.h3,{id:`initevent-abstract`,children:[(0,c.jsx)(n.code,{children:`initEvent`}),` (abstract)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Abstract method that must be implemented in the subclass. It populates `,(0,c.jsx)(n.code,{children:`this.event`}),` based on `,(0,c.jsx)(n.code,{children:`this.props`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};