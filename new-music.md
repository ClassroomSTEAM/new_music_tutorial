# New Music

## Create variable 

Create variable "loudness" in startup and set the volume to 100

```blocks
let loudness = 100
music.setVolume(loudness)
```
## Play melody

Play melody "Scale" when button A+B pressed

```blocks
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
```
## Increase the volume

Increase the volume when button A pressed

```blocks
input.onButtonPressed(Button.A, function () {
    loudness += 20
    music.setVolume(loudness)
})
```

## Decrease the volume

Decrease the volume when button B pressed

```blocks
input.onButtonPressed(Button.B, function () {
    loudness += -20
    music.setVolume(loudness)
})
```

## Plot the volume level

Show the volume level by plotting LED (0-255)

```blocks
basic.forever(function () {
    led.plotBarGraph(
    loudness,
    255
    )
})
```
