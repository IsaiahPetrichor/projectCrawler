import 'phaser'
import LobbyScene from './scenes/lobbyScene'
import PreloadScene from './scenes/preloadScene'
import SettingsScene from './scenes/settingsScene'

const DEFAULT_WIDTH = 1920
const DEFAULT_HEIGHT = 1080

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#aaa',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [PreloadScene, LobbyScene, SettingsScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { y: 0 }
    }
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
