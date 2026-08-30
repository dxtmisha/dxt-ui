import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/nitro-basic/Functions/initPluginBasic - Инициализация базового плагина Nitro`}),`
`,(0,c.jsx)(t.h1,{id:`initpluginbasic`,children:(0,c.jsx)(t.code,{children:`initPluginBasic`})}),`
`,(0,c.jsx)(t.p,{children:`Функция инициализации базовых возможностей для Nitro-приложения. В настоящее время она в основном отвечает за настройку кэша API, используя переданную конфигурацию.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`_ : NitroApp`}),` — Экземпляр приложения Nitro.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`config: NitroAppBasicConfig`}),` — Объект конфигурации.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h3,{id:`nitroappbasicconfig`,children:`NitroAppBasicConfig`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`api?: object`}),` — Настройки API.`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cacheStorageKey: string`}),` — префикс ключа, который будет использоваться в хранилище Nitro для кэша (по умолчанию `,(0,c.jsx)(t.code,{children:`Ui_ApiCache`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cacheStepAgeClearOld: number`}),` — порог возраста кэша, после которого старые записи будут удалены.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример использования:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initPluginBasic } from '@dxtmisha/nitro-basic'

export default defineNitroPlugin((nitroApp) => {
  initPluginBasic(nitroApp, {
    api: {
      cacheStorageKey: 'my_app_cache',
      cacheStepAgeClearOld: 3600000 // 1 час
    }
  })
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};