import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional/Classes/DesignAbstract - Base Constructor Class"}),`
`,e.jsx(n.h1,{id:"designabstract-class",children:"DesignAbstract Class"}),`
`,e.jsx(n.p,{children:"An abstract base class designed for managing constructor properties and state changes. It provides a structured way to handle input properties, track changes, and execute callbacks upon data updates."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Property Management"})," — structured handling of input data (",e.jsx(n.code,{children:"props"}),") and event storage (",e.jsx(n.code,{children:"event"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Change Tracking"})," — integration with ",e.jsx(n.code,{children:"DesignChanged"})," for efficient monitoring and updating of property changes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lifecycle Management"})," — automatic execution of ",e.jsx(n.code,{children:"makeCallback"})," and ",e.jsx(n.code,{children:"initEvent"})," during data updates."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"DesignAbstract"})," is an abstract base class and cannot be initialized directly. It serves as a foundation for creating design classes that manage state based on input properties (",e.jsx(n.code,{children:"props"}),")."]}),`
`,e.jsx(n.h3,{id:"generic-constraints",children:"Generic Constraints"}),`
`,e.jsx(n.p,{children:"The class uses two types of generics to ensure strict typing:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"T extends Record<string, any>"})," — Type for input properties (",e.jsx(n.code,{children:"props"}),"). Defines the data structure passed to the constructor and used for tracking changes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"C extends Record<string, any>"})," — Type for output data or state (",e.jsx(n.code,{children:"event"}),"). Defines the structure of the object formed in ",e.jsx(n.code,{children:"initEvent"})," and passed to callbacks."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Constructor Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"props: T"})," — an object with initial initialization data."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback?: (event: C) => void"})," — an optional callback function executed after each data update."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"changed?: string[]"})," — a list of property names from ",e.jsx(n.code,{children:"props"})," to watch. If not specified, all keys of ",e.jsx(n.code,{children:"props"})," are tracked."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Required Method to Implement:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"protected abstract initEvent(): void"})," — a method that describes the logic for transforming or filtering ",e.jsx(n.code,{children:"props"})," into a state object ",e.jsx(n.code,{children:"event"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DesignAbstract } from '@dxtmisha/functional'

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
`,e.jsx(n.h2,{id:"data-management-methods",children:"Data Management Methods"}),`
`,e.jsx(n.h3,{id:"make",children:e.jsx(n.code,{children:"make"})}),`
`,e.jsxs(n.p,{children:["Initiates the callback update process. Calls ",e.jsx(n.code,{children:"makeCallback"})," and returns the instance for method chaining."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"compelled?: boolean"})," — if ",e.jsx(n.code,{children:"true"}),", forces a data update regardless of changes."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})]}),`
`,e.jsx(n.h3,{id:"makecallback",children:e.jsx(n.code,{children:"makeCallback"})}),`
`,e.jsx(n.p,{children:"The primary execution logic for state updates. Checks for changes or forced updates, then initializes the event and triggers callbacks."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"compelled: boolean"})," — forces data update. Default: ",e.jsx(n.code,{children:"false"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.h2,{id:"protected-methods-for-subclasses",children:"Protected Methods (for Subclasses)"}),`
`,e.jsx(n.h3,{id:"is",children:e.jsx(n.code,{children:"is"})}),`
`,e.jsxs(n.p,{children:["Checks if a value exists in the ",e.jsx(n.code,{children:"props"})," by name."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: keyof T"})," — property name."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.h3,{id:"ischanged",children:e.jsx(n.code,{children:"isChanged"})}),`
`,e.jsx(n.p,{children:"Checks if a property value has been changed. Used to prevent redundant calculations."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: keyof C"})," — property name in the event."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nameProp?: keyof T | (keyof T)[]"})," — property name or list of property names in ",e.jsx(n.code,{children:"props"})," that this value depends on. If not specified, ",e.jsx(n.code,{children:"name"})," is used."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.h3,{id:"makecallbackitem",children:e.jsx(n.code,{children:"makeCallbackItem"})}),`
`,e.jsx(n.p,{children:"Executes the callback function passed to the constructor."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsxs(n.h3,{id:"initevent-abstract",children:[e.jsx(n.code,{children:"initEvent"})," (abstract)"]}),`
`,e.jsxs(n.p,{children:["Abstract method that must be implemented in the subclass. It populates ",e.jsx(n.code,{children:"this.event"})," based on ",e.jsx(n.code,{children:"this.props"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]})]})}function x(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{x as default};
