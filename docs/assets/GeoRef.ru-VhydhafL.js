import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/GeoRef - Реактивный менеджер географии`}),`
`,(0,c.jsx)(t.h1,{id:`класс-georef`,children:`Класс GeoRef`}),`
`,(0,c.jsxs)(t.p,{children:[`Статический реактивный фасад текущего географического контекста. Кэширует поверхностную ссылку на `,(0,c.jsx)(t.code,{children:`Geo.getItem()`}),` и вычисляемые проекции через `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Общие ссылки`}),` — повторные вызовы используют кэш текущего контекста.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Изменение локали`}),` — `,(0,c.jsx)(t.code,{children:`set()`}),` заменяет географические данные и обновляет проекции.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Контекст SSR`}),` — владелец кэша определяется `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`поведение-и-жизненный-цикл`,children:`Поведение и жизненный цикл`}),`
`,(0,c.jsxs)(t.p,{children:[`Данные страны и запрошенная локаль различаются: у `,(0,c.jsx)(t.code,{children:`en-VN`}),` язык страны — `,(0,c.jsx)(t.code,{children:`vi`}),`, а язык местоположения — `,(0,c.jsx)(t.code,{children:`en`}),`. `,(0,c.jsx)(t.code,{children:`getFirstDay()`}),` возвращает обозначение дня, например `,(0,c.jsx)(t.code,{children:`Mo`}),` или `,(0,c.jsx)(t.code,{children:`Su`}),`, а не числовой код. `,(0,c.jsx)(t.code,{children:`setValueDefault()`}),` задаёт резервное значение; существующая cookie локали может иметь приоритет. Перед SSR инициализируйте хранилище запроса и читайте ссылки в контексте их владельца.`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GeoRef } from '@dxtmisha/functional'

const country = /*#__PURE__*/ GeoRef.getCountry()
const language = /*#__PURE__*/ GeoRef.getLocationLanguage()
GeoRef.set('en-VN')
country.value // 'VN'
language.value // 'en'
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`текущий-контекст`,children:`Текущий контекст`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`get(): Ref<GeoItemFull>`}),` — Возвращает кэшированную ссылку на географические данные.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getCountry(): ComputedRef<string>`}),` — Возвращает код страны.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLanguage(): ComputedRef<string>`}),` — Возвращает язык из данных страны.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getStandard(): ComputedRef<string>`}),` — Возвращает стандартный код локали.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getFirstDay(): ComputedRef<string>`}),` — Возвращает обозначение первого дня недели из данных страны.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLocation(): ComputedRef<string>`}),` — Возвращает текущую локаль местоположения.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLocationCountry(): ComputedRef<string>`}),` — Возвращает сегмент страны запрошенного местоположения.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLocationLanguage(): ComputedRef<string>`}),` — Возвращает языковой сегмент запрошенного местоположения.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`настройка-локали`,children:`Настройка локали`}),`
`,(0,c.jsx)(t.h4,{id:`set`,children:(0,c.jsx)(t.code,{children:`set`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`set(code: string): void`})}),`
`,(0,c.jsx)(t.p,{children:`Устанавливает текущую локаль Geo с сохранением и заменяет реактивные данные.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string`}),` — Код локали, страны или языка; ссылка поддерживается согласно сигнатуре.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`void`}),` — Нет возвращаемого значения.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`GeoRef.set('vi-VN')
`})}),`
`,(0,c.jsx)(t.h4,{id:`setvaluedefault`,children:(0,c.jsx)(t.code,{children:`setValueDefault`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`setValueDefault(code?: string | (() => string)): void`})}),`
`,(0,c.jsx)(t.p,{children:`Устанавливает резервный код Geo либо фабрику и обновляет реактивные данные из Geo.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: string | (() => string)`}),` — Резервный код локали либо фабрика.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`void`}),` — Нет возвращаемого значения.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`GeoRef.setValueDefault(() => 'vi-VN')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};