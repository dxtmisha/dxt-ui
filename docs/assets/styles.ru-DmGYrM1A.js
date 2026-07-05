import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h4:`h4`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI Figma/# Работа со стилями`}),`
`,(0,c.jsx)(n.h1,{id:`работа-со-стилями`,children:`Работа со стилями`}),`
`,(0,c.jsx)(n.p,{children:`Система получения расширенных данных о стилях обеспечивает передачу детальной информации (CSS, JSON-структуры, текстовое содержимое) от холста Figma в интерфейс плагина по запросу.`}),`
`,(0,c.jsx)(n.h2,{id:`бэкенд-backend--plugincodets`,children:`Бэкенд (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(n.p,{children:`На стороне кода плагина необходимо инициализировать обработчик, который будет отвечать на запросы данных из UI.`}),`
`,(0,c.jsx)(n.h4,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Вызовите функцию `,(0,c.jsx)(n.code,{children:`setupFrameStyles()`}),` один раз при старте плагина:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { setupFrameStyles } from '@dxtmisha/figma-code'

// Инициализация обработчика запросов стилей
setupFrameStyles()
`})}),`
`,(0,c.jsx)(n.h2,{id:`интерфейс-ui--iframe`,children:`Интерфейс (UI / Iframe)`}),`
`,(0,c.jsx)(n.p,{children:`Инструменты для отправки запросов на получение стилей и реактивного наблюдения за результатом.`}),`
`,(0,c.jsx)(n.h4,{id:`реактивное-использование-vue`,children:`Реактивное использование (Vue)`}),`
`,(0,c.jsxs)(n.p,{children:[`Рекомендуемый способ работы через композитор `,(0,c.jsx)(n.code,{children:`useFigmaFrameStyles`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaFrameStyles } from '@dxtmisha/figma-ref'

const { 
  styles, // Вычисляемый список полученных стилей (ComputedRef)
  send    // Метод для отправки запроса: send({ ids, children })
} = useFigmaFrameStyles()

// Пример запроса стилей для конкретных нод
const fetchDetails = () => {
  send({ ids: ['1:10', '1:25'], children: true })
}
`})}),`
`,(0,c.jsx)(n.h4,{id:`прямое-управление-javascript`,children:`Прямое управление (JavaScript)`}),`
`,(0,c.jsx)(n.p,{children:`Если вы не используете Vue, можно использовать базовые функции для отправки запроса и подписки на ответ:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { sendFrameStyles, fetchFrameStyles } from '@dxtmisha/figma'

// Запросить стили
sendFrameStyles({ ids: '1:10', children: true })

// Подписаться на получение данных
fetchFrameStyles((data) => {
  console.log('Получены данные о стилях:', data)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};