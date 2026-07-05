import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Functions/convectorShadow - Преобразование теней в CSS`}),`
`,(0,c.jsx)(n.h1,{id:`convectorshadow`,children:(0,c.jsx)(n.code,{children:`convectorShadow`})}),`
`,(0,c.jsxs)(n.p,{children:[`Функция преобразует необработанные конфигурации теней или массивы теней в строковые значения CSS `,(0,c.jsx)(n.code,{children:`box-shadow`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: PropertyItemInput`}),` — элемент свойства токена дизайна для преобразования.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`void`}),` — функция напрямую изменяет свойство `,(0,c.jsx)(n.code,{children:`value`}),` переданного объекта `,(0,c.jsx)(n.code,{children:`item`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`принцип-работы`,children:`Принцип работы`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция проверяет, является ли `,(0,c.jsx)(n.code,{children:`item.value`}),` объектом. Если да, она обходит элементы конфигурации теней (при необходимости преобразуя одиночный объект в массив). Для каждой тени:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Сопоставляет тип `,(0,c.jsx)(n.code,{children:`innerShadow`}),` со значением `,(0,c.jsx)(n.code,{children:`inset`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Разбирает смещения и размеры (`,(0,c.jsx)(n.code,{children:`x`}),`, `,(0,c.jsx)(n.code,{children:`y`}),`, `,(0,c.jsx)(n.code,{children:`blur`}),`, `,(0,c.jsx)(n.code,{children:`spread`}),`), добавляя суффикс `,(0,c.jsx)(n.code,{children:`px`}),` к чисто числовым строкам.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Если параметр цвета содержит фигурные скобки интерполяции `,(0,c.jsx)(n.code,{children:`{`}),`, он оборачивает цвет в формат `,(0,c.jsx)(n.code,{children:`@ui.toCustomVarRgb(...)`}),`.`]}),`
`,(0,c.jsx)(n.li,{children:`Соединяет все разобранные параметры через пробел, а несколько описаний теней объединяет через запятую.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { convectorShadow } from '@dxtmisha/scripts'

const item = {
  value: {
    type: 'innerShadow',
    color: '{sys.color.primary}',
    x: '0',
    y: '4',
    blur: '10',
    spread: '2'
  }
}
convectorShadow(item)

console.log(item.value) // "inset 0px 4px 10px 2px @ui.toCustomVarRgb({sys.color.primary})"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};