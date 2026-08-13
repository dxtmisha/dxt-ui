import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/FigmaApi - Figma REST API Client`}),`
`,(0,c.jsx)(t.h1,{id:`figmaapi-class`,children:`FigmaApi Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`FigmaApi`}),` class is a comprehensive wrapper designed to interact directly with the `,(0,c.jsx)(t.strong,{children:`Figma REST API`}),`. It simplifies the process of making HTTP requests to fetch files, specific layer nodes, export images, styles, and individual shared team library assets.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Standardized API Request Routing`}),` — constructs secure request endpoints automatically using standard Figma patterns.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Node & Component Slicing`}),` — retrieves granular node metadata, bounding boxes, and styles for specific canvas layers.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Asset Image Export`}),` — wraps the Figma image rendering engine to retrieve temporary URLs of rendered nodes in various formats (SVG, PNG, JPG, PDF).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Style Management`}),` — fetches file style catalogs or specific styles by key.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Fluent Setters`}),` — chainable setter methods to dynamically change the token, file, or target node context.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`FigmaApi`}),` requires a personal access token and a target Figma file key for construction.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`token: string`}),` — Figma Personal Access Token.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fileKey: string`}),` — The target Figma file key (found in the file URL).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nodeId?: string`}),` — (Optional) The target canvas node layer ID.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaApi } from '@dxtmisha/scripts'

const api = new FigmaApi(
  'figd_xxxxxxxxxxxxxxxxxxxxx',
  'abcde12345XYZ'
)
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`endpoint-request-methods`,children:`Endpoint Request Methods`}),`
`,(0,c.jsx)(t.h4,{id:`files`,children:(0,c.jsx)(t.code,{children:`files`})}),`
`,(0,c.jsx)(t.p,{children:`Retrieves document metadata and the complete JSON tree of the target Figma file.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`parameters: FigmaFilesParams`}),` — (Optional) Query parameters such as version, depth, or geometry selection.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`Promise<FigmaFilesResult | undefined>`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const fileData = await api.files({ depth: 2 })
`})}),`
`,(0,c.jsx)(t.h4,{id:`filenodes`,children:(0,c.jsx)(t.code,{children:`fileNodes`})}),`
`,(0,c.jsx)(t.p,{children:`Retrieves full node subtrees for one or more specific canvas layers within the file.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`parameters: FigmaFileNodesParams`}),` — Target node IDs and specific scale, geometry, or version modifiers.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`Promise<FigmaFileNodesResult | undefined>`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const nodes = await api.fileNodes({ ids: '0:1' })
`})}),`
`,(0,c.jsx)(t.h4,{id:`fileimages`,children:(0,c.jsx)(t.code,{children:`fileImages`})}),`
`,(0,c.jsx)(t.p,{children:`Triggers the rendering of target canvas nodes and returns URLs to the generated image files.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`parameters: FigmaFileImagesParams`}),` — Node IDs, scale, and format (e.g. `,(0,c.jsx)(t.code,{children:`'svg'`}),`, `,(0,c.jsx)(t.code,{children:`'png'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`Promise<FigmaFileImagesResult | undefined>`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const images = await api.fileImages({
  ids: '12:34',
  format: 'svg'
})
`})}),`
`,(0,c.jsx)(t.h4,{id:`filestyles`,children:(0,c.jsx)(t.code,{children:`fileStyles`})}),`
`,(0,c.jsx)(t.p,{children:`Fetches a list of styles defined directly inside the target Figma file.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`Promise<FigmaFileStylesResult | undefined>`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const stylesList = await api.fileStyles()
`})}),`
`,(0,c.jsx)(t.h4,{id:`styles`,children:(0,c.jsx)(t.code,{children:`styles`})}),`
`,(0,c.jsx)(t.p,{children:`Fetches detailed metadata of a specific style using its unique style key.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — The unique style key.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`Promise<FigmaStylesResult | undefined>`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const styleMeta = await api.styles('1234abcd5678')
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`configuration-setters`,children:`Configuration Setters`}),`
`,(0,c.jsxs)(t.p,{children:[`All setters are chainable and return `,(0,c.jsx)(t.code,{children:`this`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setToken(token: string): this`}),` — Changes the active access token.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setFileKey(fileKey: string): this`}),` — Changes the target file key.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setNodeId(nodeId?: string): this`}),` — Changes the default target node ID.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getUrl(method: FigmaApiEndpoint, parameters?: Record<string, any>, key?: string): string`}),` — Constructs the absolute API request URL.`]}),`
`]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`figmaapiendpoint`,children:`FigmaApiEndpoint`}),`
`,(0,c.jsx)(t.p,{children:`Defines the targeted Figma REST endpoints:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`files`}),` — `,(0,c.jsx)(t.code,{children:`"/v1/files/:file_key"`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fileNodes`}),` — `,(0,c.jsx)(t.code,{children:`"/v1/files/:file_key/nodes"`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fileImages`}),` — `,(0,c.jsx)(t.code,{children:`"/v1/images/:file_key"`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fileStyles`}),` — `,(0,c.jsx)(t.code,{children:`"/v1/files/:file_key/styles"`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styles`}),` — `,(0,c.jsx)(t.code,{children:`"/v1/styles/:key"`})]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};