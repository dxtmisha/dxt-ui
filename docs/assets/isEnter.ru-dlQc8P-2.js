import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isEnter - Проверка нажатия Enter или Space`}),`
`,(0,c.jsx)(t.h1,{id:`isenter`,children:(0,c.jsx)(t.code,{children:`isEnter`})}),`
`,(0,c.jsxs)(t.p,{children:[`Проверяет, является ли нажатая клавиша `,(0,c.jsx)(t.code,{children:`Enter`}),` или `,(0,c.jsx)(t.code,{children:`Space`}),` (клавиша действия WAI-ARIA) вне полей ввода текста. Функция используется для клавиатурной активации интерактивных элементов (кнопок, ссылок, карточек).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Если фокус находится внутри поля ввода (`,(0,c.jsx)(t.code,{children:`input`}),`, `,(0,c.jsx)(t.code,{children:`textarea`}),`, `,(0,c.jsx)(t.code,{children:`select`}),`, `,(0,c.jsx)(t.code,{children:`contenteditable`}),`), функция возвращает `,(0,c.jsx)(t.code,{children:`false`}),`, чтобы не блокировать ввод текста и пробелов, если это поведение явно не переопределено параметром `,(0,c.jsx)(t.code,{children:`isInputElement`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: KeyboardEvent`}),` — объект события клавиатуры.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isInputElement?: boolean`}),` — принудительный флаг: `,(0,c.jsx)(t.code,{children:`true`}),` — считать элемент полем ввода (вернёт `,(0,c.jsx)(t.code,{children:`false`}),`), `,(0,c.jsx)(t.code,{children:`false`}),` — разрешить обработку даже внутри полей ввода. Если не передан, определяется автоматически через `,(0,c.jsx)(t.code,{children:`isInput(event.target)`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если нажат `,(0,c.jsx)(t.code,{children:`Enter`}),` или `,(0,c.jsx)(t.code,{children:`Space`}),` вне поля ввода (или при явном разрешении), иначе `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Поддерживаемые свойства события:`}),`
Функция проверяет следующие свойства события:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key`}),`: `,(0,c.jsx)(t.code,{children:`'Enter'`}),`, `,(0,c.jsx)(t.code,{children:`' '`}),`, `,(0,c.jsx)(t.code,{children:`'Spacebar'`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code`}),`: `,(0,c.jsx)(t.code,{children:`'Enter'`}),`, `,(0,c.jsx)(t.code,{children:`'NumpadEnter'`}),`, `,(0,c.jsx)(t.code,{children:`'Space'`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyCode`}),`: `,(0,c.jsx)(t.code,{children:`13`}),`, `,(0,c.jsx)(t.code,{children:`32`})]}),`
`,(0,c.jsxs)(t.li,{children:[`Защита от IME: если `,(0,c.jsx)(t.code,{children:`event.isComposing === true`}),`, функция всегда возвращает `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isEnter } from '@dxtmisha/functional-basic'

const onKeyDown = (event: KeyboardEvent) => {
  if (isEnter(event)) {
    console.log('Нажат Enter или Space')
    // Выполнить действие
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};