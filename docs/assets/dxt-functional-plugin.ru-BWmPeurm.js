import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/# Инициализация плагина`}),`
`,(0,c.jsx)(n.h1,{id:`единая-инициализация-плагина-dxtfunctionalplugin`,children:`Единая инициализация плагина (dxtFunctionalPlugin)`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`dxtFunctionalPlugin`}),` — это плагин для Vue 3, который берет на себя всю рутину по централизованной настройке и пакетной инициализации базовых сервисов (`,(0,c.jsx)(n.code,{children:`Api`}),`, `,(0,c.jsx)(n.code,{children:`Translate`}),`, `,(0,c.jsx)(n.code,{children:`Icons`}),`, `,(0,c.jsx)(n.code,{children:`Meta`}),`) в вашем приложении.`]}),`
`,(0,c.jsx)(n.p,{children:`Вместо того чтобы вручную импортировать каждый сервис и настраивать их по отдельности, вы передаете единый конфигурационный объект при старте приложения.`}),`
`,(0,c.jsx)(n.h2,{id:`быстрый-старт-установка`,children:`Быстрый старт (Установка)`}),`
`,(0,c.jsxs)(n.p,{children:[`В вашем основном файле конфигурации приложения (`,(0,c.jsx)(n.code,{children:`main.ts`}),`), вызовите метод `,(0,c.jsx)(n.code,{children:`app.use()`}),`, передав туда плагин и ваши опции. `,(0,c.jsxs)(n.strong,{children:[`Обязательно сделайте это до монтирования приложения (`,(0,c.jsx)(n.code,{children:`app.mount`}),`).`]})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// src/main.ts
import { createApp } from 'vue'
import { dxtFunctionalPlugin, type FunctionalPluginOptions } from '@dxtmisha/functional'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Подготавливаем конфигурацию
const functionalOptions: FunctionalPluginOptions = {
  // Настройка API-клиента (базовый URL)
  api: { urlRoot: 'https://api.example.com' },
  // Суффикс, который будет добавляться ко всем <title> страниц
  metaSuffix: ' | Мое приложение',
  // Передача роутера для работы навигации внутри сервисов
  router
}

// Подключаем функциональный плагин
app.use(dxtFunctionalPlugin, functionalOptions)

app.mount('#app')
`})}),`
`,(0,c.jsx)(n.h2,{id:`что-делает-плагин-под-капотом`,children:`Что делает плагин под капотом?`}),`
`,(0,c.jsxs)(n.p,{children:[`При вызове `,(0,c.jsx)(n.code,{children:`app.use(dxtFunctionalPlugin)`}),` происходят следующие шаги:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Инициализация `,(0,c.jsx)(n.code,{children:`Api`})]}),`: Настраивает базовый URL, заголовки по умолчанию и логику перехватов (hook-и) через `,(0,c.jsx)(n.code,{children:`Api.setConfig()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Инициализация `,(0,c.jsx)(n.code,{children:`Translate`})]}),`: Устанавливает конфигурацию для локализации и загрузки текстов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Инициализация `,(0,c.jsx)(n.code,{children:`Icons`})]}),`: Запускает конфигурацию глобального реестра иконок (SVG).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Инициализация `,(0,c.jsx)(n.code,{children:`Meta`})]}),`: Автоматически прописывает суффикс вкладки браузера (через `,(0,c.jsx)(n.code,{children:`useMeta().setSuffix()`}),`), если он был передан.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с Vue Router`}),`: Глобально регистрирует объект роутера в памяти библиотеки (`,(0,c.jsx)(n.code,{children:`RouterItemRef`}),`), чтобы другие функциональные сервисы имели доступ к навигации даже за пределами компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Запуск `,(0,c.jsx)(n.code,{children:`executeUseGlobalInit()`})]}),`: Автоматически триггерит инициализацию абсолютно всех глобальных синглтонов на базе `,(0,c.jsx)(n.code,{children:`executeUseGlobal`}),`. Заботиться о ручном вызове больше не нужно!`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`конфигурация-сервисов`,children:`Конфигурация сервисов`}),`
`,(0,c.jsxs)(n.p,{children:[`В `,(0,c.jsx)(n.code,{children:`FunctionalPluginOptions`}),` вы указываете только те сервисы, которые вам действительно необходимы. Например, если в вашем проекте нет переводов (`,(0,c.jsx)(n.code,{children:`Translate`}),`), вы просто не передаете соответствующий ключ в опции.`]}),`
`,(0,c.jsx)(n.h3,{id:`пример-расширенной-настройки-api`,children:`Пример расширенной настройки Api:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const options: FunctionalPluginOptions = {
  api: {
    urlRoot: 'https://api.my-crm.com',
    headers: {
      'Content-Type': 'application/json'
    },
    // Хук, вызываемый ПЕРЕД каждым запросом (например, для добавления токена)
    preparation: async (fetchObj) => {
      fetchObj.request.headers['Authorization'] = \`Bearer \${myToken}\`
    },
    // Хук, вызываемый ПОСЛЕ каждого запроса (обработка глобальных ошибок)
    end: async (response, fetchObj) => {
      if (response.status === 401) {
        // разлогинить пользователя
      }
      return undefined
    }
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};