import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/scripts/Classes/GitRead - Чтение Git репозитория"}),`
`,n.jsx(s.h1,{id:"класс-gitread",children:"Класс GitRead"}),`
`,n.jsx(s.p,{children:"Мощный утилитный класс для взаимодействия с Git-репозиторием. Предоставляет высокоуровневые методы для получения списков файлов, дат коммитов, информации о статусе в формате porcelain и многого другого."}),`
`,n.jsx(s.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Поиск файлов"})," — получает все отслеживаемые файлы в текущем репозитории или отфильтрованные по конкретным директориям."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Отчеты о статусе"})," — анализирует ",n.jsx(s.code,{children:"git status --porcelain"})," для идентификации измененных, добавленных или неотслеживаемых файлов."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"История коммитов"})," — извлекает дату последнего изменения для отдельных файлов."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Управление путями"})," — обрабатывает относительные пути и префиксы директорий внутри структуры репозитория."]}),`
`]}),`
`,n.jsx(s.h2,{id:"основные-методы",children:"Основные методы"}),`
`,n.jsx(s.h3,{id:"getlist",children:n.jsx(s.code,{children:"getList"})}),`
`,n.jsx(s.p,{children:"Возвращает упрощенный список всех отслеживаемых файлов в HEAD репозитория, включая базовые метаданные, такие как даты изменения."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"filter?: (file: string) => boolean"})," — функция обратного вызова для включения только тех файлов, которые соответствуют определенным критериям."]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"GitFileList"})," — массив объектов ",n.jsx(s.code,{children:"GitFileItem"}),", представляющих отслеживаемые файлы."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Пример:"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`const files = GitRead.getList((f) => f.endsWith('.ts'))
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
`,n.jsx(s.h3,{id:"getlistporcelain",children:n.jsx(s.code,{children:"getListPorcelain"})}),`
`,n.jsxs(s.p,{children:["Получает текущий статус файлов в репозитории, используя формат ",n.jsx(s.code,{children:"--porcelain"}),". Сюда входят изменения в рабочем дереве и индексе."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"filter?: (file: string) => boolean"})," — функция обратного вызова для фильтрации результирующего списка статусов."]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"GitFileList"})," — массив объектов ",n.jsx(s.code,{children:"GitFileItem"}),", каждый из которых содержит поле ",n.jsx(s.code,{children:"status"}),"."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Пример:"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`const status = GitRead.getListPorcelain()
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
`,n.jsx(s.h3,{id:"getlistunique",children:n.jsx(s.code,{children:"getListUnique"})}),`
`,n.jsxs(s.p,{children:["Выполняет слияние списка отслеживаемых файлов (",n.jsx(s.code,{children:"getList"}),") и текущего статуса (",n.jsx(s.code,{children:"getListPorcelain"}),"). Гарантирует, что каждый файл представлен только один раз, отдавая приоритет информации о статусе, если она доступна."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"filter: (file: string) => boolean"})," — обязательная функция обратного вызова для фильтрации объединенного списка."]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"GitFileList"})," — дедуплицированный список файлов, объединяющий базовое и измененное состояния."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Пример:"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`const unique = GitRead.getListUnique((f) => f.includes('src/'))
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
`,n.jsx(s.h3,{id:"getlistbydirectory",children:n.jsx(s.code,{children:"getListByDirectory"})}),`
`,n.jsxs(s.p,{children:["Удобный метод для получения списков уникальных файлов специально из заданной директории, отфильтрованный так, чтобы включать только файлы ",n.jsx(s.code,{children:".ts"})," и исключать файлы ",n.jsx(s.code,{children:".test.ts"}),"."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"directory: string | RegExp"})," — целевой путь к директории или шаблон для сопоставления с путями файлов."]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"GitFileList"})]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Пример:"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`const classes = GitRead.getListByDirectory('/classes/')
/**
 * [
 *   {
 *     path: 'classes/GitRead.ts',
 *     ...
 *   }
 * ]
 */
`})}),`
`,n.jsx(s.h2,{id:"вспомогательные-методы",children:"Вспомогательные методы"}),`
`,n.jsx(s.h3,{id:"getclasseslist",children:n.jsx(s.code,{children:"getClassesList"})}),`
`,n.jsxs(s.p,{children:["Получает все TypeScript файлы (кроме тестов) в директории ",n.jsx(s.code,{children:"/classes/"}),"."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Пример:"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`const classes = GitRead.getClassesList()
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
`,n.jsx(s.h3,{id:"getfunctionslist",children:n.jsx(s.code,{children:"getFunctionsList"})}),`
`,n.jsxs(s.p,{children:["Получает все TypeScript файлы (кроме тестов) в директории ",n.jsx(s.code,{children:"/functions/"}),"."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Пример:"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`const funcs = GitRead.getFunctionsList()
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
`,n.jsx(s.h2,{id:"структуры-данных",children:"Структуры данных"}),`
`,n.jsx(s.h3,{id:"gitfileitem",children:n.jsx(s.code,{children:"GitFileItem"})}),`
`,n.jsx(s.p,{children:"Основной объект, представляющий состояние файла в Git:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"path: string"})," — относительный путь к файлу."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"pathByOS: string[]"})," — путь к файлу, разделенный на сегменты независимо от ОС."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"pathFull: string"})," — полный путь, включая любые префиксы директорий репозитория."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"date: string"})," — дата последнего изменения (стандартизированная)."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"status?: GitStatus"})," — код статуса Git (например, ",n.jsx(s.code,{children:"'M'"}),", ",n.jsx(s.code,{children:"'A'"}),", ",n.jsx(s.code,{children:"'??'"}),")."]}),`
`]}),`
`,n.jsx(s.h3,{id:"gitstatus",children:n.jsx(s.code,{children:"GitStatus"})}),`
`,n.jsx(s.p,{children:"Перечисление, представляющее распространенные коды статуса Git:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"MODIFIED"})," (",n.jsx(s.code,{children:"'M'"}),") — существующий файл был изменен."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"ADDED"})," (",n.jsx(s.code,{children:"'A'"}),") — новый файл добавлен в индекс."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"DELETED"})," (",n.jsx(s.code,{children:"'D'"}),") — файл был удален."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"UNTRACKED"})," (",n.jsx(s.code,{children:"'??'"}),") — новый файл, еще не отслеживаемый Git."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"RENAMED"})," (",n.jsx(s.code,{children:"'R'"}),") — файл был перемещен или переименован."]}),`
`]}),`
`,n.jsx(s.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(s.h3,{id:"получение-измененных-файлов",children:"Получение измененных файлов"}),`
`,n.jsx(s.p,{children:"Получение списка файлов, которые были изменены или добавлены в репозиторий."}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { GitRead } from '@dxtmisha/scripts'

const modifiedFiles = GitRead.getListPorcelain()
console.log(modifiedFiles)
`})}),`
`,n.jsx(s.h3,{id:"фильтрация-классов",children:"Фильтрация классов"}),`
`,n.jsx(s.p,{children:"Получение только файлов классов для конкретного модуля."}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`const componentClasses = GitRead.getListUnique(
  (file) => file.includes('packages/ui/src/classes/')
)
`})})]})}function o(e={}){const{wrapper:s}={...c(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{o as default};
