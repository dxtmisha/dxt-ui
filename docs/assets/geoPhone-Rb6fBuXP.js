import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-C8vOrmRQ.js";import{M as r}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function s(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/functional/ru/Classes/GeoPhone"}),`
`,n.jsx(e.h1,{id:"класс-geophone",children:"Класс GeoPhone"}),`
`,n.jsx(e.p,{children:"Статический класс для хранения и обработки масок телефонных номеров. Предоставляет методы для работы с международными телефонными кодами, форматирования номеров по маскам и определения стран по телефонным номерам."}),`
`,n.jsx(e.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Международные телефонные коды"})," — поддержка всех международных кодов стран"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Маски телефонов"})," — автоматическое форматирование номеров по национальным стандартам"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Определение страны по номеру"})," — идентификация страны на основе телефонного номера"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Древовидная структура кодов"})," — эффективный поиск и сопоставление номеров"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Внутренние коды стран"})," — поддержка специальных символов для национальных номеров"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Валидация номеров"})," — проверка корректности телефонных номеров"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Статические методы"})," — все операции доступны без создания экземпляра"]}),`
`]}),`
`,n.jsx(e.h2,{id:"статические-методы",children:"Статические методы"}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Получение объекта с информацией о телефонном коде и стране."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code: string"})," — код страны и языка"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoPhoneValue | undefined"})," — объект с информацией о телефонном коде или undefined"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoPhone } from '@dxtmisha/functional'

// Получение информации о России
const russiaPhone = GeoPhone.get('RU')
console.log(russiaPhone)
// {
//   phone: 7,           // международный код
//   within: 8,          // внутренний код
//   mask: [             // массив масок
//     '+7 *** ***-**-**',
//     '+7 (***) ***-**-**'
//   ],
//   value: 'RU'         // код страны
// }

// Получение информации о США
const usaPhone = GeoPhone.get('US')
console.log(usaPhone)
// {
//   phone: 1,
//   within: 1,
//   mask: ['+1 (***) ***-****'],
//   value: 'US'
// }

// Получение информации о несуществующей стране
const unknown = GeoPhone.get('XX')
console.log(unknown) // undefined
`})}),`
`,n.jsx(e.h3,{id:"getbyphone",children:n.jsx(e.code,{children:"getByPhone"})}),`
`,n.jsx(e.p,{children:"Получение информации по телефонному номеру."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"phone: string"})," — номер телефона"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoPhoneMapInfo"})," — объект с информацией о номере"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Анализ российского номера
const russianNumber = GeoPhone.getByPhone('+79161234567')
console.log(russianNumber)
// {
//   item: {
//     items: [...],      // массив возможных стран
//     info: {...},       // основная информация
//     value: 'RU',       // код страны
//     mask: [...],       // доступные маски
//     maskFull: [...],   // полные маски
//     next: {...}        // следующие возможные цифры
//   },
//   phone: '9161234567'  // номер без кода страны
// }

// Анализ американского номера
const americanNumber = GeoPhone.getByPhone('+12125551234')
console.log(americanNumber)
// {
//   item: { value: 'US', ... },
//   phone: '2125551234'
// }

// Анализ неполного номера
const partialNumber = GeoPhone.getByPhone('+7916')
console.log(partialNumber)
// {
//   item: { value: 'RU', ... },
//   phone: '916'
// }
`})}),`
`,n.jsx(e.h3,{id:"getbycode",children:n.jsx(e.code,{children:"getByCode"})}),`
`,n.jsx(e.p,{children:"Получение полных данных о маске по коду страны."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code: string"})," — код страны и языка"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoPhoneMap | undefined"})," — объект с данными о маске или undefined"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Получение маски для России
const russiaMask = GeoPhone.getByCode('RU')
console.log(russiaMask)
// {
//   items: [...],        // массив элементов
//   info: {...},         // информация о стране
//   value: 'RU',         // код страны
//   mask: [              // маски с внутренними символами
//     '+7 ~ *** ***-**-**',
//     '+7 (~***) ***-**-**'
//   ],
//   maskFull: [          // полные маски
//     '+7 * *** ***-**-**',
//     '+7 (****) ***-**-**'
//   ],
//   next: {...}          // возможные следующие цифры
// }

// Получение маски для Германии
const germanyMask = GeoPhone.getByCode('DE')
console.log(germanyMask?.mask) // ['+49 *** ******', ...]
`})}),`
`,n.jsx(e.h3,{id:"getlist",children:n.jsx(e.code,{children:"getList"})}),`
`,n.jsx(e.p,{children:"Получение массива из списка всех телефонных кодов."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"GeoPhoneValue[]"})," — массив всех телефонных кодов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Получение полного списка
const allPhones = GeoPhone.getList()
console.log(allPhones.length) // количество стран с телефонными кодами

// Пример структуры данных
console.log(allPhones[0])
// {
//   phone: 1,             // код страны
//   within: 1,            // внутренний код
//   mask: ['+1 (***) ***-****'],
//   value: 'US'           // код страны
// }

// Поиск стран с кодом +7
const code7Countries = allPhones.filter(item => item.phone === 7)
console.log(code7Countries) // Россия, Казахстан
`})}),`
`,n.jsx(e.h3,{id:"getmap",children:n.jsx(e.code,{children:"getMap"})}),`
`,n.jsx(e.p,{children:"Получение карты дерева, отсортированной по кодам."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Record<string, GeoPhoneMap>"})," — карта дерева поиска"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Получение полной карты
const phoneMap = GeoPhone.getMap()

// Навигация по дереву для номера +7916...
console.log(phoneMap['7'])        // информация о коде +7
console.log(phoneMap['7'].next)   // возможные следующие цифры
console.log(phoneMap['7'].next['9']) // информация о +79...

// Проверка доступных кодов
const availableCodes = Object.keys(phoneMap)
console.log(availableCodes) // ['1', '7', '33', '49', ...]
`})}),`
`,n.jsx(e.h3,{id:"tomask",children:n.jsx(e.code,{children:"toMask"})}),`
`,n.jsx(e.p,{children:"Преобразование номера в маску."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"phone: string"})," — номер телефона"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"masks?: string[]"})," — массив масок для преобразования"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string | undefined"})," — отформатированный номер или undefined"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Форматирование российского номера
const ruMasks = ['+7 (***) ***-**-**', '+7 *** ***-**-**']
const formatted1 = GeoPhone.toMask('9161234567', ruMasks)
console.log(formatted1) // '+7 (916) 123-45-67'

// Форматирование американского номера
const usMasks = ['+1 (***) ***-****']
const formatted2 = GeoPhone.toMask('2125551234', usMasks)
console.log(formatted2) // '+1 (212) 555-1234'

// Форматирование с неподходящей маской
const wrongFormat = GeoPhone.toMask('123', usMasks)
console.log(wrongFormat) // undefined (длина не совпадает)

// Автоматическое определение и форматирование
const phoneInfo = GeoPhone.getByPhone('+79161234567')
if (phoneInfo.item && phoneInfo.phone) {
  const autoFormatted = GeoPhone.toMask(phoneInfo.phone, phoneInfo.item.mask)
  console.log(autoFormatted) // '+7 ~ 916 123-45-67'
}
`})}),`
`,n.jsx(e.h3,{id:"removezero",children:n.jsx(e.code,{children:"removeZero"})}),`
`,n.jsx(e.p,{children:"Удаление кода страны из входного номера."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"phone: string"})," — номер телефона"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — номер без ведущих символов"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Удаление ведущего нуля
const withZero = GeoPhone.removeZero('09161234567')
console.log(withZero) // '9161234567'

// Замена 8 на 9 для российских номеров
const withEight = GeoPhone.removeZero('89161234567')
console.log(withEight) // '9161234567'

// Номер без изменений
const normal = GeoPhone.removeZero('9161234567')
console.log(normal) // '9161234567'

// Международный номер без изменений
const international = GeoPhone.removeZero('+79161234567')
console.log(international) // '+79161234567'
`})}),`
`,n.jsx(e.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,n.jsx(e.h3,{id:"компонент-ввода-телефона",children:"Компонент ввода телефона"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class PhoneInput {
  constructor(inputElement, countryCode = 'RU') {
    this.input = inputElement
    this.countryCode = countryCode
    this.setupMask()
    this.attachEvents()
  }

  setupMask() {
    const phoneData = GeoPhone.get(this.countryCode)
    if (phoneData?.mask.length) {
      this.currentMask = phoneData.mask[0]
      this.input.placeholder = this.currentMask
    }
  }

  attachEvents() {
    this.input.addEventListener('input', (e) => {
      const value = e.target.value.replace(/\\D/g, '')
      const phoneData = GeoPhone.get(this.countryCode)
      const formatted = GeoPhone.toMask(value, phoneData?.mask)
      if (formatted) e.target.value = formatted
    })
  }
}

// Использование
new PhoneInput(document.getElementById('phone'), 'RU')
`})}),`
`,n.jsx(e.h3,{id:"валидатор-номеров",children:"Валидатор номеров"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const validator = {
  validate(phone, countryCode) {
    const phoneInfo = GeoPhone.getByPhone(phone)
    if (!phoneInfo.item) return { isValid: false, error: 'Неизвестная страна' }

    const isValidLength = phoneInfo.item.mask.some(mask => {
      const requiredLength = mask.replace(/[^*]/g, '').length
      return phoneInfo.phone.length === requiredLength
    })

    return {
      isValid: isValidLength,
      country: phoneInfo.item.value,
      formatted: GeoPhone.toMask(phoneInfo.phone, phoneInfo.item.mask)
    }
  }
}

// Использование
console.log(validator.validate('+79161234567')) // { isValid: true, ... }
`})}),`
`,n.jsx(e.h3,{id:"анализатор-номеров",children:"Анализатор номеров"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const analyzer = {
  extractPhones(text) {
    const patterns = [
      /\\+\\d{1,3}\\s*\\(?\\d{1,4}\\)?\\s*[\\d\\s\\-\\(\\)]{6,}/g,
      /\\b[78]\\d{10}\\b/g
    ]

    const found = new Set()
    patterns.forEach(pattern => {
      const matches = text.match(pattern) || []
      matches.forEach(match => found.add(match.trim()))
    })

    return Array.from(found).map(phone => ({
      original: phone,
      analysis: GeoPhone.getByPhone(phone)
    }))
  }
}

// Использование
const phones = analyzer.extractPhones('Звоните: +7 916 123-45-67')
console.log(phones) // Найденные номера с анализом
`})}),`
`,n.jsx(e.p,{children:"Класс GeoPhone предоставляет мощный инструментарий для работы с телефонными номерами, включая валидацию, форматирование, определение стран и анализ номеров с поддержкой международных стандартов."})]})}function p(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{p as default};
