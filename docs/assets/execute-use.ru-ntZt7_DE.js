import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/3. Управляемые синглтоны`}),`
`,(0,c.jsx)(t.h1,{id:`управляемые-синглтоны-executeuse`,children:`Управляемые синглтоны (executeUse)`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция `,(0,c.jsx)(t.strong,{children:`executeUse`}),` — это продвинутая фабрика для создания управляемых синглтонов в экосистеме `,(0,c.jsx)(t.strong,{children:`Vue 3`}),`. Она решает проблему инициализации и переиспользования реактивных состояний, глобальных сервисов (например, мета-тегов) или компонентов, предоставляя гибкий контроль над контекстом выполнения (глобальный, локальный или через `,(0,c.jsx)(t.code,{children:`provide/inject`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`режимы-работы`,children:`Режимы работы`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`executeUse`}),` поддерживает три режима инициализации (enum `,(0,c.jsx)(t.code,{children:`ExecuteUseType`}),`), каждый из которых предназначен для своих архитектурных задач:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`global`}),` (`,(0,c.jsx)(t.code,{children:`executeUseGlobal`}),`) — единственный экземпляр на всё приложение. Удобно для создания сервисов, которые живут вне конкретного компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`provide`}),` (`,(0,c.jsx)(t.code,{children:`executeUseProvide`}),`) — разделение состояния через дерево компонентов (`,(0,c.jsx)(t.code,{children:`provide`}),`/`,(0,c.jsx)(t.code,{children:`inject`}),`). Гарантирует, что дочерние компоненты получат один и тот же экземпляр от ближайшего родителя.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`local`}),` (`,(0,c.jsx)(t.code,{children:`executeUseLocal`}),`) — единственный экземпляр в замыкании, изолированный внутри собственного `,(0,c.jsx)(t.code,{children:`effectScope`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.h3,{id:`различия-между-global-и-local`,children:[`Различия между `,(0,c.jsx)(t.code,{children:`global`}),` и `,(0,c.jsx)(t.code,{children:`local`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Главное архитектурное отличие между режимами `,(0,c.jsx)(t.code,{children:`global`}),` и `,(0,c.jsx)(t.code,{children:`local`}),` заключается во `,(0,c.jsx)(t.strong,{children:`времени инициализации`}),` (когда именно создается экземпляр):`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`global`}),` (Отложенная, но массовая инициализация):`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Все коллбеки, обернутые в `,(0,c.jsx)(t.code,{children:`global`}),`, складываются в глобальный реестр. Они `,(0,c.jsx)(t.strong,{children:`сразу же выполняются все вместе`}),`, когда в точке входа приложения (например, в `,(0,c.jsx)(t.code,{children:`main.ts`}),` или при SSR) вызывается функция `,(0,c.jsx)(t.code,{children:`executeUseGlobalInit()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сценарий использования:`}),` Критически важные сервисы (Настройки, Мета-теги, Переводы, Пользовательские сессии), которые должны быть полностью готовы к работе `,(0,c.jsx)(t.em,{children:`до`}),` первой отрисовки компонента или должны централизованно пересоздаваться при сбросе приложения.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`local`}),` (Ленивая инициализация):`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Экземпляр создается `,(0,c.jsx)(t.strong,{children:`только в момент самого первого вызова`}),` этой функции внутри компонента или другого сервиса. При этом, так как инициализация обернута в глобальный `,(0,c.jsx)(t.code,{children:`effectScope`}),`, этот синглтон, так же как и глобальный, будет "жить вечно" и не уничтожится при демонтаже компонента, из которого был вызван.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сценарий использования:`}),` Тяжелые или специфические сервисы (например, сложная фильтрация, вебсокет-чат на отдельной странице, аналитика), которые:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Могут вообще не понадобиться во время текущей сессии.`}),`
`,(0,c.jsx)(t.li,{children:`Должны инициализироваться ровно тогда, когда пользователь заходит в нужный раздел.`}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`использование-на-примере-глобального-сервиса`,children:`Использование (на примере глобального сервиса)`}),`
`,(0,c.jsx)(t.p,{children:`Самый частый сценарий — создание глобального хранилища или сервиса (например, для работы с мета-тегами).`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { executeUseGlobal } from '@dxtmisha/functional'

// 1. Определение синглтона
const item = executeUseGlobal(() => {
  const title = ref('Мой заголовок')
  
  const updateTitle = (newTitle: string) => {
    title.value = newTitle
  }

  return { title, updateTitle }
})

// 2. Экспорт composable-функции (по конвенции Vue)
export const useMeta = () => item()
`})}),`
`,(0,c.jsx)(t.p,{children:`Внутри любого компонента Vue:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useMeta } from './useMeta'

const { title, updateTitle } = useMeta() // title будет общим для всех вызовов
`})}),`
`,(0,c.jsx)(t.h2,{id:`использование-provide--inject`,children:`Использование Provide / Inject`}),`
`,(0,c.jsxs)(t.p,{children:[`Если нужно, чтобы состояние жило только в рамках конкретного дерева компонентов (например, форма и её внутренние поля), используется `,(0,c.jsx)(t.code,{children:`executeUseProvide`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executeUseProvide } from '@dxtmisha/functional'

const useFormState = executeUseProvide((initialData: any) => {
  // ... логика инициализации реактивного состояния
  return { /* ... */ }
})
`})}),`
`,(0,c.jsxs)(t.p,{children:[`При первом вызове `,(0,c.jsx)(t.code,{children:`useFormState(data)`}),` в компоненте-родителе состояние проинициализируется и будет передано вниз (через `,(0,c.jsx)(t.code,{children:`provide`}),`). Любой дочерний компонент, вызвав `,(0,c.jsx)(t.code,{children:`useFormState()`}),`, получит этот же экземпляр через `,(0,c.jsx)(t.code,{children:`inject`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`управление-экземпляром`,children:`Управление экземпляром`}),`
`,(0,c.jsxs)(t.p,{children:[`Функции `,(0,c.jsx)(t.code,{children:`executeUse`}),` оборачивают результат вашей фабрики и добавляют специальные методы для управления жизненным циклом (зависит от режима).`]}),`
`,(0,c.jsx)(t.h3,{id:`метод-init`,children:`Метод init()`}),`
`,(0,c.jsxs)(t.p,{children:[`Метод `,(0,c.jsx)(t.code,{children:`init()`}),` — это просто заглушка, которая возвращает сам объект. Она нужна исключительно для того, чтобы в коде компонента можно было явно выделить место первоначального вызова.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const service = useMeta()

// Явное определение точки входа
service.init()
`})}),`
`,(0,c.jsx)(t.h3,{id:`сброс-и-переинициализация`,children:`Сброс и переинициализация`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const service = useMeta()

// Сброс закешированного экземпляра (доступно для local и global).
// При следующем вызове composable будет создан новый экземпляр.
if (service.destroyExecute) {
  service.destroyExecute()
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Кроме того, для глобальных синглтонов доступна функция `,(0,c.jsx)(t.code,{children:`executeUseGlobalInit()`}),`, которая принудительно переинициализирует все зарегистрированные глобальные `,(0,c.jsx)(t.code,{children:`callback`}),` методы (может быть полезно при SSR инициализации или полном сбросе приложения).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Если в вашем приложении подключен плагин `,(0,c.jsx)(t.code,{children:`dxtFunctionalPlugin`}),`, вызывать `,(0,c.jsx)(t.code,{children:`executeUseGlobalInit()`}),` вручную при старте приложения `,(0,c.jsx)(t.strong,{children:`не нужно`}),` — плагин делает это автоматически под капотом.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};