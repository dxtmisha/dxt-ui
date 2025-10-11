import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-Dqnce8mp.js";import{M as c}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/styles/en/Color"}),`
`,e.jsx(n.h1,{id:"color",children:"Color"}),`
`,e.jsx(n.p,{children:"A set of SCSS functions and mixins for color management with CSS Custom Properties support."}),`
`,e.jsx(n.h2,{id:"validation-functions",children:"Validation Functions"}),`
`,e.jsx(n.h3,{id:"iscolorrbgorvar",children:e.jsx(n.code,{children:"isColorRbgOrVar"})}),`
`,e.jsx(n.p,{children:"Checks if a value is a color."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color"})," — value to check"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Boolean"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@if isColorRbgOrVar(#ff0000) { } // true
@if isColorRbgOrVar('none') { } // false
`})}),`
`,e.jsx(n.h3,{id:"ispalette",children:e.jsx(n.code,{children:"isPalette"})}),`
`,e.jsx(n.p,{children:"Checks if a color is suitable for the palette."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color"})," — color to check"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Boolean"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@if isPalette(var(--primary-500)) { } // true
@if isPalette(#ff0000) { } // false
`})}),`
`,e.jsx(n.h2,{id:"color-functions",children:"Color Functions"}),`
`,e.jsx(n.h3,{id:"getcolor",children:e.jsx(n.code,{children:"getColor"})}),`
`,e.jsx(n.p,{children:"Returns color value by its code."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color"})," — color"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$opacity: 1"})," — opacity [0..1]"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$gradient: false"})," — if true, returns as an image"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$value: getColor(#ff0000, 0.5); // rgba(255, 0, 0, 0.5)
$gradient: getColor(#ff0000, 0.8, true); // linear-gradient(...)
`})}),`
`,e.jsx(n.h3,{id:"getcolorbypalette",children:e.jsx(n.code,{children:"getColorByPalette"})}),`
`,e.jsx(n.p,{children:"Checks if a color is part of the list of used colors."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color"})," — color to check"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String|null"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$palette: getColorByPalette(var(--primary-color));
`})}),`
`,e.jsx(n.h3,{id:"getcolorbyshade",children:e.jsx(n.code,{children:"getColorByShade"})}),`
`,e.jsx(n.p,{children:"Checks if a color is part of the list of saturation levels."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color"})," — color to check"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String|null"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$shade: getColorByShade(var(--color-500));
`})}),`
`,e.jsx(n.h3,{id:"getcolorvalue",children:e.jsx(n.code,{children:"getColorValue"})}),`
`,e.jsx(n.p,{children:"Gets color code for insertion into property."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$name: String"})," — variable name"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$defaultValue: null"})," — default value"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$color: getColorValue('--my-color', #333);
`})}),`
`,e.jsx(n.h3,{id:"getcolorvaluesys",children:e.jsx(n.code,{children:"getColorValueSys"})}),`
`,e.jsx(n.p,{children:"Gets system color code for insertion into property."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$name: String"})," — variable suffix"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$color: getColorValueSys('color');
`})}),`
`,e.jsx(n.h2,{id:"palette-functions",children:"Palette Functions"}),`
`,e.jsx(n.h3,{id:"getpalette",children:e.jsx(n.code,{children:"getPalette"})}),`
`,e.jsx(n.p,{children:"Returns value for palette."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color"})," — color"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$value: getPalette(var(--primary-500));
`})}),`
`,e.jsx(n.h3,{id:"getpaletteopacity",children:e.jsx(n.code,{children:"getPaletteOpacity"})}),`
`,e.jsx(n.p,{children:"Returns value for palette opacity."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color"})," — color"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$opacity: getPaletteOpacity(var(--primary-500));
`})}),`
`,e.jsx(n.h3,{id:"getpaletteitem",children:e.jsx(n.code,{children:"getPaletteItem"})}),`
`,e.jsx(n.p,{children:"Returns value for searching needed colors."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$palette: List"})," — palette list"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color: Color|String"})," — color"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$item: getPaletteItem(('primary', 'secondary'), #ff0000);
`})}),`
`,e.jsx(n.h3,{id:"getpaletteitemopacity",children:e.jsx(n.code,{children:"getPaletteItemOpacity"})}),`
`,e.jsx(n.p,{children:"Returns value for searching needed colors opacity."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$palette: List"})," — palette list"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color: Color|String"})," — color"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$opacity: getPaletteItemOpacity(('primary', 'secondary'), rgba(255, 0, 0, 0.8));
`})}),`
`,e.jsx(n.h2,{id:"conversion-functions",children:"Conversion Functions"}),`
`,e.jsx(n.h3,{id:"tocolorrbg",children:e.jsx(n.code,{children:"toColorRbg"})}),`
`,e.jsx(n.p,{children:"Color conversion to RGB type."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color"})," — color to convert"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$rgb: toColorRbg(#ff5733); // "255, 87, 51"
`})}),`
`,e.jsx(n.h3,{id:"tocoloropacity",children:e.jsx(n.code,{children:"toColorOpacity"})}),`
`,e.jsx(n.p,{children:"Gets the transparency of the color."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color"})," — color"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$opacity: toColorOpacity(rgba(255, 0, 0, 0.7)); // 0.7
`})}),`
`,e.jsx(n.h3,{id:"togradient",children:e.jsx(n.code,{children:"toGradient"})}),`
`,e.jsx(n.p,{children:"Conversion of color into images for working with background-image."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color"})," — color"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$gradient: toGradient(rgba(255, 0, 0, 0.5));
`})}),`
`,e.jsx(n.h3,{id:"tocustomvarrgb",children:e.jsx(n.code,{children:"toCustomVarRgb"})}),`
`,e.jsx(n.p,{children:"Converts custom variable to RGB format."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color"})," — CSS custom property"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$rgba: toCustomVarRgb(var(--my-color));
`})}),`
`,e.jsx(n.h3,{id:"tocustomvaropacity",children:e.jsx(n.code,{children:"toCustomVarOpacity"})}),`
`,e.jsx(n.p,{children:"Adds transparency property to custom variable."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color"})," — CSS custom property"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$defaultValue: null"})," — default opacity value"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$opacity: toCustomVarOpacity(var(--my-color), 1);
`})}),`
`,e.jsx(n.h2,{id:"system-mixins",children:"System Mixins"}),`
`,e.jsx(n.h3,{id:"initpalette",children:e.jsx(n.code,{children:"initPalette"})}),`
`,e.jsx(n.p,{children:"Initializes palette-related opacity variables."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.component {
  @include initPalette;
}
`})}),`
`,e.jsx(n.h3,{id:"colorsys",children:e.jsx(n.code,{children:"colorSys"})}),`
`,e.jsx(n.p,{children:"Defines system color variables (RGB and opacity)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$name: String"})," — variable suffix"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color: Color|String"})," — input color or CSS var"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include colorSys('primary', #3498db);
}
`})}),`
`,e.jsx(n.h3,{id:"colorsyspalette",children:e.jsx(n.code,{children:"colorSysPalette"})}),`
`,e.jsx(n.p,{children:"Defines system palette variables (RGB and opacity)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$name: String"})," — palette key suffix"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color: Color|String"})," — input color or CSS var"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.theme {
  @include colorSysPalette('primary', #3498db);
}
`})}),`
`,e.jsx(n.h2,{id:"palette-mixins",children:"Palette Mixins"}),`
`,e.jsx(n.h3,{id:"palette",children:e.jsx(n.code,{children:"palette"})}),`
`,e.jsx(n.p,{children:"Sets base palette RGB value."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color: Color|String"})," — input color or CSS var"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.theme-blue {
  @include palette(#3498db);
}
`})}),`
`,e.jsx(n.h3,{id:"palettevar",children:e.jsx(n.code,{children:"paletteVar"})}),`
`,e.jsx(n.p,{children:"Maps a custom variable into palette chain."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color: Color|String"})," — CSS custom property"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.dynamic-theme {
  @include paletteVar(var(--theme-primary));
}
`})}),`
`,e.jsx(n.h3,{id:"palettecolor",children:e.jsx(n.code,{children:"paletteColor"})}),`
`,e.jsx(n.p,{children:"Applies palette color to text."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color: Color|String"})," — palette reference or color"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.text {
  @include paletteColor(#2c3e50);
}
`})}),`
`,e.jsx(n.h3,{id:"palettestroke",children:e.jsx(n.code,{children:"paletteStroke"})}),`
`,e.jsx(n.p,{children:"Applies palette color to stroke."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color: Color|String"})," — palette reference or color"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.icon {
  @include paletteStroke(#e74c3c);
}
`})}),`
`,e.jsx(n.h3,{id:"palettebackground",children:e.jsx(n.code,{children:"paletteBackground"})}),`
`,e.jsx(n.p,{children:"Applies palette color to background."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color: Color|String"})," — palette reference or color"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.card {
  @include paletteBackground(#ecf0f1);
}
`})}),`
`,e.jsx(n.h3,{id:"palettefill",children:e.jsx(n.code,{children:"paletteFill"})}),`
`,e.jsx(n.p,{children:"Applies palette color to fill."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color: Color|String"})," — palette reference or color"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.icon {
  @include paletteFill(#3498db);
}
`})}),`
`,e.jsx(n.h3,{id:"palettegradient",children:e.jsx(n.code,{children:"paletteGradient"})}),`
`,e.jsx(n.p,{children:"Applies palette gradient to background-image."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color: Color|String"})," — palette reference or color"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.hero {
  @include paletteGradient(#667eea);
}
`})}),`
`,e.jsx(n.h3,{id:"paletteborder",children:e.jsx(n.code,{children:"paletteBorder"})}),`
`,e.jsx(n.p,{children:"Applies palette color to border."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color: Color|String"})," — palette reference or color"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.input {
  @include paletteBorder(#bdc3c7);
}
`})}),`
`,e.jsx(n.h2,{id:"color-mixins",children:"Color Mixins"}),`
`,e.jsx(n.h3,{id:"color-1",children:e.jsx(n.code,{children:"color"})}),`
`,e.jsx(n.p,{children:"Sets text color via system variables."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color: Color|String"})," — color or CSS var"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$opacity: null"})," — optional opacity [0..1]"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$propertyName: 'color'"})," — CSS property name"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.text {
  @include color(#333333);
}

.text-transparent {
  @include color(#ff0000, 0.5);
}
`})}),`
`,e.jsx(n.h3,{id:"coloropacity",children:e.jsx(n.code,{children:"colorOpacity"})}),`
`,e.jsx(n.p,{children:"Sets text color opacity variable."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$opacity: Number"})," — opacity [0..1]"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$init: false"})," — immediately apply computed color"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$propertyName: 'color'"})," — CSS property name"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.text {
  @include color(#ff0000);

  &:hover {
    @include colorOpacity(0.7, false, true);
  }
}
`})}),`
`,e.jsx(n.h3,{id:"colorinit",children:e.jsx(n.code,{children:"colorInit"})}),`
`,e.jsx(n.p,{children:"Applies computed system text color."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$propertyName: 'color'"})," — CSS property name"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include colorInit();
}
`})}),`
`,e.jsx(n.h3,{id:"coloraspalette",children:e.jsx(n.code,{children:"colorAsPalette"})}),`
`,e.jsx(n.p,{children:"Renders text color using palette variables."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.text {
  @include colorAsPalette();
}
`})}),`
`,e.jsx(n.h2,{id:"stroke-mixins",children:"Stroke Mixins"}),`
`,e.jsx(n.h3,{id:"stroke",children:e.jsx(n.code,{children:"stroke"})}),`
`,e.jsx(n.p,{children:"Sets stroke color via system variables."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color: Color|String"})," — color or CSS var"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$opacity: null"})," — optional opacity [0..1]"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.icon {
  @include stroke(#000000);
}
`})}),`
`,e.jsx(n.h3,{id:"strokeopacity",children:e.jsx(n.code,{children:"strokeOpacity"})}),`
`,e.jsx(n.p,{children:"Sets stroke opacity variable."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$opacity: Number"})," — opacity [0..1]"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$init: false"})," — immediately apply computed stroke"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.icon {
  @include strokeOpacity(0.5, false, true);
}
`})}),`
`,e.jsx(n.h3,{id:"strokeinit",children:e.jsx(n.code,{children:"strokeInit"})}),`
`,e.jsx(n.p,{children:"Applies computed stroke color."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.icon {
  @include strokeInit();
}
`})}),`
`,e.jsx(n.h2,{id:"background-mixins",children:"Background Mixins"}),`
`,e.jsx(n.h3,{id:"backgroundcolor",children:e.jsx(n.code,{children:"backgroundColor"})}),`
`,e.jsx(n.p,{children:"Sets background color via system variables."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color: Color|String"})," — color, 'as-color', transparent or CSS var"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$opacity: null"})," — optional opacity [0..1]"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$propertyName: 'background-color'"})," — CSS property name"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.card {
  @include backgroundColor(#ffffff);
}

.overlay {
  @include backgroundColor(transparent);
}
`})}),`
`,e.jsx(n.h3,{id:"backgroundopacity",children:e.jsx(n.code,{children:"backgroundOpacity"})}),`
`,e.jsx(n.p,{children:"Sets background opacity variable."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$opacity: Number"})," — opacity [0..1]"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$init: false"})," — immediately apply computed background"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$propertyName: 'background-color'"})," — CSS property name"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.card {
  @include backgroundOpacity(0.9, false, true);
}
`})}),`
`,e.jsx(n.h3,{id:"backgroundsize",children:e.jsx(n.code,{children:"backgroundSize"})}),`
`,e.jsx(n.p,{children:"Sets background-size and disables repeat."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — background-size value"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.hero {
  @include backgroundSize(cover);
}
`})}),`
`,e.jsx(n.h3,{id:"backgroundinit",children:e.jsx(n.code,{children:"backgroundInit"})}),`
`,e.jsx(n.p,{children:"Applies computed background color."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$propertyName: 'background-color'"})," — CSS property name"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include backgroundInit();
}
`})}),`
`,e.jsx(n.h3,{id:"backgroundascolor",children:e.jsx(n.code,{children:"backgroundAsColor"})}),`
`,e.jsx(n.p,{children:"Sets background from --sys-color variables."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include backgroundAsColor();
}
`})}),`
`,e.jsx(n.h2,{id:"fill-mixins",children:"Fill Mixins"}),`
`,e.jsx(n.h3,{id:"fill",children:e.jsx(n.code,{children:"fill"})}),`
`,e.jsx(n.p,{children:"Sets fill color via background helpers."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color: Color|String"})," — color or CSS var"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$opacity: null"})," — optional opacity [0..1]"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.icon {
  @include fill(#3498db);
}
`})}),`
`,e.jsx(n.h3,{id:"fillopacity",children:e.jsx(n.code,{children:"fillOpacity"})}),`
`,e.jsx(n.p,{children:"Sets fill opacity variable."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$opacity: Number"})," — opacity [0..1]"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$init: false"})," — immediately apply computed fill"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.icon {
  @include fillOpacity(0.8, false, true);
}
`})}),`
`,e.jsx(n.h3,{id:"fillinit",children:e.jsx(n.code,{children:"fillInit"})}),`
`,e.jsx(n.p,{children:"Applies computed fill color."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.icon {
  @include fillInit();
}
`})}),`
`,e.jsx(n.h2,{id:"gradient-mixins",children:"Gradient Mixins"}),`
`,e.jsx(n.h3,{id:"gradient",children:e.jsx(n.code,{children:"gradient"})}),`
`,e.jsx(n.p,{children:"Sets gradient (background-image) via system variables."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color: Color|String"})," — color or CSS var"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$opacity: null"})," — optional opacity [0..1]"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.hero {
  @include gradient(#667eea);
}
`})}),`
`,e.jsx(n.h3,{id:"gradientopacity",children:e.jsx(n.code,{children:"gradientOpacity"})}),`
`,e.jsx(n.p,{children:"Sets gradient opacity variable."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$opacity: Number"})," — opacity [0..1]"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$init: false"})," — immediately apply computed gradient"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.hero {
  @include gradientOpacity(0.9, false, true);
}
`})}),`
`,e.jsx(n.h3,{id:"gradientinit",children:e.jsx(n.code,{children:"gradientInit"})}),`
`,e.jsx(n.p,{children:"Applies computed gradient background image."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include gradientInit();
}
`})}),`
`,e.jsx(n.h2,{id:"border-mixins",children:"Border Mixins"}),`
`,e.jsx(n.h3,{id:"bordercolor",children:e.jsx(n.code,{children:"borderColor"})}),`
`,e.jsx(n.p,{children:"Sets border color via system variables."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$color: Color|String"})," — color or CSS var"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$opacity: null"})," — optional opacity [0..1]"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.input {
  @include borderColor(#d0d0d0);
}
`})}),`
`,e.jsx(n.h3,{id:"borderopacity",children:e.jsx(n.code,{children:"borderOpacity"})}),`
`,e.jsx(n.p,{children:"Sets border opacity variable."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$opacity: Number"})," — opacity [0..1]"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$init: false"})," — immediately apply computed border"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.input {
  @include borderOpacity(1, false, true);
}
`})}),`
`,e.jsx(n.h3,{id:"borderinit",children:e.jsx(n.code,{children:"borderInit"})}),`
`,e.jsx(n.p,{children:"Applies computed border color."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$important: false"})," — add !important"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include borderInit();
}
`})}),`
`,e.jsx(n.h3,{id:"borderascolor",children:e.jsx(n.code,{children:"borderAsColor"})}),`
`,e.jsx(n.p,{children:"Sets border from --sys-color variables."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include borderAsColor();
}
`})})]})}function x(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{x as default};
