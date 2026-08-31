import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/GitRead - Чтение Git репозитория`}),`
`,(0,c.jsx)(t.h1,{id:`класс-gitread`,children:`Класс GitRead`}),`
`,(0,c.jsx)(t.p,{children:`Мощный утилитный класс для взаимодействия с Git-репозиторием. Предоставляет высокоуровневые методы для получения списков файлов, дат коммитов, информации о статусе в формате porcelain и многого другого.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поиск файлов`}),` — получает все отслеживаемые файлы в текущем репозитории или отфильтрованные по конкретным директориям.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Отчеты о статусе`}),` — анализирует `,(0,c.jsx)(t.code,{children:`git status --porcelain`}),` для идентификации измененных, добавленных или неотслеживаемых файлов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`История коммитов`}),` — извлекает дату последнего изменения для отдельных файлов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление путями`}),` — обрабатывает относительные пути и префиксы директорий внутри структуры репозитория.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`основные-методы`,children:`Основные методы`}),`
`,(0,c.jsx)(t.h3,{id:`getlist`,children:(0,c.jsx)(t.code,{children:`getList`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает упрощенный список всех отслеживаемых файлов в HEAD репозитория, включая базовые метаданные, такие как даты изменения.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`filter?: (file: string) => boolean`}),` — функция обратного вызова для включения только тех файлов, которые соответствуют определенным критериям.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`GitFileList`}),` — массив объектов `,(0,c.jsx)(t.code,{children:`GitFileItem`}),`, представляющих отслеживаемые файлы.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const files = GitRead.getList((f) => f.endsWith('.ts'))
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
`,(0,c.jsx)(t.h3,{id:`getlistporcelain`,children:(0,c.jsx)(t.code,{children:`getListPorcelain`})}),`
`,(0,c.jsxs)(t.p,{children:[`Получает текущий статус файлов в репозитории, используя формат `,(0,c.jsx)(t.code,{children:`--porcelain`}),`. Сюда входят изменения в рабочем дереве и индексе.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`filter?: (file: string) => boolean`}),` — функция обратного вызова для фильтрации результирующего списка статусов.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`GitFileList`}),` — массив объектов `,(0,c.jsx)(t.code,{children:`GitFileItem`}),`, каждый из которых содержит поле `,(0,c.jsx)(t.code,{children:`status`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const status = GitRead.getListPorcelain()
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
`,(0,c.jsx)(t.h3,{id:`getlistunique`,children:(0,c.jsx)(t.code,{children:`getListUnique`})}),`
`,(0,c.jsxs)(t.p,{children:[`Выполняет слияние списка отслеживаемых файлов (`,(0,c.jsx)(t.code,{children:`getList`}),`) и текущего статуса (`,(0,c.jsx)(t.code,{children:`getListPorcelain`}),`). Гарантирует, что каждый файл представлен только один раз, отдавая приоритет информации о статусе, если она доступна.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`filter: (file: string) => boolean`}),` — обязательная функция обратного вызова для фильтрации объединенного списка.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`GitFileList`}),` — дедуплицированный список файлов, объединяющий базовое и измененное состояния.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const unique = GitRead.getListUnique((f) => f.includes('src/'))
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
`,(0,c.jsx)(t.h3,{id:`getlistbydirectory`,children:(0,c.jsx)(t.code,{children:`getListByDirectory`})}),`
`,(0,c.jsxs)(t.p,{children:[`Удобный метод для получения списков уникальных файлов специально из заданной директории, отфильтрованный так, чтобы включать только файлы `,(0,c.jsx)(t.code,{children:`.ts`}),` и исключать файлы `,(0,c.jsx)(t.code,{children:`.test.ts`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`directory: string | RegExp`}),` — целевой путь к директории или шаблон для сопоставления с путями файлов.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`GitFileList`})]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const classes = GitRead.getListByDirectory('/classes/')
/**
 * [
 *   {
 *     path: 'classes/GitRead.ts',
 *     ...
 *   }
 * ]
 */
`})}),`
`,(0,c.jsx)(t.h2,{id:`вспомогательные-методы`,children:`Вспомогательные методы`}),`
`,(0,c.jsx)(t.h3,{id:`getclasseslist`,children:(0,c.jsx)(t.code,{children:`getClassesList`})}),`
`,(0,c.jsxs)(t.p,{children:[`Получает все TypeScript файлы (кроме тестов) в директории `,(0,c.jsx)(t.code,{children:`/classes/`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const classes = GitRead.getClassesList()
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
`,(0,c.jsx)(t.h3,{id:`getfunctionslist`,children:(0,c.jsx)(t.code,{children:`getFunctionsList`})}),`
`,(0,c.jsxs)(t.p,{children:[`Получает все TypeScript файлы (кроме тестов) в директории `,(0,c.jsx)(t.code,{children:`/functions/`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const funcs = GitRead.getFunctionsList()
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
`,(0,c.jsx)(t.h3,{id:`getfilespath`,children:(0,c.jsx)(t.code,{children:`getFilesPath`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает массив всех отслеживаемых путей файлов в репозитории.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const paths = GitRead.getFilesPath()
// ['src/index.ts', 'package.json', ...]
`})}),`
`,(0,c.jsx)(t.h3,{id:`getfilesporcelain`,children:(0,c.jsx)(t.code,{children:`getFilesPorcelain`})}),`
`,(0,c.jsxs)(t.p,{children:[`Возвращает необработанный вывод `,(0,c.jsx)(t.code,{children:`git status --porcelain`}),` в виде массива строк.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const porcelain = GitRead.getFilesPorcelain()
// [' M src/index.ts', '?? new-file.txt']
`})}),`
`,(0,c.jsx)(t.h3,{id:`getfiledate`,children:(0,c.jsx)(t.code,{children:`getFileDate`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает дату последнего коммита для конкретного файла.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`filePath: string`}),` — путь к целевому файлу.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const date = GitRead.getFileDate('src/index.ts')
// '2024-03-20 12:00:00 +0300'
`})}),`
`,(0,c.jsx)(t.h3,{id:`getdirprefix`,children:(0,c.jsx)(t.code,{children:`getDirPrefix`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает префикс текущей директории внутри репозитория Git.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const prefix = GitRead.getDirPrefix()
// 'packages/scripts/'
`})}),`
`,(0,c.jsx)(t.h3,{id:`getdate`,children:(0,c.jsx)(t.code,{children:`getDate`})}),`
`,(0,c.jsx)(t.p,{children:`Форматирует строку даты в стандартизированный формат.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`date?: string`}),` — строка даты для форматирования (опционально).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const formatted = GitRead.getDate('2024-03-20')
// '2024-03-20 00:00:00'
`})}),`
`,(0,c.jsx)(t.h3,{id:`filterbydirectory`,children:(0,c.jsx)(t.code,{children:`filterByDirectory`})}),`
`,(0,c.jsxs)(t.p,{children:[`Фильтрует `,(0,c.jsx)(t.code,{children:`GitFileList`}),`, оставляя только элементы, принадлежащие текущему префиксу директории.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: GitFileList`}),` — список файлов для фильтрации.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const filtered = GitRead.filterByDirectory(myList)
`})}),`
`,(0,c.jsx)(t.h3,{id:`mergeunique`,children:(0,c.jsx)(t.code,{children:`mergeUnique`})}),`
`,(0,c.jsxs)(t.p,{children:[`Объединяет два массива `,(0,c.jsx)(t.code,{children:`GitFileList`}),`, гарантируя уникальность каждого пути файла.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listA: GitFileList`}),` — первый список.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listB: GitFileList`}),` — второй список.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const merged = GitRead.mergeUnique(list1, list2)
`})}),`
`,(0,c.jsx)(t.h3,{id:`splitpath`,children:(0,c.jsx)(t.code,{children:`splitPath`})}),`
`,(0,c.jsx)(t.p,{children:`Разделяет строку пути к файлу на массив сегментов пути.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — путь для разделения.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const parts = GitRead.splitPath('src/classes/GitRead.ts')
// ['src', 'classes', 'GitRead.ts']
`})}),`
`,(0,c.jsx)(t.h2,{id:`структуры-данных`,children:`Структуры данных`}),`
`,(0,c.jsx)(t.h3,{id:`gitfileitem`,children:(0,c.jsx)(t.code,{children:`GitFileItem`})}),`
`,(0,c.jsx)(t.p,{children:`Основной объект, представляющий состояние файла в Git:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — относительный путь к файлу.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pathByOS: string[]`}),` — путь к файлу, разделенный на сегменты независимо от ОС.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pathFull: string`}),` — полный путь, включая любые префиксы директорий репозитория.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`date: string`}),` — дата последнего изменения (стандартизированная).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`status?: GitStatus`}),` — код статуса Git (например, `,(0,c.jsx)(t.code,{children:`'M'`}),`, `,(0,c.jsx)(t.code,{children:`'A'`}),`, `,(0,c.jsx)(t.code,{children:`'??'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`gitstatus`,children:(0,c.jsx)(t.code,{children:`GitStatus`})}),`
`,(0,c.jsx)(t.p,{children:`Перечисление, представляющее распространенные коды статуса Git:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`MODIFIED`}),` (`,(0,c.jsx)(t.code,{children:`'M'`}),`) — существующий файл был изменен.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ADDED`}),` (`,(0,c.jsx)(t.code,{children:`'A'`}),`) — новый файл добавлен в индекс.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`DELETED`}),` (`,(0,c.jsx)(t.code,{children:`'D'`}),`) — файл был удален.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`UNTRACKED`}),` (`,(0,c.jsx)(t.code,{children:`'??'`}),`) — новый файл, еще не отслеживаемый Git.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`RENAMED`}),` (`,(0,c.jsx)(t.code,{children:`'R'`}),`) — файл был перемещен или переименован.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`получение-измененных-файлов`,children:`Получение измененных файлов`}),`
`,(0,c.jsx)(t.p,{children:`Получение списка файлов, которые были изменены или добавлены в репозиторий.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GitRead } from '@dxtmisha/scripts'

const modifiedFiles = GitRead.getListPorcelain()
console.log(modifiedFiles)
`})}),`
`,(0,c.jsx)(t.h3,{id:`фильтрация-классов`,children:`Фильтрация классов`}),`
`,(0,c.jsx)(t.p,{children:`Получение только файлов классов для конкретного модуля.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const componentClasses = GitRead.getListUnique(
  (file) => file.includes('packages/ui/src/classes/')
)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};