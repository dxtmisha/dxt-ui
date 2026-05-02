import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/# UI/# Подготовка проекта`}),`
`,(0,c.jsx)(n.h1,{id:`подготовка-проекта`,children:`Подготовка проекта`}),`
`,(0,c.jsx)(n.p,{children:`Перед началом проектирования компонентов необходимо подготовить рабочую среду и настроить конфигурационные файлы. Система требует наличия ключевых пакетов экосистемы и специфических настроек сборщика.`}),`
`,(0,c.jsx)(n.h2,{id:`1-установка-зависимостей`,children:`1. Установка зависимостей`}),`
`,(0,c.jsxs)(n.p,{children:[`Установите полный набор необходимых пакетов `,(0,c.jsx)(n.code,{children:`@dxtmisha`}),` с помощью пакетного менеджера:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm install @dxtmisha/configuration @dxtmisha/constructor @dxtmisha/functional @dxtmisha/functional-basic @dxtmisha/media @dxtmisha/styles @dxtmisha/scripts @dxtmisha/test @dxtmisha/wiki
`})}),`
`,(0,c.jsx)(n.h2,{id:`2-конфигурация-проекта-designconfigjson`,children:`2. Конфигурация проекта (design.config.json)`}),`
`,(0,c.jsxs)(n.p,{children:[`Создайте файл `,(0,c.jsx)(n.code,{children:`design.config.json`}),` в корневом каталоге проекта. Этот файл определяет глобальные параметры вашей дизайн-системы, такие как название проекта и язык документации.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "project": "Ui",
  "name": "my-design",
  "wikiLanguage": "ru"
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.em,{children:[`Примечание: Вы можете использовать свойство `,(0,c.jsx)(n.code,{children:`"extends"`}),` для наследования конфигурации от других пакетов.`]})}),`
`,(0,c.jsx)(n.h2,{id:`3-настройка-vite-viteconfigts`,children:`3. Настройка Vite (vite.config.ts)`}),`
`,(0,c.jsxs)(n.p,{children:[`Для корректной сборки рекомендуется использовать предустановленный объект `,(0,c.jsx)(n.code,{children:`viteComponents`}),` из пакета `,(0,c.jsx)(n.code,{children:`@dxtmisha/configuration`}),`. Он содержит все необходимые плагины и настройки для работы с компонентами и документацией.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { viteComponents } from '@dxtmisha/configuration/viteComponents'

// https://vite.dev/config/
export default viteComponents
`})}),`
`,(0,c.jsx)(n.h2,{id:`4-настройка-typescript-tsconfigappjson`,children:`4. Настройка TypeScript (tsconfig.app.json)`}),`
`,(0,c.jsxs)(n.p,{children:[`Добавьте поддержку MDX-файлов в конфигурацию TypeScript. Для этого необходимо добавить `,(0,c.jsx)(n.code,{children:`@types/mdx`}),` в массив `,(0,c.jsx)(n.code,{children:`types`}),` секции `,(0,c.jsx)(n.code,{children:`compilerOptions`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "compilerOptions": {
    "types": [
      "@types/mdx"
    ]
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`5-добавление-команд-запуска-packagejson`,children:`5. Добавление команд запуска (package.json)`}),`
`,(0,c.jsxs)(n.p,{children:[`Добавьте следующие скрипты в ваш `,(0,c.jsx)(n.code,{children:`package.json`}),` для автоматизации процессов генерации кода, документации и типизации:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "scripts": {
    "ui": "dxt-ui",
    "wiki-storm": "dxt-wiki-storm",
    "types": "dxt-types"
  }
}
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`ui`}),`: Запускает основной цикл генерации UI-компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`wiki-storm`}),`: Генерирует и обновляет файлы для Wiki/Storybook.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`types`}),`: Обновляет типы данных на основе текущей конфигурации.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};