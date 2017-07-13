export default {
    host: window.location.hostname,
    port: window.location.hostname === "localhost" ? '8081' : '8080',
}