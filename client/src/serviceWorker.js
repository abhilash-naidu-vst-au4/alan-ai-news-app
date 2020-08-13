if ("serviceWorker" in navigator) {
  try {
    var registerServiceWorker = await navigator.serviceWorker.register(
      "serviceWorker.js"
    );
    console.log("registerServiceWorker", registerServiceWorker);
  } catch (error) {
    console.log("Error: ", error);
  }
} else {
  console.log("Service Worker Support Not Found..");
}
