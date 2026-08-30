import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/3. Package Creation`}),`
`,(0,c.jsx)(t.h1,{id:`monorepo-package-creation-and-initialization`,children:`Monorepo Package Creation and Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`In the `,(0,c.jsx)(t.strong,{children:`DXT UI`}),` design system, the process of creating new packages and libraries across the monorepo is fully automated via the `,(0,c.jsx)(t.code,{children:`dxt-package`}),` CLI utility. Developers no longer need to manually configure build pipelines, TypeScript configs, `,(0,c.jsx)(t.code,{children:`package.json`}),` manifests, or register new modules in Storybook.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`dxt-package`}),` command (executable `,(0,c.jsx)(t.code,{children:`bin/design-package.ts`}),`, class `,(0,c.jsx)(t.code,{children:`PackageInit`}),`) scans the monorepo for empty directories and scaffolds a complete, isolated workspace with all required files and integrations in a second.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-advantages`,children:`Key Advantages`}),`
`,(0,c.jsx)(t.h3,{id:`1-standard-environment-with-zero-boilerplate`,children:`1. Standard Environment with Zero Boilerplate`}),`
`,(0,c.jsxs)(t.p,{children:[`Instead of manually creating dozens of configuration files, the developer creates only a single empty directory in `,(0,c.jsx)(t.code,{children:`packages/`}),`. The utility automatically generates the complete infrastructure: TypeScript, Vite, build scripts, test suites, and publishing hooks.`]}),`
`,(0,c.jsx)(t.h3,{id:`2-automated-storybook-integration`,children:`2. Automated Storybook Integration`}),`
`,(0,c.jsxs)(t.p,{children:[`When a package is initialized, the script automatically updates `,(0,c.jsx)(t.code,{children:`.storybook/main.ts`}),` in `,(0,c.jsx)(t.code,{children:`packages/storybook`}),` to include glob paths for the new package's MDX documentation and stories. Stories and documentation become available immediately.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-native-ai-and-typing-standards`,children:`3. Native AI and Typing Standards`}),`
`,(0,c.jsxs)(t.p,{children:[`Every new package includes an `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` structure, `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),`, and a standard `,(0,c.jsx)(t.code,{children:`src/library.ts`}),` entry point with strict typing.`]}),`
`,(0,c.jsx)(t.h2,{id:`step-by-step-guide-what-to-do`,children:`Step-by-Step Guide (What to Do)`}),`
`,(0,c.jsx)(t.h3,{id:`step-1-create-an-empty-directory-for-the-package`,children:`Step 1. Create an Empty Directory for the Package`}),`
`,(0,c.jsxs)(t.p,{children:[`Inside `,(0,c.jsx)(t.code,{children:`packages/`}),`, create an empty directory named in kebab-case (e.g., `,(0,c.jsx)(t.code,{children:`media-player`}),` or `,(0,c.jsx)(t.code,{children:`notifications`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`mkdir packages/media-player
`})}),`
`,(0,c.jsx)(t.h3,{id:`step-2-run-the-package-generation-command`,children:`Step 2. Run the Package Generation Command`}),`
`,(0,c.jsxs)(t.p,{children:[`Execute `,(0,c.jsx)(t.code,{children:`dxt-package`}),` in your terminal:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package
`})}),`
`,(0,c.jsx)(t.p,{children:`The generator automatically discovers the empty folder and generates all necessary files:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Initializing package of type: library with templates: undefined
Package init in: packages/media-player
Update storybook...
`})}),`
`,(0,c.jsx)(t.h3,{id:`step-3-inspect-the-generated-structure`,children:`Step 3. Inspect the Generated Structure`}),`
`,(0,c.jsx)(t.p,{children:`Inside the new package directory, a complete development environment is initialized:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`packages/media-player/
├── package.json               # Manifest with dependencies, build scripts, and exports
├── tsconfig.json              # Base TypeScript configuration
├── tsconfig.app.json          # Application bundler configuration
├── tsconfig.node.json         # Node.js environment configuration
├── vite.config.ts             # Vite library build setup
├── .gitignore                 # Build artifact and local file ignore rules
├── README.md                  # Package documentation
├── LICENSE                    # Project license (MIT)
├── CHANGELOG.md               # Version changelog
├── ai-prompt.md               # AI system prompt context
├── ai-memory.md               # AI assistant local memory
├── src/
│   ├── library.ts             # Main entry point and barrel exports
│   ├── config.ts              # Package constants and configuration
│   └── types.ts               # Interfaces and types
`})}),`
`,(0,c.jsx)(t.h3,{id:`step-4-command-options-package-types-and-custom-templates`,children:`Step 4. Command Options (Package Types and Custom Templates)`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`dxt-package`}),` supports flexible command-line options:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Default (TypeScript library)`}),`:`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Specify Package Type (e.g., vue)`}),`:`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package --type vue
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Apply Custom Templates`}),`:`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package --type vue --templates "template1,template2"
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Specify Custom Base Directory`}),`:`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package --dir custom-packages
`})}),`
`,(0,c.jsx)(t.p,{children:`Available options:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--type`}),` (`,(0,c.jsx)(t.code,{children:`-t`}),`): Package template type. Defaults to `,(0,c.jsx)(t.code,{children:`library`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--templates`}),`: Directory containing package templates.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--dir`}),` (`,(0,c.jsx)(t.code,{children:`-d`}),`): Target packages directory. Defaults to `,(0,c.jsx)(t.code,{children:`packages`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Run `,(0,c.jsx)(t.code,{children:`npx dxt-package --help`}),` to print the full list of available options.`]}),`
`,(0,c.jsx)(t.h2,{id:`automatic-package-integrations`,children:`Automatic Package Integrations`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Storybook (`,(0,c.jsx)(t.code,{children:`.storybook/main.ts`}),`)`]}),`: Automatically appends `,(0,c.jsx)(t.code,{children:"../../${name}/src/**/*.mdx"}),` and `,(0,c.jsx)(t.code,{children:"../../${name}/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Package Name and Prefix`}),`: Resolves the full package name formatted as `,(0,c.jsx)(t.code,{children:`@dxtmisha/<name>`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Standard `,(0,c.jsx)(t.code,{children:`package.json`}),` Scripts`]}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"dev"`}),`: Runs Vite development server.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"build"`}),`: Compiles the package bundle (`,(0,c.jsx)(t.code,{children:`vite build`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"test"`}),`: Runs test suites using Vitest.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"prepublishOnly"`}),`: Rebuilds before publishing.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"publish-to-npm"`}),`: Publishes to the npm registry (`,(0,c.jsx)(t.code,{children:`npm publish --access public`}),`).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`advantages-over-manual-setup`,children:`Advantages Over Manual Setup`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Instant Setup`}),`: Scaffolding takes less than one second.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`100% Architectural Accuracy`}),`: Eliminates Vite, TypeScript, and export configuration bugs.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Monorepo Cohesion`}),`: Automatic Storybook registration and unified versioning standards.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};