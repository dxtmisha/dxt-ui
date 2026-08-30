import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/BuildPublishPackages - Публикатор пакетов монорепозитория`}),`
`,(0,c.jsx)(t.h1,{id:`класс-buildpublishpackages`,children:`Класс BuildPublishPackages`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`BuildPublishPackages`}),` — это оркестратор для сканирования, фильтрации и автоматической публикации измененных npm-пакетов монорепозитория в реестр npm. Он отслеживает версии пакетов через локальный файл кэша логов (`,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),`), автоматически регистрирует новые пакеты и публикует модули при повышении их версии.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-возможности`,children:`Ключевые возможности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое сканирование монорепозитория`}),`: Сканирует директорию пакетов (`,(0,c.jsx)(t.code,{children:`packages/`}),`) и находит все активные модули, содержащие валидный файл `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инкрементальное кэширование по версиям`}),`: Предотвращает повторную публикацию уже опубликованных версий благодаря фиксации версий в файле `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальный выбор команды публикации`}),`: Автоматически выполняет кастомный скрипт `,(0,c.jsx)(t.code,{children:`"publish-to-npm"`}),` из `,(0,c.jsx)(t.code,{children:`package.json`}),`, либо использует команду по умолчанию `,(0,c.jsx)(t.code,{children:`npm publish --access public`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическая синхронизация новых пакетов`}),`: Если пакет отсутствует в лог-кэше, его текущая версия регистрируется в кэше без повторной публикации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Исключение из публикации`}),`: Автоматически пропускает пакеты, помеченные свойством `,(0,c.jsx)(t.code,{children:`"private": true`}),` или `,(0,c.jsx)(t.code,{children:`"ui-no-publish": true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Логирование вывода в реальном времени`}),`: При выполнении публикации выводит полные потоки stdout и stderr команды в консоль.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое сохранение лога`}),`: Записывает обновленные версии в `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),` только при наличии изменений (`,(0,c.jsx)(t.code,{children:`changed > 0`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`конструктор`,children:`Конструктор`}),`
`,(0,c.jsxs)(t.p,{children:[`Конструктор принимает путь к директории с пакетами (по умолчанию константа `,(0,c.jsx)(t.code,{children:`UI_DIR_PACKAGES`}),` = `,(0,c.jsx)(t.code,{children:`'packages'`}),`) и загружает существующий кэш версий из файла `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { BuildPublishPackages } from '@dxtmisha/scripts'

// Создание с директорией по умолчанию ('packages')
const publisher = new BuildPublishPackages()

// Или с указанием пользовательского пути к пакетам
const customPublisher = new BuildPublishPackages('custom-packages')
await customPublisher.make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`свойства-класса`,children:`Свойства класса`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readonly path: string`}),` — путь к корневой директории пакетов монорепозитория (по умолчанию `,(0,c.jsx)(t.code,{children:`'packages'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected readonly log: Record<string, string>`}),` — оперативная карта кэшированных версий опубликованных пакетов вида `,(0,c.jsx)(t.code,{children:`{ [packageName]: version }`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — основной метод оркестрации:`,`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Сканирует директорию `,(0,c.jsx)(t.code,{children:`this.path`}),` и получает список папок через `,(0,c.jsx)(t.code,{children:`PropertiesFile.readDir`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Выводит в консоль общее количество найденных директорий (`,(0,c.jsx)(t.code,{children:`Publish packages(N)...`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Для каждой папки создает экземпляр `,(0,c.jsx)(t.code,{children:`PackageFile`}),`, проверяет наличие `,(0,c.jsx)(t.code,{children:`package.json`}),` и отсутствие исключений (`,(0,c.jsx)(t.code,{children:`!packageFile.isNoPublish()`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Если пакет еще не зарегистрирован в логе (`,(0,c.jsx)(t.code,{children:`this.log[name] === undefined`}),`), фиксирует его текущую версию в кэше и увеличивает `,(0,c.jsx)(t.code,{children:`changed`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Если пакет уже есть в логе и его версия обновилась (`,(0,c.jsx)(t.code,{children:`isUpdate`}),`), запускает публикацию через `,(0,c.jsx)(t.code,{children:`packageFile.getCodePublish()`}),` с выводом логов stdout/stderr. При успехе обновляет кэш (`,(0,c.jsx)(t.code,{children:`updateLog`}),`) и увеличивает `,(0,c.jsx)(t.code,{children:`changed`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Если `,(0,c.jsx)(t.code,{children:`changed > 0`}),`, сохраняет файл кэша на диск (`,(0,c.jsx)(t.code,{children:`saveLog`}),`) и логирует `,(0,c.jsx)(t.code,{children:`Publish packages changed: N`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Если изменений не было, выводит `,(0,c.jsx)(t.code,{children:`Publish packages - no changes`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected isUpdate(packageFile: PackageFile): boolean`}),` — проверяет, отличается ли текущая версия в `,(0,c.jsx)(t.code,{children:`package.json`}),` от зафиксированной в логе (`,(0,c.jsx)(t.code,{children:`!packageFile.isVersionConsistency(this.getVersionLog(packageFile.getName()))`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected getVersionLog(name: string): string`}),` — возвращает кэшированную версию пакета из лога (возвращает `,(0,c.jsx)(t.code,{children:`'0.0.0'`}),`, если пакет ранее не фиксировался).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected updateLog(packageFile: PackageFile): void`}),` — обновляет запись версии в оперативной карте `,(0,c.jsx)(t.code,{children:`this.log[packageFile.getName()] = packageFile.getVersion()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`protected saveLog(): void`}),` — сохраняет текущую карту версий `,(0,c.jsx)(t.code,{children:`this.log`}),` в файл `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),` через `,(0,c.jsx)(t.code,{children:`PropertiesFile.writeByPath`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};