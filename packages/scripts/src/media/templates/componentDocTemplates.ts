// export:none

import componentDocVue from './componentDoc/ComponentDoc.vue?raw'
import indexTs from './componentDoc/index.ts?raw'
import materialsPromptMd from './componentDoc/materials/prompt.md?raw'
import subcomponentsGitignoreTxt from './componentDoc/subcomponents/_.gitignore.txt?raw'
import typesTs from './componentDoc/types.ts?raw'
import wikiComponentDocMdx from './componentDoc/wiki/ComponentDoc.mdx?raw'
import wikiComponentDocStoriesTs from './componentDoc/wiki/ComponentDoc.stories.ts?raw'
import wikiPromptMd from './componentDoc/wiki/prompt.md?raw'

/** Component doc template files / Файлы шаблонов документации компонента */
export const componentDocTemplates: Record<string, string> = {
  'ComponentDoc.vue': componentDocVue,
  'index.ts': indexTs,
  'types.ts': typesTs,
  'materials/prompt.md': materialsPromptMd,
  'subcomponents/_.gitignore.txt': subcomponentsGitignoreTxt,
  'wiki/ComponentDoc.mdx': wikiComponentDocMdx,
  'wiki/ComponentDoc.stories.ts': wikiComponentDocStoriesTs,
  'wiki/prompt.md': wikiPromptMd
}
