import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/DesignConstructor - Design Constructor Generator`}),`
`,(0,c.jsx)(n.h1,{id:`designconstructor-class`,children:`DesignConstructor Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`DesignConstructor`}),` class is a specialized implementation of `,(0,c.jsx)(n.code,{children:`DesignCommand`}),` focused on generating the internal logic and "constructors" for components. It automates the creation of property definitions, TypeScript types, and styling hooks that form the foundation of a component's behavioral layer.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Constructor Scaffolding`}),` — Automatically generates the entire file set required for a component's behavioral logic.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Type Safety Automation`}),` — Generates `,(0,c.jsx)(n.code,{children:`props.ts`}),`, `,(0,c.jsx)(n.code,{children:`types.ts`}),`, and `,(0,c.jsx)(n.code,{children:`basicTypes.ts`}),` to ensure strict typing across the component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Styling Foundation`}),` — Creates the initial `,(0,c.jsx)(n.code,{children:`style.scss`}),` file compatible with the constructor's class system.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Unified Logic Generation`}),` — Produces both `,(0,c.jsx)(n.code,{children:`.ts`}),` and `,(0,c.jsx)(n.code,{children:`.tsx`}),` files for flexible component logic implementation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`System Integration`}),` — Automatically updates `,(0,c.jsx)(n.code,{children:`package.json`}),` and creates library exports for the new constructor.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize a generator instance, use the constructor. It automatically resolves the target directory within the `,(0,c.jsx)(n.code,{children:`src/constructors`}),` folder.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`command: string`}),` — The unique identifier for the component (e.g., `,(0,c.jsx)(n.code,{children:`'button'`}),`, `,(0,c.jsx)(n.code,{children:`'list'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: Record<string, string>`}),` — Optional configuration key-value pairs.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignConstructor } from '@dxtmisha/scripts'

const generator = new DesignConstructor('button')
generator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Executes the full sequence of directory creation, file generation, and system registration.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(n.h3,{id:`generated-files-structure`,children:`Generated Files Structure`}),`
`,(0,c.jsxs)(n.p,{children:[`When initialized, `,(0,c.jsx)(n.code,{children:`DesignConstructor`}),` processes several template-driven files:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties.json`}),` — Mapping configuration for the constructor's internal properties.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props.ts`}),` — Property definitions including types and default values.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`types.ts`}),` & `,(0,c.jsx)(n.code,{children:`basicTypes.ts`}),` — TypeScript interfaces and type definitions for component state and configuration.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style.scss`}),` — Initial style definitions linked to the constructor's class structure.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Constructors.ts`}),` — The main logic implementation file.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ConstructorsDesign.tsx`}),` — The visual/render layer implementation using TSX.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index.ts`}),` — The entry point for the constructor's exports.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`lifecycle-of-execution`,children:`Lifecycle of Execution`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`make()`}),` process executes in a precise order to maintain data integrity:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Directory Setup`}),`: Resolves and confirms the target path in the `,(0,c.jsx)(n.code,{children:`src/constructors`}),` directory.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`File Generation`}),`: Sequentially calls specialized `,(0,c.jsx)(n.code,{children:`make[File]()`}),` methods to transform templates into project code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Internal Integration`}),`: Updates the project's root `,(0,c.jsx)(n.code,{children:`package.json`}),` mapping to expose the new constructor.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Library Publication`}),`: Generates an export file in the library's root directory to enable global consumption.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};