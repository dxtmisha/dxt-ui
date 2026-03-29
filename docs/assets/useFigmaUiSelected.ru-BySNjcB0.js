import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/figma-ref/Composables/useFigmaUiSelected - Выбранные фреймы`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmauiselected`,children:(0,c.jsx)(n.code,{children:`useFigmaUiSelected`})}),`
`,(0,c.jsx)(n.p,{children:`Композабл для управления и наблюдения за списком выбранных фреймов в интерфейсе Figma.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
Объект со следующими свойствами:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: ComputedRef<string[]>`}),` — Реактивный список ID выбранных фреймов. Автоматически обновляется при изменении выбора в Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: ComputedRef<boolean>`}),` — Реактивный флаг, указывающий, загружаются ли в данный момент данные о выборе из плагина Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelected(id: string): ComputedRef<boolean>`}),` — Функция, возвращающая реактивное логическое значение, указывающее, выбран ли в данный момент конкретный ID фрейма.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toggleSelected(id: string, selected: boolean): void`}),` — Функция для обновления состояния выбора фрейма в Figma.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaUiSelected } from '@dxtmisha/figma-ref'

const { selected, loading, isSelected, toggleSelected } = useFigmaUiSelected()

// Проверка, выбран ли конкретный фрейм
const frameId = '123:456'
const isFrameSelected = isSelected(frameId)

// Переключение выбора
const handleToggle = () => {
  toggleSelected(frameId, !isFrameSelected.value)
}

// Наблюдение за изменениями выбора
console.log('Текущие ID выбранных фреймов:', selected.value)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};