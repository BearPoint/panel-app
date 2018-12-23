const browserBattery = require('browser-battery');

export const batteryServices = () => {
    return browserBattery().then(battery => {
        return battery.onlevelchange = () => {
            return battery.level

        };
    })

}