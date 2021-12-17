export default class Doorway extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, nextScene, doorText, gameState) {
    super(scene, x, y, nextScene, doorText, gameState)

    const door = scene.add.rectangle(x, y, 100, 100, 0x000000)
    scene.physics.add.existing(door)
    scene.physics.add.collider(gameState.player, door, () => {
      scene.scene.start(nextScene)
    })
    scene.add.text(x, y, doorText, { fontSize: '20px', fontFamily: 'Arial' }).setOrigin(0.5)
  }
}
