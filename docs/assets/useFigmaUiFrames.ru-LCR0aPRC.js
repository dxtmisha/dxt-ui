import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/figma-ref/Composables/useFigmaUiFrames - Список фреймов верхнего уровня`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmauiframes`,children:(0,c.jsx)(n.code,{children:`useFigmaUiFrames`})}),`
`,(0,c.jsx)(n.p,{children:`Композабл для управления и наблюдения за списком фреймов верхнего уровня в UI Figma. Он упрощает процесс получения и доступа к данным фреймов со встроенным состоянием загрузки.`}),`
`,(0,c.jsx)(n.h2,{id:`возвращает`,children:`Возвращает`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`frames: ComputedRef<UiFigmaFramesList>`}),` — реактивный список фреймов верхнего уровня. Автоматически обновляется при получении данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: ShallowRef<boolean>`}),` — реактивный флаг, указывающий, загружаются ли в данный момент фреймы из плагина Figma.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`useFigmaUiFrames`}),` управляет жизненным циклом получения данных фреймов:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ленивая инициализация`}),`: Композабл проверяет, были ли фреймы уже загружены в глобальный кэш `,(0,c.jsx)(n.code,{children:`item`}),`. Если нет, он автоматически инициирует процесс получения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление состоянием загрузки`}),`: Пока выполняется операция получения, свойство `,(0,c.jsx)(n.code,{children:`loading`}),` устанавливается в `,(0,c.jsx)(n.code,{children:`true`}),`. Это позволяет UI отображать индикаторы загрузки или скелетоны.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Реактивные обновления`}),`: После завершения `,(0,c.jsx)(n.code,{children:`fetchTopLevelFrames`}),` внутренний кэш обновляется, `,(0,c.jsx)(n.code,{children:`loading`}),` возвращается в `,(0,c.jsx)(n.code,{children:`false`}),`, и вычисляемое свойство `,(0,c.jsx)(n.code,{children:`frames`}),` уведомляет всех подписчиков о новых данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глобальное кэширование`}),`: Фреймы хранятся в переменной на уровне модуля, что означает, что последующие вызовы `,(0,c.jsx)(n.code,{children:`useFigmaUiFrames`}),` в разных компонентах будут использовать одни и те же данные и не будут инициировать лишние запросы.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`основная-архитектура`,children:`Основная архитектура`}),`
`,(0,c.jsxs)(n.p,{children:[`Композабл выступает в роли реактивной обертки вокруг утилиты `,(0,c.jsx)(n.code,{children:`fetchTopLevelFrames`}),`. Он управляет состоянием фреймов по принципу синглтона, обеспечивая согласованность данных во всем приложении и предоставляя локальную реактивность для состояний загрузки.`]}),`
`,(0,c.jsx)(n.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaUiFrames } from '@dxtmisha/figma-ref'

const { frames, loading } = useFigmaUiFrames()

// Используйте loading для отображения индикатора прогресса
if (loading.value) {
  console.log('Загрузка фреймов...')
}

// Используйте frames для рендеринга списка
console.log('Фреймы:', frames.value)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};