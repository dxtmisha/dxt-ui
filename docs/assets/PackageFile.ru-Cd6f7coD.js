import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PackageFile - Управление package.json`}),`
`,(0,c.jsx)(n.h1,{id:`класс-packagefile`,children:`Класс PackageFile`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PackageFile`}),` представляет собой `,(0,c.jsx)(n.strong,{children:`оболочку конфигурации пакета`}),`, предназначенную для чтения и анализа файлов `,(0,c.jsx)(n.code,{children:`package.json`}),` в рабочей области. Он разбирает метаданные пакета, скрипты, версионирование и флаги валидации, обеспечивая автоматизацию процессов сборки и публикации в монорепозитории.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Разрешение метаданных`}),` — Извлекает стандартные сведения, такие как имя, версия и пользовательские флаги.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Проверка валидации`}),` — Проверяет согласованность версий и статус тестового или непубликуемого пакета.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синтез команд`}),` — Определяет команды сборки и публикации на основе доступных скриптов в `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция путей`}),` — Взаимодействует с `,(0,c.jsx)(n.code,{children:`PropertiesFile`}),` для синхронной загрузки содержимого файлов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Инициализируется путем передачи пути к директории, содержащей файл `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PackageFile } from '@dxtmisha/scripts'

// Создание экземпляра для конкретной директории пакета
const pkg = new PackageFile('packages/constructor')

if (pkg.is()) {
  console.log(pkg.getName()) // "@dxtmisha/constructor"
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`проверка`,children:`Проверка`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Проверяет, содержит ли директория корректный файл `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isVersionConsistency(version?: string): boolean`}),` — Проверяет, соответствует ли версия пакета указанной целевой версии.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isTest(): boolean`}),` — Проверяет, помечен ли пакет как тестовый (флаг `,(0,c.jsx)(n.code,{children:`ui-test`}),` равен true).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isNoPublish(): boolean`}),` — Проверяет, не должен ли пакет публиковаться (флаг `,(0,c.jsx)(n.code,{children:`ui-no-publish`}),` или `,(0,c.jsx)(n.code,{children:`private`}),` равен true).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`данные-и-пути`,children:`Данные и пути`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): Record<string, any>`}),` — Возвращает разобранное содержимое файла `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(): string`}),` — Возвращает имя пакета или путь к директории по умолчанию, если имя не определено.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getVersion(): string`}),` — Возвращает версию пакета (по умолчанию `,(0,c.jsx)(n.code,{children:`'0.0.0'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getScripts(): Record<string, string>`}),` — Возвращает скрипты, определенные в `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDir(): string[]`}),` — Возвращает сегменты пути к директории пакета.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPath(): string[]`}),` — Возвращает сегменты пути к файлу `,(0,c.jsx)(n.code,{children:`package.json`}),` этого пакета.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`разрешение-команд`,children:`Разрешение команд`}),`
`,(0,c.jsx)(n.h3,{id:`getcodebuildorrecovery`,children:(0,c.jsx)(n.code,{children:`getCodeBuildOrRecovery`})}),`
`,(0,c.jsxs)(n.p,{children:[`Разрешает имя скрипта для сборки пакета, отдавая приоритет скриптам восстановления (`,(0,c.jsx)(n.code,{children:`build-recovery`}),`) перед стандартной сборкой (`,(0,c.jsx)(n.code,{children:`build`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const pkg = new PackageFile('packages/core')
const buildCmd = pkg.getCodeBuildOrRecovery()
// Возвращает: "build-recovery" (если есть) или "build" (если есть) или undefined
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string | undefined`})]}),`
`,(0,c.jsx)(n.h3,{id:`getcodepublish`,children:(0,c.jsx)(n.code,{children:`getCodePublish`})}),`
`,(0,c.jsx)(n.p,{children:`Синтезирует терминальную команду, необходимую для публикации пакета в реестре npm.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const pkg = new PackageFile('packages/core')
const publishCmd = pkg.getCodePublish()
// Возвращает: "npm run publish-to-npm" (если скрипт существует) или "npm publish --access public"
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string`})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};