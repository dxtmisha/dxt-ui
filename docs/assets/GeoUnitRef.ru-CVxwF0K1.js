import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/GeoUnitRef`}),`
`,(0,c.jsx)(t.h1,{id:`класс-geounitref`,children:`Класс GeoUnitRef`}),`
`,(0,c.jsxs)(t.p,{children:[`Реактивная обёртка `,(0,c.jsx)(t.code,{children:`GeoUnit`}),`, форматирующая исходные метрические значения в региональных единицах. Ссылки на локаль и число обновляют сохранённые вычисляемые результаты без пересоздания обёртки.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Региональная конвертация`}),` — исходные единицы преобразуются согласно настройкам страны.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Реактивные входы`}),` — значения, локаль и единица общего `,(0,c.jsx)(t.code,{children:`format()`}),` могут быть ссылками.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Опции форматирования`}),` — принимает `,(0,c.jsx)(t.code,{children:`Intl.NumberFormatOptions`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor(code?: RefOrNormal<string>)`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string>`}),` — Код локали, страны или языка; ссылка поддерживается согласно сигнатуре.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`поведение-и-жизненный-цикл`,children:`Поведение и жизненный цикл`}),`
`,(0,c.jsxs)(t.p,{children:[`Без явной локали следует `,(0,c.jsx)(t.code,{children:`GeoRef.getLocation()`}),`. Явная ссылка на локаль заменяет этот резервный источник. Принимает числовые строки. `,(0,c.jsx)(t.code,{children:`format()`}),` использует идентификаторы `,(0,c.jsx)(t.code,{children:`square-meter`}),`, `,(0,c.jsx)(t.code,{children:`kilometer-per-hour`}),` и подобные; неизвестный идентификатор возвращает вход как текст. Опции передаются обычным объектом, а не ссылкой.`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GeoUnitRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const locale = /*#__PURE__*/ ref('vi-VN')
const value = /*#__PURE__*/ ref(0)
const units = /*#__PURE__*/ new GeoUnitRef(locale)
const temperature = /*#__PURE__*/ units.celsius(value)
locale.value = 'en-US'
const generic = /*#__PURE__*/ units.format(value, ref('celsius'))
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`местоположение`,children:`Местоположение`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLocation(): ComputedRef<string>`}),` — Возвращает разрешённую стандартную локаль вычисляемой ссылкой.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`общая-конвертация`,children:`Общая конвертация`}),`
`,(0,c.jsx)(t.h4,{id:`format`,children:(0,c.jsx)(t.code,{children:`format`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`format( value: RefOrNormal<NumberOrString>, unit: RefOrNormal<string>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Реактивно выбирает исходную метрическую единицу и делегирует преобразование и форматирование `,(0,c.jsx)(t.code,{children:`GeoUnit`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Значение для форматирования; ссылка поддерживается согласно сигнатуре.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unit: RefOrNormal<string>`}),` — Идентификатор единицы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.NumberFormatOptions`}),` — Параметры настройки.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Вычисляемый результат; читайте через .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const formatted = /*#__PURE__*/ units.format(value, ref('meter'), { maximumFractionDigits: 2 })
`})}),`
`,(0,c.jsx)(t.h3,{id:`методы-единиц-измерения`,children:`Методы единиц измерения`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`millimeter( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Форматирует миллиметры; преобразует в `,(0,c.jsx)(t.code,{children:`inch`}),`, если это задано настройками региона.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`centimeter( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Форматирует сантиметры; преобразует в `,(0,c.jsx)(t.code,{children:`inch`}),`, если это задано настройками региона.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`meter( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Форматирует метры; преобразует в `,(0,c.jsx)(t.code,{children:`foot`}),`, если это задано настройками региона.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`kilometer( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Форматирует километры; преобразует в `,(0,c.jsx)(t.code,{children:`mile`}),`, если это задано настройками региона.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`squareMeter( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Форматирует квадратные метры; преобразует в `,(0,c.jsx)(t.code,{children:`square-foot`}),`, если это задано настройками региона.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`hectare( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Форматирует гектары; преобразует в `,(0,c.jsx)(t.code,{children:`acre`}),`, если это задано настройками региона.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`gram( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Форматирует граммы; преобразует в `,(0,c.jsx)(t.code,{children:`ounce`}),`, если это задано настройками региона.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`kilogram( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Форматирует килограммы; преобразует в `,(0,c.jsx)(t.code,{children:`pound`}),`, если это задано настройками региона.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`tonne( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Форматирует тонны; преобразует в `,(0,c.jsx)(t.code,{children:`ton`}),`, если это задано настройками региона.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`milliliter( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Форматирует миллилитры; преобразует в `,(0,c.jsx)(t.code,{children:`fluid-ounce`}),`, если это задано настройками региона.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`liter( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Форматирует литры; преобразует в `,(0,c.jsx)(t.code,{children:`gallon`}),`, если это задано настройками региона.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`celsius( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Форматирует градусы Цельсия; преобразует в `,(0,c.jsx)(t.code,{children:`fahrenheit`}),`, если это задано настройками региона.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`kilometerPerHour( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Форматирует километры в час; преобразует в `,(0,c.jsx)(t.code,{children:`mile-per-hour`}),`, если это задано настройками региона.`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};