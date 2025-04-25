if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceworker.js')
      .then(() => console.log('SW zarejestrowany!'));
      try {
        navigator.serviceWorker.ready.then(() => {
          console.log('Service Worker got ready');
        });
      }
      catch (error) {
        console.error('Service Worker not ready', error);
      }
  }
  