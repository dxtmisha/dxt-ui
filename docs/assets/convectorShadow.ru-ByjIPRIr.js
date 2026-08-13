import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Functions/convectorShadow - Преобразование теней в CSS`}),`
`,(0,c.jsx)(t.h1,{id:`convectorshadow`,children:(0,c.jsx)(t.code,{children:`convectorShadow`})}),`
`,(0,c.jsxs)(t.p,{children:[`Функция преобразует необработанные конфигурации теней или массивы теней в строковые значения CSS `,(0,c.jsx)(t.code,{children:`box-shadow`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: PropertyItemInput`}),` — элемент свойства токена дизайна для преобразования.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`void`}),` — функция напрямую изменяет свойство `,(0,c.jsx)(t.code,{children:`value`}),` переданного объекта `,(0,c.jsx)(t.code,{children:`item`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`принцип-работы`,children:`Принцип работы`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция проверяет, является ли `,(0,c.jsx)(t.code,{children:`item.value`}),` объектом. Если да, она обходит элементы конфигурации теней (при необходимости преобразуя одиночный объект в массив). Для каждой тени:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Сопоставляет тип `,(0,c.jsx)(t.code,{children:`innerShadow`}),` со значением `,(0,c.jsx)(t.code,{children:`inset`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Разбирает смещения и размеры (`,(0,c.jsx)(t.code,{children:`x`}),`, `,(0,c.jsx)(t.code,{children:`y`}),`, `,(0,c.jsx)(t.code,{children:`blur`}),`, `,(0,c.jsx)(t.code,{children:`spread`}),`), добавляя суффикс `,(0,c.jsx)(t.code,{children:`px`}),` к чисто числовым строкам.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Если параметр цвета содержит фигурные скобки интерполяции `,(0,c.jsx)(t.code,{children:`{`}),`, он оборачивает цвет в формат `,(0,c.jsx)(t.code,{children:`@ui.toCustomVarRgb(...)`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`Соединяет все разобранные параметры через пробел, а несколько описаний теней объединяет через запятую.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { convectorShadow } from '@dxtmisha/scripts'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};