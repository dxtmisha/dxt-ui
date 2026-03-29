import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/styles/color/# Basic Properties Usage`}),`
`,(0,c.jsx)(n.h1,{id:`usage-of-base-properties`,children:`Usage of Base Properties`}),`
`,(0,c.jsxs)(n.p,{children:[`Base property mixins are your primary tool for applying colors to UI components. Instead of writing a typical CSS property like `,(0,c.jsx)(n.code,{children:`color: black;`}),`, you invoke:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.my-text {
  @include styles.color(#000000);
}
`})}),`
`,(0,c.jsx)(n.p,{children:`This approach ensures that the color is correctly decomposed into RGB channels, and the necessary system opacity variables are created and applied for the component.`}),`
`,(0,c.jsx)(n.h2,{id:`available-base-mixins`,children:`Available Base Mixins`}),`
`,(0,c.jsx)(n.p,{children:`Key mixins operating on the identical principle. All of these mixins accept the common parameters (color value and opacity) detailed below:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`color()`}),` — for text color (`,(0,c.jsx)(n.code,{children:`color`}),`). System variable: `,(0,c.jsx)(n.code,{children:`--sys-color`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`backgroundColor()`}),` — for background color (`,(0,c.jsx)(n.code,{children:`background-color`}),`). System variable: `,(0,c.jsx)(n.code,{children:`--sys-background`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`borderColor()`}),` — for border outlines (`,(0,c.jsx)(n.code,{children:`border-color`}),`). System variable: `,(0,c.jsx)(n.code,{children:`--sys-border`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`outlineColor()`}),` — for outer outline color (`,(0,c.jsx)(n.code,{children:`outline-color`}),`). System variable: `,(0,c.jsx)(n.code,{children:`--sys-outline`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fill()`}),` — for vector element fills (`,(0,c.jsx)(n.code,{children:`fill`}),`). System variable: `,(0,c.jsx)(n.code,{children:`--sys-fill`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`stroke()`}),` — for vector element strokes (`,(0,c.jsx)(n.code,{children:`stroke`}),`). System variable: `,(0,c.jsx)(n.code,{children:`--sys-stroke`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`gradient()`}),` — for a solid color applied to properties expecting an image (`,(0,c.jsx)(n.code,{children:`background-image`}),`). System variable: `,(0,c.jsx)(n.code,{children:`--sys-gradient`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`the-color-parameter`,children:[`The `,(0,c.jsx)(n.code,{children:`$color`}),` Parameter`]}),`
`,(0,c.jsx)(n.p,{children:`All of these mixins accept a color as the first parameter, which can be one of three types:`}),`
`,(0,c.jsx)(n.h4,{id:`1-explicit-color-hex-rgb-or-css-variable`,children:`1. Explicit Color (HEX, RGB, or CSS Variable)`}),`
`,(0,c.jsxs)(n.p,{children:[`Most often, you will pass a color from our design system using the `,(0,c.jsx)(n.code,{children:`styles.getColor('color-name')`}),` function, basic HEX values, or a custom CSS variable `,(0,c.jsx)(n.code,{children:`var(--my-color)`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card {
  @include styles.backgroundColor(styles.getColor('surface'));
  @include styles.color(#333333);
}
`})}),`
`,(0,c.jsxs)(n.h4,{id:`2-special-value-as-color`,children:[`2. Special Value `,(0,c.jsx)(n.code,{children:`'as-color'`})]}),`
`,(0,c.jsxs)(n.p,{children:[`What if you need the border, outline, or background color to exactly match the current system text color (`,(0,c.jsx)(n.code,{children:`--sys-color`}),`)? You can pass the string `,(0,c.jsx)(n.code,{children:`'as-color'`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button-outline {
  // Text becomes blue
  @include styles.color(styles.getColor('primary'));
  
  // The border automatically picks up the blue color from --sys-color
  @include styles.borderColor('as-color');
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`This is a powerful tool for creating components that change their entire color scheme (text + border + icons) simply by modifying the `,(0,c.jsx)(n.code,{children:`--sys-color`}),` variable.`]}),`
`,(0,c.jsxs)(n.h4,{id:`3-special-value-init`,children:[`3. Special Value `,(0,c.jsx)(n.code,{children:`'init'`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Passing `,(0,c.jsx)(n.code,{children:`'init'`}),` is used when you need to `,(0,c.jsx)(n.strong,{children:`force update`}),` the property without changing the base color. For example, if the opacity (`,(0,c.jsx)(n.code,{children:`--sys-color-opacity`}),`) was changed directly via CSS, and you want the browser to reapply the `,(0,c.jsx)(n.code,{children:`color`}),` property:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text-reset {
  @include styles.color('init');
}
`})}),`
`,(0,c.jsxs)(n.h3,{id:`opacity-management-opacity`,children:[`Opacity Management (`,(0,c.jsx)(n.code,{children:`$opacity`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`The second parameter of the mixins is `,(0,c.jsx)(n.code,{children:`$opacity`}),`. It allows you to control the initial opacity of the element.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text-faded {
  // Text with 50% opacity
  @include styles.color(#000000, 0.5);
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`If you pass `,(0,c.jsx)(n.code,{children:`null`}),` (or pass nothing), the opacity defaults to the standard stored in the system variable.
You can also pass a CSS variable if the opacity needs to change dynamically:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.dynamic-fade {
  @include styles.backgroundColor(#ff0000, var(--custom-opacity));
}
`})}),`
`,(0,c.jsxs)(n.h2,{id:`working-with-local-variables-colorsys`,children:[`Working with Local Variables: `,(0,c.jsx)(n.code,{children:`colorSys`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Sometimes you need to store a color in a variable without immediately applying it to a property (e.g., to pass the color down to a child component). For this, use the `,(0,c.jsx)(n.code,{children:`colorSys`}),` mixin:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.parent {
  // Sets --sys-color and --sys-color-opacity: 0.8
  @include styles.colorSys('color', #ff0000, 0.8);
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`The first parameter is a "property name", which becomes the suffix in the `,(0,c.jsx)(n.code,{children:`--sys-[name]`}),` variable. This color can then be applied in child nodes using `,(0,c.jsx)(n.code,{children:`color('init')`}),` or read into CSS as `,(0,c.jsx)(n.code,{children:`rgba(var(--sys-color), 1)`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};