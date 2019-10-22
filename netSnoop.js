const find = require('local-devices');
 
// Find all local network devices.
find().then(devices => {
  devices 
  
  console.log(devices)/*
  
  [
    { name: '?', ip: '192.168.0.10', mac: '...' },
    { name: '...', ip: '192.168.0.17', mac: '...' },
    { name: '...', ip: '192.168.0.21', mac: '...' },
    { name: '...', ip: '192.168.0.22', mac: '...' }
  ]
  */
})

// [
//   { name: '?', ip: '192.168.0.101', mac: 'b8:27:eb:53:ea:95' },
//   { name: '?', ip: '192.168.0.102', mac: '00:e0:4c:00:0c:e5' },
//   { name: '?', ip: '192.168.0.105', mac: 'b8:27:eb:41:58:18' },
//   { name: '?', ip: '192.168.0.121', mac: 'b8:27:eb:0f:cd:f1' },
//   { name: '?', ip: '192.168.0.123', mac: 'b8:27:eb:52:31:0b' },
//   { name: '?', ip: '192.168.0.124', mac: 'b8:27:eb:27:02:f7' },
//   { name: '?', ip: '192.168.0.165', mac: 'ac:bc:32:91:ea:ed' },
//   { name: '?', ip: '192.168.0.168', mac: '74:eb:80:a3:91:dc' },
//   { name: '?', ip: '192.168.0.179', mac: 'b8:27:eb:fa:e3:9f' },
//   { name: '?', ip: '192.168.0.184', mac: 'b8:27:eb:df:5a:ac' },
//   { name: '?', ip: '192.168.0.192', mac: 'f8:d0:27:5c:b8:c4' },
//   { name: '?', ip: '192.168.0.199', mac: 'b8:27:eb:99:ab:43' },
//   { name: '?', ip: '192.168.230.244', mac: '8c:85:90:50:4b:06' }
// ]