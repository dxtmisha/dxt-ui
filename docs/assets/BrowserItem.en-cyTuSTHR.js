import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/BrowserItem - Headless Browser Manager`}),`
`,(0,c.jsx)(n.h1,{id:`browseritem-class`,children:`BrowserItem Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`BrowserItem`}),` class is a high-level wrapper around `,(0,c.jsx)(n.strong,{children:`Puppeteer`}),`, designed to manage Chromium browser instances, configure viewports, evaluate scripts in browser contexts, and capture either full-page or sliced multi-page screenshots.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automated Browser Lifecycle`}),` — lazily launches and manages single or multiple headless browser instances.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dynamic Viewport Configuration`}),` — auto-configures custom viewport dimensions, scale factor, and error logging on launch.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flexible Screenshot Pipelines`}),` — supports capturing full scrollable pages or slicing pages into multiple sequentially saved files.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`DOM & Style Extraction`}),` — direct methods to retrieve raw HTML source, active CSS sheets, or page metrics.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sandbox Safe Evaluation`}),` — safe evaluation of callbacks in the active browser window context.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`BrowserItem`}),` is initialized with a target URL and optional screenshot configuration parameters.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Constructor Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`url: string`}),` — The webpage URL to load and capture.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: ScreenshotOptions`}),` — (Optional) Viewport, formatting, quality, and timeout options.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BrowserItem } from '@dxtmisha/scripts'

const browserItem = new BrowserItem('http://localhost:5173', {
  width: 1280,
  height: 800,
  format: 'png',
  fullPage: true
})
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`getters`,children:`Getters`}),`
`,(0,c.jsx)(n.h3,{id:`configuration-getters`,children:`Configuration Getters`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`args: string[]`}),` — Puppeteer launch arguments.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`waitUntil: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]`}),` — Navigating load condition.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`timeout: number`}),` — The maximum timeout for loading in milliseconds.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`format: 'png' | 'jpeg' | 'webp'`}),` — Target screenshot image format.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`width: number`}),` — Viewport width.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`height: number`}),` — Viewport height.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`quality: number`}),` — Capture quality (0-100) for JPEG/WebP formats.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fullPage: boolean`}),` — Whether to capture the entire page as a single image.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`extension: string`}),` — Derived file extension (e.g. `,(0,c.jsx)(n.code,{children:`".png"`}),`, `,(0,c.jsx)(n.code,{children:`".jpg"`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`core-lifecycle`,children:`Core Lifecycle`}),`
`,(0,c.jsx)(n.h4,{id:`getbrowser`,children:(0,c.jsx)(n.code,{children:`getBrowser`})}),`
`,(0,c.jsx)(n.p,{children:`Lazily initializes and retrieves the Puppeteer browser instance.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<Browser>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const browser = await browserItem.getBrowser()
`})}),`
`,(0,c.jsx)(n.h4,{id:`getpage`,children:(0,c.jsx)(n.code,{children:`getPage`})}),`
`,(0,c.jsx)(n.p,{children:`Creates or retrieves the browser page instance, configuring viewports and standard log listeners.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<Page>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const page = await browserItem.getPage()
`})}),`
`,(0,c.jsx)(n.h4,{id:`getresponse`,children:(0,c.jsx)(n.code,{children:`getResponse`})}),`
`,(0,c.jsxs)(n.p,{children:[`Navigates the page to the target URL, applying `,(0,c.jsx)(n.code,{children:`waitUntil`}),` and `,(0,c.jsx)(n.code,{children:`timeout`}),` options.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<HTTPResponse | undefined>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const response = await browserItem.getResponse()
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`capture--actions`,children:`Capture & Actions`}),`
`,(0,c.jsx)(n.h4,{id:`screenshot`,children:(0,c.jsx)(n.code,{children:`screenshot`})}),`
`,(0,c.jsx)(n.p,{children:`Triggers the screenshot capture process, saving the result to the output directory. Chooses between full-page capture or slicing based on options.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`outputPath: string`}),` — Path where the screenshot(s) will be saved.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<this>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`await browserItem.screenshot('./dist/screenshots/homepage')
`})}),`
`,(0,c.jsx)(n.h4,{id:`evaluate`,children:(0,c.jsx)(n.code,{children:`evaluate`})}),`
`,(0,c.jsx)(n.p,{children:`Evaluates a custom function in the page context.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pageFunction: Func | string`}),` — Code or function to evaluate.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`...args: Params`}),` — Additional arguments passed to the function.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<Awaited<ReturnType<Func>> | undefined>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const title = await browserItem.evaluate(() => document.title)
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`utilities`,children:`Utilities`}),`
`,(0,c.jsx)(n.h3,{id:`dom-extraction`,children:`DOM Extraction`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDom(): Promise<string>`}),` — Retrieves the entire document HTML content.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBody(): Promise<string>`}),` — Retrieves the internal HTML of `,(0,c.jsx)(n.code,{children:`document.body`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStyles(): Promise<string>`}),` — Extracts and joins all active CSS style rules.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMetrics(): Promise<ScreenshotMetrics>`}),` — Reads total scrollable width and height.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): Promise<this>`}),` — Resets page, metric, and response states.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`screenshotoptions`,children:`ScreenshotOptions`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`args?: string[]`}),` — Custom Chromium flags.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]`}),` — Load trigger condition.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`timeout?: number`}),` — Load timeout.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`format?: 'png' | 'jpeg' | 'webp'`}),` — Target image format.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`width?: number`}),` — Initial viewport width.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`height?: number`}),` — Initial viewport height.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`quality?: number`}),` — Image quality scale.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fullPage?: boolean`}),` — Enable full page screenshot.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};