//your JS code here. If required.
const info = document.getElementById("browser-info");
const agent = navigator.userAgent;
const app = navigator.appName;
const version = navigator.appVersion;
info.textContent = "You are using" + app + "version" + version;