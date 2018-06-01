/**
 * I2C LCD package for microbit Makecode.
 * This package is based on library by microbit-makecode-packages
 */

    
namespace SGBotic {
    let i2cAddr: number // 0x3F or 0x27
    let BK: number      // backlight control
    let RS: number      // command/data
    
    let COMMAND = 0
    let DATA = 1
    
    export enum I2C_ADDR{
        //%block="39"
        addr1=39,  //0x27
        //%block="63"
        addr2 = 63  //0x3F
    }
    
    
    
    export enum ctrlStat{
    
        //%block="On"
        On = 0,
        //%block="Off"
        Off = 1
    }
    
   /**
    * Configure LCD and set the I2C address
    * @param Select I2C address
    */
    //% subcategory=I2C-LCD
    //% blockId="I2C_INIT_LCD" block="Initialize LCD at address %addr"
    //% weight=100 blockGap=8
    export function initLCD(addr:I2C_ADDR)
    {
        i2cAddr = addr
        BK = 8
        RS = 0
        
        send(0x33, COMMAND)
        basic.pause(5)
        set(0x30)
        basic.pause(5)
        set(0x20)
        basic.pause(5)
        
        send(0x28, COMMAND)
        send(0x0C, COMMAND)
        send(0x06, COMMAND)
        send(0x01, COMMAND)
    }

    // send data to I2C bus
    function set(d: number) {
     
        d = (d & 0xF0) + BK + RS
       
        pins.i2cWriteNumber(i2cAddr, d, NumberFormat.Int8LE)
        basic.pause(1)
        pins.i2cWriteNumber(i2cAddr, d+4, NumberFormat.Int8LE)
        basic.pause(1)
        pins.i2cWriteNumber(i2cAddr, d, NumberFormat.Int8LE)
        basic.pause(1)
        
    }
    
    function send(d:number, rs:number)
    {
       
        RS = rs
        set(d)
        set(d << 4)
    
    }

 /**
     * Print number from position defined by row and column.
     * Decimal numbers are not supported.
     * @param n is number to be printed, eg: 10, 100, 200
     * @param COL is LCD column position, [0 - 15], eg: 0
     * @param ROW is LCD row position, [0 - 1], eg: 0
     */
    //% subcategory=I2C-LCD
    //% blockId="I2C_LCD_SHOW_NUMBER" block="Print number %n|from Row %ROW|Column %COL"
    //% weight=90 blockGap=8
    //% COL.min=0 COL.max=15
    //% ROW.min=0 ROW.max=1
    export function ShowNumber(n: number, ROW: number, COL: number): void {
        let s = n.toString()
        ShowString(s, ROW, COL)
    }

    /**
     * Print string from position defined by row and column.
     * @param s is string to be printed, eg: "Hello"
     * @param COL is LCD column position, [0 - 15]
     * @param ROW is LCD row position, [0 - 1]
     */
    //% subcategory=I2C-LCD 
    //% blockId="I2C_LCD_SHOW_STRING" block="Print string %s|from Row %ROW|Column %COL"
    //% weight=90 blockGap=8
    //% COL.min=0 COL.max=15
    //% ROW.min=0 ROW.max=1
    export function ShowString(s: string, ROW: number, COL: number): void {
        let a: number

        if (ROW > 0)
            a = 0xC0
        else
            a = 0x80
        a += COL
        
        send(a, COMMAND)

        for (let i = 0; i < s.length; i++) {
            send(s.charCodeAt(i), DATA)
        }
    }

    /**
     * Clear display. Cursor return to row 0, column 0
     */
    //% subcategory=I2C-LCD 
    //% blockId="I2C_LCD_CLEAR" block="Clear display"
    //% weight=85 blockGap=8
    export function clear(): void {
        send(0x01, COMMAND)
    }
    
    
    
    /**
     * Enable/disable LCD backlight
     * @param LCD backlight On/Off
     */
    //% subcategory=I2C-LCD 
    //% blockId="I2C_LCD_BACKLIGHT" block="Backlight %blight"
    //% weight=71 blockGap=8
    export function BacklightCtrl(blight: ctrlStat){
        let varblight: number
        varblight = blight
        
        if(varblight === ctrlStat.On){
            BK = 8
            send(0, COMMAND)
        }else
        {
            BK = 0
            send(0, COMMAND)
        }
    }
    
    /**
     * Enable/disable LCD cursor
     * @param LCD cursor On/Off
     */
    //% subcategory=I2C-LCD 
    //% blockId="I2C_LCD_CURSOR" block="Cursor %blight"
    //% weight=70 blockGap=8
    export function Cursor(bcursor: ctrlStat){
        let varcursor: number
        varcursor = bcursor
        
        if(varcursor === ctrlStat.On){
            BK = 8
            send(0x0F, COMMAND)  //curosr on and blink
        }else
        {
            BK = 8
            send(0x0C, COMMAND)  //cursor off
        }
    }
    
    /**
     * Move cursor to row 0 and column 0
     * @param Return cursor to row 0 and column 0
     */
    //% subcategory=I2C-LCD 
    //% blockId="I2C_LCD_HOME" block="Cursor home"
    //% weight=69 blockGap=8
    export function home(): void {
        send(0x02, COMMAND)
    }
    
    
}
