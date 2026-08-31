import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/DesignTypesBuildAbstract - Abstract TypeScript Declaration Compiler`}),`
`,(0,c.jsx)(t.h1,{id:`class-designtypesbuildabstract`,children:`Class DesignTypesBuildAbstract`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`DesignTypesBuildAbstract`}),` abstract base class defines the interface and foundational architecture for compiling TypeScript and Vue source files into declaration files (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`) inside a temporary directory prior to AI optimization and documentation processing.`]}),`
`,(0,c.jsx)(t.h2,{id:`constructor`,children:`Constructor`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`temporaryDirectory: string`}),` — directory path for storing temporary declaration files. Defaults to `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getTypesTemporaryDirectory()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesBuildAbstract } from '@dxtmisha/scripts'

class CustomTypesBuild extends DesignTypesBuildAbstract {
  is(): boolean {
    // Check directory existence
    return false
  }

  clean(): this {
    // Clean temporary directory
    return this
  }

  build(): this {
    // Compile type declarations
    return this
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-is-boolean`,children:(0,c.jsx)(t.code,{children:`abstract is(): boolean`})}),`
`,(0,c.jsx)(t.p,{children:`Checks if the temporary compilation directory exists on disk.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-clean-this`,children:(0,c.jsx)(t.code,{children:`abstract clean(): this`})}),`
`,(0,c.jsx)(t.p,{children:`Cleans or deletes the temporary compilation directory and all emitted declarations.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-build-this`,children:(0,c.jsx)(t.code,{children:`abstract build(): this`})}),`
`,(0,c.jsx)(t.p,{children:`Compiles TypeScript declarations from source files into the temporary directory.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};