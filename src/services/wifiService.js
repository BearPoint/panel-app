// const wifi = require('node-wifi');

// wifi.init({
//     iface: null // network interface, choose a random wifi interface if set to null
// });

// export const getWifiConection = () => {
//     return wifi.getCurrentConnections( (err, currentConnections) =>{
//         if (err) {
//             console.log(err);
//         }
//         console.log(currentConnections);
//         /*
//         // you may have several connections
//         [
//             {
//                 iface: '...', // network interface used for the connection, not available on macOS
//                 ssid: '...',
//                 bssid: '...',
//                 mac: '...', // equals to bssid (for retrocompatibility)
//                 channel: <number>,
//                 frequency: <number>, // in MHz
//                 signal_level: <number>, // in dB
//                 quality: <number>, // same as signal level but in %
//                 security: '...' //
//                 security_flags: '...' // encryption protocols (format currently depending of the OS)
//                 mode: '...' // network mode like Infra (format currently depending of the OS)
//             }
//         ]
//         */
//     });
// }