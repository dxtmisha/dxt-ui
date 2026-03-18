import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/scripts/Classes/PropertiesWrap - Оптимизация структуры"}),`
`,n.jsx(r.h1,{id:"класс-propertieswrap",children:"Класс PropertiesWrap"}),`
`,n.jsxs(r.p,{children:["Класс ",n.jsx(r.code,{children:"PropertiesWrap"})," предназначен для автоматической оптимизации структуры токенов в дизайн-системе. Его основная задача — находить повторяющиеся значения свойств на одном уровне вложенности и выносить их на родительский уровень. Это позволяет существенно сократить объем JSON/JS конфигов и упростить их поддержку."]}),`
`,n.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Устранение дубликатов"})," — автоматически выносит общие свойства группы компонентов выше по иерархии."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Рекурсивная оптимизация"})," — обрабатывает дерево свойств на любую глубину."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Умное слияние"})," — находит свойства с максимальным количеством повторений для наиболее эффективного сжатия структуры."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Прозрачность"})," — использует системный ключ ",n.jsx(r.code,{children:"wrap"})," для идентификации блоков, требующих оптимизации."]}),`
`]}),`
`,n.jsx(r.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(r.p,{children:["Класс предоставляет статические методы и не требует создания экземпляра через ",n.jsx(r.code,{children:"new"}),"."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`import { PropertiesWrap } from '@dxtmisha/scripts'

// Оптимизация структуры свойств (мутирует исходный объект)
PropertiesWrap.to(myProperties)
`})}),`
`,n.jsx(r.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(r.h3,{id:"to",children:n.jsx(r.code,{children:"to"})}),`
`,n.jsxs(r.p,{children:["Статический метод, который запускает процесс оптимизации. Он обходит дерево свойств и, если встречает блок с флагом ",n.jsx(r.code,{children:"_wrap"}),", анализирует его содержимое. Если внутри блока обнаружены идентичные свойства у дочерних элементов, они будут вынесены на уровень текущего блока, а дубликаты у дочерних элементов — удалены."]}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Параметры:"})}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"properties: PropertyList"})," — объект со списком свойств, который необходимо оптимизировать."]}),`
`]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`const tokens = {
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
`,n.jsx(r.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(r.h3,{id:"алгоритм-оптимизации-how-it-works",children:"Алгоритм оптимизации (How it works)"}),`
`,n.jsx(r.p,{children:"Процесс сжатия структуры проходит через следующие этапы:"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Поиск флага"}),": Система ищет в объекте свойство ",n.jsx(r.code,{children:"_wrap"})," (определено в ",n.jsx(r.code,{children:"PropertyKey.wrap"}),")."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Сбор статистики (getSelectors)"}),": Если флаг найден, класс собирает информацию о всех свойствах дочерних элементов (названия и их значения)."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Анализ повторов (getMaxRepeat)"}),": Определяется свойство, которое чаще всего встречается с одним и тем же значением."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Перенос данных"}),": Найденное общее свойство добавляется в текущий (родительский) блок."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Очистка (removeProperties)"}),": Данное свойство удаляется из всех дочерних элементов, где оно имело идентичное значение."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Завершение"}),": Флаг ",n.jsx(r.code,{children:"_wrap"})," удаляется из объекта."]}),`
`]}),`
`,n.jsx(r.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(r.h3,{id:"сжатие-конфигурации-темы",children:"Сжатие конфигурации темы"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`import { PropertiesWrap } from '@dxtmisha/scripts'

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
`})})]})}function x(e={}){const{wrapper:r}={...i(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{x as default};
