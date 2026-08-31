import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/figma-ref/Composables/useFigmaUiSelected - Управление выбранными фреймами в UI`}),`
`,(0,c.jsx)(t.h1,{id:`usefigmauiselected`,children:(0,c.jsx)(t.code,{children:`useFigmaUiSelected`})}),`
`,(0,c.jsx)(t.p,{children:`Composable для управления и наблюдения за списком идентификаторов фреймов, выбранных пользователем в интерфейсе плагина. Предоставляет инструменты для проверки состояния выбора и переключения выделения.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: ComputedRef<string[]>`}),` — вычисляемая ссылка на список ID выбранных фреймов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: ComputedRef<boolean>`}),` — реактивный флаг, указывающий на процесс получения списка выбранных фреймов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSelected(id: string): ComputedRef<boolean>`}),` — вспомогательная функция, возвращающая вычисляемое логическое значение (выбран ли фрейм).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toggleSelected(id: string, selected: boolean): void`}),` — функция для добавления или удаления фрейма из списка выбора.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaUiSelected } from '@dxtmisha/figma-ref'

const { selected, isSelected, toggleSelected } = useFigmaUiSelected()

// Проверка, выбран ли фрейм
const active = isSelected('1:123')

// Переключение состояния выбора
toggleSelected('1:123', !active.value)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};