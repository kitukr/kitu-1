controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.blizzard)
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(assets.image`Kitu`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.ay = 250
scene.cameraFollowSprite(mySprite)
