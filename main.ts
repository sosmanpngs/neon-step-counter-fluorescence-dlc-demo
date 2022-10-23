let reading = 0
basic.forever(function () {
    reading = input.lightLevel()
    led.plotBarGraph(
    reading,
    255
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
        music.playMelody("E B C A F E D B ", 120)
        music.playMelody("C5 B A G C5 E - A ", 120)
    }
    if (input.lightLevel() == 0) {
        music.playMelody("G D A F - F G E ", 60)
    }
    if (input.lightLevel() == 255) {
        music.playMelody("C5 B A G C5 E G C5 ", 120)
    }
})
