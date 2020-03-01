<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
@font-face {
  font-family: "Gramatika";
  src: url("/fonts/Gramatika-Black.woff2") format("woff2"),
    url("/fonts/Gramatika-Black.woff") format("woff");
  font-weight: bolder;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Gramatika";
  src: url("/fonts/Gramatika-Light.woff2") format("woff2"),
    url("/fonts/Gramatika-Light.woff") format("woff");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Gramatika";
  src: url("/fonts/Gramatika-Italic.woff2") format("woff2"),
    url("/fonts/Gramatika-Italic.woff") format("woff");
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Gramatika";
  src: url("/fonts/Gramatika-LightItalic.woff2") format("woff2"),
    url("/fonts/Gramatika-LightItalic.woff") format("woff");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Gramatika";
  src: url("/fonts/Gramatika-Bold.woff2") format("woff2"),
    url("/fonts/Gramatika-Bold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Gramatika";
  src: url("/fonts/Gramatika-Medium.woff2") format("woff2"),
    url("/fonts/Gramatika-Medium.woff") format("woff");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Gramatika";
  src: url("/fonts/Gramatika-regular.woff2") format("woff2"),
    url("/fonts/Gramatika-regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

:root {
  --primary-color: #9292e7;
  --secondary-color: #5353a1;
  --font-color: #040417;
  --bg-color: #fff;
  --bg-half: rgba(146, 146, 231, 0.65);
  --bg-opacity-light: #e9e9fa;
  --bg-thumbnail: rgba(83, 83, 161, 0.9);
  --icon: "🌙";
  --gradient: linear-gradient(
    to right,
    #3f51b1 0%,
    #5a55ae 13%,
    #7b5fac 25%,
    #8f6aae 38%,
    #a86aa4 50%,
    #cc6b8e 62%,
    #f18271 75%,
    #f3a469 87%,
    #f7c978 100%
  );
}

[data-theme="dark"] {
  --primary-color: rgb(83, 83, 161);
  --secondary-color: #c2c2de;
  --font-color: #fff;
  --bg-color: #040417;
  --bg-half: rgb(83, 83, 161, 0.65);
  --bg-opacity-light: #141432;
  --bg-thumbnail: rgba(4, 4, 23, 0.9);
  --icon: "☀️";
  --gradient: linear-gradient(
    to right,
    #3f51b1 0%,
    #5a55ae 13%,
    #7b5fac 25%,
    #8f6aae 38%,
    #a86aa4 50%,
    #cc6b8e 62%,
    #f18271 75%,
    #f3a469 87%,
    #f7c978 100%
  );
}
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  background-color: var(--bg-color);
  color: var(--font-color);
  font-family: "Gramatika", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  overflow-x: hidden;
}

.container {
  width: 85%;
  margin: 0 auto;
}

.no-select {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.pop {
  animation: pop 1.4s cubic-bezier(0.77, 0, 0.18, 1) forwards;
}
.slide {
  animation: slide 1s cubic-bezier(0.77, 0, 0.18, 1) forwards;
}
@keyframes pop {
  0% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes slide {
  0% {
    opacity: 0;
    transform: translateX(-100vw);
  }
  10% {
    opacity: 1;
  }
  99% {
    transform: translateX(1vw);
  }
  100% {
    transform: initial;
  }
}

@media screen and (max-width: 480px) {
  body {
    font-size: 0.85em;
  }
}
</style>
