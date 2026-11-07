import { uiCreateApp } from '@dxtmisha/nitro-basic/client'
import { Geo, Icons } from '@dxtmisha/functional'
import { d1MakeIcons } from '@dxtmisha/d1/media'
import { registerFileIcons } from '@dxtmisha/media/files'
import { UsSvg, VnSvg } from '@dxtmisha/media/flags'
import { registerSocialIcons } from '@dxtmisha/media/socials'

import App from './App.vue'
import { routes } from './router'

import '@dxtmisha/d1/style.css'
import './style.scss'

d1MakeIcons()
registerFileIcons()
registerSocialIcons()
Icons.add('flag-us', UsSvg)
Icons.add('flag-vn', VnSvg)

export function createApp() {
  return uiCreateApp(App, {
    api: {
      preparation: async () => {
        console.log(Geo.getLanguage())
      }
    },
    appRouter: {
      routes
    }
  })
}
