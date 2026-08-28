// export:none

import basicTypesTs from './constructors/basicTypes.ts?raw'
import constructorsTs from './constructors/Constructors.ts?raw'
import constructorsDesignTsx from './constructors/ConstructorsDesign.tsx?raw'
import indexTs from './constructors/index.ts?raw'
import propsTs from './constructors/props.ts?raw'
import styleScss from './constructors/style.scss?raw'
import typesTs from './constructors/types.ts?raw'

/** Constructor template files / Файлы шаблонов конструкторов */
export const constructorTemplates: Record<string, string> = {
  'basicTypes.ts': basicTypesTs,
  'Constructors.ts': constructorsTs,
  'ConstructorsDesign.tsx': constructorsDesignTsx,
  'index.ts': indexTs,
  'props.ts': propsTs,
  'style.scss': styleScss,
  'types.ts': typesTs
}
