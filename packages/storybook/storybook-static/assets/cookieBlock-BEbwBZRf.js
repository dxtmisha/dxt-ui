import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-Zkkrlp1B.js";import{M as i}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function s(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/functional/en/Classes/CookieBlock"}),`
`,e.jsx(n.h1,{id:"cookieblock-class",children:"CookieBlock Class"}),`
`,e.jsx(n.p,{children:"Static class for managing cookie access status and privacy compliance. Provides a simple interface to block or allow cookies throughout the application, integrating with the Cookie class to ensure privacy regulations compliance like GDPR."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global cookie control"})," — centralized control over cookie usage across entire application"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Privacy compliance"})," — helps implement GDPR, CCPA, and other privacy regulations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Persistent settings"})," — uses DataStorage to remember user's cookie preferences"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Integration with Cookie class"})," — Cookie class automatically respects CookieBlock settings"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Simple API"})," — just two methods for getting and setting cookie block status"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Browser compatibility"})," — works safely in all environments"]}),`
`]}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsx(n.p,{children:"Gets current cookie block status."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"boolean"})," — true if cookies are blocked, false if allowed"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { CookieBlock } from '@dxtmisha/functional'

// Check if cookies are currently blocked
const isBlocked = CookieBlock.get()
console.log('Cookies blocked:', isBlocked) // false by default

if (isBlocked) {
  console.log('Cookies are blocked by user preference')
} else {
  console.log('Cookies are allowed')
}
`})}),`
`,e.jsx(n.h3,{id:"set",children:e.jsx(n.code,{children:"set"})}),`
`,e.jsx(n.p,{children:"Sets cookie block status and persists the setting."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: boolean"})," — true to block cookies, false to allow"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Block all cookies
CookieBlock.set(true)
console.log('Cookies blocked:', CookieBlock.get()) // true

// Allow cookies
CookieBlock.set(false)
console.log('Cookies allowed:', CookieBlock.get()) // false

// Setting persists across browser sessions
// User preference is saved in localStorage
`})}),`
`,e.jsx(n.h2,{id:"integration-with-cookie-class",children:"Integration with Cookie Class"}),`
`,e.jsx(n.p,{children:"The CookieBlock class automatically prevents Cookie operations when blocking is enabled:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Cookie, CookieBlock } from '@dxtmisha/functional'

// Create cookie instance
const userPrefs = new Cookie('user-preferences')

// Initially cookies are allowed
CookieBlock.set(false)
userPrefs.set({ theme: 'dark', language: 'en' })
console.log('Stored preferences:', userPrefs.get()) // { theme: 'dark', language: 'en' }

// Block cookies
CookieBlock.set(true)

// Cookie operations are now prevented
userPrefs.set({ theme: 'light', language: 'es' }) // This won't actually set the cookie
console.log('Preferences after blocking:', userPrefs.get()) // Still { theme: 'dark', language: 'en' }

// Allow cookies again
CookieBlock.set(false)
userPrefs.set({ theme: 'light', language: 'es' }) // Now this works
console.log('Updated preferences:', userPrefs.get()) // { theme: 'light', language: 'es' }
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"gdpr-cookie-consent",children:"GDPR Cookie Consent"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`class CookieConsent {
  constructor() {
    this.consentCookie = new Cookie('cookie-consent')
  }

  showConsentBanner() {
    const consent = this.consentCookie.get()

    if (consent === undefined) {
      CookieBlock.set(true) // Block until consent
      this.displayBanner()
      return 'banner-shown'
    } else {
      CookieBlock.set(!consent.accepted)
      return consent.accepted ? 'cookies-allowed' : 'cookies-blocked'
    }
  }

  acceptCookies() {
    this.consentCookie.set({
      accepted: true,
      timestamp: Date.now()
    }, { age: 365 * 24 * 60 * 60 })

    CookieBlock.set(false)
    this.hideBanner()
  }

  rejectCookies() {
    this.consentCookie.set({
      accepted: false,
      timestamp: Date.now()
    }, { age: 365 * 24 * 60 * 60 })

    CookieBlock.set(true)
    this.hideBanner()
  }
}

// Usage
const consent = new CookieConsent()
const status = consent.showConsentBanner()
`})}),`
`,e.jsx(n.h3,{id:"privacy-settings-management",children:"Privacy Settings Management"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`class PrivacyManager {
  constructor() {
    this.privacySettings = new Cookie('privacy-settings')
  }

  updatePrivacySettings(settings) {
    this.privacySettings.set(settings, { age: 365 * 24 * 60 * 60 })

    const shouldBlock = !(settings.functional || settings.analytics || settings.marketing)
    CookieBlock.set(shouldBlock)
  }

  hasConsentFor(category) {
    const settings = this.privacySettings.get({ essential: true })
    return settings[category] || false
  }

  acceptAll() {
    this.updatePrivacySettings({
      essential: true,
      functional: true,
      analytics: true,
      marketing: true
    })
  }

  rejectAll() {
    this.updatePrivacySettings({
      essential: true,
      functional: false,
      analytics: false,
      marketing: false
    })
  }
}

// Usage
const privacy = new PrivacyManager()
privacy.acceptAll()
console.log('Analytics allowed:', privacy.hasConsentFor('analytics'))
`})}),`
`,e.jsx(n.h3,{id:"application-initialization",children:"Application Initialization"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`class AppInitializer {
  static initializeCookieCompliance() {
    const consent = new Cookie('cookie-consent')
    const consentData = consent.get()

    if (!consentData) {
      CookieBlock.set(true) // First visit
      return 'pending-consent'
    } else {
      CookieBlock.set(!consentData.accepted)
      return consentData.accepted ? 'cookies-allowed' : 'cookies-blocked'
    }
  }
}

// Application startup
document.addEventListener('DOMContentLoaded', () => {
  const status = AppInitializer.initializeCookieCompliance()
  console.log('Cookie status:', status)
})
`})}),`
`,e.jsx(n.p,{children:"The CookieBlock class helps ensure compliance with GDPR, CCPA, and other privacy laws by providing a foundation for implementing privacy-compliant cookie management."})]})}function h(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{h as default};
