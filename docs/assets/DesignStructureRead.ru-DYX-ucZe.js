import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/DesignStructureRead - Разрешитель зависимостей свойств`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designstructureread`,children:`Класс DesignStructureRead`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignStructureRead`}),` является основным парсером для разрешения зависимостей и состояний между свойствами компонентов. Он преобразует сырые токены дизайн-системы в структурированный список свойств, определяя, какие элементы должны быть представлены как публичные пропсы, а какие представляют собой внутренние интерактивные состояния или зависимости связанных CSS-классов.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Обнаружение состояний`}),` — идентифицирует токены свойств, определенные как интерактивные состояния (например, `,(0,c.jsx)(n.code,{children:`:hover`}),`, `,(0,c.jsx)(n.code,{children:`:active`}),`), и выстраивает цепочки их зависимостей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Разрешение связанных классов`}),` — обнаруживает и разрешает ссылки на внешние классы компонентов для сохранения иерархии BEM.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Компиляция значений`}),` — агрегирует все возможные значения для свойства, включая те, что получены из вложенных структур состояний, для генерации точных объединений TypeScript.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Валидация пропсов`}),` — фильтрует и проверяет, какие токены свойств имеют право на экспорт в качестве публичных свойств компонента на основе системных правил.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синтез независимых значений`}),` — автоматически внедряет булевы флаги для свойств, у которых отсутствуют явные токены значений, но требуется отслеживание состояния.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Для инициализации читателя свойств укажите базовое имя компонента. Класс автоматически разрешит метаданные компонента через свою родительскую абстракцию и запустит многоэтапный конвейер парсинга.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component: string`}),` — идентификатор компонента для анализа (например, `,(0,c.jsx)(n.code,{children:`'input'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignStructureRead } from '@dxtmisha/scripts'

const reader = new DesignStructureRead('button')
const structureList = reader.get()
const states = reader.getStates()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`информация`,children:`Информация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): DesignStructureList`}),` — возвращает полностью разрешенный линейный список свойств компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStates(): DesignStructureStateList`}),` — возвращает иерархический список состояний и связанных с ними зависимостей свойств.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`конвейер-парсинга`,children:`Конвейер парсинга`}),`
`,(0,c.jsxs)(n.p,{children:[`При создании экземпляра `,(0,c.jsx)(n.code,{children:`DesignStructureRead`}),` выполняет серию трансформаций для построения финальной модели данных:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Маппинг состояний (`,(0,c.jsx)(n.code,{children:`makeState`}),`)`]}),`: рекурсивно обходит дерево свойств для изоляции токенов, помеченных как `,(0,c.jsx)(n.code,{children:`state`}),` или `,(0,c.jsx)(n.code,{children:`linkClass`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Инициализация основной структуры (`,(0,c.jsx)(n.code,{children:`makeMain`}),`)`]}),`: создает базовую запись для каждого идентифицированного пропса, нормализуя имена и метаданные.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Извлечение базовых значений (`,(0,c.jsx)(n.code,{children:`makeValue`}),`)`]}),`: разрешает прямые непосредственные значения, назначенные каждому свойству.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Расширение значений (`,(0,c.jsx)(n.code,{children:`makeValueAll`}),`)`]}),`: агрегирует значения из всех возможных интерактивных состояний, чтобы API свойств охватывало все логические случаи.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Дедупликация (`,(0,c.jsx)(n.code,{children:`makeValueUnique`}),`)`]}),`: нормализует списки значений, удаляя дубликаты и обеспечивая наличие булевых фолбэков там, где это необходимо.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`обработка-связанных-классов`,children:`Обработка связанных классов`}),`
`,(0,c.jsxs)(n.p,{children:[`Специальная логика применяется, когда свойство ссылается на класс другого компонента (`,(0,c.jsx)(n.code,{children:`linkClass`}),`). Разрешитель:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Идентифицирует ссылку`}),`: находит конкретную ссылку на переменную в глобальных метаданных дизайна.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Трансформация имени`}),`: преобразует ссылку в стандартизированное имя класса BEM (например, `,(0,c.jsx)(n.code,{children:`theme-button--primary`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Рекурсивное разрешение`}),`: запускает цикл подпарсинга для связанного компонента, чтобы гарантировать учет его свойств и состояний в дереве зависимостей основного компонента.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};