import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/6. Расширенные вычисляемые свойства`}),`
`,(0,c.jsx)(t.h1,{id:`расширенные-вычисляемые-свойства-custom-computed`,children:`Расширенные вычисляемые свойства (Custom Computed)`}),`
`,(0,c.jsxs)(t.p,{children:[`В библиотеке присутствуют три специализированные обертки над стандартным `,(0,c.jsx)(t.code,{children:`computed`}),` из Vue 3. Они решают типовые архитектурные задачи: асинхронные вычисления, отвязка от жизненного цикла компонента и мультиязычные значения.`]}),`
`,(0,c.jsxs)(t.h2,{id:`1-асинхронные-вычисления-computedasync`,children:[`1. Асинхронные вычисления (`,(0,c.jsx)(t.code,{children:`computedAsync`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Стандартный `,(0,c.jsx)(t.code,{children:`computed`}),` во Vue является строго синхронным. `,(0,c.jsx)(t.code,{children:`computedAsync`}),` позволяет вам безопасно использовать `,(0,c.jsx)(t.code,{children:`async/await`}),` геттеры.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Выполнение начинается только при первом обращении (лениво).`}),`
`,(0,c.jsxs)(t.li,{children:[`Автоматически перезапускается при изменении реактивных зависимостей внутри геттера (благодаря встроенному `,(0,c.jsx)(t.code,{children:`watchEffect`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Позволяет игнорировать определенные результаты (параметр `,(0,c.jsx)(t.code,{children:`ignore`}),`), чтобы не дергать UI лишний раз.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример использования:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { computedAsync } from '@dxtmisha/functional'

const userId = ref(1)

const userData = computedAsync(async () => {
  // Автоматически перезапросит данные при изменении userId.value
  const response = await fetch(\`/api/users/\${userId.value}\`)
  return await response.json()
})
`})}),`
`,(0,c.jsxs)(t.h2,{id:`2-глобальное-кеширование-вечный-computedeternity`,children:[`2. Глобальное кеширование ("Вечный" `,(0,c.jsx)(t.code,{children:`computedEternity`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Обычные вычисляемые свойства и вотчеры уничтожаются вместе с компонентом, в котором были созданы (`,(0,c.jsx)(t.code,{children:`setup`}),`). `,(0,c.jsx)(t.code,{children:`computedEternity`}),` помещает вычисление (и его `,(0,c.jsx)(t.code,{children:`watchEffect`}),`) в независимый глобальный `,(0,c.jsx)(t.code,{children:`effectScope`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Идеально для тяжелых данных, которые нужно загрузить один раз при переходе на страницу, но сохранить в кэше и поддерживать их реактивную актуальность даже если пользователь ушел с этой страницы.`}),`
`,(0,c.jsx)(t.li,{children:`Начинает работу только после первого вызова (on-demand).`}),`
`,(0,c.jsx)(t.li,{children:`"Живет вечно" — пока работает приложение браузера.`}),`
`,(0,c.jsx)(t.li,{children:`Доступно только для чтения.`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример использования:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { computedEternity } from '@dxtmisha/functional'

// Вычисление будет жить в памяти до закрытия вкладки браузера
const heavyGlobalConfig = computedEternity(async () => {
  return await fetch('/api/heavy-config').then(res => res.json())
})
`})}),`
`,(0,c.jsxs)(t.h2,{id:`3-зависимость-от-языка-computedbylanguage`,children:[`3. Зависимость от языка (`,(0,c.jsx)(t.code,{children:`computedByLanguage`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Удобный синтаксический сахар для значений, которые должны немедленно пересчитываться при смене языка в словарях локализации.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Жестко привязан к внутрисистемному `,(0,c.jsx)(t.code,{children:`GeoRef`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Позволяет задать условие (`,(0,c.jsx)(t.code,{children:`conditions`}),`), при котором геттер вообще должен срабатывать.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Имеет встроенный fallback механизм (`,(0,c.jsx)(t.code,{children:`getterNone`}),`), который возвращается, если основное значение `,(0,c.jsx)(t.code,{children:`undefined`}),` или условие не выполнено.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример использования:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { computedByLanguage } from '@dxtmisha/functional'

const pageTitle = computedByLanguage(
  // Успешный геттер (сработает если условие выполнено)
  () => dictionary.value.title,
  
  // Альтернатива (fallback), если нет перевода или условие = false
  () => 'Default Title',
  
  // Наше условие (опционально)
  () => isReady.value === true
)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};