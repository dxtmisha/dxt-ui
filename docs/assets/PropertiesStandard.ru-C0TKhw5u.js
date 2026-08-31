import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesStandard - Стандартизация свойств`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertiesstandard`,children:`Класс PropertiesStandard`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesStandard`}),` является центральным механизмом нормализации данных в дизайн-системе. Его основная задача — преобразовывать «сырые» входные данные токенов (которые могут быть представлены строками, числами или упрощенными объектами) в строго типизированную структуру `,(0,c.jsx)(t.code,{children:`PropertyItem`}),`, с которой могут работать остальные инструменты системы.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Нормализация данных`}),` — гарантирует, что каждое свойство имеет стандартизированный набор полей (`,(0,c.jsx)(t.code,{children:`value`}),`, `,(0,c.jsx)(t.code,{children:`type`}),`, `,(0,c.jsx)(t.code,{children:`index`}),` и др.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Рекурсивная обработка`}),` — автоматически стандартизирует вложенные структуры объектов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое определение типов`}),` — пытается определить тип свойства на основе его имени (через `,(0,c.jsx)(t.code,{children:`PropertiesTypes`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеллектуальный парсинг`}),` — различает обычные значения и специальные мета-свойства (начинающиеся с `,(0,c.jsx)(t.code,{children:`__`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Слияние данных`}),` — корректно объединяет новые данные с существующими, сохраняя целостность структуры.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс предоставляет статические методы, поэтому его не нужно инициализировать через `,(0,c.jsx)(t.code,{children:`new`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesStandard } from '@dxtmisha/scripts'

// Вызов статического метода
const standardized = PropertiesStandard.to(rawInput)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`to`,children:(0,c.jsx)(t.code,{children:`to`})}),`
`,(0,c.jsxs)(t.p,{children:[`Статический метод, принимающий сырые данные или список свойств и возвращающий полностью нормализованный `,(0,c.jsx)(t.code,{children:`PropertyList`}),`. Метод выполняет обход всех элементов, определяет их ключи, типы и значения, а также рекурсивно обрабатывает вложенные объекты.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`properties: PropertyListOrData`}),` — входные данные свойств в любом поддерживаемом формате.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`PropertyList`}),` — объект, в котором каждый элемент приведен к стандарту `,(0,c.jsx)(t.code,{children:`PropertyItem`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = PropertiesStandard.to({
  'primary-color': '#007bff',
  'padding': { value: 16, type: 'size' }
});

/* Результат:
{
  'primary-color': { 
    value: '#007bff', 
    type: 'color', 
    index: 'primary-color' 
  },
  'padding': { 
    value: '16px', 
    type: 'size', 
    index: 'padding' 
  }
}
*/
`})}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`алгоритм-стандартизации-getitem`,children:`Алгоритм стандартизации (getItem)`}),`
`,(0,c.jsx)(t.p,{children:`При обработке каждого элемента выполняются следующие шаги:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Преобразование в объект`}),`: Метод `,(0,c.jsx)(t.code,{children:`toItem`}),` проверяет тип входного значения. Если это строка или массив, они оборачиваются в объект `,(0,c.jsx)(t.code,{children:`{ value: ... }`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Разделение мета-данных`}),`: Метод `,(0,c.jsx)(t.code,{children:`getValueAndSpecial`}),` отделяет полезное значение (`,(0,c.jsx)(t.code,{children:`value`}),`) от специальных ключей управления (например, `,(0,c.jsx)(t.code,{children:`__custom`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Определение типа`}),`: Если тип не указан явно, метод `,(0,c.jsx)(t.code,{children:`addType`}),` пытается вычислить его по имени ключа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Проверка на финальность`}),`: Метод `,(0,c.jsx)(t.code,{children:`addFull`}),` добавляет метки `,(0,c.jsx)(t.code,{children:`fullName`}),` или `,(0,c.jsx)(t.code,{children:`fullValue`}),`, если данные не требуют дальнейшей обработки (например, для уже разрешенных ссылок).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Преобразование значений`}),`: Через `,(0,c.jsx)(t.code,{children:`addValue`}),` все числовые значения переводятся в строки с добавлением единиц измерения там, где это необходимо.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Регистрация индекса`}),`: Каждому элементу присваивается очищенный `,(0,c.jsx)(t.code,{children:`index`}),` для быстрой обратной связи.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`стандартизация-сложной-структуры`,children:`Стандартизация сложной структуры`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesStandard } from '@dxtmisha/scripts'

const data = {
  header: {
    height: 60,
    background: '{color.white}'
  }
}

const standardData = PropertiesStandard.to(data)
// Теперь все поля в standardData.header.value имеют правильную структуру PropertyItem
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};