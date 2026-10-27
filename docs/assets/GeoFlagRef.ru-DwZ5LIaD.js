import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/GeoFlagRef - Реактивное управление флагами стран`}),`
`,(0,c.jsx)(t.h1,{id:`класс-geoflagref`,children:`Класс GeoFlagRef`}),`
`,(0,c.jsxs)(t.p,{children:[`Реактивная обёртка над `,(0,c.jsx)(t.code,{children:`GeoFlag`}),` для данных стран, языков и идентификаторов иконок флагов. Базовый экземпляр следует переданной ссылке на код либо текущему местоположению `,(0,c.jsx)(t.code,{children:`GeoRef`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Реактивный код`}),` — сохранённые вычисляемые результаты следуют изменениям кода.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Явный поиск`}),` — код метода имеет приоритет над кодом поиска конструктора.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Каталоги`}),` — доступны отфильтрованные списки и названия на национальных языках.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( code?: RefOrNormal<string | undefined> )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string | undefined>`}),` — Код локали, страны или языка; ссылка поддерживается согласно сигнатуре.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`поведение-и-жизненный-цикл`,children:`Поведение и жизненный цикл`}),`
`,(0,c.jsxs)(t.p,{children:[`Метод `,(0,c.jsx)(t.code,{children:`getCode()`}),` возвращает обычную строку на момент вызова. Остальные геттеры возвращают вычисляемые ссылки. `,(0,c.jsx)(t.code,{children:`getFlag()`}),` возвращает идентификатор иконки, например `,(0,c.jsx)(t.code,{children:`f-vn`}),`, а не URL изображения. Отсутствие массива кодов запрашивает базовый каталог; пустой массив даёт пустой список. Порядок каталога и обработка неизвестных кодов определяются `,(0,c.jsx)(t.code,{children:`GeoFlag`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GeoFlagRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const code = /*#__PURE__*/ ref('vi-VN')
const flags = /*#__PURE__*/ new GeoFlagRef(code)
const icon = /*#__PURE__*/ flags.getFlag()
const countries = /*#__PURE__*/ flags.getList(ref(['VN', 'US']))
code.value = 'en-US'
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`текущий-код`,children:`Текущий код`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCode(): string`}),` — Возвращает текущий базовый код строкой.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`поиск-одной-записи`,children:`Поиск одной записи`}),`
`,(0,c.jsx)(t.h4,{id:`get`,children:(0,c.jsx)(t.code,{children:`get`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`get(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает данные страны по явному либо текущему базовому коду.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string>`}),` — Код локали, страны или языка; ссылка поддерживается согласно сигнатуре.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<GeoFlagItem | undefined>`}),` — Вычисляемый результат; читайте через .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ flags.get(code)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getlanguage`,children:(0,c.jsx)(t.code,{children:`getLanguage`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getLanguage(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает данные языка по явному либо текущему базовому коду.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string>`}),` — Код локали, страны или языка; ссылка поддерживается согласно сигнатуре.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<GeoFlagItem | undefined>`}),` — Вычисляемый результат; читайте через .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ flags.getLanguage(code)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getflag`,children:(0,c.jsx)(t.code,{children:`getFlag`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getFlag(code?: RefOrNormal<string>): ComputedRef<string | undefined>`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает идентификатор флага по явному либо текущему базовому коду.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string>`}),` — Код локали, страны или языка; ссылка поддерживается согласно сигнатуре.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string | undefined>`}),` — Вычисляемый результат; читайте через .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ flags.getFlag(code)
`})}),`
`,(0,c.jsx)(t.h3,{id:`каталоги`,children:`Каталоги`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getList(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>`}),` — Возвращает флаги стран с необязательной фильтрацией реактивным списком кодов.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getListLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>`}),` — Возвращает флаги языков с необязательной фильтрацией реактивным списком кодов.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getNational(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>`}),` — Возвращает названия стран на национальных языках.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getNationalLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>`}),` — Возвращает названия языков на национальных языках.`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};