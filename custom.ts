// Gib deinen Code hier ein
//% color="#008272"weight=100 icon="\uf11b" block="M5 Joystick"
namespace m5joystick {

export enum ValSelect {
    X = 1,
    Y = 2,
    Button = 3,
}

export class joyStickVal {
   public valX: number;
   public valY: number;
   public button: number;
}
//% block="M5 Joysick Werte"
  export function SickVal() : joyStickVal {
    let retVal: joyStickVal;
    let buf = pins.createBuffer(3);
    buf = pins.i2cReadBuffer(0x52, 3);
    retVal.valX = buf[0];
    retVal.valY = buf[1];
    retVal.button = buf[2];
    return retVal;
  }
//% block="M5 Joysick %joyStickVal Werte"
  export function axisVal(valSel: ValSelect ) : number {
    let retVal: number;
    let buf = pins.createBuffer(3);
    buf = pins.i2cReadBuffer(0x52, 3);
    switch(valSel) {
        case ValSelect.X: {
            retVal = buf[0];
        }
        case ValSelect.Y: {
            retVal = buf[1];
        }
        case ValSelect.Button: {
            retVal = buf[2];
        }
    }
    return retVal;
  }
}
