import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/styles/en/Color`}),`
`,(0,c.jsx)(n.h1,{id:`color`,children:`Color`}),`
`,(0,c.jsx)(n.p,{children:`A set of SCSS functions and mixins for color management with CSS Custom Properties support.`}),`
`,(0,c.jsx)(n.h2,{id:`validation-functions`,children:`Validation Functions`}),`
`,(0,c.jsx)(n.h3,{id:`iscolorrbgorvar`,children:(0,c.jsx)(n.code,{children:`isColorRbgOrVar`})}),`
`,(0,c.jsx)(n.p,{children:`Checks if a value is a color.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — value to check`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Boolean`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@if isColorRbgOrVar(#ff0000) { } // true
@if isColorRbgOrVar('none') { } // false
`})}),`
`,(0,c.jsx)(n.h3,{id:`ispalette`,children:(0,c.jsx)(n.code,{children:`isPalette`})}),`
`,(0,c.jsx)(n.p,{children:`Checks if a color is suitable for the palette.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — color to check`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Boolean`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@if isPalette(var(--primary-500)) { } // true
@if isPalette(#ff0000) { } // false
`})}),`
`,(0,c.jsx)(n.h2,{id:`color-functions`,children:`Color Functions`}),`
`,(0,c.jsx)(n.h3,{id:`getcolor`,children:(0,c.jsx)(n.code,{children:`getColor`})}),`
`,(0,c.jsx)(n.p,{children:`Returns color value by its code.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — color`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: 1`}),` — opacity [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$gradient: false`}),` — if true, returns as an image`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$value: getColor(#ff0000, 0.5); // rgba(255, 0, 0, 0.5)
$gradient: getColor(#ff0000, 0.8, true); // linear-gradient(...)
`})}),`
`,(0,c.jsx)(n.h3,{id:`getcolorbypalette`,children:(0,c.jsx)(n.code,{children:`getColorByPalette`})}),`
`,(0,c.jsx)(n.p,{children:`Checks if a color is part of the list of used colors.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — color to check`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String|null`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$palette: getColorByPalette(var(--primary-color));
`})}),`
`,(0,c.jsx)(n.h3,{id:`getcolorbyshade`,children:(0,c.jsx)(n.code,{children:`getColorByShade`})}),`
`,(0,c.jsx)(n.p,{children:`Checks if a color is part of the list of saturation levels.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — color to check`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String|null`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$shade: getColorByShade(var(--color-500));
`})}),`
`,(0,c.jsx)(n.h3,{id:`getcolorvalue`,children:(0,c.jsx)(n.code,{children:`getColorValue`})}),`
`,(0,c.jsx)(n.p,{children:`Gets color code for insertion into property.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$name: String`}),` — variable name`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$defaultValue: null`}),` — default value`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$color: getColorValue('--my-color', #333);
`})}),`
`,(0,c.jsx)(n.h3,{id:`getcolorvaluesys`,children:(0,c.jsx)(n.code,{children:`getColorValueSys`})}),`
`,(0,c.jsx)(n.p,{children:`Gets system color code for insertion into property.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$name: String`}),` — variable suffix`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$color: getColorValueSys('color');
`})}),`
`,(0,c.jsx)(n.h2,{id:`palette-functions`,children:`Palette Functions`}),`
`,(0,c.jsx)(n.h3,{id:`getpalette`,children:(0,c.jsx)(n.code,{children:`getPalette`})}),`
`,(0,c.jsx)(n.p,{children:`Returns value for palette.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — color`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$value: getPalette(var(--primary-500));
`})}),`
`,(0,c.jsx)(n.h3,{id:`getpaletteopacity`,children:(0,c.jsx)(n.code,{children:`getPaletteOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Returns value for palette opacity.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — color`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$opacity: getPaletteOpacity(var(--primary-500));
`})}),`
`,(0,c.jsx)(n.h3,{id:`getpaletteitem`,children:(0,c.jsx)(n.code,{children:`getPaletteItem`})}),`
`,(0,c.jsx)(n.p,{children:`Returns value for searching needed colors.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$palette: List`}),` — palette list`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — color`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$item: getPaletteItem(('primary', 'secondary'), #ff0000);
`})}),`
`,(0,c.jsx)(n.h3,{id:`getpaletteitemopacity`,children:(0,c.jsx)(n.code,{children:`getPaletteItemOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Returns value for searching needed colors opacity.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$palette: List`}),` — palette list`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — color`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$opacity: getPaletteItemOpacity(('primary', 'secondary'), rgba(255, 0, 0, 0.8));
`})}),`
`,(0,c.jsx)(n.h2,{id:`conversion-functions`,children:`Conversion Functions`}),`
`,(0,c.jsx)(n.h3,{id:`tocolorrbg`,children:(0,c.jsx)(n.code,{children:`toColorRbg`})}),`
`,(0,c.jsx)(n.p,{children:`Color conversion to RGB type.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — color to convert`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$rgb: toColorRbg(#ff5733); // "255, 87, 51"
`})}),`
`,(0,c.jsx)(n.h3,{id:`tocoloropacity`,children:(0,c.jsx)(n.code,{children:`toColorOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Gets the transparency of the color.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — color`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$opacity: toColorOpacity(rgba(255, 0, 0, 0.7)); // 0.7
`})}),`
`,(0,c.jsx)(n.h3,{id:`togradient`,children:(0,c.jsx)(n.code,{children:`toGradient`})}),`
`,(0,c.jsx)(n.p,{children:`Conversion of color into images for working with background-image.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — color`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$gradient: toGradient(rgba(255, 0, 0, 0.5));
`})}),`
`,(0,c.jsx)(n.h3,{id:`tocustomvarrgb`,children:(0,c.jsx)(n.code,{children:`toCustomVarRgb`})}),`
`,(0,c.jsx)(n.p,{children:`Converts custom variable to RGB format.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — CSS custom property`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$rgba: toCustomVarRgb(var(--my-color));
`})}),`
`,(0,c.jsx)(n.h3,{id:`tocustomvaropacity`,children:(0,c.jsx)(n.code,{children:`toCustomVarOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Adds transparency property to custom variable.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — CSS custom property`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$defaultValue: null`}),` — default opacity value`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$opacity: toCustomVarOpacity(var(--my-color), 1);
`})}),`
`,(0,c.jsx)(n.h2,{id:`system-mixins`,children:`System Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`initpalette`,children:(0,c.jsx)(n.code,{children:`initPalette`})}),`
`,(0,c.jsx)(n.p,{children:`Initializes palette-related opacity variables.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.component {
  @include initPalette;
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`colorsys`,children:(0,c.jsx)(n.code,{children:`colorSys`})}),`
`,(0,c.jsx)(n.p,{children:`Defines system color variables (RGB and opacity).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$name: String`}),` — variable suffix`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — input color or CSS var`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include colorSys('primary', #3498db);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`colorsyspalette`,children:(0,c.jsx)(n.code,{children:`colorSysPalette`})}),`
`,(0,c.jsx)(n.p,{children:`Defines system palette variables (RGB and opacity).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$name: String`}),` — palette key suffix`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — input color or CSS var`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.theme {
  @include colorSysPalette('primary', #3498db);
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`palette-mixins`,children:`Palette Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`palette`,children:(0,c.jsx)(n.code,{children:`palette`})}),`
`,(0,c.jsx)(n.p,{children:`Sets base palette RGB value.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — input color or CSS var`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.theme-blue {
  @include palette(#3498db);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`palettevar`,children:(0,c.jsx)(n.code,{children:`paletteVar`})}),`
`,(0,c.jsx)(n.p,{children:`Maps a custom variable into palette chain.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — CSS custom property`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.dynamic-theme {
  @include paletteVar(var(--theme-primary));
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`palettecolor`,children:(0,c.jsx)(n.code,{children:`paletteColor`})}),`
`,(0,c.jsx)(n.p,{children:`Applies palette color to text.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — palette reference or color`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include paletteColor(#2c3e50);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`palettestroke`,children:(0,c.jsx)(n.code,{children:`paletteStroke`})}),`
`,(0,c.jsx)(n.p,{children:`Applies palette color to stroke.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — palette reference or color`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.icon {
  @include paletteStroke(#e74c3c);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`palettebackground`,children:(0,c.jsx)(n.code,{children:`paletteBackground`})}),`
`,(0,c.jsx)(n.p,{children:`Applies palette color to background.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — palette reference or color`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card {
  @include paletteBackground(#ecf0f1);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`palettefill`,children:(0,c.jsx)(n.code,{children:`paletteFill`})}),`
`,(0,c.jsx)(n.p,{children:`Applies palette color to fill.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — palette reference or color`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.icon {
  @include paletteFill(#3498db);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`palettegradient`,children:(0,c.jsx)(n.code,{children:`paletteGradient`})}),`
`,(0,c.jsx)(n.p,{children:`Applies palette gradient to background-image.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — palette reference or color`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.hero {
  @include paletteGradient(#667eea);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`paletteborder`,children:(0,c.jsx)(n.code,{children:`paletteBorder`})}),`
`,(0,c.jsx)(n.p,{children:`Applies palette color to border.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — palette reference or color`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.input {
  @include paletteBorder(#bdc3c7);
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`color-mixins`,children:`Color Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`color-1`,children:(0,c.jsx)(n.code,{children:`color`})}),`
`,(0,c.jsx)(n.p,{children:`Sets text color via system variables.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — color or CSS var`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: null`}),` — optional opacity [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$propertyName: 'color'`}),` — CSS property name`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include color(#333333);
}

.text-transparent {
  @include color(#ff0000, 0.5);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`coloropacity`,children:(0,c.jsx)(n.code,{children:`colorOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Sets text color opacity variable.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number`}),` — opacity [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$init: false`}),` — immediately apply computed color`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$propertyName: 'color'`}),` — CSS property name`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include color(#ff0000);

  &:hover {
    @include colorOpacity(0.7, false, true);
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`colorinit`,children:(0,c.jsx)(n.code,{children:`colorInit`})}),`
`,(0,c.jsx)(n.p,{children:`Applies computed system text color.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$propertyName: 'color'`}),` — CSS property name`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include colorInit();
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`coloraspalette`,children:(0,c.jsx)(n.code,{children:`colorAsPalette`})}),`
`,(0,c.jsx)(n.p,{children:`Renders text color using palette variables.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include colorAsPalette();
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`stroke-mixins`,children:`Stroke Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`stroke`,children:(0,c.jsx)(n.code,{children:`stroke`})}),`
`,(0,c.jsx)(n.p,{children:`Sets stroke color via system variables.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — color or CSS var`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: null`}),` — optional opacity [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.icon {
  @include stroke(#000000);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`strokeopacity`,children:(0,c.jsx)(n.code,{children:`strokeOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Sets stroke opacity variable.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number`}),` — opacity [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$init: false`}),` — immediately apply computed stroke`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.icon {
  @include strokeOpacity(0.5, false, true);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`strokeinit`,children:(0,c.jsx)(n.code,{children:`strokeInit`})}),`
`,(0,c.jsx)(n.p,{children:`Applies computed stroke color.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.icon {
  @include strokeInit();
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`background-mixins`,children:`Background Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`backgroundcolor`,children:(0,c.jsx)(n.code,{children:`backgroundColor`})}),`
`,(0,c.jsx)(n.p,{children:`Sets background color via system variables.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — color, 'as-color', transparent or CSS var`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: null`}),` — optional opacity [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$propertyName: 'background-color'`}),` — CSS property name`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card {
  @include backgroundColor(#ffffff);
}

.overlay {
  @include backgroundColor(transparent);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`backgroundopacity`,children:(0,c.jsx)(n.code,{children:`backgroundOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Sets background opacity variable.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number`}),` — opacity [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$init: false`}),` — immediately apply computed background`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$propertyName: 'background-color'`}),` — CSS property name`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card {
  @include backgroundOpacity(0.9, false, true);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`backgroundsize`,children:(0,c.jsx)(n.code,{children:`backgroundSize`})}),`
`,(0,c.jsx)(n.p,{children:`Sets background-size and disables repeat.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — background-size value`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.hero {
  @include backgroundSize(cover);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`backgroundinit`,children:(0,c.jsx)(n.code,{children:`backgroundInit`})}),`
`,(0,c.jsx)(n.p,{children:`Applies computed background color.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$propertyName: 'background-color'`}),` — CSS property name`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include backgroundInit();
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`backgroundascolor`,children:(0,c.jsx)(n.code,{children:`backgroundAsColor`})}),`
`,(0,c.jsx)(n.p,{children:`Sets background from --sys-color variables.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include backgroundAsColor();
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`fill-mixins`,children:`Fill Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`fill`,children:(0,c.jsx)(n.code,{children:`fill`})}),`
`,(0,c.jsx)(n.p,{children:`Sets fill color via background helpers.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — color or CSS var`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: null`}),` — optional opacity [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.icon {
  @include fill(#3498db);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`fillopacity`,children:(0,c.jsx)(n.code,{children:`fillOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Sets fill opacity variable.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number`}),` — opacity [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$init: false`}),` — immediately apply computed fill`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.icon {
  @include fillOpacity(0.8, false, true);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`fillinit`,children:(0,c.jsx)(n.code,{children:`fillInit`})}),`
`,(0,c.jsx)(n.p,{children:`Applies computed fill color.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.icon {
  @include fillInit();
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`gradient-mixins`,children:`Gradient Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`gradient`,children:(0,c.jsx)(n.code,{children:`gradient`})}),`
`,(0,c.jsx)(n.p,{children:`Sets gradient (background-image) via system variables.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — color or CSS var`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: null`}),` — optional opacity [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.hero {
  @include gradient(#667eea);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`gradientopacity`,children:(0,c.jsx)(n.code,{children:`gradientOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Sets gradient opacity variable.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number`}),` — opacity [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$init: false`}),` — immediately apply computed gradient`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.hero {
  @include gradientOpacity(0.9, false, true);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`gradientinit`,children:(0,c.jsx)(n.code,{children:`gradientInit`})}),`
`,(0,c.jsx)(n.p,{children:`Applies computed gradient background image.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include gradientInit();
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`border-mixins`,children:`Border Mixins`}),`
`,(0,c.jsx)(n.h3,{id:`bordercolor`,children:(0,c.jsx)(n.code,{children:`borderColor`})}),`
`,(0,c.jsx)(n.p,{children:`Sets border color via system variables.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — color or CSS var`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: null`}),` — optional opacity [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.input {
  @include borderColor(#d0d0d0);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`borderopacity`,children:(0,c.jsx)(n.code,{children:`borderOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Sets border opacity variable.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number`}),` — opacity [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$init: false`}),` — immediately apply computed border`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.input {
  @include borderOpacity(1, false, true);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`borderinit`,children:(0,c.jsx)(n.code,{children:`borderInit`})}),`
`,(0,c.jsx)(n.p,{children:`Applies computed border color.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — add !important`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include borderInit();
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`borderascolor`,children:(0,c.jsx)(n.code,{children:`borderAsColor`})}),`
`,(0,c.jsx)(n.p,{children:`Sets border from --sys-color variables.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include borderAsColor();
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};