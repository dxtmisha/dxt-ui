export class TranslatePostCommand {
  static post(
    command: string,
    data?: any
  ) {
    parent.postMessage(
      {
        pluginMessage: {
          command,
          data
        }
      },
      '*'
    )
  }
}
