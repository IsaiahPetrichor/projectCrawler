import Golem from '../objects/golem'

const player = (scene, gameState, location) => {
  // create player
  gameState.player = new Golem(scene, location.x, location.y)
  gameState.player.setScale(0.2)
  gameState.player.setSize(300, 400)

  // create player controls
  gameState.keys = scene.input.keyboard.addKeys('w,a,s,d,space,shift')
}

export default player
