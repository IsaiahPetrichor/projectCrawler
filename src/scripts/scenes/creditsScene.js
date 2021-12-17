import FpsText from '../objects/fpsText'
import Doorway from '../objects/doorway'
import controls from '../actions/controls'
import player from '../objects/player'

const gameState = {
  speed: 2.5
}

const textStyle = {
  fontFamily: 'Arial',
  fontSize: '20px',
  fill: '#000'
}

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'CreditsScene' })
  }

  create() {
    // create fps counter
    this.fpsText = new FpsText(this)

    // create player
    player(this, gameState, { x: 150, y: 540 })

    // credits objects
    this.isaiah = {
      object: this.add.rectangle(150, 300, 100, 250, 0x0000aa),
      name: this.add.text(150, 140, 'Isaiah', textStyle).setOrigin(0.5),
      title: this.add.text(150, 160, 'Lead Front-End Developer', textStyle).setOrigin(0.5)
    }

    // create exit to lobby
    this.exit = new Doorway(this, 50, 540, 'LobbyScene', 'Lobby', gameState)
  }

  update() {
    this.fpsText.update()

    controls(gameState)
  }
}
