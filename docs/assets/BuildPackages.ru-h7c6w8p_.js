import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/BuildPackages - Сборщик пакетов монорепозитория`}),`
`,(0,c.jsx)(n.h1,{id:`класс-buildpackages`,children:`Класс BuildPackages`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`BuildPackages`}),` — это утилита, отвечающая за сборку измененных npm-пакетов в рабочем пространстве монорепозитория. Он сканирует директорию `,(0,c.jsx)(n.code,{children:`packages`}),`, определяет изменения версий по сравнению с локальным кэшем логов и выполняет инкрементальную сборку только тех пакетов, чьи версии обновились.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое сканирование директорий`}),` — сканирует папку пакетов (`,(0,c.jsx)(n.code,{children:`packages/`}),`) на наличие директорий с корректным файлом `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инкрементальное кэширование по версиям`}),` — сравнивает версию пакета с данными в `,(0,c.jsx)(n.code,{children:`./logs/ui-build.log.json`}),` для предотвращения повторной сборки неизмененного кода.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеллектуальный выбор скрипта`}),` — запускает `,(0,c.jsx)(n.code,{children:`build-recovery`}),`, если он объявлен в скриптах `,(0,c.jsx)(n.code,{children:`package.json`}),`, иначе переходит к стандартной сборке `,(0,c.jsx)(n.code,{children:`build`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Фильтрация тестовых пакетов`}),` — игнорирует пакеты, отмеченные свойством `,(0,c.jsx)(n.code,{children:`"ui-test": true`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Вы можете создать экземпляр `,(0,c.jsx)(n.code,{children:`BuildPackages`}),`, опционально передав кастомный путь к директории пакетов.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BuildPackages } from './BuildPackages'

const builder = new BuildPackages()
await builder.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): Promise<void>`}),` — инициализирует сканирование и запускает инкрементальный процесс сборки для каждого обнаруженного пакета.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`build(packageFile: PackageFile): Promise<boolean>`}),` — выполняет команду сборки (`,(0,c.jsx)(n.code,{children:`npm run build-recovery`}),` или `,(0,c.jsx)(n.code,{children:`npm run build`}),`) для указанного пакета.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isUpdate(packageFile: PackageFile): boolean`}),` — проверяет, отличается ли текущая версия пакета в `,(0,c.jsx)(n.code,{children:`package.json`}),` от версии, сохраненной в файле лога.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getVersionLog(name: string): string`}),` — возвращает кэшированную версию пакета из лога сборки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`updateLog(packageFile: PackageFile): void`}),` — обновляет оперативную копию лога сборки текущей версией пакета.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`saveLog(): void`}),` — сохраняет лог сборки из оперативной памяти в файл `,(0,c.jsx)(n.code,{children:`./logs/ui-build.log.json`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};