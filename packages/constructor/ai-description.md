CORE PURPOSE
The library serves as a foundational UI constructor and functional architecture layer for building Vue 3 design systems. It supplies headless behavior controllers (Include classes), component type definitions/constructors, ARIA accessibility bindings, touch/keyboard navigation abstractions, and a Vite build plugin for automated component imports and SCSS token transformations.

KEY EXPOSITIONS
Component Inclusion Controllers: ComponentIncludeAbstract (abstract base for embedded sub-component rendering and state propagation), FieldValueInclude, FieldValidationInclude, FieldEventInclude, FieldArrowInclude (form input reactive state, DOM validation, and step controls), StickyInclude, MotionSticky (scroll/resize position binding), FocusDirectionInclude, TabIndexInclude (directional arrow navigation and focus trapping), TouchEventInclude (touch/mouse gesture detection), SearchInclude, SortInclude, PaginationInclude (reactive data filtering and multi-column sorting).
UI Component Constructors: Accordion, ActionSheet, Actions, Alert, Anchor, Avatar, Badge, Bars, Block, Breadcrumbs, Button, ButtonGroup, Cell, Checkbox, Chip, Dialog, DraggableWrapper, Field, Input, InputPhone, List, Menu, Modal, MotionAxis, MotionTransform, Pagination, Select, Table, TableFlex, Tabs, Tooltip, Window.
Accessibility Utilities: AriaStaticInclude (static ARIA attribute mapping), AriaList, RoleType.
Vite Plugin: Plugin, PluginCode, PluginComponents, PluginStyle (automates Vue component resolution and SCSS variable/mixin transformation).

TRIGGERS FOR STUDYING AI-TYPES.MD
Studying ai-types.md is mandatory when:
1. Extending ComponentIncludeAbstract to build new sub-components or wrapper components that require proxying child exposed APIs.
2. Configuring complex form components using FieldAllProps, FieldValidationItem, FieldValidityCode, or custom input masks (MaskSpecialList, MaskTypeItem).
3. Configuring compound component props that use generic type constraints across sub-components (e.g., TablePropsBasic, SelectPropsBasic, WindowPropsBasic, MenuPropsBasic).
4. Implementing custom motion, transition, or positioning logic utilizing MotionTransformControlItem, MotionAxisEmitOptions, or WindowControlItem.
5. Configuring the build plugin via PluginOptions or defining custom SCSS transformation rules.

INTEGRATION CONTEXT
Engineered for Vue 3 using Composition API primitives (Ref, ComputedRef, VNode, ToRefs) and v-model synchronization protocols. Connects with Vue Router for navigation handling in interactive components (EventClickInclude). Integrates into Vite/Rollup build pipelines via custom transform plugins. Relies on internal packages @dxtmisha/functional and @dxtmisha/functional-basic for base utility types and functional primitives.