import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/# Geo и форматирование`}),`
`,(0,c.jsx)(n.h1,{id:`geo-и-форматирование`,children:`Geo и форматирование`}),`
`,(0,c.jsx)(n.p,{children:`Инструменты для управления локализацией (i18n), географическими данными и умного форматирования. Система автоматически определяет настройки пользователя и обеспечивает корректное отображение валют, дат и чисел по государственным стандартам.`}),`
`,(0,c.jsx)(n.h2,{id:`локализация-geo`,children:`Локализация (Geo)`}),`
`,(0,c.jsx)(n.p,{children:`Управление глобальным состоянием страны, языка и временной зоны. Поддерживает автоопределение по браузеру и сохранение в сессии.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Geo } from '@dxtmisha/functional-basic'

// Глобальные настройки
Geo.set('en-US', true)      // Установить локаль и сохранить в браузере
Geo.setTimezone('+05:00')   // Переопределить временную зону
Geo.getCountry()            // 'US'

// Работа со справочниками
const list = Geo.getList()  // Полный список стран и языков
const current = Geo.getItem() // Объект с данными текущей локали
const hasRU = Geo.hasCountry('RU') // Проверка поддержки страны
`})}),`
`,(0,c.jsx)(n.h2,{id:`форматирование-geointl`,children:`Форматирование (GeoIntl)`}),`
`,(0,c.jsxs)(n.p,{children:[`Универсальный движок для работы с данными на основе нативного `,(0,c.jsx)(n.code,{children:`Intl`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoIntl } from '@dxtmisha/functional-basic'

const intl = GeoIntl.getInstance()

// Числа и валюты
intl.currency(1000, 'USD')          // '$1,000.00'
intl.percent(0.15)                  // '15%'

// Даты и время
intl.date(new Date(), 'full')       // Полноформатная дата
intl.relative(new Date() - 3600000) // '1 час назад'
intl.relativeLimit(pastDate, 7)     // Относительно (до 7 дней) или дата

// Утилиты
intl.plural(5, 'яблоко|яблока|яблок') // Склонение
intl.sizeFile(1024 * 1024)           // '1 МБ'
intl.sort(['яблоко', 'Ёж', 'арбуз'])  // Умная сортировка списка
intl.displayNames('DE', 'region')    // 'Германия' (локализовано)
`})}),`
`,(0,c.jsx)(n.h2,{id:`флаги-стран-geoflag`,children:`Флаги стран (GeoFlag)`}),`
`,(0,c.jsx)(n.p,{children:`Получение иконок флагов и названий стран на родном языке или языке системы.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoFlag } from '@dxtmisha/functional-basic'

const geoFlag = new GeoFlag('ru-RU')

// Данные конкретной страны
const ru = geoFlag.get('RU') // { icon: 'f-ru', country: 'Россия', area: '7', ... }

// Список имен на языке оригинала
const native = geoFlag.getNational(['DE']) 
// [{ country: 'Германия', nationalCountry: 'Deutschland', ... }]
`})}),`
`,(0,c.jsx)(n.h2,{id:`телефоны-geophone`,children:`Телефоны (GeoPhone)`}),`
`,(0,c.jsx)(n.p,{children:`Автоопределение страны по номеру и работа с международными масками.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoPhone } from '@dxtmisha/functional-basic'

// Умная детекция
const { item, phone } = GeoPhone.getByPhone('79001234567') 
// item — данные страны (RU), phone — очищенный номер

// Форматирование
GeoPhone.toMask(phone, item.mask) // '+7 (900) 123-45-67'
GeoPhone.clear(' +7 (900) 123-45-67 ') // '79001234567' (очистка)
`})}),`
`,(0,c.jsx)(n.h2,{id:`списки-formatters`,children:`Списки (Formatters)`}),`
`,(0,c.jsxs)(n.p,{children:[`Массовое форматирование массивов объектов. Автоматически создает новые свойства с суффиксом `,(0,c.jsx)(n.code,{children:`Format`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Formatters } from '@dxtmisha/functional-basic'

const options = {
  price: { type: 'currency', options: 'USD' },
  birthday: { type: 'date' },
  'user.name': { type: 'name' }, // Объединяет firstName/lastName
  count: { type: 'plural', options: 'штука|штуки|штук' },
  status: { 
    transformation: (v) => v === 1 ? 'Ок' : 'Ошибка' 
  }
}

// transformed — копия data с полями priceFormat, birthdayFormat и т.д.
const transformed = new Formatters(options, data).to()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};