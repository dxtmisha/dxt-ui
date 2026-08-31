import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/7. Команды/dxt-component - Генерация базовой структуры компонентов`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-component`,children:`dxt-component`}),`
`,(0,c.jsxs)(t.p,{children:[`Команда `,(0,c.jsx)(t.code,{children:`dxt-component`}),` обеспечивает автоматическую генерацию базовой структуры (скаффолдинг) новых компонентов дизайн-системы. Инструмент использует классы `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),` и `,(0,c.jsx)(t.code,{children:`ComponentItem`}),` для автоматического обнаружения пустых папок внутри `,(0,c.jsx)(t.code,{children:`src/components/`}),` и создания полного набора шаблонных файлов для каждого нового компонента.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое сканирование директорий`}),`: Рекурсивно сканирует `,(0,c.jsx)(t.code,{children:`src/components/`}),` и находит все пустые папки компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Полная генерация шаблонов`}),`: Разворачивает 8 обязательных файлов компонента, включая код Vue SFC, TypeScript-типы, входные точки, Storybook MDX/Stories и промпты для ИИ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Динамическая замена плейсхолдеров`}),`: Автоматически подставляет имя компонента (в PascalCase и kebab-case), имя текущего проекта из `,(0,c.jsx)(t.code,{children:`package.json`}),` и относительный путь.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление правами файлов`}),`: Автоматически устанавливает корректные права доступа для созданных файлов через `,(0,c.jsx)(t.code,{children:`PropertiesFile.chmod`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает?`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поиск пустых директорий`}),`: Класс `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),` сканирует директорию `,(0,c.jsx)(t.code,{children:`src/components/`}),` через `,(0,c.jsx)(t.code,{children:`PropertiesFile.readDirOnlyRecursive`}),` и фильтрует папки, в которых нет файлов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инициализация генератора`}),`: Для каждой пустой папки создается экземпляр `,(0,c.jsx)(t.code,{children:`ComponentItem`}),`, который загружает набор встроенных шаблонов (`,(0,c.jsx)(t.code,{children:`componentDocTemplates`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Подстановка контекстных данных`}),`: Выполняется строковая замена плейсхолдеров:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ComponentDoc`}),` -> имя компонента в PascalCase (например, `,(0,c.jsx)(t.code,{children:`Button`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`component-doc`}),` -> имя компонента в kebab-case (например, `,(0,c.jsx)(t.code,{children:`button`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[project]`}),` -> имя пакета из `,(0,c.jsx)(t.code,{children:`package.json`}),` (например, `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[path]`}),` -> относительный путь к компоненту (например, `,(0,c.jsx)(t.code,{children:`src/components/Button`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`_.gitignore.txt`}),` -> `,(0,c.jsx)(t.code,{children:`.gitignore`})]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Запись файлов`}),`: Сгенерированные файлы записываются в целевую папку компонента с установкой прав доступа.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsxs)(t.p,{children:[`Создайте пустую папку для нового компонента в `,(0,c.jsx)(t.code,{children:`src/components/`}),` (например, `,(0,c.jsx)(t.code,{children:`src/components/Badge`}),`) и выполните команду:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-component
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Либо добавьте вызов в скрипты `,(0,c.jsx)(t.code,{children:`package.json`}),` пакета:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "component": "dxt-component"
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`структура-генерируемых-файлов`,children:`Структура генерируемых файлов`}),`
`,(0,c.jsx)(t.p,{children:`Для каждого обнаруженного компонента создаются 8 файлов:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[ComponentName].vue`}),` — Базовый Vue 3 SFC шаблон с `,(0,c.jsx)(t.code,{children:`<script setup lang="ts">`}),`, типизацией и базовым `,(0,c.jsx)(t.code,{children:`<style lang="scss">`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index.ts`}),` — Точка входа компонента с именованным экспортом (`,(0,c.jsx)(t.code,{children:`export const [ComponentName]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`types.ts`}),` — Интерфейсы TypeScript для `,(0,c.jsx)(t.code,{children:`Props`}),`, `,(0,c.jsx)(t.code,{children:`Emits`}),`, `,(0,c.jsx)(t.code,{children:`Slots`}),` и свойств по умолчанию.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`materials/prompt.md`}),` — Системные инструкции и промпт для ИИ по материалам компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`subcomponents/.gitignore`}),` — Файл исключений для директории вложенных подкомпонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`wiki/[ComponentName].mdx`}),` — Готовый файл документации Storybook в формате MDX.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`wiki/[ComponentName].stories.ts`}),` — Конфигурация историй Storybook Vue 3 с превью компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`wiki/prompt.md`}),` — Системные инструкции и промпт для документирования компонента в Wiki.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};