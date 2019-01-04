const browserBattery = require('browser-battery');

export const batteryServices = browserBattery().then(battery => battery)

export const batterySelectClass = (level)=>{
    //battey-empty
    //battery-quarter
    //battery-half
    //battery-three-quarters
    //battery-full
    let nameClass = 'battery'
    if(level<= .1) return `${nameClass}-empty`
    if(level<= .25) return `${nameClass}-quarter`
    if(level<= .50) return `${nameClass}-half`
    if(level<= .75) return `${nameClass}-three-quarters`
    return `${nameClass}-full`
}