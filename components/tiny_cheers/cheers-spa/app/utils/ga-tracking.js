export default function (event) {
  if (window.dataLayer) {
    window.dataLayer.push({ event });
  }
}
