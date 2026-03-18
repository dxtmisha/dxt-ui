import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Classes/Formatters - Data Formatting Utility"}),`
`,e.jsx(n.h1,{id:"formatters-class",children:"Formatters Class"}),`
`,e.jsxs(n.p,{children:["A specialized class for formatting lists of data based on provided configuration. It acts as a bridge between raw data and localized, human-readable strings, leveraging the ",e.jsx(n.code,{children:"GeoIntl"})," singleton for consistent formatting across different locales."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Declarative Configuration"})," — Define formatting rules once and apply them to an entire dataset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Support for Multiple Types"})," — Built-in support for currency, dates, names, numbers, plurals, and units."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Custom Transformations"})," — Ability to provide custom functions for unique formatting needs."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type Safety"})," — Full TypeScript support for items, options, and resulting formatted lists."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic Key Generation"})," — Automatically adds formatted values to items with a ",e.jsx(n.code,{children:"Format"})," suffix (e.g., ",e.jsx(n.code,{children:"price"})," becomes ",e.jsx(n.code,{children:"priceFormat"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"Formatters(options, list)"})," constructor."]}),`
`,e.jsx(n.h3,{id:"generic-constraints",children:"Generic Constraints"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Options extends FormattersOptionsList"})," — type of formatting options."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"List extends FormattersList<FormattersListItem> | FormattersListItem"})," — type of the input data (array or single item)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Item extends (List extends any[] ? List[number] : List)"})," — type of a single item in the list."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options: Options"})," — formatting options for each column/property."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"list?: List"})," — initial list of data to format."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Formatters } from '@dxtmisha/functional-basic'

// 1. Define formatting options
const options = {
  price: { 
    type: 'currency', 
    options: { currencyPropName: 'currency' } 
  },
  created: { 
    type: 'date', 
    options: { type: 'datetime' } 
  },
  user: {
    type: 'name',
    options: { lastPropName: 'surname', firstPropName: 'name' }
  },
  weight: { 
    type: 'unit', 
    options: { unit: 'kilogram' } 
  },
  count: { 
    type: 'plural', 
    options: { words: 'apple|apples' } 
  },
  status: {
    transformation: (value: number) => value === 1 ? 'Active' : 'Inactive'
  }
}

// 2. Initial data (can be an array or a single object)
const data = [
  {
    price: 100,
    currency: 'USD',
    created: '2024-03-07T12:00:00',
    name: 'John',
    surname: 'Doe',
    weight: 75,
    count: 5,
    status: 1
  }
]

// 3. Initialization
const formatter = new Formatters(options, data)
`})}),`
`,e.jsx(n.h2,{id:"processing-data",children:"Processing Data"}),`
`,e.jsx(n.h3,{id:"to",children:e.jsx(n.code,{children:"to"})}),`
`,e.jsx(n.p,{children:"Processes the data and returns the result. If the input was an array, it returns a new array of enriched items. If the input was a single item, it returns that single enriched item."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"FormattersListColumns<Item, Options> | FormattersListColumnItem<Item, Options>"})," — enriched data with additional ",e.jsx(n.code,{children:"*Format"})," properties."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const result = formatter.to()
/*
Result (if array): [
  { 
    id: 101, 
    price: 100, 
    currency: 'USD', 
    priceFormat: '$100.00', 
    status: 1, 
    statusFormat: 'Active',
    ... 
  }
]

Result (if single item): { 
  price: 100, 
  priceFormat: '$100.00', 
  ... 
}
*/
`})}),`
`,e.jsx(n.h2,{id:"retrieval-and-data-management",children:"Retrieval and Data Management"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"is(): boolean"})," — Checks if the list/item is set."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isArray(): boolean"})," — Checks if the current data is an array."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"length(): number"})," — Returns the count of records in the list."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getList(): Item[]"})," — Returns the current list of data as an array."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getOptions(): Options"})," — Returns the current formatting configuration mapping."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setList(list?: List): this"})," — Updates the data and returns the instance for chaining."]}),`
`]}),`
`,e.jsx(n.h2,{id:"configuration-structure",children:"Configuration Structure"}),`
`,e.jsxs(n.p,{children:["The configuration object passed to the constructor is a map where each key corresponds to a property name in your data. Each value must follow the ",e.jsx(n.code,{children:"FormattersOptionsItem"})," structure."]}),`
`,e.jsx(n.h3,{id:"main-item-structure",children:"Main Item Structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`{
  // 1. Specify the formatting type
  type: 'currency' | 'date' | 'name' | 'number' | 'plural' | 'unit',

  // 2. Pass type-specific parameters here
  options: { ... },

  // 3. Or use a custom function (overrides type-specific logic)
  transformation: (value, item, options) => string
}
`})}),`
`,e.jsx(n.h2,{id:"specific-parameters",children:"Specific Parameters"}),`
`,e.jsxs(n.p,{children:["Below are the parameters available within the ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"options"})})," property for each type."]}),`
`,e.jsxs(n.h3,{id:"currency-currency",children:["Currency (",e.jsx(n.code,{children:"currency"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"currencyPropName?: string"})," — Property in the item containing the currency code (defaults to ",e.jsx(n.code,{children:"item.currency"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: string | Intl.NumberFormatOptions"})," — Fixed currency code or full ",e.jsx(n.code,{children:"Intl"})," options."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"numberOnly?: boolean"})," — If ",e.jsx(n.code,{children:"true"}),", returns only the formatted number without the symbol."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"date-date",children:["Date (",e.jsx(n.code,{children:"date"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type?: GeoDate"})," — Preset type: ",e.jsx(n.code,{children:"full"}),", ",e.jsx(n.code,{children:"datetime"}),", ",e.jsx(n.code,{children:"date"}),", ",e.jsx(n.code,{children:"year-month"}),", ",e.jsx(n.code,{children:"year"}),", ",e.jsx(n.code,{children:"month"}),", ",e.jsx(n.code,{children:"day"}),", ",e.jsx(n.code,{children:"day-month"}),", ",e.jsx(n.code,{children:"time"}),", ",e.jsx(n.code,{children:"hour-minute"}),", ",e.jsx(n.code,{children:"hour"}),", ",e.jsx(n.code,{children:"minute"}),", ",e.jsx(n.code,{children:"second"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions"})," — Additional ",e.jsx(n.code,{children:"Intl"})," date options or month style."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hour24?: boolean"})," — Forces 24-hour format if ",e.jsx(n.code,{children:"true"}),"."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"name-name",children:["Name (",e.jsx(n.code,{children:"name"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lastPropName?: string"})," — Field for last name (default: ",e.jsx(n.code,{children:"lastName"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"firstPropName?: string"})," — Field for first name (default: ",e.jsx(n.code,{children:"firstName"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"surname?: string"})," — Field for surname (default: ",e.jsx(n.code,{children:"surname"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"short?: boolean"})," — Whether to use short format (initials)."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"number-number",children:["Number (",e.jsx(n.code,{children:"number"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.NumberFormatOptions"})," — Standard ",e.jsx(n.code,{children:"Intl"})," number options."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"plural-plural",children:["Plural (",e.jsx(n.code,{children:"plural"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"words: string"})," — Word forms separated by ",e.jsx(n.code,{children:"|"})," (e.g., ",e.jsx(n.code,{children:'"apple|apples"'}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Intl.PluralRulesOptions"})," — Plural rule settings."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"optionsNumber?: Intl.NumberFormatOptions"})," — Formatting for the number itself."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"unit-unit",children:["Unit (",e.jsx(n.code,{children:"unit"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"unit: string | Intl.NumberFormatOptions"})," — The unit to display (e.g., ",e.jsx(n.code,{children:"'kilometer'"}),", ",e.jsx(n.code,{children:"'kilogram'"}),")."]}),`
`]})]})}function u(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{u as default};
