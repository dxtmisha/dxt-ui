import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Composables/useRouterList - Управление списком ссылок`}),`
`,(0,c.jsx)(t.h1,{id:`userouterlist`,children:(0,c.jsx)(t.code,{children:`useRouterList`})}),`
`,(0,c.jsx)(t.p,{children:`Управление списком ссылок для роутера. Позволяет создавать навигационные меню на основе списка данных, автоматически обрабатывая активное состояние и переходы.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: RefType<ConstrBind<T>[] | undefined>`}),` — список элементов навигации. Каждый элемент должен содержать `,(0,c.jsx)(t.code,{children:`value`}),` и `,(0,c.jsx)(t.code,{children:`label`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected?: Ref<string> | string`}),` — изначально выбранный элемент или его значение. Если не указан, выбирается первый элемент списка.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hasTo?: boolean`}),` — автоматическое добавление свойства `,(0,c.jsx)(t.code,{children:`to`}),` к элементам списка для навигации (по умолчанию `,(0,c.jsx)(t.code,{children:`false`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
Объект с реактивными свойствами и методами управления:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: ComputedRef<T | undefined>`}),` — Вычисляемое свойство, возвращающее объект текущего активного элемента на основе `,(0,c.jsx)(t.code,{children:`selected`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: Ref<string>`}),` — Реактивная ссылка на значение (`,(0,c.jsx)(t.code,{children:`value`}),`) выбранного элемента. Позволяет как получать, так и устанавливать текущий выбор.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`label: ComputedRef<NumberOrString>`}),` — Вычисляемое свойство, возвращающее текстовую метку (`,(0,c.jsx)(t.code,{children:`label`}),`) текущего выбранного элемента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: ComputedRef<ConstrBind<T>[]>`}),` — Вычисляемый список элементов. Если `,(0,c.jsx)(t.code,{children:`hasTo`}),` установлен в `,(0,c.jsx)(t.code,{children:`true`}),`, каждый элемент автоматически дополняется свойством `,(0,c.jsx)(t.code,{children:`to`}),` для интеграции с маршрутизацией.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`to(name?: string): void`}),` — Метод для программного перехода к элементу по его имени (`,(0,c.jsx)(t.code,{children:`value`}),`). Обновляет `,(0,c.jsx)(t.code,{children:`selected`}),` и выполняет `,(0,c.jsx)(t.code,{children:`router.push`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toMain(): void`}),` — Метод для быстрого перехода к первому ("главному") элементу в списке `,(0,c.jsx)(t.code,{children:`list`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useRouterList } from '@dxtmisha/functional'

const menuItems = ref([
  { value: 'dashboard', label: 'Дашборд' },
  { value: 'settings', label: 'Настройки' }
])

// Инициализация с выбором 'dashboard' и автоматическим созданием свойства 'to'
const { list, selected, to } = useRouterList(menuItems, 'dashboard', true)

// Список будет содержать объекты с полем 'to', например:
// { value: 'dashboard', label: 'Дашборд', to: { name: 'dashboard' } }

// Программный переход
to('settings')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};