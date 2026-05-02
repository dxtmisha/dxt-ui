import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Functions/dxtFunctionalPlugin - Единая инициализация`}),`
`,(0,c.jsx)(n.h1,{id:`dxtfunctionalplugin`,children:(0,c.jsx)(n.code,{children:`dxtFunctionalPlugin`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`dxtFunctionalPlugin`}),` — это плагин для Vue 3, предназначенный для централизованной настройки и инициализации всех функциональных сервисов (`,(0,c.jsx)(n.code,{children:`Api`}),`, `,(0,c.jsx)(n.code,{children:`Translate`}),`, `,(0,c.jsx)(n.code,{children:`Icons`}),`, `,(0,c.jsx)(n.code,{children:`Meta`}),`) в вашем приложении. Он гарантирует, что глобальные синглтоны будут правильно настроены до монтирования приложения.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`app: App`}),` — Экземпляр приложения Vue.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: FunctionalPluginOptions`}),` — Объект конфигурации для функциональных сервисов.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`Plugin`}),` — Объект плагина Vue, который интегрирует основную функциональную логику в приложение.`]}),`
`,(0,c.jsx)(n.h2,{id:`установка`,children:`Установка`}),`
`,(0,c.jsxs)(n.p,{children:[`Добавьте плагин в ваше приложение Vue в `,(0,c.jsx)(n.code,{children:`main.ts`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { createApp } from 'vue'
import { dxtFunctionalPlugin } from '@dxtmisha/functional'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(dxtFunctionalPlugin, {
  api: { urlRoot: 'https://api.example.com' },
  metaSuffix: ' | Мое приложение',
  router
})

app.mount('#app')
`})}),`
`,(0,c.jsx)(n.h2,{id:`процесс-инициализации`,children:`Процесс инициализации`}),`
`,(0,c.jsx)(n.p,{children:`При установке плагин выполняет следующие шаги по порядку:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Api`}),`: Вызывает `,(0,c.jsx)(n.code,{children:`Api.setConfig()`}),` с предоставленным `,(0,c.jsx)(n.code,{children:`ApiConfig`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Translate`}),`: Вызывает `,(0,c.jsx)(n.code,{children:`Translate.setConfig()`}),` с предоставленным `,(0,c.jsx)(n.code,{children:`TranslateConfig`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Icons`}),`: Вызывает `,(0,c.jsx)(n.code,{children:`Icons.setConfig()`}),` с предоставленным `,(0,c.jsx)(n.code,{children:`IconsConfig`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Meta`}),`: Настраивает суффикс заголовка по умолчанию через `,(0,c.jsx)(n.code,{children:`useMeta().setSuffix()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Router`}),`: Регистрирует экземпляр роутера в `,(0,c.jsx)(n.code,{children:`RouterItemRef`}),`, делая его доступным глобально.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`executeUseGlobalInit`}),`: Запускает пакетную инициализацию всех глобальных синглтонов, определенных с помощью `,(0,c.jsx)(n.code,{children:`executeUseGlobal`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы-данных`,children:`Типы данных`}),`
`,(0,c.jsx)(n.p,{children:`Плагин использует следующие интерфейсы для конфигурации:`}),`
`,(0,c.jsx)(n.h3,{id:`functionalpluginoptions`,children:(0,c.jsx)(n.code,{children:`FunctionalPluginOptions`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`api?: ApiConfig`}),` — Конфигурация для глобального экземпляра `,(0,c.jsx)(n.code,{children:`Api`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`translate?: TranslateConfig`}),` — Конфигурация для глобального сервиса переводов `,(0,c.jsx)(n.code,{children:`Translate`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`icons?: IconsConfig`}),` — Конфигурация для глобального реестра иконок `,(0,c.jsx)(n.code,{children:`Icons`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`metaSuffix?: string`}),` — Строка, которая будет добавлена ко всем заголовкам страниц, установленным через `,(0,c.jsx)(n.code,{children:`useMeta()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`router?: Router`}),` — Экземпляр Vue Router. Если не указан, плагин попытается извлечь его из `,(0,c.jsx)(n.code,{children:`app.config.globalProperties.$router`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`apiconfig`,children:(0,c.jsx)(n.code,{children:`ApiConfig`})}),`
`,(0,c.jsx)(n.p,{children:`Интерфейс конфигурации API-сервиса:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`urlRoot?: string`}),` — Базовый URL для API-запросов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`headers?: Record<string, string>`}),` — Заголовки по умолчанию для всех API-запросов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`requestDefault?: Record<string, any>`}),` — Данные запроса по умолчанию, отправляемые с каждым запросом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`preparation?: (apiFetch: ApiFetch) => Promise<void>`}),` — Хук, вызываемый перед каждым запросом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`end: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>`}),` — Хук, вызываемый после каждого запроса.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`translateconfig`,children:(0,c.jsx)(n.code,{children:`TranslateConfig`})}),`
`,(0,c.jsx)(n.p,{children:`Интерфейс конфигурации сервиса переводов:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`url?: string`}),` — URL к скрипту с данными переводов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`propsName?: string`}),` — Имя ключа в локальном хранилище или состоянии для переводов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`readApi?: boolean`}),` — Флаг чтения переводов из API.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`iconsconfig`,children:(0,c.jsx)(n.code,{children:`IconsConfig`})}),`
`,(0,c.jsx)(n.p,{children:`Интерфейс конфигурации реестра иконок:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`url?: string`}),` — Базовый URL для получения ресурсов иконок.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list?: Record<string, IconsItem>`}),` — Объект, сопоставляющий имена иконок с их SVG-контентом или загрузчиком.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};