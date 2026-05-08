Acebott.setLed(DigitalWritePin.P1, SwitchStatus.OFF)
let Bightnes = 0
basic.forever(function () {
    for (let index = 0; index < 25; index++) {
        Bightnes += 4
        Acebott.setLedBrightness(AnalogWritePin.P0, 50)
        basic.pause(100)
    }
    for (let index = 0; index < 25; index++) {
        Bightnes += -4
        Acebott.setLedBrightness(AnalogWritePin.P0, 50)
        basic.pause(100)
    }
})
