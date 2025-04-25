if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceworker.js')
      .then(() => console.log('SW zarejestrowany!'));
  }
  