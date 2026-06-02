import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/BuildPublishPackages - Публикатор пакетов монорепозитория`}),`
`,(0,c.jsx)(n.h1,{id:`класс-buildpublishpackages`,children:`Класс BuildPublishPackages`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`BuildPublishPackages`}),` — это утилита, отвечающая за автоматическую публикацию npm-пакетов в рабочем пространстве монорепозитория. Он сканирует директорию `,(0,c.jsx)(n.code,{children:`packages`}),`, определяет изменения версий по сравнению с локальным кэшем логов и публикует обновленные пакеты в npm.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое сканирование директорий`}),` — сканирует папку пакетов (`,(0,c.jsx)(n.code,{children:`packages/`}),`) на наличие директорий с корректным файлом `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инкрементальное кэширование по версиям`}),` — сравнивает версию пакета с данными в `,(0,c.jsx)(n.code,{children:`./logs/ui-publish.log.json`}),` для предотвращения повторной публикации неизмененного кода.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеллектуальный выбор скрипта`}),` — запускает `,(0,c.jsx)(n.code,{children:`publish-to-npm`}),`, если он объявлен в скриптах `,(0,c.jsx)(n.code,{children:`package.json`}),`, иначе переходит к стандартной публикации `,(0,c.jsx)(n.code,{children:`npm publish --access public`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Исключение из публикации`}),` — игнорирует пакеты, отмеченные свойством `,(0,c.jsx)(n.code,{children:`"private": true`}),` или `,(0,c.jsx)(n.code,{children:`"ui-no-publish": true`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Вы можете создать экземпляр `,(0,c.jsx)(n.code,{children:`BuildPublishPackages`}),`, опционально передав кастомный путь к директории пакетов.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BuildPublishPackages } from './BuildPublishPackages'

const publisher = new BuildPublishPackages()
await publisher.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): Promise<void>`}),` — инициализирует сканирование и запускает процесс публикации для каждого обнаруженного пакета.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isUpdate(packageFile: PackageFile): boolean`}),` — проверяет, отличается ли текущая версия пакета в `,(0,c.jsx)(n.code,{children:`package.json`}),` от версии, сохраненной в файле лога.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getVersionLog(name: string): string`}),` — возвращает кэшированную версию пакета из лога публикации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`updateLog(packageFile: PackageFile): void`}),` — обновляет оперативную копию лога публикации текущей версией пакета.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`saveLog(): void`}),` — сохраняет лог публикации из оперативной памяти в файл `,(0,c.jsx)(n.code,{children:`./logs/ui-publish.log.json`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};