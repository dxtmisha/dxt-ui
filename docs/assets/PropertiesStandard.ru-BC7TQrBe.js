import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/scripts/Classes/PropertiesStandard - Стандартизация свойств"}),`
`,n.jsx(e.h1,{id:"класс-propertiesstandard",children:"Класс PropertiesStandard"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"PropertiesStandard"})," является центральным механизмом нормализации данных в дизайн-системе. Его основная задача — преобразовывать «сырые» входные данные токенов (которые могут быть представлены строками, числами или упрощенными объектами) в строго типизированную структуру ",n.jsx(e.code,{children:"PropertyItem"}),", с которой могут работать остальные инструменты системы."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Нормализация данных"})," — гарантирует, что каждое свойство имеет стандартизированный набор полей (",n.jsx(e.code,{children:"value"}),", ",n.jsx(e.code,{children:"type"}),", ",n.jsx(e.code,{children:"index"})," и др.)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Рекурсивная обработка"})," — автоматически стандартизирует вложенные структуры объектов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическое определение типов"})," — пытается определить тип свойства на основе его имени (через ",n.jsx(e.code,{children:"PropertiesTypes"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеллектуальный парсинг"})," — различает обычные значения и специальные мета-свойства (начинающиеся с ",n.jsx(e.code,{children:"__"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Слияние данных"})," — корректно объединяет новые данные с существующими, сохраняя целостность структуры."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Класс предоставляет статические методы, поэтому его не нужно инициализировать через ",n.jsx(e.code,{children:"new"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { PropertiesStandard } from '@dxtmisha/scripts'

// Вызов статического метода
const standardized = PropertiesStandard.to(rawInput)
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"to",children:n.jsx(e.code,{children:"to"})}),`
`,n.jsxs(e.p,{children:["Статический метод, принимающий сырые данные или список свойств и возвращающий полностью нормализованный ",n.jsx(e.code,{children:"PropertyList"}),". Метод выполняет обход всех элементов, определяет их ключи, типы и значения, а также рекурсивно обрабатывает вложенные объекты."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"properties: PropertyListOrData"})," — входные данные свойств в любом поддерживаемом формате."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"PropertyList"})," — объект, в котором каждый элемент приведен к стандарту ",n.jsx(e.code,{children:"PropertyItem"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const result = PropertiesStandard.to({
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
`,n.jsx(e.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(e.h3,{id:"алгоритм-стандартизации-getitem",children:"Алгоритм стандартизации (getItem)"}),`
`,n.jsx(e.p,{children:"При обработке каждого элемента выполняются следующие шаги:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Преобразование в объект"}),": Метод ",n.jsx(e.code,{children:"toItem"})," проверяет тип входного значения. Если это строка или массив, они оборачиваются в объект ",n.jsx(e.code,{children:"{ value: ... }"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Разделение мета-данных"}),": Метод ",n.jsx(e.code,{children:"getValueAndSpecial"})," отделяет полезное значение (",n.jsx(e.code,{children:"value"}),") от специальных ключей управления (например, ",n.jsx(e.code,{children:"__custom"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Определение типа"}),": Если тип не указан явно, метод ",n.jsx(e.code,{children:"addType"})," пытается вычислить его по имени ключа."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Проверка на финальность"}),": Метод ",n.jsx(e.code,{children:"addFull"})," добавляет метки ",n.jsx(e.code,{children:"fullName"})," или ",n.jsx(e.code,{children:"fullValue"}),", если данные не требуют дальнейшей обработки (например, для уже разрешенных ссылок)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Преобразование значений"}),": Через ",n.jsx(e.code,{children:"addValue"})," все числовые значения переводятся в строки с добавлением единиц измерения там, где это необходимо."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Регистрация индекса"}),": Каждому элементу присваивается очищенный ",n.jsx(e.code,{children:"index"})," для быстрой обратной связи."]}),`
`]}),`
`,n.jsx(e.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(e.h3,{id:"стандартизация-сложной-структуры",children:"Стандартизация сложной структуры"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { PropertiesStandard } from '@dxtmisha/scripts'

const data = {
  header: {
    height: 60,
    background: '{color.white}'
  }
}

const standardData = PropertiesStandard.to(data)
// Теперь все поля в standardData.header.value имеют правильную структуру PropertyItem
`})})]})}function a(r={}){const{wrapper:e}={...d(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{a as default};
