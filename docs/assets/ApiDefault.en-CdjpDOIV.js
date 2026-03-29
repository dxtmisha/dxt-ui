import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/ApiDefault - Default API Request Data`}),`
`,(0,c.jsx)(n.h1,{id:`apidefault-class`,children:`ApiDefault Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A class for managing default data for API requests. It allows setting base parameters that should be included in every request, supporting both standard objects and `,(0,c.jsx)(n.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Centralized Defaults`}),` — define common parameters (like tokens or locale) once for all API calls.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Support for Multiple Formats`}),` — works seamlessly with both plain JavaScript objects and `,(0,c.jsx)(n.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Intelligent Merging`}),` — merges defaults with request-specific data, prioritizing the actual request data if keys overlap.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Easy Checks`}),` — simple methods to check if any default data is currently set.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`ApiDefault()`}),` constructor.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiDefault } from '@dxtmisha/functional'

// 1. Simple initialization
const apiDefault = new ApiDefault()

// 2. Setting default data
apiDefault.set({ lang: 'en', version: 'v1' })

// 3. Example usage with a request object
const requestData = { user_id: 5 }
const mergedRequest = apiDefault.request(requestData)
// Result: { lang: 'en', version: 'v1', user_id: 5 }

// 4. Example usage with FormData
const fd = new FormData()
fd.append('photo', fileBlob)
apiDefault.request(fd)
// Result: fd now contains 'lang' and 'version' if they were missing
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Checks if any default data has been set.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): ApiDefaultValue`}),` — Returns the current default data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request(request: ApiFetch['request']): ApiFetch['request']`}),` — Merges the stored default data into a provided request object or `,(0,c.jsx)(n.code,{children:`FormData`}),` instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(request: ApiDefaultValue)`}),` — Sets the default data object for requests.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};