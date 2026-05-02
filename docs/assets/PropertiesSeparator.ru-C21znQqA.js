import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/PropertiesSeparator - Разделение свойств`}),`
`,(0,c.jsx)(n.h1,{id:`класс-propertiesseparator`,children:`Класс PropertiesSeparator`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`PropertiesSeparator`}),` предназначен для автоматического преобразования плоской структуры токенов с составными именами (использующими разделители) в иерархическую структуру вложенных объектов. Это позволяет организовывать свойства логически, например, превращая `,(0,c.jsx)(n.code,{children:`button.primary.background`}),` в `,(0,c.jsx)(n.code,{children:`{ button: { primary: { background: ... } } }`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая вложенность`}),` — преобразует плоские ключи с разделителями (по умолчанию `,(0,c.jsx)(n.code,{children:`.`}),`) во вложенные объекты.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Рекурсивная обработка`}),` — поддерживает неограниченную глубину вложенности (с возможностью ограничения через конфигурацию).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Умное слияние`}),` — корректно объединяет новые под-свойства с уже существующими объектами, используя рекурсивное замещение.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Очистка имен`}),` — автоматически удаляет технические префиксы и суффиксы (например, базовые имена разделителей) перед обработкой.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс предоставляет статические методы, поэтому его не нужно инициализировать через `,(0,c.jsx)(n.code,{children:`new`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesSeparator } from '@dxtmisha/scripts'

// Использование статических методов
const results = PropertiesSeparator.to(rawProperties)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`is`,children:(0,c.jsx)(n.code,{children:`is`})}),`
`,(0,c.jsxs)(n.p,{children:[`Статический метод для быстрой проверки, содержит ли предоставленный список свойств ключи, требующие разделения. Он сканирует верхний уровень (и вложенные уровни до предела `,(0,c.jsx)(n.code,{children:`limit`}),`) на наличие символов-разделителей в именах.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties: PropertyList`}),` — список свойств для анализа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit: number`}),` — максимальная глубина проверки (по умолчанию берется из `,(0,c.jsx)(n.code,{children:`PropertiesConfig`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если хотя бы один ключ содержит разделитель.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const needsSplitting = PropertiesSeparator.is(myProperties);
// Результат: true, если есть ключи типа "color.blue.50"
`})}),`
`,(0,c.jsx)(n.h3,{id:`to`,children:(0,c.jsx)(n.code,{children:`to`})}),`
`,(0,c.jsx)(n.p,{children:`Статический метод, который выполняет фактическую трансформацию плоского списка свойств во вложенную структуру. Метод рекурсивно обходит все элементы и, если находит ключ с разделителем, «оборачивает» свойство в цепочку вложенных объектов согласно сегментам имени.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties: PropertyList`}),` — список свойств для трансформации.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`PropertyList`}),` — новый список свойств с иерархической структурой.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const nestedProperties = PropertiesSeparator.to({
  'palette.blue.50': { value: '#e3f2fd' }
});
/* Результат:
{
  palette: {
    value: {
      blue: {
        value: {
          '50': { value: '#e3f2fd', __wrap: true }
        }
      }
    }
  }
}
*/
`})}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`механизм-разделения-имен`,children:`Механизм разделения имен`}),`
`,(0,c.jsxs)(n.p,{children:[`Процесс трансформации в `,(0,c.jsx)(n.code,{children:`PropertiesSeparator`}),` проходит следующие этапы:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Обнаружение разделителя`}),`: Метод `,(0,c.jsx)(n.code,{children:`to`}),` проверяет имя каждого свойства через `,(0,c.jsx)(n.code,{children:`PropertiesKeys.isSeparator`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сегментация`}),`: Если разделитель найден, имя разбивается на части (например, `,(0,c.jsx)(n.code,{children:`a.b.c`}),` -> `,(0,c.jsx)(n.code,{children:`['a', 'b', 'c']`}),`). Перед этим удаляются лишние технические символы через `,(0,c.jsx)(n.code,{children:`removeBasicName`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Обертывание (Wrapping)`}),`: Метод `,(0,c.jsx)(n.code,{children:`wrap`}),` рекурсивно создает вложенные объекты `,(0,c.jsx)(n.code,{children:`value`}),`, помещая оригинальный элемент свойства в самый глубокий уровень. При этом промежуточным объектам добавляется флаг `,(0,c.jsx)(n.code,{children:`__wrap: true`}),`, указывающий на их служебный характер.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Рекурсивное слияние`}),`: Полученная «ветка» объединяется с основным объектом `,(0,c.jsx)(n.code,{children:`data`}),` через `,(0,c.jsx)(n.code,{children:`replaceRecursive`}),`, что позволяет нескольким свойствам с одной базой (например, `,(0,c.jsx)(n.code,{children:`blue.50`}),` и `,(0,c.jsx)(n.code,{children:`blue.100`}),`) корректно собраться в одном объекте `,(0,c.jsx)(n.code,{children:`blue`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`группировка-цветов-палитры`,children:`Группировка цветов палитры`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesSeparator } from '@dxtmisha/scripts'

const flatPalette = {
  'blue.50': { value: '#eef' },
  'blue.100': { value: '#ccf' }
}

const tree = PropertiesSeparator.to(flatPalette)
// Свойства теперь сгруппированы в объекте tree.blue.value
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};