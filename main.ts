input.onButtonPressed(Button.A, function () {
    loudness += 20
    music.setVolume(loudness)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onButtonPressed(Button.B, function () {
    loudness += -20
    music.setVolume(loudness)
})
let loudness = 0
loudness = 100
music.setVolume(loudness)
basic.forever(function () {
    led.plotBarGraph(
    loudness,
    255
    )
})
