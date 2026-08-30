import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:`управление-значениями-прогресса`,children:`Управление значениями прогресса`}),`
`,(0,c.jsxs)(t.p,{children:[`Свойства `,(0,c.jsx)(t.code,{children:`value`}),` и `,(0,c.jsx)(t.code,{children:`max`}),` работают в связке для определения состояния выполнения процесса. Они устанавливают текущее значение и верхний предел для расчета процента завершения операции.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Свойства:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value`}),` — текущее значение прогресса (какая часть процесса выполнена)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max`}),` — максимальное значение прогресса, по умолчанию `,(0,c.jsx)(t.code,{children:`100`})]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Процент выполнения рассчитывается автоматически: `,(0,c.jsx)(t.code,{children:`(value / max) * 100`}),`. Значение `,(0,c.jsx)(t.code,{children:`value`}),` автоматически ограничивается диапазоном от 0 до `,(0,c.jsx)(t.code,{children:`max`}),`. При изменении `,(0,c.jsx)(t.code,{children:`max`}),` процентное отображение пересчитывается пропорционально. Используйте `,(0,c.jsx)(t.code,{children:`max="100"`}),` для процентного отображения или устанавливайте равным реальному количеству шагов в процессе.`]}),`
`,(0,c.jsx)(i,{code:`
<!-- Стандартная процентная шкала -->
<Progress :value="75" :max="100" />

<!-- Прогресс загрузки файлов -->
<Progress :value="loadedFiles" :max="totalFiles" />

<!-- Динамическое обновление -->
<Progress :value="currentStep" :max="totalSteps" />

<!-- Пользовательская шкала -->
<Progress :value="completedTasks" :max="1000" />
`,language:`html`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),a()})))()}l();export{s as default};