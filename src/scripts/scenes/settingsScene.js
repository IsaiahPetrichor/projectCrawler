export default class SettingsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'SettingsScene' })
  }

  create() {
    this.add
      .text(960, 50, 'Settings', {
        fontSize: '5em',
        fill: '#000'
      })
      .setOrigin(0.5)

    this.backButton = this.add.rectangle(960, 1000, 300, 75, 0x000000, 0.5)
    this.add.text(960, 1000, 'Back', { fontSize: '32px' }).setOrigin(0.5)
    this.backButton.setInteractive()

    this.backButton.on('pointerdown', () => {
      this.scene.start('LobbyScene')
    })
  }
}
