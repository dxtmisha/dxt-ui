import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/BuildPackages - Сборщик пакетов монорепозитория`}),`
`,(0,c.jsx)(t.h1,{id:`класс-buildpackages`,children:`Класс BuildPackages`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`BuildPackages`}),` — это оркестратор для сканирования, фильтрации, сортировки по приоритетам и инкрементальной сборки npm-пакетов в монорепозитории. Он отслеживает изменения версий пакетов с помощью локального файла кэша логов (`,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`) и компилирует только те модули, версии которых изменились или еще не были собраны.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое сканирование монорепозитория`}),`: Сканирует директорию пакетов (`,(0,c.jsx)(t.code,{children:`packages/`}),`) и находит все активные модули, содержащие валидный файл `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Сортировка по приоритету сборки (`,(0,c.jsx)(t.code,{children:`ui-priority`}),`)`]}),`: Упорядочивает пакеты по свойству `,(0,c.jsx)(t.code,{children:`ui-priority`}),` из `,(0,c.jsx)(t.code,{children:`package.json`}),` (по умолчанию `,(0,c.jsx)(t.code,{children:`500`}),`, сортировка по возрастанию), гарантируя сборку низкоуровневых библиотек перед зависимыми пакетами.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инкрементальное кэширование по версиям`}),`: Сравнивает версию пакета с кэшем в `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),` для предотвращения повторной сборки неизмененного кода.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальный выбор скрипта сборки`}),`: Автоматически выбирает первую доступную команду сборки из `,(0,c.jsx)(t.code,{children:`package.json`}),` в строгом порядке приоритета:`,`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prepublishOnly`}),` (приоритет 1)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`build-recovery`}),` (приоритет 2)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`build`}),` (приоритет 3)`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Фильтрация тестовых пакетов`}),`: Игнорирует пакеты, отмеченные свойством `,(0,c.jsx)(t.code,{children:`"ui-test": true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое сохранение лога`}),`: Записывает обновленные версии собранных пакетов в `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),` только при наличии успешно собранных пакетов (`,(0,c.jsx)(t.code,{children:`changed > 0`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`конструктор`,children:`Конструктор`}),`
`,(0,c.jsxs)(t.p,{children:[`Конструктор принимает путь к директории с пакетами (по умолчанию константа `,(0,c.jsx)(t.code,{children:`UI_DIR_PACKAGES`}),` = `,(0,c.jsx)(t.code,{children:`'packages'`}),`) и загружает существующий кэш версий из файла `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { BuildPackages } from '@dxtmisha/scripts'

// Создание с директорией по умолчанию ('packages')
const builder = new BuildPackages()

// Или с указанием пользовательского пути к пакетам
const customBuilder = new BuildPackages('custom-packages')
await customBuilder.make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`свойства-класса`,children:`Свойства класса`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readonly path: string`}),` — путь к корневой директории пакетов монорепозитория (по умолчанию `,(0,c.jsx)(t.code,{children:`'packages'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readonly log: Record<string, string>`}),` — оперативная карта кэшированных версий пакетов вида `,(0,c.jsx)(t.code,{children:`{ [packageName]: version }`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — основной метод оркестрации:`,`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Получает отсортированный список валидных пакетов через `,(0,c.jsx)(t.code,{children:`getList()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Выводит в консоль общее количество найденных пакетов (`,(0,c.jsx)(t.code,{children:`Build packages(N)...`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Для каждого пакета проверяет необходимость обновления (`,(0,c.jsx)(t.code,{children:`isUpdate`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`При необходимости запускает сборку (`,(0,c.jsx)(t.code,{children:`build`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`При успешной сборке обновляет запись версии в оперативной памяти (`,(0,c.jsx)(t.code,{children:`updateLog`}),`) и увеличивает счетчик `,(0,c.jsx)(t.code,{children:`changed`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Если `,(0,c.jsx)(t.code,{children:`changed > 0`}),`, сохраняет файл лога на диск (`,(0,c.jsx)(t.code,{children:`saveLog`}),`) и логирует `,(0,c.jsx)(t.code,{children:`Build packages changed: N`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Если изменений не было, выводит `,(0,c.jsx)(t.code,{children:`Build packages - no changes`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected build(packageFile: PackageFile): Promise<boolean>`}),` — выполняет команду сборки для пакета:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Определяет скрипт через `,(0,c.jsx)(t.code,{children:`packageFile.getCodeBuildOrRecovery()`}),` (`,(0,c.jsx)(t.code,{children:`prepublishOnly`}),` -> `,(0,c.jsx)(t.code,{children:`build-recovery`}),` -> `,(0,c.jsx)(t.code,{children:`build`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Выполняет команду `,(0,c.jsx)(t.code,{children:`npm run <script>`}),` в директории пакета с помощью утилиты `,(0,c.jsx)(t.code,{children:`run`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Возвращает `,(0,c.jsx)(t.code,{children:`true`}),` при успешном завершении или `,(0,c.jsx)(t.code,{children:`false`}),` в случае ошибки / отсутствия скрипта сборки.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected isUpdate(packageFile: PackageFile): boolean`}),` — проверяет необходимость сборки пакета путем вызова `,(0,c.jsx)(t.code,{children:`!packageFile.isVersionConsistency(this.getVersionLog(packageFile.getName()))`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getVersionLog(name: string): string`}),` — возвращает зафиксированную версию пакета из лога (возвращает `,(0,c.jsx)(t.code,{children:`'0.0.0'`}),`, если пакет ранее не кэшировался).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected updateLog(packageFile: PackageFile): void`}),` — обновляет запись версии в оперативной карте `,(0,c.jsx)(t.code,{children:`this.log[packageFile.getName()] = packageFile.getVersion()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected saveLog(): void`}),` — сохраняет текущую карту версий `,(0,c.jsx)(t.code,{children:`this.log`}),` в файл `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),` через `,(0,c.jsx)(t.code,{children:`PropertiesFile.writeByPath`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`private getList(): PackageFile[]`}),` — сканирует директорию `,(0,c.jsx)(t.code,{children:`this.path`}),`, фильтрует папки (проверяет наличие `,(0,c.jsx)(t.code,{children:`package.json`}),` и отсутствие `,(0,c.jsx)(t.code,{children:`"ui-test": true`}),`) и сортирует пакеты по числовому значению `,(0,c.jsx)(t.code,{children:`ui-priority`}),` (по умолчанию `,(0,c.jsx)(t.code,{children:`500`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};