import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/BuildPublishPackages - Публикатор пакетов монорепозитория`}),`
`,(0,c.jsx)(t.h1,{id:`класс-buildpublishpackages`,children:`Класс BuildPublishPackages`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`BuildPublishPackages`}),` — это утилита, отвечающая за автоматическую публикацию npm-пакетов в рабочем пространстве монорепозитория. Он сканирует директорию `,(0,c.jsx)(t.code,{children:`packages`}),`, определяет изменения версий по сравнению с локальным кэшем логов и публикует обновленные пакеты в npm.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое сканирование директорий`}),` — сканирует папку пакетов (`,(0,c.jsx)(t.code,{children:`packages/`}),`) на наличие директорий с корректным файлом `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инкрементальное кэширование по версиям`}),` — сравнивает версию пакета с данными в `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),` для предотвращения повторной публикации неизмененного кода.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальный выбор скрипта`}),` — запускает `,(0,c.jsx)(t.code,{children:`publish-to-npm`}),`, если он объявлен в скриптах `,(0,c.jsx)(t.code,{children:`package.json`}),`, иначе переходит к стандартной публикации `,(0,c.jsx)(t.code,{children:`npm publish --access public`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Исключение из публикации`}),` — игнорирует пакеты, отмеченные свойством `,(0,c.jsx)(t.code,{children:`"private": true`}),` или `,(0,c.jsx)(t.code,{children:`"ui-no-publish": true`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Вы можете создать экземпляр `,(0,c.jsx)(t.code,{children:`BuildPublishPackages`}),`, опционально передав кастомный путь к директории пакетов.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { BuildPublishPackages } from './BuildPublishPackages'

const publisher = new BuildPublishPackages()
await publisher.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — инициализирует сканирование и запускает процесс публикации для каждого обнаруженного пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isUpdate(packageFile: PackageFile): boolean`}),` — проверяет, отличается ли текущая версия пакета в `,(0,c.jsx)(t.code,{children:`package.json`}),` от версии, сохраненной в файле лога.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getVersionLog(name: string): string`}),` — возвращает кэшированную версию пакета из лога публикации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`updateLog(packageFile: PackageFile): void`}),` — обновляет оперативную копию лога публикации текущей версией пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`saveLog(): void`}),` — сохраняет лог публикации из оперативной памяти в файл `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};