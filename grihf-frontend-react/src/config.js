export const API_URL = window.location.hostname === "localhost"
    ? "http://localhost:8181"  // This is for your local environment
    : "https://codylmarseng-8181.theiadockernext-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/";  // This is for Theia environment

console.log("API_URL :", API_URL);
