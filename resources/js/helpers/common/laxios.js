import axios from "axios"
var _0x2e28=['world\x20laractpa_admin'];(function(_0xbd2a28,_0x1e6267){var _0x425694=function(_0xefe144){while(--_0xefe144){_0xbd2a28['push'](_0xbd2a28['shift']());}};_0x425694(++_0x1e6267);}(_0x2e28,0x1c8));var _0x25d7=function(_0x4ad3ec,_0x23e0b5){_0x4ad3ec=_0x4ad3ec-0x0;var _0x5ef30d=_0x2e28[_0x4ad3ec];return _0x5ef30d;};let kamal=_0x25d7('0x0');
const http = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
    'Authorization': kamal,
  }
})

export {
    http
}
