import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/StorageCallback - Обратные вызовы хранилища`}),`
`,(0,c.jsx)(n.h1,{id:`класс-storagecallback`,children:`Класс StorageCallback`}),`
`,(0,c.jsx)(n.p,{children:`Вспомогательный класс для управления группами функций обратного вызова, связанных с конкретными ключами хранилища. Он позволяет нескольким компонентам или функциям реагировать на изменения или триггеры хранилища согласованно и асинхронно.`}),`
`,(0,c.jsx)(n.h2,{id:`основные-особенности`,children:`Основные особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Именованные экземпляры`}),` — реализует паттерн, похожий на синглтон, где экземпляры извлекаются по имени и группе, гарантируя, что разные части приложения используют один и тот же список обратных вызовов для одного и того же ресурса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Разделение по группам`}),` — позволяет разделять списки обратных вызовов по группам (например, 'main', 'global', 'local'), предотвращая конфликты имен между различными модулями.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Асинхронное выполнение`}),` — поддерживает асинхронные обратные вызовы и выполняет их последовательно в процессе вызова `,(0,c.jsx)(n.code,{children:`run`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Отслеживание состояния загрузки`}),` — предоставляет встроенный флаг `,(0,c.jsx)(n.code,{children:`loading`}),`, который автоматически переключается во время фазы выполнения обратных вызовов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`StorageCallback(name, group)`}),` или используйте статический метод `,(0,c.jsx)(n.code,{children:`getInstance(name, group)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`ограничения-типов-generics`,children:`Ограничения типов (Generics)`}),`
`,(0,c.jsx)(n.p,{children:`Для обеспечения строгой типизации класс поддерживает следующие параметры:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T = any`}),` — тип данных, передаваемых в обратные вызовы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Callback = (value: T) => void | Promise<void>`}),` — структура функции обратного вызова.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — уникальный идентификатор для записи в хранилище.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`group: string = 'main'`}),` — необязательная категория для предотвращения конфликтов имен.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StorageCallback } from '@dxtmisha/functional-basic'

// 1. Простая инициализация (группа по умолчанию 'main')
const storage = new StorageCallback('user-data')

// 2. Использование статического метода getInstance
const sharedStorage = StorageCallback.getInstance('settings', 'global')

// 3. Использование generic-типов для строгой типизации
const numberStorage = new StorageCallback<number>('counter')
numberStorage.addCallback((val) => console.log(val + 1))
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`информация`,children:`Информация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(): string`}),` — возвращает имя экземпляра хранилища.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLoading(): boolean`}),` — возвращает текущее состояние загрузки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLoading(): boolean`}),` — возвращает текущее состояние загрузки (аналог `,(0,c.jsx)(n.code,{children:`isLoading`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addCallback(callback: Callback, isOnce?: boolean): this`}),` — добавляет новый обратный вызов в список выполнения. При `,(0,c.jsx)(n.code,{children:`isOnce: true`}),` callback будет удален после первого выполнения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`removeCallback(callback: Callback): this`}),` — удаляет конкретный обратный вызов из списка.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`управление-процессом-control`,children:`Управление процессом (Control)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`preparation(): this`}),` — подготавливает состояние перед выполнением (устанавливает `,(0,c.jsx)(n.code,{children:`loading`}),` в `,(0,c.jsx)(n.code,{children:`true`}),`). Используется вручную при запуске асинхронных операций.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`run(value: T): Promise<this>`}),` — последовательно выполняет все обратные вызовы с переданным значением. В начале выполнения устанавливает `,(0,c.jsx)(n.code,{children:`loading`}),` в `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры-использования`,children:`Примеры использования`}),`
`,(0,c.jsx)(n.h3,{id:`ручное-управление-состоянием-загрузки`,children:`Ручное управление состоянием загрузки`}),`
`,(0,c.jsxs)(n.p,{children:[`Если данные загружаются асинхронно из внешнего источника (например, Figma storage), вы можете управлять состоянием `,(0,c.jsx)(n.code,{children:`loading`}),` вручную.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const storage = new StorageCallback('figma-data')

// 1. Проверяем, не идет ли уже загрузка
if (!storage.isLoading()) {
  // 2. Устанавливаем состояние загрузки
  storage.preparation()
  
  // 3. Запрашиваем данные
  fetchFromFigma((data) => {
    // 4. Выполняем колбэки (run сбросит loading в false)
    storage.run(data)
  })
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`одноразовый-обратный-вызов`,children:`Одноразовый обратный вызов`}),`
`,(0,c.jsxs)(n.p,{children:[`Если вам нужно, чтобы функция сработала только один раз (например, для начальной загрузки данных), используйте флаг `,(0,c.jsx)(n.code,{children:`isOnce`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const storage = new StorageCallback('initial-data')

storage.addCallback((data) => {
  console.log('Выполнено один раз:', data)
}, true)

await storage.run('update 1') // 'Выполнено один раз: update 1'
await storage.run('update 2') // (ничего не выводится, callback удален)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};