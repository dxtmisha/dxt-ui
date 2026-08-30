import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/DesignAbstract - Base Constructor Class`}),`
`,(0,c.jsx)(t.h1,{id:`designabstract-class`,children:`DesignAbstract Class`}),`
`,(0,c.jsx)(t.p,{children:`An abstract base class designed for managing constructor properties and state changes. It provides a structured way to handle input properties, track changes, and execute callbacks upon data updates.`}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Property Management`}),` — structured handling of input data (`,(0,c.jsx)(t.code,{children:`props`}),`) and event storage (`,(0,c.jsx)(t.code,{children:`event`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Change Tracking`}),` — integration with `,(0,c.jsx)(t.code,{children:`DesignChanged`}),` for efficient monitoring and updating of property changes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lifecycle Management`}),` — automatic execution of `,(0,c.jsx)(t.code,{children:`makeCallback`}),` and `,(0,c.jsx)(t.code,{children:`initEvent`}),` during data updates.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`DesignAbstract`}),` is an abstract base class and cannot be initialized directly. It serves as a foundation for creating design classes that manage state based on input properties (`,(0,c.jsx)(t.code,{children:`props`}),`).`]}),`
`,(0,c.jsx)(t.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsx)(t.p,{children:`The class uses two types of generics to ensure strict typing:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`T extends Record<string, any>`}),` — Type for input properties (`,(0,c.jsx)(t.code,{children:`props`}),`). Defines the data structure passed to the constructor and used for tracking changes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`C extends Record<string, any>`}),` — Type for output data or state (`,(0,c.jsx)(t.code,{children:`event`}),`). Defines the structure of the object formed in `,(0,c.jsx)(t.code,{children:`initEvent`}),` and passed to callbacks.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props: T`}),` — an object with initial initialization data.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback?: (event: C) => void`}),` — an optional callback function executed after each data update.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`changed?: string[]`}),` — a list of property names from `,(0,c.jsx)(t.code,{children:`props`}),` to watch. If not specified, all keys of `,(0,c.jsx)(t.code,{children:`props`}),` are tracked.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Required Method to Implement:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected abstract initEvent(): void`}),` — a method that describes the logic for transforming or filtering `,(0,c.jsx)(t.code,{children:`props`}),` into a state object `,(0,c.jsx)(t.code,{children:`event`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignAbstract } from '@dxtmisha/functional'

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
`,(0,c.jsx)(t.h2,{id:`data-management-methods`,children:`Data Management Methods`}),`
`,(0,c.jsx)(t.h3,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsxs)(t.p,{children:[`Initiates the callback update process. Calls `,(0,c.jsx)(t.code,{children:`makeCallback`}),` and returns the instance for method chaining.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`compelled?: boolean`}),` — if `,(0,c.jsx)(t.code,{children:`true`}),`, forces a data update regardless of changes.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`this`})]}),`
`,(0,c.jsx)(t.h3,{id:`makecallback`,children:(0,c.jsx)(t.code,{children:`makeCallback`})}),`
`,(0,c.jsx)(t.p,{children:`The primary execution logic for state updates. Checks for changes or forced updates, then initializes the event and triggers callbacks.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`compelled: boolean`}),` — forces data update. Default: `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h2,{id:`protected-methods-for-subclasses`,children:`Protected Methods (for Subclasses)`}),`
`,(0,c.jsx)(t.h3,{id:`is`,children:(0,c.jsx)(t.code,{children:`is`})}),`
`,(0,c.jsxs)(t.p,{children:[`Checks if a value exists in the `,(0,c.jsx)(t.code,{children:`props`}),` by name.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: keyof T`}),` — property name.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`boolean`})]}),`
`,(0,c.jsx)(t.h3,{id:`ischanged`,children:(0,c.jsx)(t.code,{children:`isChanged`})}),`
`,(0,c.jsx)(t.p,{children:`Checks if a property value has been changed. Used to prevent redundant calculations.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: keyof C`}),` — property name in the event.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nameProp?: keyof T | (keyof T)[]`}),` — property name or list of property names in `,(0,c.jsx)(t.code,{children:`props`}),` that this value depends on. If not specified, `,(0,c.jsx)(t.code,{children:`name`}),` is used.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`boolean`})]}),`
`,(0,c.jsx)(t.h3,{id:`makecallbackitem`,children:(0,c.jsx)(t.code,{children:`makeCallbackItem`})}),`
`,(0,c.jsx)(t.p,{children:`Executes the callback function passed to the constructor.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsxs)(t.h3,{id:`initevent-abstract`,children:[(0,c.jsx)(t.code,{children:`initEvent`}),` (abstract)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Abstract method that must be implemented in the subclass. It populates `,(0,c.jsx)(t.code,{children:`this.event`}),` based on `,(0,c.jsx)(t.code,{children:`this.props`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`void`})]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};