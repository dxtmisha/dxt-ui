import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/DesignConstructor - Design Constructor Generator`}),`
`,(0,c.jsx)(t.h1,{id:`designconstructor-class`,children:`DesignConstructor Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`DesignConstructor`}),` class is a specialized implementation of `,(0,c.jsx)(t.code,{children:`DesignCommand`}),` focused on generating the internal logic and "constructors" for components. It automates the creation of property definitions, TypeScript types, and styling hooks that form the foundation of a component's behavioral layer.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Constructor Scaffolding`}),` — Automatically generates the entire file set required for a component's behavioral logic.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Type Safety Automation`}),` — Generates `,(0,c.jsx)(t.code,{children:`props.ts`}),`, `,(0,c.jsx)(t.code,{children:`types.ts`}),`, and `,(0,c.jsx)(t.code,{children:`basicTypes.ts`}),` to ensure strict typing across the component.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Styling Foundation`}),` — Creates the initial `,(0,c.jsx)(t.code,{children:`style.scss`}),` file compatible with the constructor's class system.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Unified Logic Generation`}),` — Produces both `,(0,c.jsx)(t.code,{children:`.ts`}),` and `,(0,c.jsx)(t.code,{children:`.tsx`}),` files for flexible component logic implementation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`System Integration`}),` — Automatically updates `,(0,c.jsx)(t.code,{children:`package.json`}),` and creates library exports for the new constructor.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize a generator instance, use the constructor. It automatically resolves the target directory within the `,(0,c.jsx)(t.code,{children:`src/constructors`}),` folder.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`command: string`}),` — The unique identifier for the component (e.g., `,(0,c.jsx)(t.code,{children:`'button'`}),`, `,(0,c.jsx)(t.code,{children:`'list'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: Record<string, string>`}),` — Optional configuration key-value pairs.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignConstructor } from '@dxtmisha/scripts'

const generator = new DesignConstructor('button')
generator.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`control`,children:`Control`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — Executes the full sequence of directory creation, file generation, and system registration.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`operations`,children:`Operations`}),`
`,(0,c.jsx)(t.h3,{id:`generated-files-structure`,children:`Generated Files Structure`}),`
`,(0,c.jsxs)(t.p,{children:[`When initialized, `,(0,c.jsx)(t.code,{children:`DesignConstructor`}),` processes several template-driven files:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`properties.json`}),` — Mapping configuration for the constructor's internal properties.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props.ts`}),` — Property definitions including types and default values.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`types.ts`}),` & `,(0,c.jsx)(t.code,{children:`basicTypes.ts`}),` — TypeScript interfaces and type definitions for component state and configuration.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`style.scss`}),` — Initial style definitions linked to the constructor's class structure.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Constructors.ts`}),` — The main logic implementation file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ConstructorsDesign.tsx`}),` — The visual/render layer implementation using TSX.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index.ts`}),` — The entry point for the constructor's exports.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`lifecycle-of-execution`,children:`Lifecycle of Execution`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`make()`}),` process executes in a precise order to maintain data integrity:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Directory Setup`}),`: Resolves and confirms the target path in the `,(0,c.jsx)(t.code,{children:`src/constructors`}),` directory.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`File Generation`}),`: Sequentially calls specialized `,(0,c.jsx)(t.code,{children:`make[File]()`}),` methods to transform templates into project code.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Internal Integration`}),`: Updates the project's root `,(0,c.jsx)(t.code,{children:`package.json`}),` mapping to expose the new constructor.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Library Publication`}),`: Generates an export file in the library's root directory to enable global consumption.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};