import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/DataStorage - Обёртка Local и Session Storage`}),`
`,(0,c.jsx)(n.h1,{id:`класс-datastorage`,children:`Класс DataStorage`}),`
`,(0,c.jsxs)(n.p,{children:[`Универсальный класс для взаимодействия с `,(0,c.jsx)(n.code,{children:`localStorage`}),` и `,(0,c.jsx)(n.code,{children:`sessionStorage`}),` браузера. Включает в себя автоматическое создание префиксов, ограничение срока действия кэша (возраст), кэширование в памяти для активных экземпляров и автоматическую сериализацию JSON.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DataStorage`}),` является `,(0,c.jsx)(n.strong,{children:`вспомогательным классом`}),`, предназначенным для низкоуровневого взаимодействия с хранилищем браузера. В большинстве случаев рекомендуется использовать специализированные классы, такие как `,(0,c.jsx)(n.code,{children:`Cookie`}),` или `,(0,c.jsx)(n.code,{children:`Api`}),`, для конкретных задач.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`основные-возможности`,children:`Основные возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая сериализация`}),` — легко справляется с разбором и преобразованием в JSON-строку при хранении конфигураций и объектов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Хранение с учётом времени`}),` — позволяет сохранять объекты с временными метками и учитывать ограничения по возрасту значения во время его извлечения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление префиксами`}),` — поддерживает глобальные и специфичные для каждого экземпляра префиксы, позволяющие изолировать и группировать ключи в рамках `,(0,c.jsx)(n.code,{children:`localStorage`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Эффективная память`}),` — создает паттерн singleton для идентичных ключей, чтобы избежать одновременного чтения непосредственно с диска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка SSR`}),` — использует изоляцию на уровне запросов при серверном рендеринге, предотвращая утечку данных между параллельными сессиями.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`DataStorage(name, isSession)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsx)(n.p,{children:`Класс поддерживает следующий дженерик для обеспечения строгой типизации сохраняемого значения:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T`}),` — Тип данных, хранящихся в хранилище.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — название ключа в хранилище.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSession: boolean = false`}),` — нужно ли использовать `,(0,c.jsx)(n.code,{children:`sessionStorage`}),` (по умолчанию `,(0,c.jsx)(n.code,{children:`localStorage`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DataStorage } from '@dxtmisha/functional-basic'

// 1. Создание экземпляра для localStorage
const settings = new DataStorage('settings')

// 2. Создание экземпляра для sessionStorage
const session = new DataStorage('user_session', true)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`доступ-к-хранилищу`,children:`Доступ к хранилищу`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(defaultValue?: T | (() => T), cache?: number): T | undefined`}),` — Извлекает текущее сохраненное значение. Если указано время кэширования, возвращает `,(0,c.jsx)(n.code,{children:`undefined`}),`, если данные устарели.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(value?: T | (() => T)): T | undefined`}),` — Устанавливает или обновляет значение в хранилище. Передача `,(0,c.jsx)(n.code,{children:`undefined`}),` удаляет элемент.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(): this`}),` — Удаляет соответствующий ключ из хранилища и очищает экземпляр в памяти.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`update(): this`}),` — Принудительно синхронизирует экземпляр памяти с актуальными данными из Storage API.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static setPrefix(newPrefix: string): void`}),` — Изменяет глобальный префикс, применяемый ко всем новым экземплярам. Префикс по умолчанию — `,(0,c.jsx)(n.code,{children:`ui-storage`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ssr-и-гидратация`,children:`SSR и Гидратация`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DataStorage`}),` полностью совместим с серверным рендерингом (SSR). Он использует специальный реестр для изоляции экземпляров между различными HTTP-запросами на сервере.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Чтобы избежать ошибок гидратации (когда HTML от сервера не совпадает с клиентским), рекомендуется вызывать метод `,(0,c.jsx)(n.code,{children:`get()`}),` внутри `,(0,c.jsx)(n.code,{children:`useEffect`}),` или других клиентских хуков. На сервере `,(0,c.jsx)(n.code,{children:`get()`}),` всегда будет возвращать `,(0,c.jsx)(n.code,{children:`undefined`}),` (или `,(0,c.jsx)(n.code,{children:`defaultValue`}),`), так как `,(0,c.jsx)(n.code,{children:`localStorage`}),` недоступен.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`использование-значений-по-умолчанию-и-кэша`,children:`Использование значений по умолчанию и кэша`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const settings = new DataStorage('user_settings')

// Получение данных с откатом к пустому объекту, если они не найдены
const currentSettings = settings.get({})

// Получение данных, только если они были сохранены в течение последних 60 секунд
const cachedItem = settings.get(undefined, 60)
`})}),`
`,(0,c.jsx)(n.h3,{id:`ручная-синхронизация`,children:`Ручная синхронизация`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const storage = new DataStorage('shared_data')

// ... данные могли быть изменены в другой вкладке или части приложения
storage.update() // Синхронизируем память с диском
console.log(storage.get())
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};