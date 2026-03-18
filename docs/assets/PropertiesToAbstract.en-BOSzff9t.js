import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function n(s){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/scripts/Classes/PropertiesToAbstract - Base Transformation Class"}),`
`,e.jsx(t.h1,{id:"propertiestoabstract-class",children:"PropertiesToAbstract Class"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"PropertiesToAbstract"})," class serves as the foundation for all property (token) transformation processes within the system. It defines a common transformation lifecycle, ranging from data initialization to cache persistence."]}),`
`,e.jsx(t.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Lifecycle Standardization"})," — ensures a consistent execution order (",e.jsx(t.code,{children:"init"})," -> ",e.jsx(t.code,{children:"write"}),") across all subclasses."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"PropertiesItems Integration"})," — provide centralized management of property items."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Cache Management"})," — automates the process of writing intermediate results to a specified file."]}),`
`]}),`
`,e.jsx(t.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(t.p,{children:"As an abstract class, it cannot be instantiated directly. It is intended to be extended by concrete transformation classes (e.g., for SCSS or JSON generation)."}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Example subclass implementation:"})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { PropertiesToAbstract, PropertiesItems } from '@dxtmisha/scripts'

class MyPropertiesTransformer extends PropertiesToAbstract {
  protected readonly FILE_CACHE = 'my-cache-file.json'

  protected init(): void {
    // Initialization and transformation logic
    console.log('Transforming data...')
  }
}
`})}),`
`,e.jsx(t.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(t.h3,{id:"to",children:e.jsx(t.code,{children:"to"})}),`
`,e.jsx(t.p,{children:"Executes the full transformation cycle. This method is the public entry point and ensures a strict sequence of actions: data initialization followed by data writing."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`const transformer = new MyPropertiesTransformer(items);
transformer.to(); // Starts the process
`})}),`
`,e.jsxs(t.h3,{id:"init-abstract",children:[e.jsx(t.code,{children:"init"})," (abstract)"]}),`
`,e.jsx(t.p,{children:"An abstract protected method that must be implemented by subclasses. The primary data processing logic should be centered within this method."}),`
`,e.jsxs(t.h3,{id:"write-protected",children:[e.jsx(t.code,{children:"write"})," (protected)"]}),`
`,e.jsxs(t.p,{children:["Writes the current state of property items (",e.jsx(t.code,{children:"PropertiesItems"}),") to a file defined by the ",e.jsx(t.code,{children:"FILE_CACHE"})," path."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Returns:"})," ",e.jsx(t.code,{children:"void"})]}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsxs(t.h3,{id:"file_cache-abstract",children:[e.jsx(t.code,{children:"FILE_CACHE"})," (abstract)"]}),`
`,e.jsx(t.p,{children:"An abstract property defining the file path where the transformation results will be saved. It must be overridden in every concrete subclass."}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"creating-a-custom-transformer",children:"Creating a Custom Transformer"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { PropertiesToAbstract, PropertiesItems } from '@dxtmisha/scripts'

export class PropertiesToCustom extends PropertiesToAbstract {
  protected readonly FILE_CACHE = 'custom-tokens.json'

  protected init(): void {
    // Example of data modification before writing
    forEach(this.items, (item) => {
      item.myData = 'processed'
    })
  }
}
`})})]})}function p(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{p as default};
