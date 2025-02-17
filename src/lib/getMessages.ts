export function getMessages(locale: string) {
  switch (locale) {
    case "en":
      return require("../locales/en.json"); // Asegúrate de que `en.json` sea un objeto válido
    case "es":
      return require("../locales/es.json"); // Asegúrate de que `es.json` sea un objeto válido
    default:
      return require("../locales/en.json");
  }
}
