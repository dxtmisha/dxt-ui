import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/scripts/Classes/PackageFile - Package.json Manager`}),`
`,(0,c.jsx)(n.h1,{id:`packagefile-class`,children:`PackageFile Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`PackageFile`}),` class represents a `,(0,c.jsx)(n.strong,{children:`package configuration wrapper`}),` designed for reading and analyzing `,(0,c.jsx)(n.code,{children:`package.json`}),` files within the workspace. It parses package metadata, scripts, versioning, and validation flags, enabling automatic build and publish flows across mono-repo workspaces.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Metadata Resolution`}),` — Extracts standard details like name, version, and custom flags.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Validation Checking`}),` — Validates version consistency and checks for test/no-publish package status.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Command Synthesis`}),` — Resolves build and publishing commands based on the available scripts in `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Path Integration`}),` — Interacts with `,(0,c.jsx)(n.code,{children:`PropertiesFile`}),` to load file contents synchronously.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Initialize by passing the path of the directory containing the `,(0,c.jsx)(n.code,{children:`package.json`}),` file.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PackageFile } from '@dxtmisha/scripts'

// Instantiate for a specific package directory
const pkg = new PackageFile('packages/constructor')

if (pkg.is()) {
  console.log(pkg.getName()) // "@dxtmisha/constructor"
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`verification`,children:`Verification`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Checks if the directory contains a valid `,(0,c.jsx)(n.code,{children:`package.json`}),` file.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isVersionConsistency(version?: string): boolean`}),` — Checks if the package version matches the specified target version.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isTest(): boolean`}),` — Checks if the package is flagged as a test package (`,(0,c.jsx)(n.code,{children:`ui-test`}),` is true).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isNoPublish(): boolean`}),` — Checks if the package should not be published (`,(0,c.jsx)(n.code,{children:`ui-no-publish`}),` or `,(0,c.jsx)(n.code,{children:`private`}),` is true).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`data--paths`,children:`Data & Paths`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): Record<string, any>`}),` — Returns the parsed package JSON contents.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(): string`}),` — Returns the package name, or defaults to the joined directory path if not defined.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getVersion(): string`}),` — Returns the package version (defaults to `,(0,c.jsx)(n.code,{children:`'0.0.0'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getScripts(): Record<string, string>`}),` — Returns the scripts defined in `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDir(): string[]`}),` — Returns the package directory path segments.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPath(): string[]`}),` — Returns the absolute path segments pointing to the package's `,(0,c.jsx)(n.code,{children:`package.json`}),` file.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`command-resolution`,children:`Command Resolution`}),`
`,(0,c.jsx)(n.h3,{id:`getcodebuildorrecovery`,children:(0,c.jsx)(n.code,{children:`getCodeBuildOrRecovery`})}),`
`,(0,c.jsx)(n.p,{children:`Resolves the script name to execute for building the package, prioritizing recovery scripts over standard build scripts.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const pkg = new PackageFile('packages/core')
const buildCmd = pkg.getCodeBuildOrRecovery()
// Returns: "build-recovery" (if exists) or "build" (if exists) or undefined
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string | undefined`})]}),`
`,(0,c.jsx)(n.h3,{id:`getcodepublish`,children:(0,c.jsx)(n.code,{children:`getCodePublish`})}),`
`,(0,c.jsx)(n.p,{children:`Synthesizes the terminal command required to publish the package to the npm registry.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const pkg = new PackageFile('packages/core')
const publishCmd = pkg.getCodePublish()
// Returns: "npm run publish-to-npm" (if script exists) or "npm publish --access public"
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};