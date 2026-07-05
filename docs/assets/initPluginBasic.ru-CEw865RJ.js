import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/nitro-basic/Functions/initPluginBasic - Инициализация базового плагина Nitro`}),`
`,(0,c.jsx)(n.h1,{id:`initpluginbasic`,children:(0,c.jsx)(n.code,{children:`initPluginBasic`})}),`
`,(0,c.jsx)(n.p,{children:`Функция инициализации базовых возможностей для Nitro-приложения. В настоящее время она в основном отвечает за настройку кэша API, используя переданную конфигурацию.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_ : NitroApp`}),` — Экземпляр приложения Nitro.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`config: NitroAppBasicConfig`}),` — Объект конфигурации.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`nitroappbasicconfig`,children:`NitroAppBasicConfig`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`api?: object`}),` — Настройки API.`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cacheStorageKey: string`}),` — префикс ключа, который будет использоваться в хранилище Nitro для кэша (по умолчанию `,(0,c.jsx)(n.code,{children:`Ui_ApiCache`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cacheStepAgeClearOld: number`}),` — порог возраста кэша, после которого старые записи будут удалены.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример использования:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { initPluginBasic } from '@dxtmisha/nitro-basic'

export default defineNitroPlugin((nitroApp) => {
  initPluginBasic(nitroApp, {
    api: {
      cacheStorageKey: 'my_app_cache',
      cacheStepAgeClearOld: 3600000 // 1 час
    }
  })
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};