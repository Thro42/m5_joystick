// Gib deinen Code hier ein
//% color="#008272"weight=100 icon="\uf11b" block="M5 Joystick"
namespace m5joystick {

export enum ValSelect {
    X = 1,
    Y = 2,
    Button = 3,
}

//% block="M5 Joysick %joyStickVal Werte"
  export function axisVal(valSel: ValSelect ) : number {
    let retVal: number;
    let buf = pins.createBuffer(3);
    buf = pins.i2cReadBuffer(0x52, 3,true);
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
