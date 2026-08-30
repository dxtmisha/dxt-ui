import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/PropertiesWrap - Оптимизация структуры`}),`
`,(0,c.jsx)(t.h1,{id:`класс-propertieswrap`,children:`Класс PropertiesWrap`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`PropertiesWrap`}),` предназначен для автоматической оптимизации структуры токенов в дизайн-системе. Его основная задача — находить повторяющиеся значения свойств на одном уровне вложенности и выносить их на родительский уровень. Это позволяет существенно сократить объем JSON/JS конфигов и упростить их поддержку.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Устранение дубликатов`}),` — автоматически выносит общие свойства группы компонентов выше по иерархии.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Рекурсивная оптимизация`}),` — обрабатывает дерево свойств на любую глубину.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Умное слияние`}),` — находит свойства с максимальным количеством повторений для наиболее эффективного сжатия структуры.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Прозрачность`}),` — использует системный ключ `,(0,c.jsx)(t.code,{children:`wrap`}),` для идентификации блоков, требующих оптимизации.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс предоставляет статические методы и не требует создания экземпляра через `,(0,c.jsx)(t.code,{children:`new`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesWrap } from '@dxtmisha/scripts'

// Оптимизация структуры свойств (мутирует исходный объект)
PropertiesWrap.to(myProperties)
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`to`,children:(0,c.jsx)(t.code,{children:`to`})}),`
`,(0,c.jsxs)(t.p,{children:[`Статический метод, который запускает процесс оптимизации. Он обходит дерево свойств и, если встречает блок с флагом `,(0,c.jsx)(t.code,{children:`_wrap`}),`, анализирует его содержимое. Если внутри блока обнаружены идентичные свойства у дочерних элементов, они будут вынесены на уровень текущего блока, а дубликаты у дочерних элементов — удалены.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`properties: PropertyList`}),` — объект со списком свойств, который необходимо оптимизировать.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const tokens = {
  button: {
    _wrap: true,
    value: {
      primary: { value: { padding: '10px', color: 'red' } },
      secondary: { value: { padding: '10px', color: 'blue' } }
    }
  }
};

PropertiesWrap.to(tokens);

/* Результат оптимизации:
{
  button: {
    padding: '10px', // Вынесено на уровень выше
    value: {
      primary: { value: { color: 'red' } },
      secondary: { value: { color: 'blue' } }
    }
  }
}
*/
`})}),`
`,(0,c.jsx)(t.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(t.h3,{id:`алгоритм-оптимизации-how-it-works`,children:`Алгоритм оптимизации (How it works)`}),`
`,(0,c.jsx)(t.p,{children:`Процесс сжатия структуры проходит через следующие этапы:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поиск флага`}),`: Система ищет в объекте свойство `,(0,c.jsx)(t.code,{children:`_wrap`}),` (определено в `,(0,c.jsx)(t.code,{children:`PropertyKey.wrap`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Сбор статистики (getSelectors)`}),`: Если флаг найден, класс собирает информацию о всех свойствах дочерних элементов (названия и их значения).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Анализ повторов (getMaxRepeat)`}),`: Определяется свойство, которое чаще всего встречается с одним и тем же значением.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Перенос данных`}),`: Найденное общее свойство добавляется в текущий (родительский) блок.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Очистка (removeProperties)`}),`: Данное свойство удаляется из всех дочерних элементов, где оно имело идентичное значение.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Завершение`}),`: Флаг `,(0,c.jsx)(t.code,{children:`_wrap`}),` удаляется из объекта.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`сжатие-конфигурации-темы`,children:`Сжатие конфигурации темы`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesWrap } from '@dxtmisha/scripts'

const designData = {
  typography: {
    _wrap: true,
    value: {
      h1: { value: { 'font-family': 'Inter', 'font-size': '32px' } },
      h2: { value: { 'font-family': 'Inter', 'font-size': '24px' } },
      p: { value: { 'font-family': 'Inter', 'font-size': '16px' } }
    }
  }
}

PropertiesWrap.to(designData)
// Результат: 'font-family': 'Inter' будет вынесен в корень объекта typography
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};