import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/styles/ru/Color`}),`
`,(0,c.jsx)(n.h1,{id:`color`,children:`Color`}),`
`,(0,c.jsx)(n.p,{children:`Набор SCSS функций и миксинов для управления цветом с поддержкой CSS Custom Properties.`}),`
`,(0,c.jsx)(n.h2,{id:`функции-валидации`,children:`Функции валидации`}),`
`,(0,c.jsx)(n.h3,{id:`iscolorrbgorvar`,children:(0,c.jsx)(n.code,{children:`isColorRbgOrVar`})}),`
`,(0,c.jsx)(n.p,{children:`Проверяет, является ли значение цветом.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — значение для проверки`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Boolean`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@if isColorRbgOrVar(#ff0000) { } // true
@if isColorRbgOrVar('none') { } // false
`})}),`
`,(0,c.jsx)(n.h3,{id:`ispalette`,children:(0,c.jsx)(n.code,{children:`isPalette`})}),`
`,(0,c.jsx)(n.p,{children:`Проверяет, является ли цвет подходящим для палитры.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — цвет для проверки`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Boolean`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@if isPalette(var(--primary-500)) { } // true
@if isPalette(#ff0000) { } // false
`})}),`
`,(0,c.jsx)(n.h2,{id:`функции-для-работы-с-цветом`,children:`Функции для работы с цветом`}),`
`,(0,c.jsx)(n.h3,{id:`getcolor`,children:(0,c.jsx)(n.code,{children:`getColor`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает значение цвета по его коду.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — цвет`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: 1`}),` — прозрачность [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$gradient: false`}),` — если true, возвращает в виде изображения`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$value: getColor(#ff0000, 0.5); // rgba(255, 0, 0, 0.5)
$gradient: getColor(#ff0000, 0.8, true); // linear-gradient(...)
`})}),`
`,(0,c.jsx)(n.h3,{id:`getcolorbypalette`,children:(0,c.jsx)(n.code,{children:`getColorByPalette`})}),`
`,(0,c.jsx)(n.p,{children:`Проверяет, является ли цвет частью списка используемых цветов.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — цвет для проверки`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String|null`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$palette: getColorByPalette(var(--primary-color));
`})}),`
`,(0,c.jsx)(n.h3,{id:`getcolorbyshade`,children:(0,c.jsx)(n.code,{children:`getColorByShade`})}),`
`,(0,c.jsx)(n.p,{children:`Проверяет, является ли цвет частью списка насыщенности.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — цвет для проверки`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String|null`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$shade: getColorByShade(var(--color-500));
`})}),`
`,(0,c.jsx)(n.h3,{id:`getcolorvalue`,children:(0,c.jsx)(n.code,{children:`getColorValue`})}),`
`,(0,c.jsx)(n.p,{children:`Получает код цвета для вставки в свойство.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$name: String`}),` — имя переменной`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$defaultValue: null`}),` — значение по умолчанию`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$color: getColorValue('--my-color', #333);
`})}),`
`,(0,c.jsx)(n.h3,{id:`getcolorvaluesys`,children:(0,c.jsx)(n.code,{children:`getColorValueSys`})}),`
`,(0,c.jsx)(n.p,{children:`Получает код системного цвета для вставки в свойство.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$name: String`}),` — суффикс переменной`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$color: getColorValueSys('color');
`})}),`
`,(0,c.jsx)(n.h2,{id:`функции-палитры`,children:`Функции палитры`}),`
`,(0,c.jsx)(n.h3,{id:`getpalette`,children:(0,c.jsx)(n.code,{children:`getPalette`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает значение для палитры.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — цвет`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$value: getPalette(var(--primary-500));
`})}),`
`,(0,c.jsx)(n.h3,{id:`getpaletteopacity`,children:(0,c.jsx)(n.code,{children:`getPaletteOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает значение прозрачности для палитры.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — цвет`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$opacity: getPaletteOpacity(var(--primary-500));
`})}),`
`,(0,c.jsx)(n.h3,{id:`getpaletteitem`,children:(0,c.jsx)(n.code,{children:`getPaletteItem`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает значение для поиска нужных цветов.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$palette: List`}),` — список палитры`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — цвет`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$item: getPaletteItem(('primary', 'secondary'), #ff0000);
`})}),`
`,(0,c.jsx)(n.h3,{id:`getpaletteitemopacity`,children:(0,c.jsx)(n.code,{children:`getPaletteItemOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает значение прозрачности для поиска нужных цветов.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$palette: List`}),` — список палитры`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — цвет`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$opacity: getPaletteItemOpacity(('primary', 'secondary'), rgba(255, 0, 0, 0.8));
`})}),`
`,(0,c.jsx)(n.h2,{id:`функции-преобразования`,children:`Функции преобразования`}),`
`,(0,c.jsx)(n.h3,{id:`tocolorrbg`,children:(0,c.jsx)(n.code,{children:`toColorRbg`})}),`
`,(0,c.jsx)(n.p,{children:`Преобразование цвета в тип RGB.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — цвет для преобразования`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$rgb: toColorRbg(#ff5733); // "255, 87, 51"
`})}),`
`,(0,c.jsx)(n.h3,{id:`tocoloropacity`,children:(0,c.jsx)(n.code,{children:`toColorOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Получает прозрачность цвета.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — цвет`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$opacity: toColorOpacity(rgba(255, 0, 0, 0.7)); // 0.7
`})}),`
`,(0,c.jsx)(n.h3,{id:`togradient`,children:(0,c.jsx)(n.code,{children:`toGradient`})}),`
`,(0,c.jsx)(n.p,{children:`Преобразование цвета в изображения для работы с background-image.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — цвет`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$gradient: toGradient(rgba(255, 0, 0, 0.5));
`})}),`
`,(0,c.jsx)(n.h3,{id:`tocustomvarrgb`,children:(0,c.jsx)(n.code,{children:`toCustomVarRgb`})}),`
`,(0,c.jsx)(n.p,{children:`Преобразует пользовательскую переменную в RGB формат.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — CSS пользовательское свойство`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$rgba: toCustomVarRgb(var(--my-color));
`})}),`
`,(0,c.jsx)(n.h3,{id:`tocustomvaropacity`,children:(0,c.jsx)(n.code,{children:`toCustomVarOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Добавляет свойство прозрачности к пользовательской переменной.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color`}),` — CSS пользовательское свойство`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$defaultValue: null`}),` — значение прозрачности по умолчанию`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$opacity: toCustomVarOpacity(var(--my-color), 1);
`})}),`
`,(0,c.jsx)(n.h2,{id:`системные-миксины`,children:`Системные миксины`}),`
`,(0,c.jsx)(n.h3,{id:`initpalette`,children:(0,c.jsx)(n.code,{children:`initPalette`})}),`
`,(0,c.jsx)(n.p,{children:`Инициализирует переменные прозрачности, связанные с палитрой.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.component {
  @include initPalette;
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`colorsys`,children:(0,c.jsx)(n.code,{children:`colorSys`})}),`
`,(0,c.jsx)(n.p,{children:`Определяет системные цветовые переменные (RGB и непрозрачность).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$name: String`}),` — суффикс переменной`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — входной цвет или CSS переменная`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include colorSys('primary', #3498db);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`colorsyspalette`,children:(0,c.jsx)(n.code,{children:`colorSysPalette`})}),`
`,(0,c.jsx)(n.p,{children:`Определяет системные переменные палитры (RGB и непрозрачность).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$name: String`}),` — суффикс ключа палитры`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — входной цвет или CSS переменная`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.theme {
  @include colorSysPalette('primary', #3498db);
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`миксины-палитры`,children:`Миксины палитры`}),`
`,(0,c.jsx)(n.h3,{id:`palette`,children:(0,c.jsx)(n.code,{children:`palette`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает базовое RGB значение палитры.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — входной цвет или CSS переменная`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.theme-blue {
  @include palette(#3498db);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`palettevar`,children:(0,c.jsx)(n.code,{children:`paletteVar`})}),`
`,(0,c.jsx)(n.p,{children:`Привязывает пользовательскую переменную к палитре.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — CSS пользовательское свойство`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.dynamic-theme {
  @include paletteVar(var(--theme-primary));
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`palettecolor`,children:(0,c.jsx)(n.code,{children:`paletteColor`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет цвет палитры к тексту.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — ссылка на палитру или цвет`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include paletteColor(#2c3e50);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`palettestroke`,children:(0,c.jsx)(n.code,{children:`paletteStroke`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет цвет палитры к обводке.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — ссылка на палитру или цвет`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.icon {
  @include paletteStroke(#e74c3c);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`palettebackground`,children:(0,c.jsx)(n.code,{children:`paletteBackground`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет цвет палитры к фону.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — ссылка на палитру или цвет`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card {
  @include paletteBackground(#ecf0f1);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`palettefill`,children:(0,c.jsx)(n.code,{children:`paletteFill`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет цвет палитры к заливке.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — ссылка на палитру или цвет`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.icon {
  @include paletteFill(#3498db);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`palettegradient`,children:(0,c.jsx)(n.code,{children:`paletteGradient`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет градиент палитры к background-image.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — ссылка на палитру или цвет`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.hero {
  @include paletteGradient(#667eea);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`paletteborder`,children:(0,c.jsx)(n.code,{children:`paletteBorder`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет цвет палитры к границе.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — ссылка на палитру или цвет`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.input {
  @include paletteBorder(#bdc3c7);
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`миксины-цвета`,children:`Миксины цвета`}),`
`,(0,c.jsx)(n.h3,{id:`color-1`,children:(0,c.jsx)(n.code,{children:`color`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает цвет текста через системные переменные.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — цвет или CSS переменная`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: null`}),` — опциональная прозрачность [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$propertyName: 'color'`}),` — имя CSS свойства`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include color(#333333);
}

.text-transparent {
  @include color(#ff0000, 0.5);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`coloropacity`,children:(0,c.jsx)(n.code,{children:`colorOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает переменную непрозрачности текста.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number`}),` — прозрачность [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$init: false`}),` — немедленно применить вычисленный цвет`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$propertyName: 'color'`}),` — имя CSS свойства`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include color(#ff0000);

  &:hover {
    @include colorOpacity(0.7, false, true);
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`colorinit`,children:(0,c.jsx)(n.code,{children:`colorInit`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет вычисленный системный цвет текста.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$propertyName: 'color'`}),` — имя CSS свойства`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include colorInit();
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`coloraspalette`,children:(0,c.jsx)(n.code,{children:`colorAsPalette`})}),`
`,(0,c.jsx)(n.p,{children:`Рендерит цвет текста, используя переменные палитры.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text {
  @include colorAsPalette();
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`миксины-обводки`,children:`Миксины обводки`}),`
`,(0,c.jsx)(n.h3,{id:`stroke`,children:(0,c.jsx)(n.code,{children:`stroke`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает цвет обводки через системные переменные.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — цвет или CSS переменная`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: null`}),` — опциональная прозрачность [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.icon {
  @include stroke(#000000);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`strokeopacity`,children:(0,c.jsx)(n.code,{children:`strokeOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает переменную непрозрачности обводки.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number`}),` — прозрачность [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$init: false`}),` — немедленно применить вычисленную обводку`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.icon {
  @include strokeOpacity(0.5, false, true);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`strokeinit`,children:(0,c.jsx)(n.code,{children:`strokeInit`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет вычисленный цвет обводки.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.icon {
  @include strokeInit();
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`миксины-фона`,children:`Миксины фона`}),`
`,(0,c.jsx)(n.h3,{id:`backgroundcolor`,children:(0,c.jsx)(n.code,{children:`backgroundColor`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает цвет фона через системные переменные.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — цвет, 'as-color', transparent или CSS переменная`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: null`}),` — опциональная прозрачность [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$propertyName: 'background-color'`}),` — имя CSS свойства`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card {
  @include backgroundColor(#ffffff);
}

.overlay {
  @include backgroundColor(transparent);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`backgroundopacity`,children:(0,c.jsx)(n.code,{children:`backgroundOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает переменную непрозрачности фона.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number`}),` — прозрачность [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$init: false`}),` — немедленно применить вычисленный фон`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$propertyName: 'background-color'`}),` — имя CSS свойства`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card {
  @include backgroundOpacity(0.9, false, true);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`backgroundsize`,children:(0,c.jsx)(n.code,{children:`backgroundSize`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает background-size и отключает повтор.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение background-size`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.hero {
  @include backgroundSize(cover);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`backgroundinit`,children:(0,c.jsx)(n.code,{children:`backgroundInit`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет вычисленный цвет фона.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$propertyName: 'background-color'`}),` — имя CSS свойства`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include backgroundInit();
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`backgroundascolor`,children:(0,c.jsx)(n.code,{children:`backgroundAsColor`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает фон из переменных --sys-color.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include backgroundAsColor();
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`миксины-заливки`,children:`Миксины заливки`}),`
`,(0,c.jsx)(n.h3,{id:`fill`,children:(0,c.jsx)(n.code,{children:`fill`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает цвет заливки через фоновые миксины.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — цвет или CSS переменная`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: null`}),` — опциональная прозрачность [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.icon {
  @include fill(#3498db);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`fillopacity`,children:(0,c.jsx)(n.code,{children:`fillOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает переменную непрозрачности заливки.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number`}),` — прозрачность [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$init: false`}),` — немедленно применить вычисленную заливку`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.icon {
  @include fillOpacity(0.8, false, true);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`fillinit`,children:(0,c.jsx)(n.code,{children:`fillInit`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет вычисленный цвет заливки.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.icon {
  @include fillInit();
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`миксины-градиента`,children:`Миксины градиента`}),`
`,(0,c.jsx)(n.h3,{id:`gradient`,children:(0,c.jsx)(n.code,{children:`gradient`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает градиент (background-image) через системные переменные.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — цвет или CSS переменная`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: null`}),` — опциональная прозрачность [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.hero {
  @include gradient(#667eea);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`gradientopacity`,children:(0,c.jsx)(n.code,{children:`gradientOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает переменную непрозрачности градиента.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number`}),` — прозрачность [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$init: false`}),` — немедленно применить вычисленный градиент`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.hero {
  @include gradientOpacity(0.9, false, true);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`gradientinit`,children:(0,c.jsx)(n.code,{children:`gradientInit`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет вычисленный градиент для background-image.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include gradientInit();
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`миксины-границы`,children:`Миксины границы`}),`
`,(0,c.jsx)(n.h3,{id:`bordercolor`,children:(0,c.jsx)(n.code,{children:`borderColor`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает цвет границы через системные переменные.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color|String`}),` — цвет или CSS переменная`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: null`}),` — опциональная прозрачность [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.input {
  @include borderColor(#d0d0d0);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`borderopacity`,children:(0,c.jsx)(n.code,{children:`borderOpacity`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает переменную непрозрачности границы.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$opacity: Number`}),` — прозрачность [0..1]`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$init: false`}),` — немедленно применить вычисленную границу`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.input {
  @include borderOpacity(1, false, true);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`borderinit`,children:(0,c.jsx)(n.code,{children:`borderInit`})}),`
`,(0,c.jsx)(n.p,{children:`Применяет вычисленный цвет границы.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$important: false`}),` — добавить !important`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include borderInit();
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`borderascolor`,children:(0,c.jsx)(n.code,{children:`borderAsColor`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает границу из переменных --sys-color.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include borderAsColor();
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};