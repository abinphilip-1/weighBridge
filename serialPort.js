const utf8=require('utf8');
const SerialPort=require('serialport');
const ByteLength=require('@serialport/parser-byte-length');


const port=new SerialPort('COM3',{baudRate:19200});

// adjust length to get length of the buffer data
const parser=port.pipe(new ByteLength({length:13}));
parser.on('data',readSerialData);
function readSerialData(data){
    //your codes 
    // By default, toString() converts the buffer to a string using UTF8 encoding.
    // other encodeings are hex,base64
    // buffer contains other headers, do trail & error check to find exact character positions
    // 
    console.log(data.toString('utf8',2,8));
}