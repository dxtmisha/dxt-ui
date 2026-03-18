import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/PropertiesSeparator - Разделение свойств"}),`
`,e.jsx(r.h1,{id:"класс-propertiesseparator",children:"Класс PropertiesSeparator"}),`
`,e.jsxs(r.p,{children:["Класс ",e.jsx(r.code,{children:"PropertiesSeparator"})," предназначен для автоматического преобразования плоской структуры токенов с составными именами (использующими разделители) в иерархическую структуру вложенных объектов. Это позволяет организовывать свойства логически, например, превращая ",e.jsx(r.code,{children:"button.primary.background"})," в ",e.jsx(r.code,{children:"{ button: { primary: { background: ... } } }"}),"."]}),`
`,e.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Автоматическая вложенность"})," — преобразует плоские ключи с разделителями (по умолчанию ",e.jsx(r.code,{children:"."}),") во вложенные объекты."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Рекурсивная обработка"})," — поддерживает неограниченную глубину вложенности (с возможностью ограничения через конфигурацию)."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Умное слияние"})," — корректно объединяет новые под-свойства с уже существующими объектами, используя рекурсивное замещение."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Очистка имен"})," — автоматически удаляет технические префиксы и суффиксы (например, базовые имена разделителей) перед обработкой."]}),`
`]}),`
`,e.jsx(r.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(r.p,{children:["Класс предоставляет статические методы, поэтому его не нужно инициализировать через ",e.jsx(r.code,{children:"new"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import { PropertiesSeparator } from '@dxtmisha/scripts'

// Использование статических методов
const results = PropertiesSeparator.to(rawProperties)
`})}),`
`,e.jsx(r.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(r.h3,{id:"is",children:e.jsx(r.code,{children:"is"})}),`
`,e.jsxs(r.p,{children:["Статический метод для быстрой проверки, содержит ли предоставленный список свойств ключи, требующие разделения. Он сканирует верхний уровень (и вложенные уровни до предела ",e.jsx(r.code,{children:"limit"}),") на наличие символов-разделителей в именах."]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Параметры:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"properties: PropertyList"})," — список свойств для анализа."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"limit: number"})," — максимальная глубина проверки (по умолчанию берется из ",e.jsx(r.code,{children:"PropertiesConfig"}),")."]}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Возвращает:"})," ",e.jsx(r.code,{children:"boolean"})," — ",e.jsx(r.code,{children:"true"}),", если хотя бы один ключ содержит разделитель."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const needsSplitting = PropertiesSeparator.is(myProperties);
// Результат: true, если есть ключи типа "color.blue.50"
`})}),`
`,e.jsx(r.h3,{id:"to",children:e.jsx(r.code,{children:"to"})}),`
`,e.jsx(r.p,{children:"Статический метод, который выполняет фактическую трансформацию плоского списка свойств во вложенную структуру. Метод рекурсивно обходит все элементы и, если находит ключ с разделителем, «оборачивает» свойство в цепочку вложенных объектов согласно сегментам имени."}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Параметры:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"properties: PropertyList"})," — список свойств для трансформации."]}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Возвращает:"})," ",e.jsx(r.code,{children:"PropertyList"})," — новый список свойств с иерархической структурой."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`const nestedProperties = PropertiesSeparator.to({
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
`,e.jsx(r.h2,{id:"операции",children:"Операции"}),`
`,e.jsx(r.h3,{id:"механизм-разделения-имен",children:"Механизм разделения имен"}),`
`,e.jsxs(r.p,{children:["Процесс трансформации в ",e.jsx(r.code,{children:"PropertiesSeparator"})," проходит следующие этапы:"]}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Обнаружение разделителя"}),": Метод ",e.jsx(r.code,{children:"to"})," проверяет имя каждого свойства через ",e.jsx(r.code,{children:"PropertiesKeys.isSeparator"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Сегментация"}),": Если разделитель найден, имя разбивается на части (например, ",e.jsx(r.code,{children:"a.b.c"})," -> ",e.jsx(r.code,{children:"['a', 'b', 'c']"}),"). Перед этим удаляются лишние технические символы через ",e.jsx(r.code,{children:"removeBasicName"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Обертывание (Wrapping)"}),": Метод ",e.jsx(r.code,{children:"wrap"})," рекурсивно создает вложенные объекты ",e.jsx(r.code,{children:"value"}),", помещая оригинальный элемент свойства в самый глубокий уровень. При этом промежуточным объектам добавляется флаг ",e.jsx(r.code,{children:"__wrap: true"}),", указывающий на их служебный характер."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Рекурсивное слияние"}),": Полученная «ветка» объединяется с основным объектом ",e.jsx(r.code,{children:"data"})," через ",e.jsx(r.code,{children:"replaceRecursive"}),", что позволяет нескольким свойствам с одной базой (например, ",e.jsx(r.code,{children:"blue.50"})," и ",e.jsx(r.code,{children:"blue.100"}),") корректно собраться в одном объекте ",e.jsx(r.code,{children:"blue"}),"."]}),`
`]}),`
`,e.jsx(r.h2,{id:"примеры",children:"Примеры"}),`
`,e.jsx(r.h3,{id:"группировка-цветов-палитры",children:"Группировка цветов палитры"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import { PropertiesSeparator } from '@dxtmisha/scripts'

const flatPalette = {
  'blue.50': { value: '#eef' },
  'blue.100': { value: '#ccf' }
}

const tree = PropertiesSeparator.to(flatPalette)
// Свойства теперь сгруппированы в объекте tree.blue.value
`})})]})}function j(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{j as default};
