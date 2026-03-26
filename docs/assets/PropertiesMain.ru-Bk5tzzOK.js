import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/PropertiesMain - Оркестратор глобальных токенов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiesmain`,children:`Класс PropertiesMain`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesMain`}),` — это высокоуровневый оркестратор, отвечающий за синтез глобального дерева токенов дизайна. Он управляет всем жизненным циклом «основных» (main) токенов — от обнаружения в файловой системе и необработанного чтения до многоэтапной семантической трансформации и иерархического слияния. Абстрагируя сложности модульной загрузки свойств, он предоставляет единую точку входа для получения полностью разрешенных и стандартизированных конфигураций дизайна.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматизированная оркестровка конвейера`}),` — объединяет несколько утилит (`,(0,c.jsx)(n.code,{children:`Import`}),`, `,(0,c.jsx)(n.code,{children:`Standard`}),`, `,(0,c.jsx)(n.code,{children:`Convector`}),`) в единую последовательность загрузки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Дизайн-центричное обнаружение`}),` — использует `,(0,c.jsx)(n.code,{children:`PropertiesPath`}),` для автоматического поиска и обработки токенов для всех активных тем дизайна.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамическое слияние конфигураций`}),` — поддерживает «горячую» замену или наслоение настроек на глобальное дерево через глубокую рекурсивную синхронизацию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Обеспечение структурной целостности`}),` — автоматически применяет структурную обертку и разделители, чтобы гарантировать правильную категоризацию и доступность токенов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синхронизация внутреннего состояния`}),` — сохраняет внутренние флаги движка (свойства, начинающиеся с `,(0,c.jsx)(n.code,{children:`_`}),`) во время обновления конфигурации.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`PropertiesMain(path)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesPath`}),` — экземпляр класса, отвечающего за обнаружение в файловой системе и разрешение путей.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesMain, PropertiesPath } from '@dxtmisha/scripts'

// 1. Инициализация необходимого менеджера путей
const pathManager = new PropertiesPath(['packages', 'tokens'])

// 2. Создание оркестратора основных токенов
const main = new PropertiesMain(pathManager)

// 3. Разрешение полного глобального дерева свойств
const globalTokens = main.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): PropertyList`}),` — выполняет полный конвейер трансформации и возвращает все разрешенные основные токены.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBySettings(list): PropertyList`}),` — объединяет кастомный кластер настроек с глобальным деревом токенов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`глобальный-конвейер-трансформации`,children:`Глобальный конвейер трансформации`}),`
`,(0,c.jsxs)(n.p,{children:[`При вызове `,(0,c.jsx)(n.code,{children:`get()`}),` класс `,(0,c.jsx)(n.code,{children:`PropertiesMain`}),` выполняет следующую последовательность для каждого обнаруженного дизайна:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Чтение`}),`: Получает необработанные данные из файловой системы с помощью `,(0,c.jsx)(n.code,{children:`PropertiesTool`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Семантическая конвертация`}),`: Пропускает данные через `,(0,c.jsx)(n.code,{children:`PropertiesConvector`}),` для преобразования сырых значений в токены.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандартизация`}),`: Нормализует структуры через `,(0,c.jsx)(n.code,{children:`PropertiesStandard`}),` для обеспечения единообразия объектов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Разрешение ссылок`}),`: Использует `,(0,c.jsx)(n.code,{children:`PropertiesImport`}),` для рекурсивного получения и слияния любых ссылок на внешние файлы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Структурное завершение`}),`: При необходимости разделяет ключи через `,(0,c.jsx)(n.code,{children:`PropertiesSeparator`}),` и применяет `,(0,c.jsx)(n.code,{children:`PropertiesWrap`}),` для организации токенов в итоговые иерархические контейнеры.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Унифицированный синтез`}),`: Объединяет обработанные данные всех дизайнов в единый `,(0,c.jsx)(n.code,{children:`PropertyList`}),`, где ключами являются названия дизайнов верхнего уровня.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};