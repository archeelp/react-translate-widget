<p align="center">
  <a href="">
    <img width="200" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
  </a>
</p>

<h1 align="center">React Translate Widget</h1>

<div align="center">

A project for adding translate support in react website using just a simple widget

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-image]][download-url] [![][bundlesize-js-image]][unpkg-js-url]

[![FOSSA Status][fossa-image]][fossa-url] [![Discussions][discussions-image]][discussions-url] [![][issues-helper-image]][issues-helper-url] [![Issues need help][help-wanted-image]][help-wanted-url]

[npm-image]: http://img.shields.io/npm/v/react-translate-widget.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-translate-widget
[download-image]: https://img.shields.io/npm/dm/react-translate-widget.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-translate-widget
[fossa-image]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Farcheelp%2Freact-translate-widget.svg?type=shield
[fossa-url]: https://app.fossa.io/projects/git%2Bgithub.com%2Farcheelp%2Freact-translate-widget?ref=badge_shield
[help-wanted-image]: https://flat.badgen.net/github/label-issues/archeelp/react-translate-widget/help%20wanted/open
[help-wanted-url]: https://github.com/archeelp/react-translate-widget/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22
[discussions-image]: https://img.shields.io/badge/discussions-on%20github-blue?style=flat-square
[discussions-url]: https://github.com/archeelp/react-translate-widget/discussions
[bundlesize-js-image]: https://img.badgesize.io/https:/unpkg.com/react-translate-widget/dist/react-translate-widget.min.js?label=react-translate-widget.min.js&compression=gzip&style=flat-square
[unpkg-js-url]: https://unpkg.com/browse/react-translate-widget/dist/react-translate-widget.min.js
[issues-helper-image]: https://img.shields.io/badge/using-issues--helper-orange?style=flat-square
[issues-helper-url]: https://github.com/actions-cool/issues-helper
</div>


## ✨ Features

- ⚙️ Easily add multiple language support just by adding our widget
- 🌍 Internationalization support for dozens of languages.


## 🖥 Environment Support

- Modern browsers and Internet Explorer 11 (with [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11))
- Server-side Rendering
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 📦 Install

```bash
react-translate-widget
```

```bash
yarn add react-translate-widget
```

## 🔨 Usage

```jsx
import TranslatorWidget from 'react-translate-widget';

const App = () => (
  <>
    <TranslatorWidget sourceLanguageCode="en" className="translator"/>
  </>
);
```

## 🌍 Internationalization

Dozens of languages supported in `react-translate-widget`, see [supported languages](https://github.com/archeelp/react-translate-widget/blob/main/src/lib/constants.js).

## 🔗 Links

- [Home page](https://github.com/archeelp/react-translate-widget)
- [Npm](https://www.npmjs.com/package/react-translate-widget)

## ⌨️ Development

Use Gitpod, a free online dev environment for GitHub.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/archeelp/react-translate-widget)

Or clone locally:

```bash
$ git clone git@github.com:archeelp/react-translate-widget.git
$ cd react-translate-widget
$ npm install
$ npm start
```

Open your browser and visit http://127.0.0.1:3000 and checkout react-translate-widget

## 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Let's build a better translator widget together.

We welcome all contributions. You can submit any ideas as [pull requests](https://github.com/archeelp/react-translate-widget/pulls) or as [GitHub issues](https://github.com/archeelp/react-translate-widget/issues). If you'd like to improve code we would really appreciate it.

## ❌ Limitations - This project is currently in  beta and has some limitations

- ❌Works only on deployed website
- ❌Works only for public URLs