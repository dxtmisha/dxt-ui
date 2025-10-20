import { MetaManager } from './MetaManager'

import { MetaOpenGraphTag } from '../types/metaTypes'

export class MetaOg extends MetaManager<MetaOpenGraphTag[]> {
  constructor() {
    super(Object.values(MetaOpenGraphTag), true)
  }
}
