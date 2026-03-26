import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Classes/GeoFlagRef - Реактивное управление флагами стран`}),`
`,(0,c.jsx)(n.h1,{id:`класс-geoflagref`,children:`Класс GeoFlagRef`}),`
`,(0,c.jsx)(n.p,{children:`Класс для реактивной работы с флагами стран. Обеспечивает синхронизацию данных о флагах с реактивным кодом страны.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Реактивность`}),` — автоматическое обновление данных при изменении кода страны.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка списка стран`}),` — получение информации о нескольких странах одновременно.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Национальные названия`}),` — получение названий стран на их родном языке.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Создает новый экземпляр `,(0,c.jsx)(n.code,{children:`GeoFlagRef`}),` для работы с флагами стран. Класс является реактивной оберткой над `,(0,c.jsx)(n.code,{children:`GeoFlag`}),` и автоматически обновляет данные при изменении переданного кода страны.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: RefOrNormal<string>`}),` — код страны (например, `,(0,c.jsx)(n.code,{children:`'RU'`}),`, `,(0,c.jsx)(n.code,{children:`'US'`}),`). Может быть обычной строкой или реактивным объектом `,(0,c.jsx)(n.code,{children:`ref`}),`. По умолчанию используется текущее местоположение через `,(0,c.jsx)(n.code,{children:`Geo.getLocation()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { GeoFlagRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// 1. Инициализация с реактивным кодом
const code = ref('RU')
const geoFlag = new GeoFlagRef(code)

// 2. Использование данных флага
const flagIcon = geoFlag.getFlag() // ComputedRef с иконкой для 'RU'

// 3. Автоматическое обновление
code.value = 'US' // flagIcon обновится автоматически
`})}),`
`,(0,c.jsx)(n.h2,{id:`текущее-состояние`,children:`Текущее состояние`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCode(): Ref<string>`}),` — Возвращает реактивную ссылку на текущий установленный код страны.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`получение-данных`,children:`Получение данных`}),`
`,(0,c.jsxs)(n.p,{children:[`Все методы получения данных возвращают `,(0,c.jsx)(n.code,{children:`ComputedRef`}),`, что обеспечивает автоматическую синхронизацию с текущим кодом страны.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code?: string): ComputedRef<GeoFlagItem | undefined>`}),` — Возвращает полную информацию о стране: название, иконку и другие метаданные. Если `,(0,c.jsx)(n.code,{children:`code`}),` не передан, используется текущий код из состояния.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFlag(code?: string): ComputedRef<string | undefined>`}),` — Возвращает путь или идентификатор иконки флага для указанной страны.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(codes?: string[]): ComputedRef<GeoFlagItem[]>`}),` — Возвращает массив данных о флагах для списка кодов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getNational(codes?: string[]): ComputedRef<GeoFlagNational[]>`}),` — Возвращает список стран с названиями на их национальных языках.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`работа-со-списками-getlist-vs-getnational`,children:`Работа со списками: getList vs getNational`}),`
`,(0,c.jsx)(n.p,{children:`Класс предоставляет два метода для получения списков стран, которые различаются способом локализации данных.`}),`
`,(0,c.jsxs)(n.h3,{id:`getlist-локальный-список`,children:[(0,c.jsx)(n.code,{children:`getList`}),` (Локальный список)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Возвращает список стран, где все названия и метки переведены на язык `,(0,c.jsx)(n.strong,{children:`текущего экземпляра`}),` `,(0,c.jsx)(n.code,{children:`GeoFlagRef`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Когда использовать:`}),` если вам нужно отобразить список стран в интерфейсе на языке пользователя (например, в селекторе выбора страны).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Результат:`}),` если `,(0,c.jsx)(n.code,{children:`GeoFlagRef`}),` настроен на русский (`,(0,c.jsx)(n.code,{children:`RU`}),`), то для кода `,(0,c.jsx)(n.code,{children:`US`}),` вы получите "Соединённые Штаты".`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`getnational-национальный-список`,children:[(0,c.jsx)(n.code,{children:`getNational`}),` (Национальный список)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Возвращает список, где информация о каждой стране представлена на её `,(0,c.jsx)(n.strong,{children:`родном (национальном) языке`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Когда использовать:`}),` если вам нужно показать названия стран так, как их называют жители этих стран, или добавить описание на родном языке.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Результат:`}),` для кода `,(0,c.jsx)(n.code,{children:`US`}),` вы получите "United States" (на английском), для `,(0,c.jsx)(n.code,{children:`VN`}),` — "Việt Nam" (на вьетнамском), независимо от того, какой язык установлен в `,(0,c.jsx)(n.code,{children:`GeoFlagRef`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`geoflagitem`,children:`GeoFlagItem`}),`
`,(0,c.jsx)(n.p,{children:`Объект с основной информацией о стране и её флаге.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`language: string`}),` — Название языка.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`country: string`}),` — Название страны.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`standard: string`}),` — Стандартный код локали.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`icon?: string`}),` — Идентификатор иконки флага.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`label: string`}),` — Отображаемая метка (обычно название страны).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — Значение для выбора (обычно код страны).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`geoflagnational`,children:`GeoFlagNational`}),`
`,(0,c.jsxs)(n.p,{children:[`Расширенный объект с информацией на национальном языке (наследует все поля `,(0,c.jsx)(n.code,{children:`GeoFlagItem`}),`).`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`description: string`}),` — Описание на национальном языке.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nationalLanguage: string`}),` — Название языка на национальном языке.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nationalCountry: string`}),` — Название страны на национальном языке.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};