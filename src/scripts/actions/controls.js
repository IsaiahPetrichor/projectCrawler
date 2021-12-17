const controls = gameState => {
  if (gameState.keys.w.isDown) {
    gameState.player.y -= gameState.speed
  }

  if (gameState.keys.a.isDown) {
    gameState.player.x -= gameState.speed
    gameState.player.flipX = true
  }

  if (gameState.keys.s.isDown) {
    gameState.player.y += gameState.speed
  }

  if (gameState.keys.d.isDown) {
    gameState.player.x += gameState.speed
    gameState.player.flipX = false
  }

  if (gameState.keys.shift.isDown) {
    gameState.speed = 4
  } else {
    gameState.speed = 2.5
  }
}

export default controls
