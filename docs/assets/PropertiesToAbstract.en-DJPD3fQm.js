import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/PropertiesToAbstract - Base Transformation Class`}),`
`,(0,c.jsx)(n.h1,{id:`propertiestoabstract-class`,children:`PropertiesToAbstract Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),` class serves as the foundation for all property (token) transformation processes within the system. It defines a common transformation lifecycle, ranging from data initialization to cache persistence.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lifecycle Standardization`}),` — ensures a consistent execution order (`,(0,c.jsx)(n.code,{children:`init`}),` -> `,(0,c.jsx)(n.code,{children:`write`}),`) across all subclasses.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`PropertiesItems Integration`}),` — provide centralized management of property items.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Management`}),` — automates the process of writing intermediate results to a specified file.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.p,{children:`As an abstract class, it cannot be instantiated directly. It is intended to be extended by concrete transformation classes (e.g., for SCSS or JSON generation).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example subclass implementation:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToAbstract, PropertiesItems } from '@dxtmisha/scripts'

class MyPropertiesTransformer extends PropertiesToAbstract {
  protected readonly FILE_CACHE = 'my-cache-file.json'

  protected init(): void {
    // Initialization and transformation logic
    console.log('Transforming data...')
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`to`,children:(0,c.jsx)(n.code,{children:`to`})}),`
`,(0,c.jsx)(n.p,{children:`Executes the full transformation cycle. This method is the public entry point and ensures a strict sequence of actions: data initialization followed by data writing.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const transformer = new MyPropertiesTransformer(items);
transformer.to(); // Starts the process
`})}),`
`,(0,c.jsxs)(n.h3,{id:`init-abstract`,children:[(0,c.jsx)(n.code,{children:`init`}),` (abstract)`]}),`
`,(0,c.jsx)(n.p,{children:`An abstract protected method that must be implemented by subclasses. The primary data processing logic should be centered within this method.`}),`
`,(0,c.jsxs)(n.h3,{id:`write-protected`,children:[(0,c.jsx)(n.code,{children:`write`}),` (protected)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Writes the current state of property items (`,(0,c.jsx)(n.code,{children:`PropertiesItems`}),`) to a file defined by the `,(0,c.jsx)(n.code,{children:`FILE_CACHE`}),` path.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,c.jsxs)(n.h3,{id:`file_cache-abstract`,children:[(0,c.jsx)(n.code,{children:`FILE_CACHE`}),` (abstract)`]}),`
`,(0,c.jsx)(n.p,{children:`An abstract property defining the file path where the transformation results will be saved. It must be overridden in every concrete subclass.`}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`creating-a-custom-transformer`,children:`Creating a Custom Transformer`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToAbstract, PropertiesItems } from '@dxtmisha/scripts'

export class PropertiesToCustom extends PropertiesToAbstract {
  protected readonly FILE_CACHE = 'custom-tokens.json'

  protected init(): void {
    // Example of data modification before writing
    forEach(this.items, (item) => {
      item.myData = 'processed'
    })
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};