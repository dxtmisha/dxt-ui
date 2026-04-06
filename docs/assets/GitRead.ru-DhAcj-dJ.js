import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/GitRead - Чтение Git репозитория`}),`
`,(0,c.jsx)(n.h1,{id:`класс-gitread`,children:`Класс GitRead`}),`
`,(0,c.jsx)(n.p,{children:`Мощный утилитный класс для взаимодействия с Git-репозиторием. Предоставляет высокоуровневые методы для получения списков файлов, дат коммитов, информации о статусе в формате porcelain и многого другого.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поиск файлов`}),` — получает все отслеживаемые файлы в текущем репозитории или отфильтрованные по конкретным директориям.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Отчеты о статусе`}),` — анализирует `,(0,c.jsx)(n.code,{children:`git status --porcelain`}),` для идентификации измененных, добавленных или неотслеживаемых файлов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`История коммитов`}),` — извлекает дату последнего изменения для отдельных файлов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление путями`}),` — обрабатывает относительные пути и префиксы директорий внутри структуры репозитория.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`основные-методы`,children:`Основные методы`}),`
`,(0,c.jsx)(n.h3,{id:`getlist`,children:(0,c.jsx)(n.code,{children:`getList`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает упрощенный список всех отслеживаемых файлов в HEAD репозитория, включая базовые метаданные, такие как даты изменения.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`filter?: (file: string) => boolean`}),` — функция обратного вызова для включения только тех файлов, которые соответствуют определенным критериям.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`GitFileList`}),` — массив объектов `,(0,c.jsx)(n.code,{children:`GitFileItem`}),`, представляющих отслеживаемые файлы.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const files = GitRead.getList((f) => f.endsWith('.ts'))
/**
 * [
 *   {
 *     path: 'src/index.ts',
 *     pathByOS: ['src', 'index.ts'],
 *     pathFull: 'packages/scripts/src/index.ts',
 *     date: '2024-03-20 12:00:00',
 *     status: undefined
 *   },
 *   ...
 * ]
 */
`})}),`
`,(0,c.jsx)(n.h3,{id:`getlistporcelain`,children:(0,c.jsx)(n.code,{children:`getListPorcelain`})}),`
`,(0,c.jsxs)(n.p,{children:[`Получает текущий статус файлов в репозитории, используя формат `,(0,c.jsx)(n.code,{children:`--porcelain`}),`. Сюда входят изменения в рабочем дереве и индексе.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`filter?: (file: string) => boolean`}),` — функция обратного вызова для фильтрации результирующего списка статусов.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`GitFileList`}),` — массив объектов `,(0,c.jsx)(n.code,{children:`GitFileItem`}),`, каждый из которых содержит поле `,(0,c.jsx)(n.code,{children:`status`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const status = GitRead.getListPorcelain()
/**
 * [
 *   {
 *     path: 'src/classes/GitRead.ts',
 *     pathByOS: ['src', 'classes', 'GitRead.ts'],
 *     pathFull: 'packages/scripts/src/classes/GitRead.ts',
 *     date: '2024-03-21 10:30:00',
 *     status: 'M'
 *   },
 *   ...
 * ]
 */
`})}),`
`,(0,c.jsx)(n.h3,{id:`getlistunique`,children:(0,c.jsx)(n.code,{children:`getListUnique`})}),`
`,(0,c.jsxs)(n.p,{children:[`Выполняет слияние списка отслеживаемых файлов (`,(0,c.jsx)(n.code,{children:`getList`}),`) и текущего статуса (`,(0,c.jsx)(n.code,{children:`getListPorcelain`}),`). Гарантирует, что каждый файл представлен только один раз, отдавая приоритет информации о статусе, если она доступна.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`filter: (file: string) => boolean`}),` — обязательная функция обратного вызова для фильтрации объединенного списка.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`GitFileList`}),` — дедуплицированный список файлов, объединяющий базовое и измененное состояния.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const unique = GitRead.getListUnique((f) => f.includes('src/'))
/**
 * [
 *   {
 *     path: 'src/main.ts',
 *     pathByOS: ['src', 'main.ts'],
 *     pathFull: 'packages/scripts/src/main.ts',
 *     date: '2024-03-19 15:45:00',
 *     status: 'A'
 *   }
 * ]
 */
`})}),`
`,(0,c.jsx)(n.h3,{id:`getlistbydirectory`,children:(0,c.jsx)(n.code,{children:`getListByDirectory`})}),`
`,(0,c.jsxs)(n.p,{children:[`Удобный метод для получения списков уникальных файлов специально из заданной директории, отфильтрованный так, чтобы включать только файлы `,(0,c.jsx)(n.code,{children:`.ts`}),` и исключать файлы `,(0,c.jsx)(n.code,{children:`.test.ts`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`directory: string | RegExp`}),` — целевой путь к директории или шаблон для сопоставления с путями файлов.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`GitFileList`})]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const classes = GitRead.getListByDirectory('/classes/')
/**
 * [
 *   {
 *     path: 'classes/GitRead.ts',
 *     ...
 *   }
 * ]
 */
`})}),`
`,(0,c.jsx)(n.h2,{id:`вспомогательные-методы`,children:`Вспомогательные методы`}),`
`,(0,c.jsx)(n.h3,{id:`getclasseslist`,children:(0,c.jsx)(n.code,{children:`getClassesList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Получает все TypeScript файлы (кроме тестов) в директории `,(0,c.jsx)(n.code,{children:`/classes/`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const classes = GitRead.getClassesList()
/**
 * [
 *   {
 *     path: 'classes/GitRead.ts',
 *     pathByOS: ['classes', 'GitRead.ts'],
 *     pathFull: 'packages/scripts/src/classes/GitRead.ts',
 *     date: '2024-03-21 10:30:00',
 *     status: undefined
 *   },
 *   ...
 * ]
 */
`})}),`
`,(0,c.jsx)(n.h3,{id:`getfunctionslist`,children:(0,c.jsx)(n.code,{children:`getFunctionsList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Получает все TypeScript файлы (кроме тестов) в директории `,(0,c.jsx)(n.code,{children:`/functions/`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const funcs = GitRead.getFunctionsList()
/**
 * [
 *   {
 *     path: 'functions/myFunction.ts',
 *     pathByOS: ['functions', 'myFunction.ts'],
 *     pathFull: 'packages/scripts/src/functions/myFunction.ts',
 *     date: '2024-03-20 15:00:00',
 *     status: undefined
 *   }
 * ]
 */
`})}),`
`,(0,c.jsx)(n.h2,{id:`структуры-данных`,children:`Структуры данных`}),`
`,(0,c.jsx)(n.h3,{id:`gitfileitem`,children:(0,c.jsx)(n.code,{children:`GitFileItem`})}),`
`,(0,c.jsx)(n.p,{children:`Основной объект, представляющий состояние файла в Git:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — относительный путь к файлу.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathByOS: string[]`}),` — путь к файлу, разделенный на сегменты независимо от ОС.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathFull: string`}),` — полный путь, включая любые префиксы директорий репозитория.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`date: string`}),` — дата последнего изменения (стандартизированная).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`status?: GitStatus`}),` — код статуса Git (например, `,(0,c.jsx)(n.code,{children:`'M'`}),`, `,(0,c.jsx)(n.code,{children:`'A'`}),`, `,(0,c.jsx)(n.code,{children:`'??'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`gitstatus`,children:(0,c.jsx)(n.code,{children:`GitStatus`})}),`
`,(0,c.jsx)(n.p,{children:`Перечисление, представляющее распространенные коды статуса Git:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`MODIFIED`}),` (`,(0,c.jsx)(n.code,{children:`'M'`}),`) — существующий файл был изменен.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ADDED`}),` (`,(0,c.jsx)(n.code,{children:`'A'`}),`) — новый файл добавлен в индекс.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`DELETED`}),` (`,(0,c.jsx)(n.code,{children:`'D'`}),`) — файл был удален.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`UNTRACKED`}),` (`,(0,c.jsx)(n.code,{children:`'??'`}),`) — новый файл, еще не отслеживаемый Git.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`RENAMED`}),` (`,(0,c.jsx)(n.code,{children:`'R'`}),`) — файл был перемещен или переименован.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`получение-измененных-файлов`,children:`Получение измененных файлов`}),`
`,(0,c.jsx)(n.p,{children:`Получение списка файлов, которые были изменены или добавлены в репозиторий.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { GitRead } from '@dxtmisha/scripts'

const modifiedFiles = GitRead.getListPorcelain()
console.log(modifiedFiles)
`})}),`
`,(0,c.jsx)(n.h3,{id:`фильтрация-классов`,children:`Фильтрация классов`}),`
`,(0,c.jsx)(n.p,{children:`Получение только файлов классов для конкретного модуля.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const componentClasses = GitRead.getListUnique(
  (file) => file.includes('packages/ui/src/classes/')
)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};