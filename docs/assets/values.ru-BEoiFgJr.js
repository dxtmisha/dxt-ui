import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI/properties/# Значения`}),`
`,(0,c.jsx)(n.h1,{id:`работа-со-значениями-value`,children:`Работа со значениями (Value)`}),`
`,(0,c.jsxs)(n.p,{children:[`Поле `,(0,c.jsx)(n.code,{children:`value`}),` в `,(0,c.jsx)(n.code,{children:`properties.json`}),` определяет конечное содержимое свойства (цвет, размер, путь и т.д.). Содержимое `,(0,c.jsx)(n.code,{children:`value`}),` может быть представлено литералами, динамическими ссылками на другие токены или системными маркерами.`]}),`
`,(0,c.jsx)(n.h3,{id:`литералы-и-типы-данных`,children:`Литералы и Типы данных`}),`
`,(0,c.jsx)(n.p,{children:`Система поддерживает стандартные типы данных JSON:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Строки`}),`: `,(0,c.jsx)(n.code,{children:`"12px"`}),`, `,(0,c.jsx)(n.code,{children:`"relative"`}),`, `,(0,c.jsx)(n.code,{children:`"none"`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Числа`}),`: `,(0,c.jsx)(n.code,{children:`24`}),`, `,(0,c.jsx)(n.code,{children:`0.5`}),` (автоматически преобразуются в строки при сборке).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Цвета`}),`: Поддерживаются HEX-форматы:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`#FFF`}),` / `,(0,c.jsx)(n.code,{children:`#FFFFFF`}),` — стандартный цвет.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`#FFFFFF80`}),` — цвет с альфа-каналом (8 символов).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`ссылки-и-системные-маркеры-`,children:[`Ссылки и системные маркеры (`,(0,c.jsx)(n.code,{children:`{...}`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Вы можете заимствовать значения других свойств, используя фигурные скобки. Это позволяет создавать зависимости между токенами.`}),`
`,(0,c.jsx)(n.h4,{id:`правила-разрешения-путей`,children:`Правила разрешения путей:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Абсолютный путь`}),`: `,(0,c.jsx)(n.code,{children:`{design.component.property}`}),` — полное указание от корня.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Относительный путь (Авто-дизайн)`}),`: `,(0,c.jsx)(n.code,{children:`{primary-color}`}),`. Если первый сегмент пути не является названием зарегистрированного дизайна, система автоматически подставляет имя текущего дизайна (`,(0,c.jsx)(n.code,{children:`{current-design.primary-color}`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Вложенность`}),`: Поддерживается неограниченная вложенность через точку: `,(0,c.jsx)(n.code,{children:`{base.spacing.small}`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`специальные-метки-шорткаты`,children:`Специальные метки (Шорткаты):`}),`
`,(0,c.jsx)(n.p,{children:`Для сокращения путей внутри ссылок используются специальные символы-подстановки:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`?`}),` — заменяется на `,(0,c.jsx)(n.code,{children:`[текущий_дизайн].`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`??`}),` — заменяется на `,(0,c.jsx)(n.code,{children:`[текущий_дизайн].[текущий_компонент].`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "color": "{?primary}",          // Развернется в {d1.primary}
    "padding": "{??base-padding}"   // Развернется в {d1.button.base-padding}
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:`Эти метки позволяют писать переносимый код, который не сломается при переименовании дизайна или компонента.`}),`
`,(0,c.jsx)(n.h4,{id:`выражения-и-смешанный-контент`,children:`Выражения и смешанный контент:`}),`
`,(0,c.jsxs)(n.p,{children:[`Поле `,(0,c.jsx)(n.code,{children:`value`}),` может содержать произвольный текст, внутри которого находятся одна или несколько ссылок `,(0,c.jsx)(n.code,{children:`{...}`}),`. Система найдет и развернет каждую ссылку, сохранив остальной текст нетронутым.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Это позволяет использовать ссылки внутри функций CSS (например, `,(0,c.jsx)(n.code,{children:`calc()`}),`) или комбинировать их с нативными CSS-переменными.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "padding": "var(--sys-height) * {sys.spacing.adaptive.md}"
  }
}
`})}),`
`,(0,c.jsxs)(n.h3,{id:`маркер-полного-значения-`,children:[`Маркер «Полного значения» (`,(0,c.jsx)(n.code,{children:`=`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Если значение начинается с символа `,(0,c.jsx)(n.code,{children:`=`}),`, компилятор считает его «завершенным» (full value). Значение передается в SCSS «как есть» без какой-либо дальнейшей обработки.`]}),`
`,(0,c.jsx)(n.p,{children:`Это полезно для сложных функций CSS или когда нужно передать сырой путь.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример использования:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "color": "{?primary}",           // Ссылка через метку дизайна
    "padding": "{??base-padding}",   // Ссылка через метку компонента
    "width": "=calc(100% - 20px)",   // Полное значение (без обработки)
    "border": "1px solid #00000030"  // HEX с прозрачностью
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`дополнительные-параметры`,children:`Дополнительные параметры`}),`
`,(0,c.jsxs)(n.p,{children:[`Для более точной настройки обработки и вывода значения можно использовать специальные служебные флаги (начинающиеся с `,(0,c.jsx)(n.code,{children:`_`}),`):`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_important: boolean`}),` — добавляет спецификатор `,(0,c.jsx)(n.code,{children:`!important`}),` к значению свойства в CSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_fullValue: boolean`}),` — программный аналог маркера `,(0,c.jsx)(n.code,{children:`=`}),`. Отключает автоматическое добавление единиц измерения (`,(0,c.jsx)(n.code,{children:`px`}),`) и разрешение ссылок `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_replace: object`}),` — позволяет выполнить замену текста в финальном значении через регулярное выражение. Принимает объект `,(0,c.jsx)(n.code,{children:`{ pattern, flags, replace }`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_modification: boolean`}),` — управляет возможностью модификации свойства в SCSS (по умолчанию `,(0,c.jsx)(n.code,{children:`true`}),`). При значении `,(0,c.jsx)(n.code,{children:`false`}),` свойство считается статичным.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример использования:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "width": { 
      "value": "100%", 
      "_important": true      // Результат: width: 100% !important;
    },
    "padding": { 
      "value": "16px", 
      "_replace": {           // Результат: padding: 16rem;
        "pattern": "px", 
        "replace": "rem", 
        "flags": "g" 
      }
    },
    "height": { 
      "value": "calc(100vh - 20px)", 
      "_fullValue": true      // Результат: height: calc(100vh - 20px);
    }
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};