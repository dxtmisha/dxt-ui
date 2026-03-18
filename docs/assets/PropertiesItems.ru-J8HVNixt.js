import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/PropertiesItems - Координатор дерева свойств"}),`
`,e.jsx(n.h1,{id:"класс-propertiesitems",children:"Класс PropertiesItems"}),`
`,e.jsxs(n.p,{children:["Класс ",e.jsx(n.code,{children:"PropertiesItems"})," выступает в качестве центрального координатора для навигации и поиска по сложным деревьям свойств дизайна. Он предоставляет уровень абстракции, который скрывает сложности обхода дерева, декодирования индексов и фильтрации по конкретным дизайнам. Если вам нужно найти конкретный токен по его пути через точку, выполнить глобальный поиск по категориям или запустить глубокие рекурсивные операции, ",e.jsx(n.code,{children:"PropertiesItems"})," служит основным движком для обнаружения свойств."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Фокусировка на дизайне"})," — позволяет фильтровать всю область взаимодействия со свойствами до одной темы дизайна или кластера компонентов."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Глубокое разрешение метаданных"})," — преобразует простые строки индексов (например, ",e.jsx(n.code,{children:"theme.colors.primary"}),") в содержательные объекты информации с полным родительским контекстом."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Унифицированный движок обхода"})," — предоставляет согласованные механизмы ",e.jsx(n.code,{children:"each"})," и ",e.jsx(n.code,{children:"find"})," как для поверхностного, так и для глубокого рекурсивного исследования иерархии токенов."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Семантическая трансляция путей"})," — автоматически обрабатывает нормализацию путей, преобразование kebab-to-camelCase и поддержку специальных символов ссылок, таких как ",e.jsx(n.code,{children:"?"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Фильтрация по категориям и переменным"})," — включает оптимизированные методы поиска для извлечения подмножеств токенов на основе их функциональной категории или типа переменной."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Для инициализации объекта вызовите конструктор ",e.jsx(n.code,{children:"PropertiesItems(properties)"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"properties: PropertyList"})," — полный список свойств (дерево токенов) для управления."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { PropertiesItems } from '@dxtmisha/scripts'

// 1. Инициализация менеджера с деревом токенов
const manager = new PropertiesItems(allTokenData)

// 2. (Опционально) Установка фокуса на конкретный дизайн
manager.setFocusDesign('my-theme')

// 3. Получение отфильтрованной структуры
const currentTokens = manager.get()
`})}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(): PropertyList"})," — возвращает текущую структуру свойств (поддерживает фильтрацию фокуса)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDesigns(): string[]"})," — возвращает список доступных названий дизайна."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItem(index): PropertyItem"})," — извлекает конкретную запись свойства по её индексу."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getInfo(index): PropertyItemsItem"})," — разрешает полные метаданные и иерархию родителей для данного индекса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getKeys(index): string[]"})," — декодирует строку пути в нормализованные сегменты ключей."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getName(name, item): string"})," — возвращает отображаемое имя свойства с учетом переименований."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"each(callback, property?): T[]"})," — выполняет глубокий рекурсивный обход дерева."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"find(callback): PropertyItemsItem[]"})," — ищет записи, соответствующие пользовательским условиям."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"findCategory(category): PropertyItemsItem[]"})," — извлекает токены, относящиеся к специфическим функциональным категориям."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setFocusDesign(design): this"})," — ограничивает область операций конкретным дизайном."]}),`
`]}),`
`,e.jsx(n.h2,{id:"операции",children:"Операции"}),`
`,e.jsx(n.h3,{id:"поток-обнаружения-метаданных-и-обхода",children:"Поток обнаружения метаданных и обхода"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"PropertiesItems"})," координирует несколько сложных логических потоков:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Декодирование индекса"}),": При запросе индекса вида ",e.jsx(n.code,{children:"theme.button-main.color"})," класс нормализует сегменты в camelCase и сопоставляет их с вложенными объектами ",e.jsx(n.code,{children:"value"})," в дереве."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Управление контекстом пути"}),": Во время обхода (",e.jsx(n.code,{children:"each"}),") класс поддерживает стек ",e.jsx(n.code,{children:"parents"}),", позволяя каждому обнаруженному узлу точно знать свое место в иерархии (критично для генерации CSS-переменных или путей документации)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Изоляция дизайна"}),": Вызывая ",e.jsx(n.code,{children:"setFocusDesign()"}),", пользователи могут переключать «вид» всего дерева. Последующие вызовы ",e.jsx(n.code,{children:"get()"})," или ",e.jsx(n.code,{children:"each()"})," будут автоматически игнорировать дизайны, которые НЕ являются сфокусированным или общим ",e.jsx(n.code,{children:"_constructor"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Нормализация ссылок"}),": Методы типа ",e.jsx(n.code,{children:"getLink()"})," обрабатывают трансформацию устаревших символов путей (таких как ",e.jsx(n.code,{children:"??"})," и ",e.jsx(n.code,{children:"?"}),") в абсолютные, полные индексы свойств, добавляя текущий контекст дизайна и компонента перед ними."]}),`
`]})]})}function j(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{j as default};
