import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/Properties - Оркестратор токенов дизайна`}),`
`,(0,c.jsx)(n.h1,{id:`класс-properties`,children:`Класс Properties`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`Properties`}),` — это основное ядро инфраструктуры токенов дизайн-системы. Он выступает в роли центрального оркестратора, координирующего загрузку, структурное слияние и рекурсивное преобразование необработанных определений свойств в конечное, разрешенное состояние. Абстрагируя сложность десятков специализированных правил трансформации, он предоставляет стабильный «источник истины» для всех компонентов и инструментов сборки.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Многоэтапный конвейер обработки`}),` — выполняет специализированные трансформаторы для замены, клонирования, связывания и перемещения токенов дизайна.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Структурное слияние`}),` — интеллектуально разрешает и объединяет настройки, глобальные значения по умолчанию и переопределения для конкретных компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инкрементальное управление кэшем`}),` — использует `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` для сохранения результатов обработки, что значительно повышает производительность сборки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синтез SCSS`}),` — компилирует разрешенные токены в структурированный формат SCSS для прямого использования в слоях стилизации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Оптимизированные для ИИ метаданные`}),` — подготавливает структуры свойств, которые легко потребляются движками документации и генераторами на базе ИИ.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Инициализируйте оркестратор, чтобы немедленно запустить обработку токенов, определенных в конфигурации проекта.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Properties } from '@dxtmisha/scripts'

const engine = new Properties()
const tokens = engine.get() // Возвращает полностью обработанный PropertiesItems
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`доступ-к-данным`,children:`Доступ к данным`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): PropertiesItems`}),` — Возвращает основной контейнер всех обработанных токенов дизайна.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getScss(): string`}),` — Возвращает скомпилированное представление текущего набора токенов в формате SCSS.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`конвейер-обработки-токенов`,children:`Конвейер обработки токенов`}),`
`,(0,c.jsxs)(n.p,{children:[`При создании экземпляра `,(0,c.jsx)(n.code,{children:`Properties`}),` координирует комплексный многоуровневый поток трансформаций:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Получение источников`}),`: читает и объединяет необработанные данные из `,(0,c.jsx)(n.code,{children:`PropertiesSettings`}),`, `,(0,c.jsx)(n.code,{children:`PropertiesMain`}),` и внешних JSON-файлов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Базовая нормализация`}),`: запускает фундаментальные преобразования:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Замена (Replacement)`}),`: разрешает паттерны алиасов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Разрешение палитры`}),`: внедряет значения цветовых палитр.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Клонирование и синтез подсвойств`}),`: обрабатывает сложные репликации свойств.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Продвинутая трансформация`}),`: выполняет высокоуровневую логику для:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Разрешения компонентов`}),`: сопоставляет свойства со структурами конкретных компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Маппинга состояний и классов`}),`: генерирует метаданные для состояний UI (hover, active) и BEM-классов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синтеза медиа и анимаций`}),`: разрешает адаптивные контрольные точки и токены движения.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Оптимизация и очистка`}),`: сортирует свойства, обрабатывает дубликаты и удаляет пустые узлы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сохранение`}),`: финальный результат сохраняется в `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` с использованием уникального хеша на основе текущей конфигурации дизайна.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};