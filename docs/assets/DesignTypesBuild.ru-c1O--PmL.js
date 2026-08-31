import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/DesignTypesBuild - Движок компиляции деклараций TypeScript и Vue`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designtypesbuild`,children:`Класс DesignTypesBuild`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`DesignTypesBuild`}),` отвечает за предварительную компиляцию исходных файлов TypeScript и компонентов Vue (`,(0,c.jsx)(t.code,{children:`.vue`}),`) в файлы деклараций типов (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`) во временную директорию перед последующей генерацией файлов документации и справочников типов для ИИ.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка TypeScript и Vue`}),`: Автоматически определяет наличие файлов `,(0,c.jsx)(t.code,{children:`.vue`}),` и использует `,(0,c.jsx)(t.code,{children:`vue-tsc`}),` для извлечения деклараций компонентов либо TypeScript Compiler API для чистого TypeScript.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальная фильтрация`}),`: Учитывает конфигурации путей (`,(0,c.jsx)(t.code,{children:`typesPaths`}),`), шаблонов включения (`,(0,c.jsx)(t.code,{children:`typesMatch`}),`) и исключения (`,(0,c.jsx)(t.code,{children:`typesExclude`}),`) из `,(0,c.jsx)(t.code,{children:`design-ui.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическая очистка`}),`: Удаляет временную директорию перед сборкой и отсекает избыточные файлы (тесты, истории Storybook, внутренние входные точки).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`конструктор`,children:`Конструктор`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`temporaryDirectory: string`}),` — путь к временной директории компиляции. По умолчанию используется значение из `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getTypesTemporaryDirectory()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesBuild } from '@dxtmisha/scripts'

const builder = new DesignTypesBuild()
builder.build()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`is-boolean`,children:(0,c.jsx)(t.code,{children:`is(): boolean`})}),`
`,(0,c.jsx)(t.p,{children:`Проверяет, существует ли временная директория компиляции.`}),`
`,(0,c.jsx)(t.h3,{id:`isvue-boolean`,children:(0,c.jsx)(t.code,{children:`isVue(): boolean`})}),`
`,(0,c.jsxs)(t.p,{children:[`Проверяет, содержит ли проект компоненты Vue (`,(0,c.jsx)(t.code,{children:`.vue`}),`), требующие запуска компилятора `,(0,c.jsx)(t.code,{children:`vue-tsc`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`build-this`,children:(0,c.jsx)(t.code,{children:`build(): this`})}),`
`,(0,c.jsxs)(t.p,{children:[`Запускает полный цикл компиляции деклараций. Автоматически выбирает сборку через `,(0,c.jsx)(t.code,{children:`vue-tsc`}),` при наличии Vue-файлов или встроенный TypeScript-компилятор для остальных файлов.`]}),`
`,(0,c.jsx)(t.h3,{id:`clean-this`,children:(0,c.jsx)(t.code,{children:`clean(): this`})}),`
`,(0,c.jsx)(t.p,{children:`Удаляет временную директорию компиляции со всеми созданными файлами.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};