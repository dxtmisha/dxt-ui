import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/BuildPackages - Сборщик пакетов монорепозитория`}),`
`,(0,c.jsx)(t.h1,{id:`класс-buildpackages`,children:`Класс BuildPackages`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`BuildPackages`}),` — это утилита, отвечающая за сборку измененных npm-пакетов в рабочем пространстве монорепозитория. Он сканирует директорию `,(0,c.jsx)(t.code,{children:`packages`}),`, определяет изменения версий по сравнению с локальным кэшем логов и выполняет инкрементальную сборку только тех пакетов, чьи версии обновились.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое сканирование директорий`}),` — сканирует папку пакетов (`,(0,c.jsx)(t.code,{children:`packages/`}),`) на наличие директорий с корректным файлом `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инкрементальное кэширование по версиям`}),` — сравнивает версию пакета с данными в `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),` для предотвращения повторной сборки неизмененного кода.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальный выбор скрипта`}),` — запускает `,(0,c.jsx)(t.code,{children:`build-recovery`}),`, если он объявлен в скриптах `,(0,c.jsx)(t.code,{children:`package.json`}),`, иначе переходит к стандартной сборке `,(0,c.jsx)(t.code,{children:`build`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Фильтрация тестовых пакетов`}),` — игнорирует пакеты, отмеченные свойством `,(0,c.jsx)(t.code,{children:`"ui-test": true`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Вы можете создать экземпляр `,(0,c.jsx)(t.code,{children:`BuildPackages`}),`, опционально передав кастомный путь к директории пакетов.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { BuildPackages } from './BuildPackages'

const builder = new BuildPackages()
await builder.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — инициализирует сканирование и запускает инкрементальный процесс сборки для каждого обнаруженного пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`build(packageFile: PackageFile): Promise<boolean>`}),` — выполняет команду сборки (`,(0,c.jsx)(t.code,{children:`npm run build-recovery`}),` или `,(0,c.jsx)(t.code,{children:`npm run build`}),`) для указанного пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isUpdate(packageFile: PackageFile): boolean`}),` — проверяет, отличается ли текущая версия пакета в `,(0,c.jsx)(t.code,{children:`package.json`}),` от версии, сохраненной в файле лога.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getVersionLog(name: string): string`}),` — возвращает кэшированную версию пакета из лога сборки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`updateLog(packageFile: PackageFile): void`}),` — обновляет оперативную копию лога сборки текущей версией пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`saveLog(): void`}),` — сохраняет лог сборки из оперативной памяти в файл `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};