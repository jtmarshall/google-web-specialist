self.addEventListener('fetch', function (event) {
  // TODO: respond to all requests with an html response
  // containing an element with class="a-winner-is-me".
  // Ensure the Content-Type of the response is "text/html"
  if (event.request.url.endsWith('.jpg')) {
    event.respondWith(
      fetch('imgs/dr-evil.gif')
    );
  }
  // console.log(event.request);
});