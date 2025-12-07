import { GitRead } from '../Git/GitRead'

export class AiDoc {
  constructor(
    protected readonly path: string
  ) {
  }

  make() {
    console.log(`Making AI documentation for path: ${this.path}`)

    this.makeClass()
  }

  makeClass() {
    console.log(`Making AI documentation for class at path: ${this.path}`)

    const list = GitRead.getClassesList()

    console.log('list', GitRead.getListPorcelain(), list)
  }
}
