import Golem from '../objects/golem'
import FpsText from '../objects/fpsText'

const gameState = {
  speed: 2.5
}

export default class LobbyScene extends Phaser.Scene {
  fpsText

  constructor(entryPoint = { x: 500, y: 500 }) {
    super({ key: 'LobbyScene' })
    this.spawn = entryPoint
  }

  create() {
    // create player
    gameState.player = new Golem(this, this.spawn.x, this.spawn.y)
    gameState.player.setScale(0.2)
    gameState.player.setSize(300, 400)

    // create fps counter
    this.fpsText = new FpsText(this)

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 20, 15, `Game v0.1.1 | Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '18px'
      })
      .setOrigin(1, 0)

    // create player controls
    gameState.keys = this.input.keyboard.addKeys('w,a,s,d,space,shift')

    // create settings entrance
    const settings = this.add.rectangle(50, 500, 100, 100, 0x000000)
    this.physics.add.existing(settings)
    this.physics.add.collider(gameState.player, settings, () => {
      this.scene.start('SettingsScene')
    })

    this.add.text(50, 500, 'Settings', { fontSize: '20px' }).setOrigin(0.5)
  }

  update() {
    this.fpsText.update()

    if (gameState.keys.w.isDown) {
      gameState.player.y -= gameState.speed
    }

    if (gameState.keys.a.isDown) {
      gameState.player.x -= gameState.speed
    }

    if (gameState.keys.s.isDown) {
      gameState.player.y += gameState.speed
    }

    if (gameState.keys.d.isDown) {
      gameState.player.x += gameState.speed
    }

    if (gameState.keys.shift.isDown) {
      gameState.speed = 4
    } else {
      gameState.speed = 2.5
    }
  }
}
