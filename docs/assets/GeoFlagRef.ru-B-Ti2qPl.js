import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-DC9WpFni.js";import{M as d}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"@dxtmisha/ru/functional/Classes/GeoFlagRef - Реактивное управление флагами стран"}),`
`,n.jsx(e.h1,{id:"класс-geoflagref",children:"Класс GeoFlagRef"}),`
`,n.jsx(e.p,{children:"Класс для реактивной работы с флагами стран. Обеспечивает синхронизацию данных о флагах с реактивным кодом страны."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Реактивность"})," — автоматическое обновление данных при изменении кода страны."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поддержка списка стран"})," — получение информации о нескольких странах одновременно."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Национальные названия"})," — получение названий стран на их родном языке."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Создает новый экземпляр ",n.jsx(e.code,{children:"GeoFlagRef"})," для работы с флагами стран. Класс является реактивной оберткой над ",n.jsx(e.code,{children:"GeoFlag"})," и автоматически обновляет данные при изменении переданного кода страны."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code: RefOrNormal<string>"})," — код страны (например, ",n.jsx(e.code,{children:"'RU'"}),", ",n.jsx(e.code,{children:"'US'"}),"). Может быть обычной строкой или реактивным объектом ",n.jsx(e.code,{children:"ref"}),". По умолчанию используется текущее местоположение через ",n.jsx(e.code,{children:"Geo.getLocation()"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { GeoFlagRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// 1. Инициализация с реактивным кодом
const code = ref('RU')
const geoFlag = new GeoFlagRef(code)

// 2. Использование данных флага
const flagIcon = geoFlag.getFlag() // ComputedRef с иконкой для 'RU'

// 3. Автоматическое обновление
code.value = 'US' // flagIcon обновится автоматически
`})}),`
`,n.jsx(e.h2,{id:"текущее-состояние",children:"Текущее состояние"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getCode(): Ref<string>"})," — Возвращает реактивную ссылку на текущий установленный код страны."]}),`
`]}),`
`,n.jsx(e.h2,{id:"получение-данных",children:"Получение данных"}),`
`,n.jsxs(e.p,{children:["Все методы получения данных возвращают ",n.jsx(e.code,{children:"ComputedRef"}),", что обеспечивает автоматическую синхронизацию с текущим кодом страны."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"get(code?: string): ComputedRef<GeoFlagItem | undefined>"})," — Возвращает полную информацию о стране: название, иконку и другие метаданные. Если ",n.jsx(e.code,{children:"code"})," не передан, используется текущий код из состояния."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getFlag(code?: string): ComputedRef<string | undefined>"})," — Возвращает путь или идентификатор иконки флага для указанной страны."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getList(codes?: string[]): ComputedRef<GeoFlagItem[]>"})," — Возвращает массив данных о флагах для списка кодов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getNational(codes?: string[]): ComputedRef<GeoFlagNational[]>"})," — Возвращает список стран с названиями на их национальных языках."]}),`
`]}),`
`,n.jsx(e.h2,{id:"работа-со-списками-getlist-vs-getnational",children:"Работа со списками: getList vs getNational"}),`
`,n.jsx(e.p,{children:"Класс предоставляет два метода для получения списков стран, которые различаются способом локализации данных."}),`
`,n.jsxs(e.h3,{id:"getlist-локальный-список",children:[n.jsx(e.code,{children:"getList"})," (Локальный список)"]}),`
`,n.jsxs(e.p,{children:["Возвращает список стран, где все названия и метки переведены на язык ",n.jsx(e.strong,{children:"текущего экземпляра"})," ",n.jsx(e.code,{children:"GeoFlagRef"}),"."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Когда использовать:"})," если вам нужно отобразить список стран в интерфейсе на языке пользователя (например, в селекторе выбора страны)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Результат:"})," если ",n.jsx(e.code,{children:"GeoFlagRef"})," настроен на русский (",n.jsx(e.code,{children:"RU"}),"), то для кода ",n.jsx(e.code,{children:"US"}),' вы получите "Соединённые Штаты".']}),`
`]}),`
`,n.jsxs(e.h3,{id:"getnational-национальный-список",children:[n.jsx(e.code,{children:"getNational"})," (Национальный список)"]}),`
`,n.jsxs(e.p,{children:["Возвращает список, где информация о каждой стране представлена на её ",n.jsx(e.strong,{children:"родном (национальном) языке"}),"."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Когда использовать:"})," если вам нужно показать названия стран так, как их называют жители этих стран, или добавить описание на родном языке."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Результат:"})," для кода ",n.jsx(e.code,{children:"US"}),' вы получите "United States" (на английском), для ',n.jsx(e.code,{children:"VN"}),' — "Việt Nam" (на вьетнамском), независимо от того, какой язык установлен в ',n.jsx(e.code,{children:"GeoFlagRef"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"типы",children:"Типы"}),`
`,n.jsx(e.h3,{id:"geoflagitem",children:"GeoFlagItem"}),`
`,n.jsx(e.p,{children:"Объект с основной информацией о стране и её флаге."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"language: string"})," — Название языка."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"country: string"})," — Название страны."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"standard: string"})," — Стандартный код локали."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"icon?: string"})," — Идентификатор иконки флага."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"label: string"})," — Отображаемая метка (обычно название страны)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: string"})," — Значение для выбора (обычно код страны)."]}),`
`]}),`
`,n.jsx(e.h3,{id:"geoflagnational",children:"GeoFlagNational"}),`
`,n.jsxs(e.p,{children:["Расширенный объект с информацией на национальном языке (наследует все поля ",n.jsx(e.code,{children:"GeoFlagItem"}),")."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"description: string"})," — Описание на национальном языке."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"nationalLanguage: string"})," — Название языка на национальном языке."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"nationalCountry: string"})," — Название страны на национальном языке."]}),`
`]})]})}function j(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};
