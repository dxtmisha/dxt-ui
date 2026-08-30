import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";function i(e){let t={code:`code`,em:`em`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:`режимы-работы-ручной-manual-и-автоматический-auto`,children:`Режимы работы: Ручной (Manual) и Автоматический (Auto)`}),`
`,(0,o.jsxs)(t.p,{children:[`MotionFlip предоставляет два различных режима отслеживания изменений макета: `,(0,o.jsx)(t.strong,{children:`Ручной режим`}),` и `,(0,o.jsx)(t.strong,{children:`Автоматический режим`}),`. Понимание их различий критически важно для выбора правильного подхода с точки зрения производительности и контроля.`]}),`
`,(0,o.jsx)(t.h3,{id:`ручной-режим-по-умолчанию`,children:`Ручной режим (По умолчанию)`}),`
`,(0,o.jsxs)(t.p,{children:[`По умолчанию MotionFlip работает в ручном режиме. Компонент не отслеживает изменения DOM автоматически. Вместо этого вы должны явно сообщать компоненту о предстоящих изменениях, вызывая метод `,(0,o.jsx)(t.code,{children:`update()`}),` и оборачивая в его колбэк все мутации состояния.`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Как это работает:`})}),`
`,(0,o.jsxs)(t.ol,{children:[`
`,(0,o.jsxs)(t.li,{children:[`Вы вызываете `,(0,o.jsx)(t.code,{children:`await flipRef.value.update(callback)`}),`.`]}),`
`,(0,o.jsxs)(t.li,{children:[`MotionFlip фиксирует точные позиции и размеры всех дочерних элементов `,(0,o.jsx)(t.em,{children:`до`}),` выполнения вашего колбэка.`]}),`
`,(0,o.jsx)(t.li,{children:`Выполняется ваш колбэк, обновляющий состояние Vue (например, добавление, удаление или перемешивание элементов).`}),`
`,(0,o.jsxs)(t.li,{children:[`MotionFlip дожидается обновления DOM, измеряет `,(0,o.jsx)(t.em,{children:`новые`}),` позиции и плавно анимирует элементы от их старых позиций к новым.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Преимущества:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Максимальная производительность:`}),` Исключает накладные расходы на постоянную работу `,(0,o.jsx)(t.code,{children:`MutationObserver`}),` в фоне.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Точность и контроль:`}),` Анимации идеально синхронизированы с конкретными изменениями состояния.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Плавные прерывания:`}),` Если новая анимация запускается до завершения текущей, MotionFlip может бесшовно рассчитать новый визуальный переход.`]}),`
`]}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:`Когда использовать:`}),` Рекомендуется для подавляющего большинства сценариев, особенно для сложных списков, интерфейсов drag-and-drop и больших сеток.`]}),`
`,(0,o.jsx)(t.h3,{id:`автоматический-режим-auto-mode`,children:`Автоматический режим (Auto Mode)`}),`
`,(0,o.jsxs)(t.p,{children:[`Автоматический режим включается с помощью свойства `,(0,o.jsx)(t.code,{children:`auto`}),`. В этом режиме MotionFlip использует `,(0,o.jsx)(t.code,{children:`MutationObserver`}),` для автоматического обнаружения добавления, удаления или перестановки дочерних элементов в DOM-дереве.`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Как это работает:`})}),`
`,(0,o.jsxs)(t.ol,{children:[`
`,(0,o.jsxs)(t.li,{children:[`MotionFlip постоянно отслеживает свой контейнер на предмет мутаций DOM (изменения `,(0,o.jsx)(t.code,{children:`childList`}),`).`]}),`
`,(0,o.jsxs)(t.li,{children:[`Когда вы изменяете состояние (например, `,(0,o.jsx)(t.code,{children:`items.value.push(newItem)`}),`), Vue обновляет DOM.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`MutationObserver`}),` обнаруживает это изменение и автоматически запускает FLIP-анимацию.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Преимущества:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Более простой код:`}),` Вам не нужно вызывать метод `,(0,o.jsx)(t.code,{children:`update()`}),` или управлять ссылками (refs) на компонент. Просто изменяйте состояние, и анимация сработает сама.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Внешние изменения:`}),` Полезно, если изменения в DOM вносятся сторонними библиотеками в обход реактивности Vue.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:`Недостатки:`})}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Накладные расходы:`}),` `,(0,o.jsx)(t.code,{children:`MutationObserver`}),` работает непрерывно, что может незначительно влиять на производительность на страницах с высокой активностью DOM.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Асинхронные ограничения:`}),` Поскольку `,(0,o.jsx)(t.code,{children:`MutationObserver`}),` срабатывает `,(0,o.jsx)(t.em,{children:`после`}),` того, как DOM уже изменился, автоматический режим не может чисто прервать текущую анимацию, если новая мутация происходит до завершения предыдущего перехода.`]}),`
`]}),`
`,(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:`Когда использовать:`}),` Идеально подходит для простых приложений, прототипов или когда изменения макета инициируются непредсказуемыми внешними факторами.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=r(),t()})))()}s();export{a as default};