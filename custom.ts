// Gib deinen Code hier ein
//% color="#008272"weight=100 icon="\uf11b" block="M5 Joystick"
namespace m5joystick {
//% block="M5 Joysick %i2cMotor|run %n"
  export function SickVal() : joyStickVal {
    let retVal: joyStickVal;
    let buf = pins.createBuffer(3);
    buf = pins.i2cReadBuffer(0x52, 3);
    retVal.valX = buf[0];
    retVal.valY = buf[1];
    retVal.button = buf[2];
    return retVal;
  }
}

//% blockNamespace=m5joystick
class joyStickVal {
   valX: number;
   valY: number;
   button: number;
}