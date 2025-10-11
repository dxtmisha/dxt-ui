import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-Dqnce8mp.js";import{M as r}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function s(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/functional/en/Classes/GeoPhone"}),`
`,n.jsx(e.h1,{id:"geophone-class",children:"GeoPhone Class"}),`
`,n.jsx(e.p,{children:"A static class for storing and processing phone number masks. Provides methods for working with international phone codes, formatting numbers according to masks, and identifying countries by phone numbers."}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"International phone codes"})," — support for all international country codes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Phone masks"})," — automatic number formatting according to national standards"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Country detection by number"})," — identifying country based on phone number"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tree structure for codes"})," — efficient search and number matching"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Internal country codes"})," — support for special symbols for national numbers"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Number validation"})," — verification of phone number correctness"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Static methods"})," — all operations available without creating an instance"]}),`
`]}),`
`,n.jsx(e.h2,{id:"static-methods",children:"Static Methods"}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Gets an object with information about the phone code and country."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code: string"})," — country and language code"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"GeoPhoneValue | undefined"})," — object with phone code information or undefined"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoPhone } from '@dxtmisha/functional'

// Get information about Russia
const russiaPhone = GeoPhone.get('RU')
console.log(russiaPhone)
// {
//   phone: 7,           // international code
//   within: 8,          // internal code
//   mask: [             // array of masks
//     '+7 *** ***-**-**',
//     '+7 (***) ***-**-**'
//   ],
//   value: 'RU'         // country code
// }

// Get information about USA
const usaPhone = GeoPhone.get('US')
console.log(usaPhone)
// {
//   phone: 1,
//   within: 1,
//   mask: ['+1 (***) ***-****'],
//   value: 'US'
// }

// Get information about non-existent country
const unknown = GeoPhone.get('XX')
console.log(unknown) // undefined
`})}),`
`,n.jsx(e.h3,{id:"getbyphone",children:n.jsx(e.code,{children:"getByPhone"})}),`
`,n.jsx(e.p,{children:"Gets information by phone number."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"phone: string"})," — phone number"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"GeoPhoneMapInfo"})," — object with number information"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Analyze Russian number
const russianNumber = GeoPhone.getByPhone('+79161234567')
console.log(russianNumber)
// {
//   item: {
//     items: [...],      // array of possible countries
//     info: {...},       // main information
//     value: 'RU',       // country code
//     mask: [...],       // available masks
//     maskFull: [...],   // full masks
//     next: {...}        // next possible digits
//   },
//   phone: '9161234567'  // number without country code
// }

// Analyze American number
const americanNumber = GeoPhone.getByPhone('+12125551234')
console.log(americanNumber)
// {
//   item: { value: 'US', ... },
//   phone: '2125551234'
// }

// Analyze partial number
const partialNumber = GeoPhone.getByPhone('+7916')
console.log(partialNumber)
// {
//   item: { value: 'RU', ... },
//   phone: '916'
// }
`})}),`
`,n.jsx(e.h3,{id:"getbycode",children:n.jsx(e.code,{children:"getByCode"})}),`
`,n.jsx(e.p,{children:"Gets complete mask data by country code."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code: string"})," — country and language code"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"GeoPhoneMap | undefined"})," — object with mask data or undefined"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Get mask for Russia
const russiaMask = GeoPhone.getByCode('RU')
console.log(russiaMask)
// {
//   items: [...],        // array of items
//   info: {...},         // country information
//   value: 'RU',         // country code
//   mask: [              // masks with internal symbols
//     '+7 ~ *** ***-**-**',
//     '+7 (~***) ***-**-**'
//   ],
//   maskFull: [          // full masks
//     '+7 * *** ***-**-**',
//     '+7 (****) ***-**-**'
//   ],
//   next: {...}          // possible next digits
// }

// Get mask for Germany
const germanyMask = GeoPhone.getByCode('DE')
console.log(germanyMask?.mask) // ['+49 *** ******', ...]
`})}),`
`,n.jsx(e.h3,{id:"getlist",children:n.jsx(e.code,{children:"getList"})}),`
`,n.jsx(e.p,{children:"Gets an array from the list of all phone codes."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"GeoPhoneValue[]"})," — array of all phone codes"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Get complete list
const allPhones = GeoPhone.getList()
console.log(allPhones.length) // number of countries with phone codes

// Example data structure
console.log(allPhones[0])
// {
//   phone: 1,             // country code
//   within: 1,            // internal code
//   mask: ['+1 (***) ***-****'],
//   value: 'US'           // country code
// }

// Find countries with code +7
const code7Countries = allPhones.filter(item => item.phone === 7)
console.log(code7Countries) // Russia, Kazakhstan
`})}),`
`,n.jsx(e.h3,{id:"getmap",children:n.jsx(e.code,{children:"getMap"})}),`
`,n.jsx(e.p,{children:"Gets a tree map sorted by codes."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"Record<string, GeoPhoneMap>"})," — search tree map"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Get complete map
const phoneMap = GeoPhone.getMap()

// Navigate tree for number +7916...
console.log(phoneMap['7'])        // information about code +7
console.log(phoneMap['7'].next)   // possible next digits
console.log(phoneMap['7'].next['9']) // information about +79...

// Check available codes
const availableCodes = Object.keys(phoneMap)
console.log(availableCodes) // ['1', '7', '33', '49', ...]
`})}),`
`,n.jsx(e.h3,{id:"tomask",children:n.jsx(e.code,{children:"toMask"})}),`
`,n.jsx(e.p,{children:"Convert number to mask format."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"phone: string"})," — phone number"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"masks?: string[]"})," — array of masks for conversion"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string | undefined"})," — formatted number or undefined"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Format Russian number
const ruMasks = ['+7 (***) ***-**-**', '+7 *** ***-**-**']
const formatted1 = GeoPhone.toMask('9161234567', ruMasks)
console.log(formatted1) // '+7 (916) 123-45-67'

// Format American number
const usMasks = ['+1 (***) ***-****']
const formatted2 = GeoPhone.toMask('2125551234', usMasks)
console.log(formatted2) // '+1 (212) 555-1234'

// Format with inappropriate mask
const wrongFormat = GeoPhone.toMask('123', usMasks)
console.log(wrongFormat) // undefined (length doesn't match)

// Automatic detection and formatting
const phoneInfo = GeoPhone.getByPhone('+79161234567')
if (phoneInfo.item && phoneInfo.phone) {
  const autoFormatted = GeoPhone.toMask(phoneInfo.phone, phoneInfo.item.mask)
  console.log(autoFormatted) // '+7 ~ 916 123-45-67'
}
`})}),`
`,n.jsx(e.h3,{id:"removezero",children:n.jsx(e.code,{children:"removeZero"})}),`
`,n.jsx(e.p,{children:"Removes country code from input number."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"phone: string"})," — phone number"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"string"})," — number without leading symbols"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Remove leading zero
const withZero = GeoPhone.removeZero('09161234567')
console.log(withZero) // '9161234567'

// Replace 8 with 9 for Russian numbers
const withEight = GeoPhone.removeZero('89161234567')
console.log(withEight) // '9161234567'

// Number without changes
const normal = GeoPhone.removeZero('9161234567')
console.log(normal) // '9161234567'

// International number without changes
const international = GeoPhone.removeZero('+79161234567')
console.log(international) // '+79161234567'
`})}),`
`,n.jsx(e.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,n.jsx(e.h3,{id:"phone-input-component",children:"Phone Input Component"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class PhoneInput {
  constructor(inputElement, countryCode = 'US') {
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

// Usage
new PhoneInput(document.getElementById('phone'), 'US')
`})}),`
`,n.jsx(e.h3,{id:"phone-number-validator",children:"Phone Number Validator"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const validator = {
  validate(phone, countryCode) {
    const phoneInfo = GeoPhone.getByPhone(phone)
    if (!phoneInfo.item) return { isValid: false, error: 'Unknown country' }

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

// Usage
console.log(validator.validate('+12125551234')) // { isValid: true, ... }
`})}),`
`,n.jsx(e.h3,{id:"phone-number-analyzer",children:"Phone Number Analyzer"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const analyzer = {
  extractPhones(text) {
    const patterns = [
      /\\+\\d{1,3}\\s*\\(?\\d{1,4}\\)?\\s*[\\d\\s\\-\\(\\)]{6,}/g,
      /\\b\\d{3}[\\s\\-]?\\d{3}[\\s\\-]?\\d{4}\\b/g
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

// Usage
const phones = analyzer.extractPhones('Call: +1 (212) 555-1234')
console.log(phones) // Found numbers with analysis
`})}),`
`,n.jsx(e.p,{children:"The GeoPhone class provides a powerful toolkit for working with phone numbers, including validation, formatting, country detection, and number analysis with support for international standards."})]})}function u(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{u as default};
