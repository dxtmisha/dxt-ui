import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/DesignStructureItemAbstract - Базовый структурный разрешитель`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designstructureitemabstract`,children:`Класс DesignStructureItemAbstract`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`DesignStructureItemAbstract`}),` служит фундаментальным строительным блоком для всех специализированных структурных разрешителей в рамках дизайн-системы. Он управляет низкоуровневой оркестрацией движка `,(0,c.jsx)(t.code,{children:`Properties`}),`, гарантируя, что каждый наследующий класс имеет мгновенный доступ к валидированным метаданным компонентов и токенам дизайн-системы.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Стандартизированная инициализация`}),` — автоматически настраивает окружение `,(0,c.jsx)(t.code,{children:`Properties`}),` для любого наследуемого разрешителя.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Унифицированная генерация ссылок`}),` — централизует логику создания внутренних перекрестных ссылок внутри JSON-метаданных дизайн-системы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Извлечение метаданных`}),` — автоматически извлекает специфический для компонента срез структурных данных во время конструирования.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Соблюдение контрактов`}),` — использует абстрактные свойства, чтобы гарантировать реализацию стандартизированного паттерна доступа к данным во всех подклассах.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Являясь абстрактным классом, `,(0,c.jsx)(t.code,{children:`DesignStructureItemAbstract`}),` не может быть инстанцирован напрямую. Наследуемые классы должны вызывать `,(0,c.jsx)(t.code,{children:`super()`}),` с идентификатором компонента.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`component: string`}),` — идентификатор компонента, структура которого анализируется (например, `,(0,c.jsx)(t.code,{children:`'button'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Внутреннее состояние:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`properties`}),`: экземпляр глобального менеджера `,(0,c.jsx)(t.code,{children:`Properties`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items`}),`: специфический подмножество структурных данных, разрешенных для данного компонента.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`доступ-к-данным`,children:`Доступ к данным`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): D`}),` — специфичный для реализации метод, который возвращает полностью обработанный объект данных.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`внутренняя-логика-защищенная`,children:`Внутренняя логика (защищенная)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLink(): string`}),` — генерирует отформатированную внутреннюю ссылку (например, `,(0,c.jsx)(t.code,{children:`{misha.button}`}),`), используемую для поиска токенов в глобальных метаданных дизайна.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`основа-разрешителя`,children:`Основа разрешителя`}),`
`,(0,c.jsxs)(t.p,{children:[`При создании экземпляра подкласса (например, `,(0,c.jsx)(t.code,{children:`DesignStructureClasses`}),`), абстрактный родитель координирует следующий жизненный цикл:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Настройка движка`}),`: инициализируется новый экземпляр `,(0,c.jsx)(t.code,{children:`Properties`}),` для обеспечения доступа к глобальному состоянию дизайн-системы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Привязка идентификатора`}),`: метод `,(0,c.jsx)(t.code,{children:`getLink()`}),` генерирует специализированный строковый идентификатор, который связывает имя компонента с текущей темой дизайна.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Локализация данных`}),`: используя сгенерированную ссылку, класс опрашивает глобальное хранилище свойств, чтобы изолировать только релевантные метаданные для текущего компонента, сохраняя их в свойстве `,(0,c.jsx)(t.code,{children:`items`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Расширение в подклассах`}),`: подкласс затем может получить доступ к `,(0,c.jsx)(t.code,{children:`this.items`}),` для выполнения своей специфической логики (например, построения деревьев классов или форматирования стилей), не беспокоясь о механизмах разрешения файлов или кэшировании.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`роль-в-архитектуре`,children:`Роль в архитектуре`}),`
`,(0,c.jsx)(t.p,{children:`Этот абстрактный класс гарантирует, что уровни «Read» и «Resolver» библиотеки сценариев следуют единому шаблону. Абстрагируя логику загрузки свойств, он позволяет разработчикам создавать новые типы структурных анализаторов, сосредоточившись исключительно на логике трансформации, а не на механике получения данных.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};