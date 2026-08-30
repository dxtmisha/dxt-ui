import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/DesignTypesMakeAbstract - Abstract AI Type Definition Generator`}),`
`,(0,c.jsx)(t.h1,{id:`class-designtypesmakeabstract`,children:`Class DesignTypesMakeAbstract`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`DesignTypesMakeAbstract`}),` abstract base class establishes the standard interface and pipeline for scanning TypeScript declaration files, tracking modifications via MD5 hashes, and producing AI-optimized type guidelines (`,(0,c.jsx)(t.code,{children:`ai-types.md`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`constructor`,children:`Constructor`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ai: DesignTypesAi`}),` — instance of `,(0,c.jsx)(t.code,{children:`DesignTypesAi`}),` for AI-assisted transformation and directory resolution.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dir: string`}),` — input directory path containing emitted declaration files. Defaults to `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getTypesTemporaryDirectory()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirDist: string`}),` — input directory path containing compiled JavaScript artifacts. Defaults to `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getDistDir()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi, DesignTypesMakeAbstract } from '@dxtmisha/scripts'

class CustomTypesMake extends DesignTypesMakeAbstract {
  getFullContent(): string {
    return ''
  }

  getFullJsContent(): string {
    return ''
  }

  async make(): Promise<this> {
    return this
  }

  makeSave(): this {
    return this
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-getfullcontent-string`,children:(0,c.jsx)(t.code,{children:`abstract getFullContent(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Reads processed declaration files, combines them into a single string, and cleans repetitive boilerplate.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-getfulljscontent-string`,children:(0,c.jsx)(t.code,{children:`abstract getFullJsContent(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Retrieves and combines the contents of all filtered compiled JavaScript files.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-make-promisethis`,children:(0,c.jsx)(t.code,{children:`abstract make(): Promise<this>`})}),`
`,(0,c.jsx)(t.p,{children:`Executes the complete generation cycle, including MD5 cache validation, AI transformation, and saving output.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-makesave-this`,children:(0,c.jsx)(t.code,{children:`abstract makeSave(): this`})}),`
`,(0,c.jsxs)(t.p,{children:[`Compiles the full combined type definition content and writes it directly to `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};