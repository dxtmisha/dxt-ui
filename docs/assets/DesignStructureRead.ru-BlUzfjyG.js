import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/DesignStructureRead - Разрешитель зависимостей свойств"}),`
`,n.jsx(e.h1,{id:"класс-designstructureread",children:"Класс DesignStructureRead"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"DesignStructureRead"})," является основным парсером для разрешения зависимостей и состояний между свойствами компонентов. Он преобразует сырые токены дизайн-системы в структурированный список свойств, определяя, какие элементы должны быть представлены как публичные пропсы, а какие представляют собой внутренние интерактивные состояния или зависимости связанных CSS-классов."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Обнаружение состояний"})," — идентифицирует токены свойств, определенные как интерактивные состояния (например, ",n.jsx(e.code,{children:":hover"}),", ",n.jsx(e.code,{children:":active"}),"), и выстраивает цепочки их зависимостей."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Разрешение связанных классов"})," — обнаруживает и разрешает ссылки на внешние классы компонентов для сохранения иерархии BEM."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Компиляция значений"})," — агрегирует все возможные значения для свойства, включая те, что получены из вложенных структур состояний, для генерации точных объединений TypeScript."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Валидация пропсов"})," — фильтрует и проверяет, какие токены свойств имеют право на экспорт в качестве публичных свойств компонента на основе системных правил."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Синтез независимых значений"})," — автоматически внедряет булевы флаги для свойств, у которых отсутствуют явные токены значений, но требуется отслеживание состояния."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(e.p,{children:"Для инициализации читателя свойств укажите базовое имя компонента. Класс автоматически разрешит метаданные компонента через свою родительскую абстракцию и запустит многоэтапный конвейер парсинга."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"component: string"})," — идентификатор компонента для анализа (например, ",n.jsx(e.code,{children:"'input'"}),")."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { DesignStructureRead } from '@dxtmisha/scripts'

const reader = new DesignStructureRead('button')
const structureList = reader.get()
const states = reader.getStates()
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"информация",children:"Информация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"get(): DesignStructureList"})," — возвращает полностью разрешенный линейный список свойств компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getStates(): DesignStructureStateList"})," — возвращает иерархический список состояний и связанных с ними зависимостей свойств."]}),`
`]}),`
`,n.jsx(e.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(e.h3,{id:"конвейер-парсинга",children:"Конвейер парсинга"}),`
`,n.jsxs(e.p,{children:["При создании экземпляра ",n.jsx(e.code,{children:"DesignStructureRead"})," выполняет серию трансформаций для построения финальной модели данных:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Маппинг состояний (",n.jsx(e.code,{children:"makeState"}),")"]}),": рекурсивно обходит дерево свойств для изоляции токенов, помеченных как ",n.jsx(e.code,{children:"state"})," или ",n.jsx(e.code,{children:"linkClass"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Инициализация основной структуры (",n.jsx(e.code,{children:"makeMain"}),")"]}),": создает базовую запись для каждого идентифицированного пропса, нормализуя имена и метаданные."]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Извлечение базовых значений (",n.jsx(e.code,{children:"makeValue"}),")"]}),": разрешает прямые непосредственные значения, назначенные каждому свойству."]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Расширение значений (",n.jsx(e.code,{children:"makeValueAll"}),")"]}),": агрегирует значения из всех возможных интерактивных состояний, чтобы API свойств охватывало все логические случаи."]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Дедупликация (",n.jsx(e.code,{children:"makeValueUnique"}),")"]}),": нормализует списки значений, удаляя дубликаты и обеспечивая наличие булевых фолбэков там, где это необходимо."]}),`
`]}),`
`,n.jsx(e.h3,{id:"обработка-связанных-классов",children:"Обработка связанных классов"}),`
`,n.jsxs(e.p,{children:["Специальная логика применяется, когда свойство ссылается на класс другого компонента (",n.jsx(e.code,{children:"linkClass"}),"). Разрешитель:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Идентифицирует ссылку"}),": находит конкретную ссылку на переменную в глобальных метаданных дизайна."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Трансформация имени"}),": преобразует ссылку в стандартизированное имя класса BEM (например, ",n.jsx(e.code,{children:"theme-button--primary"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Рекурсивное разрешение"}),": запускает цикл подпарсинга для связанного компонента, чтобы гарантировать учет его свойств и состояний в дереве зависимостей основного компонента."]}),`
`]})]})}function o(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{o as default};
