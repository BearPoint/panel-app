const bluetooth = require('node-bluetooth');
const device = new bluetooth.DeviceINQ();

export const getPairedDevices = () => {
    device.listPairedDevices(console.log);
}
export const scanDivices = () => {
    device
        .on('finished', console.log.bind(console, 'finished'))
        .on('found', function found(address, name) {
            console.log('Found: ' + address + ' with name ' + name);
        }).scan();
}