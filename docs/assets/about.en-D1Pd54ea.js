import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/1. UI/# About the Library`}),`
`,(0,c.jsx)(t.h1,{id:`about-the-library`,children:`About the Library`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`})}),` package is the core engine and foundation of the design system, providing over 110 ready-to-use component constructors for Vue 3 and TypeScript.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The library follows the `,(0,c.jsx)(t.strong,{children:`Headless UI`}),` architecture: all business logic, reactive state management, event handling, accessibility (WAI-ARIA), and keyboard navigation are encapsulated inside independent constructor classes, completely decoupled from visual presentation.`]}),`
`,(0,c.jsx)(t.h2,{id:`design-system-architecture-overview`,children:`Design System Architecture Overview`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),` package serves as the core foundation for creating production-ready UI libraries (such as `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`┌─────────────────────────────────────────────────────────────────────────┐
│                 1. Logic Engine (@dxtmisha/constructor)                 │
│  • 110+ abstract classes (Button, Modal, Input, Table, Select...)       │
│  • WAI-ARIA accessibility, keyboard navigation & Focus Trap             │
│  • Reactive states (:focus, :active, :hover, loading, disabled)         │
│  • Form input management, data validation & input masking               │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                   2. Build Tooling (@dxtmisha/scripts)                  │
│  • dxt-ui generator: bridges constructor logic with design tokens       │
│  • Automated generation of props.ts, styleToken.scss & exports          │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│               3. Design System (Example from @dxtmisha/d1)              │
│  • Design token configuration in src/media/ (colors, typography, grid)  │
│  • D1*.vue components: wire constructor logic with BEM classes          │
│  • SCSS styling: visual tokens applied via @dxtmisha/styles mixins      │
└─────────────────────────────────────────────────────────────────────────┘
`})}),`
`,(0,c.jsx)(t.h2,{id:`key-benefits-of-using-the-constructor`,children:`Key Benefits of Using the Constructor`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Multi-Design Scalability`}),`: A single Constructor core simultaneously powers multiple distinct UI kits (such as `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, enterprise themes, mobile-first designs). Creating a new design system no longer requires rewriting the logic for 110+ components — only defining tokens and templates is needed.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Centralized Bug Fixes (Single Point of Fix)`}),`: Resolving edge cases, mobile browser quirks (iOS/Android), keyboard navigation, or input mask issues in the Constructor core automatically fixes them across all connected design systems upon package update.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Safe Evolution Without Regressions (Zero Regression)`}),`: Adding new features or props to Constructor expands the capabilities of all design kits without breaking their visual layout. Conversely, redesigning styles or tokens cannot break underlying logic (a11y, focus, overlays).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Guaranteed Accessibility (a11y)`}),`: Every constructor fully adheres to the WAI-ARIA specification out of the box.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Reduced Maintenance Overhead (TCO)`}),`: Business logic is verified once at the Constructor level. UI kit testing focuses purely on visual tokens and layout.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Code Cleanliness & Rapid Development`}),`: Eliminates boilerplate code and complex JS event handlers — new components are built in minutes by wiring a pre-tested constructor class.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`features--capabilities-of-dxtmishaconstructor`,children:`Features & Capabilities of @dxtmisha/constructor`}),`
`,(0,c.jsx)(t.p,{children:`The constructor covers all core requirements of modern frontend development:`}),`
`,(0,c.jsx)(t.h3,{id:`1-forms-and-data-input`,children:`1. Forms and Data Input`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Text Inputs and Masks`}),`: `,(0,c.jsx)(t.code,{children:`Input`}),`, `,(0,c.jsx)(t.code,{children:`InputPhone`}),` (with international dialing codes and auto-formatting), `,(0,c.jsx)(t.code,{children:`InputCode`}),` (SMS/2FA), `,(0,c.jsx)(t.code,{children:`InputImage`}),`, and `,(0,c.jsx)(t.code,{children:`ImageCrop`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Selection Controls`}),`: `,(0,c.jsx)(t.code,{children:`Checkbox`}),`, `,(0,c.jsx)(t.code,{children:`Radio`}),`, `,(0,c.jsx)(t.code,{children:`Switch`}),`, `,(0,c.jsx)(t.code,{children:`SegmentControl`}),`, `,(0,c.jsx)(t.code,{children:`Chip`}),`, `,(0,c.jsx)(t.code,{children:`ChipGroup`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Selects and Dropdowns`}),`: `,(0,c.jsx)(t.code,{children:`Select`}),`, `,(0,c.jsx)(t.code,{children:`SelectValue`}),`, `,(0,c.jsx)(t.code,{children:`SelectableArea`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Form Utilities`}),`: Automatic character counters (`,(0,c.jsx)(t.code,{children:`FieldCounter`}),`), validation messages (`,(0,c.jsx)(t.code,{children:`FieldMessage`}),`), responsive labels (`,(0,c.jsx)(t.code,{children:`FieldLabel`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`2-overlays-dialogs-and-floating-surfaces`,children:`2. Overlays, Dialogs and Floating Surfaces`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Modal Interfaces`}),`: `,(0,c.jsx)(t.code,{children:`Modal`}),`, `,(0,c.jsx)(t.code,{children:`Dialog`}),`, `,(0,c.jsx)(t.code,{children:`Window`}),`, `,(0,c.jsx)(t.code,{children:`ActionSheet`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Popovers and Menus`}),`: `,(0,c.jsx)(t.code,{children:`Tooltip`}),`, `,(0,c.jsx)(t.code,{children:`Menu`}),`, `,(0,c.jsx)(t.code,{children:`MenuButton`}),`, `,(0,c.jsx)(t.code,{children:`MenuCountry`}),`, `,(0,c.jsx)(t.code,{children:`MenuLanguage`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Notifications`}),`: `,(0,c.jsx)(t.code,{children:`Snackbar`}),`, `,(0,c.jsx)(t.code,{children:`SnackbarItem`}),` with queue management.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Built-in Overlay Mechanics`}),`: Automated focus trapping (Focus Trap), background scroll locking, `,(0,c.jsx)(t.code,{children:`Escape`}),` key and Click Outside dismissal, and anchor positioning (`,(0,c.jsx)(t.code,{children:`Anchor`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`3-navigation-and-lists`,children:`3. Navigation and Lists`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Navigation Layouts`}),`: `,(0,c.jsx)(t.code,{children:`NavigationRail`}),`, `,(0,c.jsx)(t.code,{children:`Tabs`}),`, `,(0,c.jsx)(t.code,{children:`TabsNavigation`}),`, `,(0,c.jsx)(t.code,{children:`Breadcrumbs`}),`, `,(0,c.jsx)(t.code,{children:`Pagination`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lists and Accordions`}),`: `,(0,c.jsx)(t.code,{children:`Accordion`}),`, `,(0,c.jsx)(t.code,{children:`List`}),`, `,(0,c.jsx)(t.code,{children:`ListMenu`}),`, `,(0,c.jsx)(t.code,{children:`ListGroup`}),`, `,(0,c.jsx)(t.code,{children:`ListItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`4-data-display-and-content`,children:`4. Data Display and Content`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tables`}),`: `,(0,c.jsx)(t.code,{children:`Table`}),`, `,(0,c.jsx)(t.code,{children:`TableFlex`}),`, `,(0,c.jsx)(t.code,{children:`TableHeaderItem`}),`, `,(0,c.jsx)(t.code,{children:`TableRecord`}),` (sorting, row selection, responsive columns).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Indicators and Skeletons`}),`: `,(0,c.jsx)(t.code,{children:`Skeleton`}),`, `,(0,c.jsx)(t.code,{children:`Progress`}),`, `,(0,c.jsx)(t.code,{children:`ProgressBar`}),`, `,(0,c.jsx)(t.code,{children:`Badge`}),`, `,(0,c.jsx)(t.code,{children:`Avatar`}),`, `,(0,c.jsx)(t.code,{children:`Bullet`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Formatters`}),`: `,(0,c.jsx)(t.code,{children:`FormattedNumber`}),`, `,(0,c.jsx)(t.code,{children:`FormattedUnit`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`5-motion-scrolling-and-interactivity`,children:`5. Motion, Scrolling and Interactivity`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Scroll Management`}),`: `,(0,c.jsx)(t.code,{children:`Headroom`}),`, `,(0,c.jsx)(t.code,{children:`ScrollSticky`}),`, `,(0,c.jsx)(t.code,{children:`HorizontalScroll`}),`, `,(0,c.jsx)(t.code,{children:`Scrollbar`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Motion Animations`}),`: `,(0,c.jsx)(t.code,{children:`MotionAxis`}),`, `,(0,c.jsx)(t.code,{children:`MotionFlip`}),`, `,(0,c.jsx)(t.code,{children:`MotionTransform`}),`, `,(0,c.jsx)(t.code,{children:`MotionSticky`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Interactive Effects`}),`: `,(0,c.jsx)(t.code,{children:`Ripple`}),`, `,(0,c.jsx)(t.code,{children:`DraggableWrapper`}),`, `,(0,c.jsx)(t.code,{children:`Dropzone`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`supporting-ecosystem-packages`,children:`Supporting Ecosystem Packages`}),`
`,(0,c.jsx)(t.p,{children:`To support the constructor workflow, the ecosystem provides specialized packages:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@dxtmisha/styles`})}),` — SCSS framework with token architecture, two-tier opacity, responsive mixins, and dynamic palettes (`,(0,c.jsx)(t.code,{children:`paletteBackgroundColor`}),`, `,(0,c.jsx)(t.code,{children:`paletteColor`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@dxtmisha/functional`})}),` — Vue 3 Composition API composables, SSR isolation (`,(0,c.jsx)(t.code,{children:`ServerStorage`}),`), internationalization (i18n), and centralized vector icon management (`,(0,c.jsx)(t.code,{children:`Icons`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`})}),` — CLI tools for component scaffolding (`,(0,c.jsx)(t.code,{children:`dxt-ui`}),`), library bundling (`,(0,c.jsx)(t.code,{children:`dxt-library`}),`), and documentation generation.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`repository`,children:`Repository`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/constructor`,rel:`nofollow`,children:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/constructor`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};