import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/# Хуки для работы с API`}),`
`,(0,c.jsx)(n.h1,{id:`хуки-для-работы-с-api`,children:`Хуки для работы с API`}),`
`,(0,c.jsxs)(n.p,{children:[`Набор инструментов для эффективного взаимодействия с бекендом, полностью интегрированный с `,(0,c.jsx)(n.strong,{children:`Vue 3 (Composition API)`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`особенности`,children:`Особенности`}),`
`,(0,c.jsxs)(n.p,{children:[`Главная задача этих инструментов — автоматизировать рутинные задачи: отслеживание состояния загрузки (`,(0,c.jsx)(n.code,{children:`loading`}),`), обработку ошибок и синхронизацию данных между различными частями интерфейса. Все хуки поддерживают реактивные параметры, что позволяет создавать динамические запросы, которые сами обновляются при изменении входных фильтров или путей.`]}),`
`,(0,c.jsx)(n.h2,{id:`доступные-инструменты`,children:`Доступные инструменты`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiRef`}),` — Реактивное получение данных (GET) с автоматическим запуском и хранением в `,(0,c.jsx)(n.code,{children:`ref`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiRequest`}),` — Базовый хук для ручного выполнения любых HTTP-запросов (возвращает метод `,(0,c.jsx)(n.code,{children:`send`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiPost / Put / Delete`}),` — Специализированные обертки для мутаций (создание, обновление, удаление).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiManagementRef`}),` — Комплексный оркестратор, объединяющий GET-запросы, поиск, форматирование и мутации в единый цикл.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`как-с-ними-работать`,children:`Как с ними работать`}),`
`,(0,c.jsxs)(n.p,{children:[`Для простого отображения данных достаточно использовать `,(0,c.jsx)(n.code,{children:`useApiRef`}),`. Вам не нужно вручную вызывать функцию загрузки — запрос выполнится автоматически, как только вы обратитесь к свойству `,(0,c.jsx)(n.code,{children:`data`}),`. Если путь к API является реактивной ссылкой, хук сам отследит ее изменение и загрузит новые данные.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiRef } from '@dxtmisha/functional'

// Данные загрузятся автоматически при обращении к data
const { data, loading } = useApiRef('api/profile')
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Если же вам нужно выполнить действие по событию (например, сохранить форму), используются хуки для мутаций. Они возвращают метод `,(0,c.jsx)(n.code,{children:`send`}),`, который можно вызвать в обработчике события, и флаг `,(0,c.jsx)(n.code,{children:`loading`}),` для блокировки кнопок.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiPost } from '@dxtmisha/functional'

const { send, loading } = useApiPost('api/save')

const onSave = async () => {
  await send({ data: { name: 'Dxt' } })
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`useapimanagementref`,children:`useApiManagementRef`}),`
`,(0,c.jsxs)(n.p,{children:[`Самый мощный подход — это использование `,(0,c.jsx)(n.code,{children:`useApiManagementRef`}),`. Это полноценный хаб для управления данными в сложных интерфейсах (например, в таблицах). Он связывает GET-запрос с мутациями: как только вы успешно выполните `,(0,c.jsx)(n.code,{children:`sendDelete`}),` или `,(0,c.jsx)(n.code,{children:`sendPost`}),`, оркестратор сам вызовет `,(0,c.jsx)(n.code,{children:`reset()`}),` для основного списка, и данные на экране обновятся автоматически.`]}),`
`,(0,c.jsx)(n.h3,{id:`основные-возможности`,children:`Основные возможности:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматизация`}),`: Полная синхронизация между чтением и изменением данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция`}),`: Включает в себя функционал поиска (`,(0,c.jsx)(n.code,{children:`useSearchRef`}),`) и форматирования (`,(0,c.jsx)(n.code,{children:`useFormattersRef`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Skeleton`}),`: Поддержка заглушек на время загрузки для предотвращения «прыжков» интерфейса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкость`}),`: Настройка индивидуальных путей и трансформаций для каждого типа запроса (GET, POST, PUT, DELETE).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useApiManagementRef } from '@dxtmisha/functional'

const search = ref('')
const { 
  list, 
  sendPost, 
  sendDelete 
} = useApiManagementRef(
  { path: 'api/items' },      // Слушаем GET
  undefined,                  // Форматтеры
  { columns: ['name'], value: search }, // Живой поиск
  { path: 'api/items/add' },  // Настройка POST
  undefined,
  { path: 'api/items/delete' } // Настройка DELETE
)

// После вызова sendDelete() основной список list обновится САМ!
`})}),`
`,(0,c.jsx)(n.p,{children:`Такая архитектура позволяет описывать логику работы с данными декларативно, фокусируясь на конфигурации запросов, а не на ручном управлении состояниями загрузки и обновлении списков.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};