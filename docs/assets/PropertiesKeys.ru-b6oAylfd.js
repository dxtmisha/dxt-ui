import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesKeys - Семантический трансформер ключей`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertieskeys`,children:`Класс PropertiesKeys`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesKeys`}),` — это специализированная статическая утилита, предназначенная для парсинга и трансформации семантического значения ключей токенов дизайна. Он выступает в роли «грамматического движка» для имен свойств, различая ключи функциональных данных и ключи архитектурных метаданных. Предоставляя механизмы нормализации, типизированного добавления префиксов и обнаружения специальных символов, он гарантирует, что ключи токенов остаются последовательными и предсказуемыми независимо от их исходного формата (JSON, SCSS или внутреннее состояние).`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Идентификация метаданных`}),` — обнаруживает защищенные системные ключи, такие как `,(0,c.jsx)(t.code,{children:`value`}),`, `,(0,c.jsx)(t.code,{children:`type`}),`, и внутренние свойства, начинающиеся с подчеркивания.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Нормализация префиксов`}),` — автоматически удаляет архитектурные символы (такие как `,(0,c.jsx)(t.code,{children:`=`}),` или `,(0,c.jsx)(t.code,{children:`|`}),`) для извлечения чистого семантического имени.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Оркестрация регистра`}),` — интегрируется с `,(0,c.jsx)(t.code,{children:`toCamelCase`}),` для поддержания единых соглашений об именовании во всем дереве токенов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Типизированное переименование (Re-keying)`}),` — динамически преобразует ключи на основе их категории (например, добавляя `,(0,c.jsx)(t.code,{children:`media-`}),` к токенам медиа или `,(0,c.jsx)(t.code,{children:`container-`}),` к контейнерным запросам).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Совместимость с SCSS`}),` — обрабатывает специальное форматирование для ключей, совместимых с SCSS, включая ведущие амперсанды.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Являясь статическим сервисным классом, `,(0,c.jsx)(t.code,{children:`PropertiesKeys`}),` не требует создания экземпляра и готов к использованию сразу после импорта.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesKeys } from '@dxtmisha/scripts'

// Проверка, является ли ключ полем метаданных
const isReserved = PropertiesKeys.isSpecialKey('type')

// Получение чистого семантического имени
const cleanName = PropertiesKeys.getName('=primary-color')
// Возвращает: "primaryColor"
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSpecialKey(key): boolean`}),` — проверяет, является ли ключ зарезервированным системным полем метаданных.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isFull(name): boolean`}),` — определяет, является ли имя абсолютным/полным определением.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(name, camelCase?): string`}),` — нормализует ключ, удаляя префиксы и опционально применяя camelCase.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reKey(key, type?): string`}),` — преобразует ключ на основе его архитектурного типа (media, container, scss и т.д.).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`конвейер-трансформации-ключей`,children:`Конвейер трансформации ключей`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`PropertiesKeys`}),` управляет логикой перевода между необработанными входными форматами и стандартизированными внутренними токенами:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Семантическое извлечение`}),`: При вызове `,(0,c.jsx)(t.code,{children:`getName()`}),` класс использует регулярные выражения `,(0,c.jsx)(t.code,{children:`PropertiesTypes`}),` для идентификации и удаления управляющих символов (таких как `,(0,c.jsx)(t.code,{children:`=`}),`, означающий неизменяемое значение).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Контекстное добавление префиксов`}),`: В потоке `,(0,c.jsx)(t.code,{children:`reKey()`}),` класс проверяет `,(0,c.jsx)(t.code,{children:`_type`}),` токена. Если идентифицирован тип `,(0,c.jsx)(t.code,{children:`media`}),`, он интеллектуально гарантирует, что ключ отражает эту роль (например, `,(0,c.jsx)(t.code,{children:`desktop`}),` становится `,(0,c.jsx)(t.code,{children:`mediaDesktop`}),`), избегая избыточных префиксов, если они уже существуют.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Защита внутреннего состояния`}),`: Проверка `,(0,c.jsx)(t.code,{children:`isSpecialKey()`}),` критически важна для движков обхода; она предотвращает обработку внутренних механизмов (ключи, начинающиеся с `,(0,c.jsx)(t.code,{children:`_`}),`) как если бы они были реальными токенами дизайна, определенными пользователем.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Адаптация под платформы`}),`: Для генерации SCSS класс специально обрабатывает добавление префикса `,(0,c.jsx)(t.code,{children:`&`}),`, позволяя использовать токены дизайна напрямую во вложенных объявлениях стилей.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};