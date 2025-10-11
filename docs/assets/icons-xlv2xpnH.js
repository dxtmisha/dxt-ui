import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-C8vOrmRQ.js";import{M as r}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/functional/en/Classes/Icons"}),`
`,n.jsx(s.h1,{id:"icons-class",children:"Icons Class"}),`
`,n.jsx(s.p,{children:"A static class for managing icons with asynchronous loading support, global caching, and automatic path generation. Provides centralized storage and optimized loading of SVG icons."}),`
`,n.jsx(s.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Global Caching"})," — automatic saving to window for reuse"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Asynchronous Loading"})," — Promise support and lazy icon loading"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Wait Mode"})," — automatic loading wait with timeout"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Automatic Paths"})," — SVG path generation by name with @ prefix"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Batch Addition"})," — bulk icon addition from objects"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Global URLs"})," — CDN and different environment support"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Existence Check"})," — quick icon availability verification"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Icon List"})," — get all registered icon names"]}),`
`]}),`
`,n.jsx(s.h2,{id:"check-and-retrieval-methods",children:"Check and Retrieval Methods"}),`
`,n.jsx(s.h3,{id:"is",children:n.jsx(s.code,{children:"is"})}),`
`,n.jsx(s.p,{children:"Checks if icon exists in collection."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Parameters:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"index: string"})," — icon name"]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Returns:"})," ",n.jsx(s.code,{children:"boolean"})," — true if icon exists"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`if (Icons.is('user')) {
  // icon available
}
`})}),`
`,n.jsx(s.h3,{id:"get",children:n.jsx(s.code,{children:"get"})}),`
`,n.jsx(s.p,{children:"Returns icon content with asynchronous loading support."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Parameters:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"index: string"})," — icon name"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"url?: string"})," — alternative storage path"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"wait?: number"})," — wait time in ms (default 180000)"]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Returns:"})," ",n.jsx(s.code,{children:"Promise<string>"})," — icon content"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`// Simple retrieval
const icon = await Icons.get('user')

// With alternative URL
const customIcon = await Icons.get('custom', '/assets/')

// Automatic path
const arrowIcon = await Icons.get('@arrow-left') // → /icons/arrow-left.svg
`})}),`
`,n.jsx(s.h3,{id:"getnamelist",children:n.jsx(s.code,{children:"getNameList"})}),`
`,n.jsx(s.p,{children:"Returns list of all registered icons."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Returns:"})," ",n.jsx(s.code,{children:"string[]"})," — array of icon names"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`const iconNames = Icons.getNameList()
console.log(iconNames) // ['user', 'home', 'settings']
`})}),`
`,n.jsx(s.h3,{id:"geturlglobal",children:n.jsx(s.code,{children:"getUrlGlobal"})}),`
`,n.jsx(s.p,{children:"Returns global URL for icons."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Returns:"})," ",n.jsx(s.code,{children:"string"})," — base URL"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`const globalUrl = Icons.getUrlGlobal()
console.log(globalUrl) // '/icons/' or full CDN URL
`})}),`
`,n.jsx(s.h2,{id:"addition-methods",children:"Addition Methods"}),`
`,n.jsx(s.h3,{id:"add",children:n.jsx(s.code,{children:"add"})}),`
`,n.jsx(s.p,{children:"Adds icon to collection."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Parameters:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"index: string"})," — icon name"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"file: IconsItem"})," — file path or Promise with content"]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`// Simple addition
Icons.add('user', '/icons/user.svg')

// SVG content
Icons.add('custom', '<svg>...</svg>')

// Async loading
Icons.add('async', fetch('/api/icon.svg').then(r => r.text()))
`})}),`
`,n.jsx(s.h3,{id:"addload",children:n.jsx(s.code,{children:"addLoad"})}),`
`,n.jsx(s.p,{children:"Adds icon in loading mode."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Parameters:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"index: string"})," — icon name"]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`Icons.addLoad('processing')
// Icon will wait for loading when get() is called
`})}),`
`,n.jsx(s.h3,{id:"addglobal",children:n.jsx(s.code,{children:"addGlobal"})}),`
`,n.jsx(s.p,{children:"Adds global icon."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Parameters:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"index: string"})," — icon name"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"file: string"})," — relative file path"]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`Icons.addGlobal('logo', 'brand/logo.svg')
// Uses getUrlGlobal() + file
`})}),`
`,n.jsx(s.h3,{id:"addbylist",children:n.jsx(s.code,{children:"addByList"})}),`
`,n.jsx(s.p,{children:"Adds icons from object."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Parameters:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"list: Record<string, IconsItem>"})," — object with icons"]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`const uiIcons = {
  'arrow-up': '/icons/arrow-up.svg',
  'arrow-down': '/icons/arrow-down.svg'
}
Icons.addByList(uiIcons)
`})}),`
`,n.jsx(s.h2,{id:"configuration-methods",children:"Configuration Methods"}),`
`,n.jsx(s.h3,{id:"seturl",children:n.jsx(s.code,{children:"setUrl"})}),`
`,n.jsx(s.p,{children:"Changes base path to icon files."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Parameters:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"url: string"})," — new base path"]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`// For development
Icons.setUrl('/dev-icons/')

// For production
Icons.setUrl('https://cdn.example.com/icons/')
`})}),`
`,n.jsx(s.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,n.jsx(s.h3,{id:"icon-initialization",children:"Icon Initialization"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`// Setup base URL
Icons.setUrl('/assets/icons/')

// Add main icons
Icons.addByList({
  'user': 'user.svg',
  'home': 'home.svg',
  'settings': 'settings.svg'
})

// Add dark theme icons
Icons.addByList({
  'user-dark': 'dark/user.svg',
  'home-dark': 'dark/home.svg'
})
`})}),`
`,n.jsx(s.h3,{id:"dynamic-loading",children:"Dynamic Loading"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`async function loadIcon(name) {
  if (!Icons.is(name)) {
    Icons.addLoad(name)
  }
  return await Icons.get(name)
}

// Usage
const userIcon = await loadIcon('user')
document.getElementById('icon').innerHTML = userIcon
`})}),`
`,n.jsx(s.h3,{id:"icon-component",children:"Icon Component"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`class IconComponent {
  async render(iconName) {
    try {
      const iconContent = await Icons.get(iconName)
      return \`<span class="icon">\${iconContent}</span>\`
    } catch (error) {
      return \`<span class="icon-error">❌</span>\`
    }
  }
}
`})}),`
`,n.jsx(s.p,{children:"The Icons class provides efficient icon management with automatic caching, asynchronous loading, and flexible path configuration for different environments."})]})}function x(e={}){const{wrapper:s}={...c(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{x as default};
