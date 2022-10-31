let Moisture = 0
basic.forever(function () {
    Moisture = pins.analogReadPin(AnalogPin.P1)
    if (Moisture > 1010) {
        basic.showIcon(IconNames.Surprised)
    } else if (Moisture > 900) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Sad)
        music.playMelody("C5 B A G F E D C ", 120)
    }
})
