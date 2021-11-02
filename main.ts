input.onButtonPressed(Button.A, function () {
    i = input.temperature()
})
let i = 0
basic.showIcon(IconNames.Heart)
i = 0
basic.forever(function () {
    basic.showNumber(i)
    if (i < 26) {
        music.stopMelody(MelodyStopOptions.All)
    }
    if (i > 28) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    }
})
