# Web Extension Svelte Boilerplate

<div align="center">
  <img width="300" src="https://user-images.githubusercontent.com/6290720/118286857-dce30580-b50d-11eb-93ec-27dee5fb870f.png" />
  <br />
  <br />
</div>

This boilerplate using [Svelte](https://svelte.dev/) provides a skeleton to start developing cross-browser web extensions.

[![codecov](https://codecov.io/gh/davidnguyen179/web-extension-svelte-boilerplate/branch/main/graph/badge.svg?token=IKX2LE11LE)](https://codecov.io/gh/davidnguyen179/web-extension-svelte-boilerplate) ![ci/cd](https://github.com/davidnguyen179/web-extension-svelte-boilerplate/workflows/ci/cd/badge.svg) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/davidnguyen179/web-extension-svelte-boilerplate/pulls) [![MIT license](https://img.shields.io/github/license/davidnguyen179/web-extension-svelte-boilerplate)](https://github.com/davidnguyen179/web-extension-svelte-boilerplate/blob/main/LICENSE)
## Development

```bash
npm i
```

**Chrome**

```bash
npm run app:chrome-dev
```

**Edge**

```bash
npm run app:edge-dev
```

**Firefox**

```bash
npm run app:firefox-dev
```

## Production

```bash
npm i
```

```bash
npm run app:chrome
```

**Edge**

```bash
npm run app:edge
```

**Firefox**

```bash
npm run app:firefox
```

## Load package to browsers

**Chrome**

1. Go to the browser's URL address bar
2. Enter `chrome://extensions/`
3. Switch to "**Developer mode**"
4. Load extension by clicking "**Load unpacked**"
5. Browse to `dist/` in source code
6. Done!

Check here for more detail: [https://developer.chrome.com/extensions/getstarted](https://developer.chrome.com/extensions/getstarted)

**Edge**

1. Go to the browser's URL address bar
2. Enter `edge://extensions/`
3. Turn on `Developer mode`
4. Load extension by clicking "**Load unpacked**"
5. Browse to `dist/` in source code
6. Done!

**Firefox**

1. Go to the browser's URL address bar
2. Enter `about:debugging#/runtime/this-firefox`
3. Click **Load Temporary Add-on...**
4. Browse to your `manifest.json` & click **Open**
5. Done!

Check here for more details: [https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## Privacy Policy file

Web stores require you to describe what the extension is or if you collect data of users. You also need to describe why you do that.

Make sure you include this file when you publish an extension, the web store may ask you to upload it.

**Note:** If you don't know how to write a privacy policy file, you can look at the [existing one](https://github.com/davidnguyen179/web-extension-boilerplate/blob/main/PRIVACY_POLICY.txt) attached on this repository.

## Badges

You can add badges to your project to indicate the version or to show how many users use your extension here:

- [https://shields.io/](https://shields.io/)

## CI/CD with github action

You can modify the `.github/workflows` to show the CI/CD flow.

- [https://docs.github.com/en/free-pro-team@latest/actions/guides/building-and-testing-nodejs](https://docs.github.com/en/free-pro-team@latest/actions/guides/building-and-testing-nodejs)

## How to publish web extension

| Browsers       | Web store                                                                                                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Chrome         | [https://developer.chrome.com/webstore/publish](https://developer.chrome.com/webstore/publish)                                                                                                 |
| Microsoft Edge | [https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/publish/publish-extension](https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/publish/publish-extension) |
| Firefox        | [https://extensionworkshop.com/documentation/publish/submitting-an-add-on](https://extensionworkshop.com/documentation/publish/submitting-an-add-on)                                           |

## References

- Develop your first Chrome extension & Chromium Edge: [https://developer.chrome.com/extensions](https://developer.chrome.com/extensions)
- Develop your first Firefox add-on: [https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
- If you have any Chrome extension issues, you can post it here: [https://groups.google.com/a/chromium.org/forum/#!forum/chromium-extensions](https://groups.google.com/a/chromium.org/forum/#!forum/chromium-extensions)
- [Jack and Amy Dev youtube channel](https://www.youtube.com/channel/UCVj3dGw75v8aHFYD6CL1tFg), which explains some common mistakes made when developing Chrome extensions.

## Most important

Follow me on Twitter! https://twitter.com/davidnguyen1791

Thanks!

## License

MIT
