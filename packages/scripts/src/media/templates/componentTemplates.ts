// export:none

import designComponentMdx from './component/DesignComponent.mdx?raw'
import designComponentStories from './component/DesignComponent.stories.ts?raw'
import designComponentVue from './component/DesignComponent.vue?raw'
import designComponentAiWikiVue from './component/DesignComponentAiWiki.vue?raw'
import indexTs from './component/index.ts?raw'
import propsTs from './component/props.ts?raw'
import styleTokenScss from './component/styleToken.scss?raw'
import wikiTs from './component/wiki.ts?raw'
import wikiDataTs from './component/wikiData.ts?raw'

/** Component template files / Файлы шаблонов компонента */
export const componentTemplates: Record<string, string> = {
  'DesignComponent.mdx': designComponentMdx,
  'DesignComponent.stories.ts': designComponentStories,
  'DesignComponent.vue': designComponentVue,
  'DesignComponentAiWiki.vue': designComponentAiWikiVue,
  'index.ts': indexTs,
  'props.ts': propsTs,
  'styleToken.scss': styleTokenScss,
  'wiki.ts': wikiTs,
  'wikiData.ts': wikiDataTs
}
