import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/ApiDefault - Default API Request Data`}),`
`,(0,c.jsx)(n.h1,{id:`apidefault-class`,children:`ApiDefault Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A class for managing default data for API requests. It allows setting base parameters that should be included in every request, supporting both standard objects and `,(0,c.jsx)(n.code,{children:`FormData`}),`. This is useful for centrally defining common fields such as tokens, application IDs, or localization settings.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiDefault`}),` is an `,(0,c.jsx)(n.strong,{children:`auxiliary class`}),`, designed for managing request defaults. In most cases, it is recommended to define these through the `,(0,c.jsx)(n.code,{children:`requestDefault`}),` parameter in the global `,(0,c.jsx)(n.code,{children:`Api`}),` configuration.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Centralized Defaults`}),` — Define common parameters once for all API calls.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Support for Multiple Formats`}),` — Works seamlessly with both plain JavaScript objects and `,(0,c.jsx)(n.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Intelligent Merging`}),` — Merges defaults with request-specific data, prioritizing the actual request data if keys overlap.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chainable API`}),` — Supports a fluent interface for setting parameters.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsx)(n.h4,{id:`request`,children:(0,c.jsx)(n.code,{children:`request`})}),`
`,(0,c.jsxs)(n.p,{children:[`Merges the stored default data into a provided request object or `,(0,c.jsx)(n.code,{children:`FormData`}),` instance. If the input is a plain object, it returns a new merged object. If the input is `,(0,c.jsx)(n.code,{children:`FormData`}),`, it adds missing keys directly to the instance.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: ApiFetch['request']`}),` — The original request data (Object, FormData, or String).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`ApiFetch['request']`}),` — The transformed request data.`]}),`
`,(0,c.jsx)(n.h3,{id:`check`,children:`Check`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Checks if any default data has been set.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): ApiDefaultValue | undefined`}),` — Returns the current default data object.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(request: ApiDefaultValue): this`}),` — Sets the default data for all future requests.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h4,{id:`apidefaultvalue`,children:(0,c.jsx)(n.code,{children:`ApiDefaultValue`})}),`
`,(0,c.jsx)(n.p,{children:`A plain object representing default parameters.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[key: string]: any`}),` — Key-value pairs to be used as defaults.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};