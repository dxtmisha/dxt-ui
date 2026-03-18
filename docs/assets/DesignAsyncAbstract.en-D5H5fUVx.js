import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional/Classes/DesignAsyncAbstract - Base Async Design Class"}),`
`,e.jsx(n.h1,{id:"designasyncabstract-class",children:"DesignAsyncAbstract Class"}),`
`,e.jsxs(n.p,{children:["An asynchronous abstract base class for managing constructor properties and state changes. It extends ",e.jsx(n.code,{children:"DesignAbstract"})," to support asynchronous initialization of events, making it ideal for designs that require data fetching or async computations."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Asynchronous Initialization"})," — supports ",e.jsx(n.code,{children:"Promise"})," based event initialization via ",e.jsx(n.code,{children:"initEvent"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Property Management"})," — inherited structured handling of input data (",e.jsx(n.code,{children:"props"}),") and event storage (",e.jsx(n.code,{children:"event"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Async Workflow"})," — ensures that callbacks are triggered only after asynchronous state preparation is complete."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"DesignAsyncAbstract"})," is an abstract class and cannot be initialized directly. It is intended to be extended by other classes that must implement the ",e.jsx(n.code,{children:"initEvent"})," method for asynchronous data preparation."]}),`
`,e.jsx(n.h3,{id:"generic-constraints",children:"Generic Constraints"}),`
`,e.jsx(n.p,{children:"The class uses two types of generics to ensure strict typing:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"T extends Record<string, any>"})," — Type for input properties (",e.jsx(n.code,{children:"props"}),"). Defines the data structure passed to the constructor."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"C extends Record<string, any>"})," — Type for internal state or cache (",e.jsx(n.code,{children:"event"}),"). Defines the data structure available in callbacks after asynchronous initialization."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Constructor Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: T"})," — an object with the initial data."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback?: (event: C) => void"})," — a callback function that will be called after each successful update (including asynchronous ones)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"changed?: string[]"})," — optional list of keys from ",e.jsx(n.code,{children:"props"})," to watch. If not provided, all keys in ",e.jsx(n.code,{children:"props"})," are tracked."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Internal Properties:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"protected readonly event: C"})," — the state object. This is what you should populate with data in ",e.jsx(n.code,{children:"initEvent"}),". It will be passed to the ",e.jsx(n.code,{children:"callback"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Required Method to Implement:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"protected abstract initEvent(): Promise<void>"})," — an asynchronous method called whenever tracked properties change. This is where ",e.jsx(n.code,{children:"this.event"})," should be prepared."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DesignAsyncAbstract } from '@dxtmisha/functional'

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
`,e.jsx(n.h2,{id:"data-management-methods",children:"Data Management Methods"}),`
`,e.jsx(n.h3,{id:"make",children:e.jsx(n.code,{children:"make"})}),`
`,e.jsxs(n.p,{children:["Initiates the asynchronous callback update process. It calls ",e.jsx(n.code,{children:"makeCallback"})," (without waiting for its completion) and returns the instance for chaining."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"compelled?: boolean"})," — if ",e.jsx(n.code,{children:"true"}),", forces the data update regardless of whether changes were detected."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})]}),`
`,e.jsx(n.h3,{id:"makecallback",children:e.jsx(n.code,{children:"makeCallback"})}),`
`,e.jsxs(n.p,{children:["The primary asynchronous execution logic for updating the state. It waits for ",e.jsx(n.code,{children:"initEvent"})," to complete before triggering callbacks and updating the change tracker."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"compelled?: boolean"})," — forces data update."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<void>"})]}),`
`,e.jsx(n.h2,{id:"protected-methods-for-subclasses",children:"Protected Methods (for Subclasses)"}),`
`,e.jsx(n.h3,{id:"is",children:e.jsx(n.code,{children:"is"})}),`
`,e.jsxs(n.p,{children:["Checks for the existence of a key in the ",e.jsx(n.code,{children:"props"})," object."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: keyof T"})," — property name."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.h3,{id:"ischanged",children:e.jsx(n.code,{children:"isChanged"})}),`
`,e.jsxs(n.p,{children:["Checks if the value of a specified property has changed compared to its previous state. Useful inside ",e.jsx(n.code,{children:"initEvent"})," to optimize requests (only perform an action if a specific ID has changed)."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: keyof C"})," — property name in the state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nameProp?: keyof T | (keyof T)[]"})," — property name or list of property names in ",e.jsx(n.code,{children:"props"})," that the change is based on. Defaults to ",e.jsx(n.code,{children:"name"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.h3,{id:"makecallbackitem",children:e.jsx(n.code,{children:"makeCallbackItem"})}),`
`,e.jsx(n.p,{children:"Executes the callback function passed to the constructor."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsxs(n.h3,{id:"initevent-abstract",children:[e.jsx(n.code,{children:"initEvent"})," (abstract)"]}),`
`,e.jsxs(n.p,{children:["An asynchronous method that must be implemented in the subclass. It populates ",e.jsx(n.code,{children:"this.event"})," based on ",e.jsx(n.code,{children:"this.props"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<void>"})]})]})}function x(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{x as default};
