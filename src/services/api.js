import axios from "axios";

const api = axios.create({
  baseURL: "http://localhoste:3333"
});

export default api;

/**
 * ios com emulador: localhost
 * ios com fisico: IP da máquina
 * Android com emulador: localhoste (adb reverse)
 * Android com emulular studio: 10.0.2.2 (android studio)
 * Android com emulador: 10.0.3.2 (genymotion)
 * Android com fisico: IP da maquina
 */