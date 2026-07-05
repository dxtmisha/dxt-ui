import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/LibraryAiPromptItem - Элемент агрегатора промптов ИИ`}),`
`,(0,c.jsx)(n.h1,{id:`класс-libraryaipromptitem`,children:`Класс LibraryAiPromptItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`LibraryAiPromptItem`}),` представляет собой отдельный блок контекста модуля или пакета в цепочке генерации ИИ-промптов. Он отвечает за поиск, чтение, кэширование и форматирование специфичных ресурсов модуля (таких как описания, инструкции, типы TypeScript и списки скриншотов интерфейса) в единую структурированную секцию.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поиск ресурсов контекста`}),` — автоматически проверяет наличие описаний, метаданных, типов и скриншотов в целевом подкаталоге модуля.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Парсинг манифеста пакета`}),` — считывает и парсит `,(0,c.jsx)(n.code,{children:`package.json`}),` модуля для получения его официального названия.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Структурированная сборка данных`}),` — объединяет найденные файлы в один аккуратный блок markdown с указанием расположения, назначения, типов и визуальных ресурсов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандартизация путей`}),` — переводит относительные ссылки в текстовых инструкциях в абсолютные пути относительно корня проекта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Умное кэширование манифестов`}),` — сохраняет содержимое `,(0,c.jsx)(n.code,{children:`package.json`}),` внутри экземпляра во избежание избыточного чтения с диска.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`LibraryAiPromptItem`}),` инициализируется массивом сегментов пути, указывающим на директорию целевого модуля.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dir: string[]`}),` — Сегменты пути к каталогу модуля (например, `,(0,c.jsx)(n.code,{children:`['packages', 'scripts']`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryAiPromptItem } from '@dxtmisha/scripts'

const item = new LibraryAiPromptItem(['packages', 'scripts'])
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`выполнение`,children:`Выполнение`}),`
`,(0,c.jsx)(n.h4,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsx)(n.p,{children:`Основной управляющий метод: проверяет наличие каждого типа ресурсов (описание, информация, типы, скриншоты), объединяет существующие файлы и форматирует их в единый markdown-блок модуля.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`string | undefined`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const promptBlock = item.make()
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`методы-проверки-статуса`,children:`Методы проверки статуса`}),`
`,(0,c.jsxs)(n.p,{children:[`Все методы проверки возвращают значение `,(0,c.jsx)(n.code,{children:`boolean`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isPrompt()`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`true`}),`, если для модуля существует хотя бы один из ресурсов (описание, информация, типы или скриншоты).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDescription()`}),` — Проверяет существование файла `,(0,c.jsx)(n.code,{children:`description.txt`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isInfo()`}),` — Проверяет существование файла `,(0,c.jsx)(n.code,{children:`info.txt`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isTypes()`}),` — Проверяет существование файла `,(0,c.jsx)(n.code,{children:`ai-types.txt`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isScreenshot()`}),` — Проверяет существование папки `,(0,c.jsx)(n.code,{children:`ai-screenshot`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`публичные-и-защищенные-вспомогательные-методы`,children:`Публичные и защищенные вспомогательные методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getProjectName(): string`}),` — Считывает имя проекта из локального файла `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPath(dirFile: string): string[]`}),` — Возвращает полный массив сегментов пути для указанного файла в папке модуля.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPathString(): string`}),` — Возвращает сегменты пути модуля, объединенные через слэш.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPackageJson(): Record<string, any>`}),` — Считывает и кэширует манифест `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`readFile(dirFile: string): string`}),` — Читает содержимое файла, адаптируя ссылки под абсолютную структуру папок проекта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDescription(): string | undefined`}),` — Форматирует секцию описания модуля при её наличии.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getInfo(): string | undefined`}),` — Форматирует секцию ключевой информации о модуле при её наличии.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTypes(): string | undefined`}),` — Форматирует ссылки на файлы типов модуля при их наличии.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getScreenshot(): string | undefined`}),` — Форматирует блок визуальных материалов и скриншотов при их наличии.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getScreenshotList(): string[] | undefined`}),` — Возвращает список файлов из директории `,(0,c.jsx)(n.code,{children:`ai-screenshot`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};