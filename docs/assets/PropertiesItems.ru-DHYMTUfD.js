import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesItems - Координатор дерева свойств`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiesitems`,children:`Класс PropertiesItems`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesItems`}),` выступает в качестве центрального координатора для навигации и поиска по сложным деревьям свойств дизайна. Он предоставляет уровень абстракции, который скрывает сложности обхода дерева, декодирования индексов и фильтрации по конкретным дизайнам. Если вам нужно найти конкретный токен по его пути через точку, выполнить глобальный поиск по категориям или запустить глубокие рекурсивные операции, `,(0,c.jsx)(n.code,{children:`PropertiesItems`}),` служит основным движком для обнаружения свойств.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Фокусировка на дизайне`}),` — позволяет фильтровать всю область взаимодействия со свойствами до одной темы дизайна или кластера компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глубокое разрешение метаданных`}),` — преобразует простые строки индексов (например, `,(0,c.jsx)(n.code,{children:`theme.colors.primary`}),`) в содержательные объекты информации с полным родительским контекстом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Унифицированный движок обхода`}),` — предоставляет согласованные механизмы `,(0,c.jsx)(n.code,{children:`each`}),` и `,(0,c.jsx)(n.code,{children:`find`}),` как для поверхностного, так и для глубокого рекурсивного исследования иерархии токенов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Семантическая трансляция путей`}),` — автоматически обрабатывает нормализацию путей, преобразование kebab-to-camelCase и поддержку специальных символов ссылок, таких как `,(0,c.jsx)(n.code,{children:`?`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Фильтрация по категориям и переменным`}),` — включает оптимизированные методы поиска для извлечения подмножеств токенов на основе их функциональной категории или типа переменной.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`PropertiesItems(properties)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties: PropertyList`}),` — полный список свойств (дерево токенов) для управления.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesItems } from '@dxtmisha/scripts'

// 1. Инициализация менеджера с деревом токенов
const manager = new PropertiesItems(allTokenData)

// 2. (Опционально) Установка фокуса на конкретный дизайн
manager.setFocusDesign('my-theme')

// 3. Получение отфильтрованной структуры
const currentTokens = manager.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): PropertyList`}),` — возвращает текущую структуру свойств (поддерживает фильтрацию фокуса).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDesigns(): string[]`}),` — возвращает список доступных названий дизайна.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(index): PropertyItem`}),` — извлекает конкретную запись свойства по её индексу.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getInfo(index): PropertyItemsItem`}),` — разрешает полные метаданные и иерархию родителей для данного индекса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getKeys(index): string[]`}),` — декодирует строку пути в нормализованные сегменты ключей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name, item): string`}),` — возвращает отображаемое имя свойства с учетом переименований.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`each(callback, property?): T[]`}),` — выполняет глубокий рекурсивный обход дерева.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`find(callback): PropertyItemsItem[]`}),` — ищет записи, соответствующие пользовательским условиям.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findCategory(category): PropertyItemsItem[]`}),` — извлекает токены, относящиеся к специфическим функциональным категориям.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setFocusDesign(design): this`}),` — ограничивает область операций конкретным дизайном.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`поток-обнаружения-метаданных-и-обхода`,children:`Поток обнаружения метаданных и обхода`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesItems`}),` координирует несколько сложных логических потоков:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Декодирование индекса`}),`: При запросе индекса вида `,(0,c.jsx)(n.code,{children:`theme.button-main.color`}),` класс нормализует сегменты в camelCase и сопоставляет их с вложенными объектами `,(0,c.jsx)(n.code,{children:`value`}),` в дереве.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление контекстом пути`}),`: Во время обхода (`,(0,c.jsx)(n.code,{children:`each`}),`) класс поддерживает стек `,(0,c.jsx)(n.code,{children:`parents`}),`, позволяя каждому обнаруженному узлу точно знать свое место в иерархии (критично для генерации CSS-переменных или путей документации).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Изоляция дизайна`}),`: Вызывая `,(0,c.jsx)(n.code,{children:`setFocusDesign()`}),`, пользователи могут переключать «вид» всего дерева. Последующие вызовы `,(0,c.jsx)(n.code,{children:`get()`}),` или `,(0,c.jsx)(n.code,{children:`each()`}),` будут автоматически игнорировать дизайны, которые НЕ являются сфокусированным или общим `,(0,c.jsx)(n.code,{children:`_constructor`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Нормализация ссылок`}),`: Методы типа `,(0,c.jsx)(n.code,{children:`getLink()`}),` обрабатывают трансформацию устаревших символов путей (таких как `,(0,c.jsx)(n.code,{children:`??`}),` и `,(0,c.jsx)(n.code,{children:`?`}),`) в абсолютные, полные индексы свойств, добавляя текущий контекст дизайна и компонента перед ними.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};