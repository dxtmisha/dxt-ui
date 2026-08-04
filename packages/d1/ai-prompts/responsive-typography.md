# Responsive Layout & Typography

## Class Naming & Structure
1. Root CSS class name must strictly match the component name (in kebab-case).
2. Use BEM naming based on component name: `.component-name__element--modifier`.

## Media Queries & Responsiveness
Direct `@media screen { ... }` queries are **PROHIBITED**. Always use library mixins:

```scss
@use '@dxtmisha/d1/ui-properties' as ui;

.my-component {
  @include ui.mediaMinWidth('md') {
    // Styles for screens >= 768px
  }
}
```
- Breakpoints: `'sm'` (640px), `'md'` (768px), `'lg'` (1024px), `'xl'` (1280px), `'2xl'` (1536px).
- Mixins: `mediaMinWidth('size')`, `mediaMaxWidth('size')`, `mediaMinMaxWidth('min', 'max')`.

## Typography (Text) Classes
Typography classes are located in `./src/styles/Ui/classes/d1-font.scss`.
- Always apply font classes during layout instead of writing custom `font-size`.
- Match mockup text style names directly to `d1-font.scss` class names.
