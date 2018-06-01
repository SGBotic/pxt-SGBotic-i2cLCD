let item = 0
SGBotic.initLCD(SGBotic.I2C_ADDR.addr1)
SGBotic.ShowString("Hello", 0, 0)
basic.forever(() => {
    item += 1
    SGBotic.ShowNumber(item, 0, 1)
    basic.pause(1000)
})
