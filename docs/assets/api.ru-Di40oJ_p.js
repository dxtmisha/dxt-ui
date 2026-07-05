import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/# Хуки для работы с API`}),`
`,(0,c.jsx)(n.h1,{id:`хуки-для-работы-с-api`,children:`Хуки для работы с API`}),`
`,(0,c.jsxs)(n.p,{children:[`Набор инструментов для эффективного взаимодействия с бекендом, полностью интегрированный с `,(0,c.jsx)(n.strong,{children:`Vue 3 (Composition API)`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`особенности`,children:`Особенности`}),`
`,(0,c.jsxs)(n.p,{children:[`Главная задача этих инструментов — автоматизировать рутинные задачи: отслеживание состояния загрузки (`,(0,c.jsx)(n.code,{children:`loading`}),`), обработку ошибок и синхронизацию данных между различными частями интерфейса. Все хуки поддерживают реактивные параметры, что позволяет создавать динамические запросы, которые сами обновляются при изменении входных фильтров или путей.`]}),`
`,(0,c.jsx)(n.h2,{id:`доступные-инструменты`,children:`Доступные инструменты`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiRef`}),` — Реактивное получение данных (GET) с автоматическим запуском и хранением в `,(0,c.jsx)(n.code,{children:`ref`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiAsyncRef`}),` — Асинхронная версия `,(0,c.jsx)(n.code,{children:`useApiRef`}),` для немедленной инициализации (SSR).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiRequest`}),` — Базовый хук для ручного выполнения любых HTTP-запросов (возвращает метод `,(0,c.jsx)(n.code,{children:`send`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiPost / Put / Delete`}),` — Специализированные обертки для мутаций (создание, обновление, удаление).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiManagementRef`}),` — Комплексный оркестратор, объединяющий GET-запросы, поиск, форматирование и мутации в единый цикл.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useApiManagementAsyncRef`}),` — Асинхронный оркестратор для немедленной инициализации (SSR).`]}),`
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
`,(0,c.jsx)(n.h2,{id:`работа-с-ошибками`,children:`Работа с ошибками`}),`
`,(0,c.jsx)(n.p,{children:`Хуки API используют систему управления ошибками на основе контрактов. Вместо того чтобы вручную обрабатывать каждый статус ответа в компонентах, вы определяете «базу» ожидаемых ошибок, и система разрешает их автоматически.`}),`
`,(0,c.jsx)(n.h3,{id:`процесс-работы`,children:`Процесс работы:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Определение контракта (`,(0,c.jsx)(n.code,{children:`errorContract`}),`)`]}),`: Вы передаете хуку список возможных шаблонов ошибок (контракт). Это служит вашей базой данных для ошибок, которые требуют специфической обработки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое сопоставление`}),`: Если запрос завершается неудачей (статус ≥ 400), система сравнивает ответ с вашим контрактом. Сопоставление происходит по следующим критериям:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`HTTP-статус`}),`: например, `,(0,c.jsx)(n.code,{children:`404`}),` или `,(0,c.jsx)(n.code,{children:`500`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Код ошибки`}),`: специфический строковый код, извлеченный из JSON-тела ответа (например, `,(0,c.jsx)(n.code,{children:`'USER_NOT_FOUND'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Шаблон URL`}),`: конкретные эндпоинты или паттерны (RegExp).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Пользовательская валидация`}),`: функция, которая возвращает `,(0,c.jsx)(n.code,{children:`true`}),`, если ответ соответствует ошибке.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Разрешение данных`}),`: Если совпадение найдено, система заполняет реактивное свойство `,(0,c.jsx)(n.code,{children:`errorItem`}),` структурированными данными, включая локализованное сообщение и разрешенный код ошибки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Реализация в UI`}),`: В своем компоненте вы просто используете `,(0,c.jsx)(n.code,{children:`errorItem`}),` для отображения сообщений или переключения состояний интерфейса, будучи уверенными, что логика идентификации ошибок вынесена в контракт.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Эта система гарантирует, что ваши компоненты останутся чистыми и сфокусированными на логике отображения, в то время как идентификация ошибок остается декларативной и переиспользуемой.`}),`
`,(0,c.jsx)(n.h2,{id:`работа-в-ssr`,children:`Работа в SSR`}),`
`,(0,c.jsxs)(n.p,{children:[`Все хуки для работы с API спроектированы с учетом поддержки `,(0,c.jsx)(n.strong,{children:`Server-Side Rendering (SSR)`}),`. Чтобы данные были предзагружены на сервере до отправки страницы клиенту, у вас есть два варианта:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Асинхронные версии`}),`: Используйте `,(0,c.jsx)(n.code,{children:`useApiAsyncRef`}),` или `,(0,c.jsx)(n.code,{children:`useApiManagementAsyncRef`}),`. Эти хуки автоматически вызывают `,(0,c.jsx)(n.code,{children:`initSsr()`}),` при создании, что гарантирует выполнение запроса во время серверного рендеринга.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Ручной вызов `,(0,c.jsx)(n.code,{children:`initSsr()`})]}),`: Для стандартных хуков (например, `,(0,c.jsx)(n.code,{children:`useApiRef`}),`) необходимо явно вызвать метод `,(0,c.jsx)(n.code,{children:`.initSsr()`}),` внутри блока `,(0,c.jsx)(n.code,{children:`setup()`}),` компонента.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Это позволяет избежать «мерцания» контента (когда пользователь видит пустую страницу или скелетон, а затем данные подгружаются на клиенте) и улучшает SEO, предоставляя полностью заполненный HTML с сервера.`}),`
`,(0,c.jsx)(n.p,{children:`Такая архитектура позволяет описывать логику работы с данными декларативно, фокусируясь на конфигурации запросов, а не на ручном управлении состояниями загрузки и обновлении списков.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};