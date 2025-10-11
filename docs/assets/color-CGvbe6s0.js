import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Dqnce8mp.js";import{M as c}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function l(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/styles/ru/Color"}),`
`,n.jsx(e.h1,{id:"color",children:"Color"}),`
`,n.jsx(e.p,{children:"Набор SCSS функций и миксинов для управления цветом с поддержкой CSS Custom Properties."}),`
`,n.jsx(e.h2,{id:"функции-валидации",children:"Функции валидации"}),`
`,n.jsx(e.h3,{id:"iscolorrbgorvar",children:n.jsx(e.code,{children:"isColorRbgOrVar"})}),`
`,n.jsx(e.p,{children:"Проверяет, является ли значение цветом."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color"})," — значение для проверки"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Boolean"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`@if isColorRbgOrVar(#ff0000) { } // true
@if isColorRbgOrVar('none') { } // false
`})}),`
`,n.jsx(e.h3,{id:"ispalette",children:n.jsx(e.code,{children:"isPalette"})}),`
`,n.jsx(e.p,{children:"Проверяет, является ли цвет подходящим для палитры."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color"})," — цвет для проверки"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Boolean"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`@if isPalette(var(--primary-500)) { } // true
@if isPalette(#ff0000) { } // false
`})}),`
`,n.jsx(e.h2,{id:"функции-для-работы-с-цветом",children:"Функции для работы с цветом"}),`
`,n.jsx(e.h3,{id:"getcolor",children:n.jsx(e.code,{children:"getColor"})}),`
`,n.jsx(e.p,{children:"Возвращает значение цвета по его коду."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color"})," — цвет"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$opacity: 1"})," — прозрачность [0..1]"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$gradient: false"})," — если true, возвращает в виде изображения"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"String"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`$value: getColor(#ff0000, 0.5); // rgba(255, 0, 0, 0.5)
$gradient: getColor(#ff0000, 0.8, true); // linear-gradient(...)
`})}),`
`,n.jsx(e.h3,{id:"getcolorbypalette",children:n.jsx(e.code,{children:"getColorByPalette"})}),`
`,n.jsx(e.p,{children:"Проверяет, является ли цвет частью списка используемых цветов."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color"})," — цвет для проверки"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"String|null"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`$palette: getColorByPalette(var(--primary-color));
`})}),`
`,n.jsx(e.h3,{id:"getcolorbyshade",children:n.jsx(e.code,{children:"getColorByShade"})}),`
`,n.jsx(e.p,{children:"Проверяет, является ли цвет частью списка насыщенности."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color"})," — цвет для проверки"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"String|null"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`$shade: getColorByShade(var(--color-500));
`})}),`
`,n.jsx(e.h3,{id:"getcolorvalue",children:n.jsx(e.code,{children:"getColorValue"})}),`
`,n.jsx(e.p,{children:"Получает код цвета для вставки в свойство."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$name: String"})," — имя переменной"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$defaultValue: null"})," — значение по умолчанию"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"String"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`$color: getColorValue('--my-color', #333);
`})}),`
`,n.jsx(e.h3,{id:"getcolorvaluesys",children:n.jsx(e.code,{children:"getColorValueSys"})}),`
`,n.jsx(e.p,{children:"Получает код системного цвета для вставки в свойство."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$name: String"})," — суффикс переменной"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"String"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`$color: getColorValueSys('color');
`})}),`
`,n.jsx(e.h2,{id:"функции-палитры",children:"Функции палитры"}),`
`,n.jsx(e.h3,{id:"getpalette",children:n.jsx(e.code,{children:"getPalette"})}),`
`,n.jsx(e.p,{children:"Возвращает значение для палитры."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color"})," — цвет"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"String"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`$value: getPalette(var(--primary-500));
`})}),`
`,n.jsx(e.h3,{id:"getpaletteopacity",children:n.jsx(e.code,{children:"getPaletteOpacity"})}),`
`,n.jsx(e.p,{children:"Возвращает значение прозрачности для палитры."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color"})," — цвет"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"String"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`$opacity: getPaletteOpacity(var(--primary-500));
`})}),`
`,n.jsx(e.h3,{id:"getpaletteitem",children:n.jsx(e.code,{children:"getPaletteItem"})}),`
`,n.jsx(e.p,{children:"Возвращает значение для поиска нужных цветов."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$palette: List"})," — список палитры"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color: Color|String"})," — цвет"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"String"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`$item: getPaletteItem(('primary', 'secondary'), #ff0000);
`})}),`
`,n.jsx(e.h3,{id:"getpaletteitemopacity",children:n.jsx(e.code,{children:"getPaletteItemOpacity"})}),`
`,n.jsx(e.p,{children:"Возвращает значение прозрачности для поиска нужных цветов."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$palette: List"})," — список палитры"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color: Color|String"})," — цвет"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"String"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`$opacity: getPaletteItemOpacity(('primary', 'secondary'), rgba(255, 0, 0, 0.8));
`})}),`
`,n.jsx(e.h2,{id:"функции-преобразования",children:"Функции преобразования"}),`
`,n.jsx(e.h3,{id:"tocolorrbg",children:n.jsx(e.code,{children:"toColorRbg"})}),`
`,n.jsx(e.p,{children:"Преобразование цвета в тип RGB."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color"})," — цвет для преобразования"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"String"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`$rgb: toColorRbg(#ff5733); // "255, 87, 51"
`})}),`
`,n.jsx(e.h3,{id:"tocoloropacity",children:n.jsx(e.code,{children:"toColorOpacity"})}),`
`,n.jsx(e.p,{children:"Получает прозрачность цвета."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color"})," — цвет"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"String"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`$opacity: toColorOpacity(rgba(255, 0, 0, 0.7)); // 0.7
`})}),`
`,n.jsx(e.h3,{id:"togradient",children:n.jsx(e.code,{children:"toGradient"})}),`
`,n.jsx(e.p,{children:"Преобразование цвета в изображения для работы с background-image."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color"})," — цвет"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"String"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`$gradient: toGradient(rgba(255, 0, 0, 0.5));
`})}),`
`,n.jsx(e.h3,{id:"tocustomvarrgb",children:n.jsx(e.code,{children:"toCustomVarRgb"})}),`
`,n.jsx(e.p,{children:"Преобразует пользовательскую переменную в RGB формат."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color"})," — CSS пользовательское свойство"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"String"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`$rgba: toCustomVarRgb(var(--my-color));
`})}),`
`,n.jsx(e.h3,{id:"tocustomvaropacity",children:n.jsx(e.code,{children:"toCustomVarOpacity"})}),`
`,n.jsx(e.p,{children:"Добавляет свойство прозрачности к пользовательской переменной."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color"})," — CSS пользовательское свойство"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$defaultValue: null"})," — значение прозрачности по умолчанию"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"String"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`$opacity: toCustomVarOpacity(var(--my-color), 1);
`})}),`
`,n.jsx(e.h2,{id:"системные-миксины",children:"Системные миксины"}),`
`,n.jsx(e.h3,{id:"initpalette",children:n.jsx(e.code,{children:"initPalette"})}),`
`,n.jsx(e.p,{children:"Инициализирует переменные прозрачности, связанные с палитрой."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.component {
  @include initPalette;
}
`})}),`
`,n.jsx(e.h3,{id:"colorsys",children:n.jsx(e.code,{children:"colorSys"})}),`
`,n.jsx(e.p,{children:"Определяет системные цветовые переменные (RGB и непрозрачность)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$name: String"})," — суффикс переменной"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color: Color|String"})," — входной цвет или CSS переменная"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include colorSys('primary', #3498db);
}
`})}),`
`,n.jsx(e.h3,{id:"colorsyspalette",children:n.jsx(e.code,{children:"colorSysPalette"})}),`
`,n.jsx(e.p,{children:"Определяет системные переменные палитры (RGB и непрозрачность)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$name: String"})," — суффикс ключа палитры"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color: Color|String"})," — входной цвет или CSS переменная"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.theme {
  @include colorSysPalette('primary', #3498db);
}
`})}),`
`,n.jsx(e.h2,{id:"миксины-палитры",children:"Миксины палитры"}),`
`,n.jsx(e.h3,{id:"palette",children:n.jsx(e.code,{children:"palette"})}),`
`,n.jsx(e.p,{children:"Устанавливает базовое RGB значение палитры."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color: Color|String"})," — входной цвет или CSS переменная"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.theme-blue {
  @include palette(#3498db);
}
`})}),`
`,n.jsx(e.h3,{id:"palettevar",children:n.jsx(e.code,{children:"paletteVar"})}),`
`,n.jsx(e.p,{children:"Привязывает пользовательскую переменную к палитре."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color: Color|String"})," — CSS пользовательское свойство"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.dynamic-theme {
  @include paletteVar(var(--theme-primary));
}
`})}),`
`,n.jsx(e.h3,{id:"palettecolor",children:n.jsx(e.code,{children:"paletteColor"})}),`
`,n.jsx(e.p,{children:"Применяет цвет палитры к тексту."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color: Color|String"})," — ссылка на палитру или цвет"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.text {
  @include paletteColor(#2c3e50);
}
`})}),`
`,n.jsx(e.h3,{id:"palettestroke",children:n.jsx(e.code,{children:"paletteStroke"})}),`
`,n.jsx(e.p,{children:"Применяет цвет палитры к обводке."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color: Color|String"})," — ссылка на палитру или цвет"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.icon {
  @include paletteStroke(#e74c3c);
}
`})}),`
`,n.jsx(e.h3,{id:"palettebackground",children:n.jsx(e.code,{children:"paletteBackground"})}),`
`,n.jsx(e.p,{children:"Применяет цвет палитры к фону."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color: Color|String"})," — ссылка на палитру или цвет"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.card {
  @include paletteBackground(#ecf0f1);
}
`})}),`
`,n.jsx(e.h3,{id:"palettefill",children:n.jsx(e.code,{children:"paletteFill"})}),`
`,n.jsx(e.p,{children:"Применяет цвет палитры к заливке."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color: Color|String"})," — ссылка на палитру или цвет"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.icon {
  @include paletteFill(#3498db);
}
`})}),`
`,n.jsx(e.h3,{id:"palettegradient",children:n.jsx(e.code,{children:"paletteGradient"})}),`
`,n.jsx(e.p,{children:"Применяет градиент палитры к background-image."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color: Color|String"})," — ссылка на палитру или цвет"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.hero {
  @include paletteGradient(#667eea);
}
`})}),`
`,n.jsx(e.h3,{id:"paletteborder",children:n.jsx(e.code,{children:"paletteBorder"})}),`
`,n.jsx(e.p,{children:"Применяет цвет палитры к границе."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color: Color|String"})," — ссылка на палитру или цвет"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.input {
  @include paletteBorder(#bdc3c7);
}
`})}),`
`,n.jsx(e.h2,{id:"миксины-цвета",children:"Миксины цвета"}),`
`,n.jsx(e.h3,{id:"color-1",children:n.jsx(e.code,{children:"color"})}),`
`,n.jsx(e.p,{children:"Устанавливает цвет текста через системные переменные."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color: Color|String"})," — цвет или CSS переменная"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$opacity: null"})," — опциональная прозрачность [0..1]"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$propertyName: 'color'"})," — имя CSS свойства"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.text {
  @include color(#333333);
}

.text-transparent {
  @include color(#ff0000, 0.5);
}
`})}),`
`,n.jsx(e.h3,{id:"coloropacity",children:n.jsx(e.code,{children:"colorOpacity"})}),`
`,n.jsx(e.p,{children:"Устанавливает переменную непрозрачности текста."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$opacity: Number"})," — прозрачность [0..1]"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$init: false"})," — немедленно применить вычисленный цвет"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$propertyName: 'color'"})," — имя CSS свойства"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.text {
  @include color(#ff0000);

  &:hover {
    @include colorOpacity(0.7, false, true);
  }
}
`})}),`
`,n.jsx(e.h3,{id:"colorinit",children:n.jsx(e.code,{children:"colorInit"})}),`
`,n.jsx(e.p,{children:"Применяет вычисленный системный цвет текста."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$propertyName: 'color'"})," — имя CSS свойства"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include colorInit();
}
`})}),`
`,n.jsx(e.h3,{id:"coloraspalette",children:n.jsx(e.code,{children:"colorAsPalette"})}),`
`,n.jsx(e.p,{children:"Рендерит цвет текста, используя переменные палитры."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.text {
  @include colorAsPalette();
}
`})}),`
`,n.jsx(e.h2,{id:"миксины-обводки",children:"Миксины обводки"}),`
`,n.jsx(e.h3,{id:"stroke",children:n.jsx(e.code,{children:"stroke"})}),`
`,n.jsx(e.p,{children:"Устанавливает цвет обводки через системные переменные."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color: Color|String"})," — цвет или CSS переменная"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$opacity: null"})," — опциональная прозрачность [0..1]"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.icon {
  @include stroke(#000000);
}
`})}),`
`,n.jsx(e.h3,{id:"strokeopacity",children:n.jsx(e.code,{children:"strokeOpacity"})}),`
`,n.jsx(e.p,{children:"Устанавливает переменную непрозрачности обводки."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$opacity: Number"})," — прозрачность [0..1]"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$init: false"})," — немедленно применить вычисленную обводку"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.icon {
  @include strokeOpacity(0.5, false, true);
}
`})}),`
`,n.jsx(e.h3,{id:"strokeinit",children:n.jsx(e.code,{children:"strokeInit"})}),`
`,n.jsx(e.p,{children:"Применяет вычисленный цвет обводки."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.icon {
  @include strokeInit();
}
`})}),`
`,n.jsx(e.h2,{id:"миксины-фона",children:"Миксины фона"}),`
`,n.jsx(e.h3,{id:"backgroundcolor",children:n.jsx(e.code,{children:"backgroundColor"})}),`
`,n.jsx(e.p,{children:"Устанавливает цвет фона через системные переменные."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color: Color|String"})," — цвет, 'as-color', transparent или CSS переменная"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$opacity: null"})," — опциональная прозрачность [0..1]"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$propertyName: 'background-color'"})," — имя CSS свойства"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.card {
  @include backgroundColor(#ffffff);
}

.overlay {
  @include backgroundColor(transparent);
}
`})}),`
`,n.jsx(e.h3,{id:"backgroundopacity",children:n.jsx(e.code,{children:"backgroundOpacity"})}),`
`,n.jsx(e.p,{children:"Устанавливает переменную непрозрачности фона."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$opacity: Number"})," — прозрачность [0..1]"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$init: false"})," — немедленно применить вычисленный фон"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$propertyName: 'background-color'"})," — имя CSS свойства"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.card {
  @include backgroundOpacity(0.9, false, true);
}
`})}),`
`,n.jsx(e.h3,{id:"backgroundsize",children:n.jsx(e.code,{children:"backgroundSize"})}),`
`,n.jsx(e.p,{children:"Устанавливает background-size и отключает повтор."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value"})," — значение background-size"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.hero {
  @include backgroundSize(cover);
}
`})}),`
`,n.jsx(e.h3,{id:"backgroundinit",children:n.jsx(e.code,{children:"backgroundInit"})}),`
`,n.jsx(e.p,{children:"Применяет вычисленный цвет фона."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$propertyName: 'background-color'"})," — имя CSS свойства"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include backgroundInit();
}
`})}),`
`,n.jsx(e.h3,{id:"backgroundascolor",children:n.jsx(e.code,{children:"backgroundAsColor"})}),`
`,n.jsx(e.p,{children:"Устанавливает фон из переменных --sys-color."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include backgroundAsColor();
}
`})}),`
`,n.jsx(e.h2,{id:"миксины-заливки",children:"Миксины заливки"}),`
`,n.jsx(e.h3,{id:"fill",children:n.jsx(e.code,{children:"fill"})}),`
`,n.jsx(e.p,{children:"Устанавливает цвет заливки через фоновые миксины."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color: Color|String"})," — цвет или CSS переменная"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$opacity: null"})," — опциональная прозрачность [0..1]"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.icon {
  @include fill(#3498db);
}
`})}),`
`,n.jsx(e.h3,{id:"fillopacity",children:n.jsx(e.code,{children:"fillOpacity"})}),`
`,n.jsx(e.p,{children:"Устанавливает переменную непрозрачности заливки."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$opacity: Number"})," — прозрачность [0..1]"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$init: false"})," — немедленно применить вычисленную заливку"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.icon {
  @include fillOpacity(0.8, false, true);
}
`})}),`
`,n.jsx(e.h3,{id:"fillinit",children:n.jsx(e.code,{children:"fillInit"})}),`
`,n.jsx(e.p,{children:"Применяет вычисленный цвет заливки."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.icon {
  @include fillInit();
}
`})}),`
`,n.jsx(e.h2,{id:"миксины-градиента",children:"Миксины градиента"}),`
`,n.jsx(e.h3,{id:"gradient",children:n.jsx(e.code,{children:"gradient"})}),`
`,n.jsx(e.p,{children:"Устанавливает градиент (background-image) через системные переменные."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color: Color|String"})," — цвет или CSS переменная"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$opacity: null"})," — опциональная прозрачность [0..1]"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.hero {
  @include gradient(#667eea);
}
`})}),`
`,n.jsx(e.h3,{id:"gradientopacity",children:n.jsx(e.code,{children:"gradientOpacity"})}),`
`,n.jsx(e.p,{children:"Устанавливает переменную непрозрачности градиента."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$opacity: Number"})," — прозрачность [0..1]"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$init: false"})," — немедленно применить вычисленный градиент"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.hero {
  @include gradientOpacity(0.9, false, true);
}
`})}),`
`,n.jsx(e.h3,{id:"gradientinit",children:n.jsx(e.code,{children:"gradientInit"})}),`
`,n.jsx(e.p,{children:"Применяет вычисленный градиент для background-image."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include gradientInit();
}
`})}),`
`,n.jsx(e.h2,{id:"миксины-границы",children:"Миксины границы"}),`
`,n.jsx(e.h3,{id:"bordercolor",children:n.jsx(e.code,{children:"borderColor"})}),`
`,n.jsx(e.p,{children:"Устанавливает цвет границы через системные переменные."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$color: Color|String"})," — цвет или CSS переменная"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$opacity: null"})," — опциональная прозрачность [0..1]"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.input {
  @include borderColor(#d0d0d0);
}
`})}),`
`,n.jsx(e.h3,{id:"borderopacity",children:n.jsx(e.code,{children:"borderOpacity"})}),`
`,n.jsx(e.p,{children:"Устанавливает переменную непрозрачности границы."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$opacity: Number"})," — прозрачность [0..1]"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$init: false"})," — немедленно применить вычисленную границу"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.input {
  @include borderOpacity(1, false, true);
}
`})}),`
`,n.jsx(e.h3,{id:"borderinit",children:n.jsx(e.code,{children:"borderInit"})}),`
`,n.jsx(e.p,{children:"Применяет вычисленный цвет границы."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$important: false"})," — добавить !important"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include borderInit();
}
`})}),`
`,n.jsx(e.h3,{id:"borderascolor",children:n.jsx(e.code,{children:"borderAsColor"})}),`
`,n.jsx(e.p,{children:"Устанавливает границу из переменных --sys-color."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.element {
  @include borderAsColor();
}
`})})]})}function t(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{t as default};
