module.exports = {

  vr: (content) => `<!DOCTYPE html>
<html>
  <head>
    <title>Hello, WebVR! - A-Frame</title>
    <meta name="description" content="Hello, WebVR! - A-Frame" />
    <script src="https://aframe.io/releases/0.8.0/aframe.min.js"></script>
  </head>
  <body>
${content}
</body></html>
`,
  page: (content) => `<!DOCTYPE html>
<html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/public/style.css">
  </head>
  <body>
${content}
</body></html>
`,
  content: () => `<a-scene inspector="url:/public/aframe-inspector.min.js">
  <a-assets></a-assets>
  <a-sky color="#ECECEC"></a-sky>
  <a-box position="-1 0.5 -3" color="#4CC3D9"></a-box>
  <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
  <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" ></a-cylinder>
  <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow=""></a-plane>
</a-scene>
`
}
