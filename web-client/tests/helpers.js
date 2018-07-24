import { ClientFunction } from 'testcafe';

export const waitLoadingScreen = ClientFunction(() => {
  return new Promise(resolve => {
    let interval = setInterval(() => {
      if (document.querySelector('span.glyphicon-left.glyphicon.glyphicon-refresh.gly-spin')) {
        // still loading
      } else {
        clearInterval(interval);
        resolve();
      }
    }, 50);
  });
});
