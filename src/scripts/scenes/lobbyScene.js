import FpsText from '../objects/fpsText'
import Doorway from '../objects/doorway'
import controls from '../actions/controls'
import player from '../objects/player'

const gameState = {
  speed: 2.5
}

export default class LobbyScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LobbyScene' })
  }

  create() {
    // create fps counter
    this.fpsText = new FpsText(this)

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 20, 15, `Game v0.1.1 | Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '18px'
      })
      .setOrigin(1, 0)

    // create player
    player(this, gameState, { x: 960, y: 540 })

    // create settings entrance
    const settings = new Doorway(this, 50, 540, 'SettingsScene', 'Settings', gameState)

    // create credits entrance
    const credits = new Doorway(this, 1870, 540, 'CreditsScene', 'Credits', gameState)
  }

  update() {
    this.fpsText.update()

    // create controls
    controls(gameState)
  }
}
