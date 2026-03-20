export class TranslateBridge {
  static init() {
    figma.ui.onmessage = (msg) => {
      if (msg.type === 'create-rect') {
        const rect = figma.createRectangle()
        figma.currentPage.appendChild(rect)
      }
    }
  }
}
