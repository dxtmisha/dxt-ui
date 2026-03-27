import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Classes/DesignAsyncAbstract - Base Async Design Class`}),`
`,(0,c.jsx)(n.h1,{id:`designasyncabstract-class`,children:`DesignAsyncAbstract Class`}),`
`,(0,c.jsxs)(n.p,{children:[`An asynchronous abstract base class for managing constructor properties and state changes. It extends `,(0,c.jsx)(n.code,{children:`DesignAbstract`}),` to support asynchronous initialization of events, making it ideal for designs that require data fetching or async computations.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Asynchronous Initialization`}),` — supports `,(0,c.jsx)(n.code,{children:`Promise`}),` based event initialization via `,(0,c.jsx)(n.code,{children:`initEvent`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Property Management`}),` — inherited structured handling of input data (`,(0,c.jsx)(n.code,{children:`props`}),`) and event storage (`,(0,c.jsx)(n.code,{children:`event`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Async Workflow`}),` — ensures that callbacks are triggered only after asynchronous state preparation is complete.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DesignAsyncAbstract`}),` is an abstract class and cannot be initialized directly. It is intended to be extended by other classes that must implement the `,(0,c.jsx)(n.code,{children:`initEvent`}),` method for asynchronous data preparation.`]}),`
`,(0,c.jsx)(n.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsx)(n.p,{children:`The class uses two types of generics to ensure strict typing:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T extends Record<string, any>`}),` — Type for input properties (`,(0,c.jsx)(n.code,{children:`props`}),`). Defines the data structure passed to the constructor.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`C extends Record<string, any>`}),` — Type for internal state or cache (`,(0,c.jsx)(n.code,{children:`event`}),`). Defines the data structure available in callbacks after asynchronous initialization.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props: T`}),` — an object with the initial data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback?: (event: C) => void`}),` — a callback function that will be called after each successful update (including asynchronous ones).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`changed?: string[]`}),` — optional list of keys from `,(0,c.jsx)(n.code,{children:`props`}),` to watch. If not provided, all keys in `,(0,c.jsx)(n.code,{children:`props`}),` are tracked.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Internal Properties:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`protected readonly event: C`}),` — the state object. This is what you should populate with data in `,(0,c.jsx)(n.code,{children:`initEvent`}),`. It will be passed to the `,(0,c.jsx)(n.code,{children:`callback`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Required Method to Implement:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`protected abstract initEvent(): Promise<void>`}),` — an asynchronous method called whenever tracked properties change. This is where `,(0,c.jsx)(n.code,{children:`this.event`}),` should be prepared.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignAsyncAbstract } from '@dxtmisha/functional'

// 1. Defining interfaces
interface MyProps { userId: number }
interface MyState { userName: string; avatar: string }

// 2. Implementing a concrete class
class UserDesign extends DesignAsyncAbstract<MyProps, MyState> {
  protected async initEvent(): Promise<void> {
    const response = await fetch(\`https://api.example.com/users/\${this.props.userId}\`)
    const data = await response.json()
    
    this.event.userName = data.name
    this.event.avatar = data.image
  }
}

// 3. Usage
const user = new UserDesign(
  { userId: 1 }, 
  (state) => {
    console.log('User data loaded:', state.userName)
  },
  ['userId'] // Only track changes to userId
)
`})}),`
`,(0,c.jsx)(n.h2,{id:`data-management-methods`,children:`Data Management Methods`}),`
`,(0,c.jsx)(n.h3,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsxs)(n.p,{children:[`Initiates the asynchronous callback update process. It calls `,(0,c.jsx)(n.code,{children:`makeCallback`}),` (without waiting for its completion) and returns the instance for chaining.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`compelled?: boolean`}),` — if `,(0,c.jsx)(n.code,{children:`true`}),`, forces the data update regardless of whether changes were detected.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.h3,{id:`makecallback`,children:(0,c.jsx)(n.code,{children:`makeCallback`})}),`
`,(0,c.jsxs)(n.p,{children:[`The primary asynchronous execution logic for updating the state. It waits for `,(0,c.jsx)(n.code,{children:`initEvent`}),` to complete before triggering callbacks and updating the change tracker.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`compelled?: boolean`}),` — forces data update.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<void>`})]}),`
`,(0,c.jsx)(n.h2,{id:`protected-methods-for-subclasses`,children:`Protected Methods (for Subclasses)`}),`
`,(0,c.jsx)(n.h3,{id:`is`,children:(0,c.jsx)(n.code,{children:`is`})}),`
`,(0,c.jsxs)(n.p,{children:[`Checks for the existence of a key in the `,(0,c.jsx)(n.code,{children:`props`}),` object.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: keyof T`}),` — property name.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`boolean`})]}),`
`,(0,c.jsx)(n.h3,{id:`ischanged`,children:(0,c.jsx)(n.code,{children:`isChanged`})}),`
`,(0,c.jsxs)(n.p,{children:[`Checks if the value of a specified property has changed compared to its previous state. Useful inside `,(0,c.jsx)(n.code,{children:`initEvent`}),` to optimize requests (only perform an action if a specific ID has changed).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: keyof C`}),` — property name in the state.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nameProp?: keyof T | (keyof T)[]`}),` — property name or list of property names in `,(0,c.jsx)(n.code,{children:`props`}),` that the change is based on. Defaults to `,(0,c.jsx)(n.code,{children:`name`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`boolean`})]}),`
`,(0,c.jsx)(n.h3,{id:`makecallbackitem`,children:(0,c.jsx)(n.code,{children:`makeCallbackItem`})}),`
`,(0,c.jsx)(n.p,{children:`Executes the callback function passed to the constructor.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsxs)(n.h3,{id:`initevent-abstract`,children:[(0,c.jsx)(n.code,{children:`initEvent`}),` (abstract)`]}),`
`,(0,c.jsxs)(n.p,{children:[`An asynchronous method that must be implemented in the subclass. It populates `,(0,c.jsx)(n.code,{children:`this.event`}),` based on `,(0,c.jsx)(n.code,{children:`this.props`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<void>`})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};