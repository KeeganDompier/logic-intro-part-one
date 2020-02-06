namespace SpriteKind {
    export const spaceship = SpriteKind.create()
}
function change_score () {
    info.changeScoreBy(1)
}
function game_over () {
    game.over(false, effects.slash)
}
sprites.onOverlap(SpriteKind.spaceship, SpriteKind.Enemy, function (sprite, otherSprite) {
    game_over()
})
function BAd_guys () {
    BAd = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . e e e e e e e e . . . . 
. . . e e e e e e e e e e . . . 
. . . e e e e e e e e e e . . . 
. . . e e e e e e e e e e . . . 
. . . e e d d d d d d e e . . . 
. . . e e d 8 d d 8 d e e . . . 
. . . . e d d d d d d e . . . . 
. . . . . d d 3 3 d d . . . . . 
. . . . . . d d d d . . . . . . 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . . . 7 7 7 7 . . . . . . 
. . . . . . 7 . . 7 . . . . . . 
. . . . . . 7 . . 7 . . . . . . 
. . . . . . 7 . . 7 . . . . . . 
. . . . . . 7 . . 7 . . . . . . 
`, SpriteKind.Enemy)
    BAd.setPosition(scene.screenWidth(), Math.randomRange(0, scene.screenHeight()))
    extra_velocity = 0
    if (Math.percentChance(20)) {
        extra_velocity = Math.randomRange(1, 50)
    } else {
        extra_velocity = Math.randomRange(1, 10)
        BAd.vx = -50 - 5 - 0 * info.score() - extra_velocity
    }
    if (info.score() <= 20) {
        controller.moveSprite(spaceship, 100 - 2 * info.score(), 100 - 2 * info.score())
    }
}
let extra_velocity = 0
let BAd: Sprite = null
let spaceship: Sprite = null
spaceship = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
4 2 6 9 6 9 6 9 6 . . . . . . . 
4 2 6 9 6 9 6 9 6 9 . . . . . . 
4 2 6 9 6 9 6 9 6 . . . . 9 6 . 
4 2 6 9 6 9 6 9 6 9 6 9 6 9 6 9 
4 2 6 9 6 9 6 9 6 9 6 9 6 9 6 9 
4 2 6 9 6 9 6 9 6 . . . . 9 6 . 
4 2 6 9 6 9 6 9 6 9 . . . . . . 
4 2 6 9 6 9 6 9 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.spaceship)
controller.moveSprite(spaceship)
spaceship.x = 8
spaceship.setFlag(SpriteFlag.StayInScreen, true)
// This is for the score
game.onUpdateInterval(2000, function () {
    info.changeScoreBy(1)
})
// For the meteorites
game.onUpdateInterval(500, function () {
    BAd_guys()
})
