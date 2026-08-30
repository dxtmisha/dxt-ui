import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/constructor/1. Подготовка проекта`}),`
`,(0,c.jsx)(t.h1,{id:`подготовка-проекта`,children:`Подготовка проекта`}),`
`,(0,c.jsx)(t.p,{children:`Перед началом проектирования компонентов необходимо подготовить рабочую среду и настроить конфигурационные файлы. Система требует наличия ключевых пакетов экосистемы и специфических настроек сборщика.`}),`
`,(0,c.jsx)(t.h2,{id:`1-установка-зависимостей`,children:`1. Установка зависимостей`}),`
`,(0,c.jsxs)(t.p,{children:[`Установите полный набор необходимых пакетов `,(0,c.jsx)(t.code,{children:`@dxtmisha`}),` с помощью пакетного менеджера:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm install @dxtmisha/configuration @dxtmisha/constructor @dxtmisha/functional @dxtmisha/functional-basic @dxtmisha/media @dxtmisha/styles @dxtmisha/scripts @dxtmisha/test @dxtmisha/wiki
`})}),`
`,(0,c.jsx)(t.h2,{id:`2-конфигурация-проекта-designconfigjson`,children:`2. Конфигурация проекта (design.config.json)`}),`
`,(0,c.jsxs)(t.p,{children:[`Создайте файл `,(0,c.jsx)(t.code,{children:`design.config.json`}),` в корневом каталоге проекта. Этот файл определяет глобальные параметры вашей дизайн-системы, такие как название проекта и язык документации.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "project": "Ui",
  "name": "my-design",
  "wikiLanguage": "ru"
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.em,{children:[`Примечание: Вы можете использовать свойство `,(0,c.jsx)(t.code,{children:`"extends"`}),` для наследования конфигурации от других пакетов.`]})}),`
`,(0,c.jsx)(t.h2,{id:`3-настройка-vite-viteconfigts`,children:`3. Настройка Vite (vite.config.ts)`}),`
`,(0,c.jsxs)(t.p,{children:[`Для корректной сборки рекомендуется использовать предустановленный объект `,(0,c.jsx)(t.code,{children:`viteComponents`}),` из пакета `,(0,c.jsx)(t.code,{children:`@dxtmisha/configuration`}),`. Он содержит все необходимые плагины и настройки для работы с компонентами и документацией.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { viteComponents } from '@dxtmisha/configuration/viteComponents'

// https://vite.dev/config/
export default viteComponents
`})}),`
`,(0,c.jsx)(t.h2,{id:`4-настройка-typescript-tsconfigappjson`,children:`4. Настройка TypeScript (tsconfig.app.json)`}),`
`,(0,c.jsxs)(t.p,{children:[`Добавьте поддержку MDX-файлов в конфигурацию TypeScript. Для этого необходимо добавить `,(0,c.jsx)(t.code,{children:`@types/mdx`}),` в массив `,(0,c.jsx)(t.code,{children:`types`}),` секции `,(0,c.jsx)(t.code,{children:`compilerOptions`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "compilerOptions": {
    "types": [
      "@types/mdx"
    ]
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`5-добавление-команд-запуска-packagejson`,children:`5. Добавление команд запуска (package.json)`}),`
`,(0,c.jsxs)(t.p,{children:[`Добавьте следующие скрипты в ваш `,(0,c.jsx)(t.code,{children:`package.json`}),` для автоматизации процессов генерации кода, документации и типизации:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "ui": "dxt-ui",
    "wiki-storm": "dxt-wiki-storm",
    "types": "npm run ui && npm run build && npm run wiki-storm && dxt-types",
    "screenshot": "dxt-screenshot",
    "prepublishOnly": "npm run ui && npm run build && npm run wiki-storm && dxt-types-save"
  }
}
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`ui`}),`: Запускает основной цикл генерации UI-компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`wiki-storm`}),`: Генерирует и обновляет файлы для Wiki/Storybook.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`types`}),`: Выполняет полный цикл сборки и обновляет типы данных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`screenshot`}),`: Запускает визуальное регрессионное тестирование и создание скриншотов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`prepublishOnly`}),`: Выполняет полную сборку, генерацию документации и фиксацию типов перед публикацией пакета.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};