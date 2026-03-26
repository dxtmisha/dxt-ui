import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/# Реактивные хуки (Composables)`}),`
`,(0,c.jsx)(n.h1,{id:`реактивные-хуки-composables`,children:`Реактивные хуки (Composables)`}),`
`,(0,c.jsxs)(n.p,{children:[`Набор инструментов для работы с браузерными API, хранилищами и интернационализацией в реактивном стиле `,(0,c.jsx)(n.strong,{children:`Vue 3 (Composition API)`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`особенности`,children:`Особенности`}),`
`,(0,c.jsx)(n.p,{children:`Основная идея данных хуков — предоставить простой и надежный интерфейс для работы с внешними данными и состоянием. Они автоматически синхронизируют значения с хранилищами, следят за изменениями в других вкладках и обеспечивают мгновенное обновление интерфейса при смене глобальных настроек (например, языка или валюты).`}),`
`,(0,c.jsx)(n.h2,{id:`доступные-хуки`,children:`Доступные хуки`}),`
`,(0,c.jsx)(n.h3,{id:`хранение-данных`,children:`Хранение данных`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useStorageRef`}),` — Реактивная обертка над `,(0,c.jsx)(n.code,{children:`localStorage`}),`. Поддерживает время жизни (cache) и синхронизацию между вкладками.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useSessionRef`}),` — Работа с `,(0,c.jsx)(n.code,{children:`sessionStorage`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useCookieRef`}),` — Управление куками (Cookies) в реактивном стиле.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`интернационализация-i18n`,children:`Интернационализация (I18n)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useTranslateRef`}),` — Реактивное получение строк перевода. Автоматически обновляется при смене языка в `,(0,c.jsx)(n.code,{children:`GeoRef`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useGeoIntlRef`}),` — Форматирование чисел, валют и дат с учетом текущей локали.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`работа-с-данными-и-поиск`,children:`Работа с данными и поиск`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useSearchRef`}),` — Клиентский поиск по массивам данных с поддержкой фильтрации по нескольким колонкам.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useFormattersRef`}),` — Массовое форматирование списков объектов по заданным правилам.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`браузерные-api-и-состояние`,children:`Браузерные API и Состояние`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useBroadcastValueRef`}),` — Передача и синхронизация данных между окнами/вкладками браузера через `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useHashRef`}),` — Реактивное управление хешем в URL (`,(0,c.jsx)(n.code,{children:`window.location.hash`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useLoadingRef`}),` — Удобное управление состояниями загрузки (локальными и глобальными).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`как-с-ними-работать`,children:`Как с ними работать`}),`
`,(0,c.jsxs)(n.p,{children:[`Хуки разработаны так, чтобы минимизировать количество шаблонного кода. Например, при работе с локальным хранилищем вам не нужно вручную вызывать `,(0,c.jsx)(n.code,{children:`getItem`}),` и `,(0,c.jsx)(n.code,{children:`setItem`}),`. Достаточно создать переменную, и любые изменения в ней будут автоматически сохранены в `,(0,c.jsx)(n.code,{children:`localStorage`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useStorageRef } from '@dxtmisha/functional'

// Значение 'theme' будет автоматически сохраняться и загружаться
const theme = useStorageRef('theme', 'light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Для интернационализации используется связка управляющих классов и хуков. Если вы измените язык через `,(0,c.jsx)(n.code,{children:`GeoRef.set()`}),`, все переменные, созданные через `,(0,c.jsx)(n.code,{children:`useTranslateRef`}),`, моментально обновят свои значения во всем приложении без перезагрузки страницы.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useTranslateRef, useGeoIntlRef } from '@dxtmisha/functional'

const title = useTranslateRef('main.title')
const intl = useGeoIntlRef()

// Отформатированная цена будет сама меняться при смене валюты или языка
const priceDisplay = intl.currency(12500, 'RUB')
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Хуки поиска и форматирования (`,(0,c.jsx)(n.code,{children:`useSearchRef`}),`, `,(0,c.jsx)(n.code,{children:`useFormattersRef`}),`) часто используются как строительные блоки для более сложных инструментов, таких как `,(0,c.jsx)(n.code,{children:`useApiManagementRef`}),`, но могут применяться и самостоятельно для обработки локальных массивов данных.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useSearchRef } from '@dxtmisha/functional'

const items = ref([{ name: 'Яблоко' }, { name: 'Банан' }])
const search = ref('')

const { listSearch } = useSearchRef(items, ['name'], search)
// listSearch всегда содержит только отфильтрованные элементы
`})}),`
`,(0,c.jsx)(n.p,{children:`Такой подход позволяет строить интерфейсы декларативно: вы описываете, какие данные вам нужны и как они должны быть связаны, а хуки берут на себя всю работу по синхронизации и обновлению.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};