# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- **Breaking:** return `ArrayBuffer` (runtime-agnostic) instead of `Buffer` (Node-specific) ([#44](https://github.com/JstnMcBrd/dectalk-tts/pull/44))
- Update README to include browser-compatiblity ([#44](https://github.com/JstnMcBrd/dectalk-tts/pull/44))
- Use ISC license ([#121](https://github.com/JstnMcBrd/dectalk-tts/pull/121))

### Added

- Add badges for workflow statuses, package details, etc to README ([#8](https://github.com/JstnMcBrd/dectalk-tts/pull/8))
- Add a `CHANGELOG.md` file ([#101](https://github.com/JstnMcBrd/dectalk-tts/pull/101))

### Removed

- Remove redundant `"main"` and `"types"` fields from `package.json` ([#37](https://github.com/JstnMcBrd/dectalk-tts/pull/37))

### Fixed

- Fix broken Dectalk 4.61 release download link in README ([#11](https://github.com/JstnMcBrd/dectalk-tts/pull/11))
- Fix exports field in `package.json` ([#110](https://github.com/JstnMcBrd/dectalk-tts/pull/110))

## [1.0.1] - 2024-02-12

### Fixed

- Send requests over HTTP instead of HTTPS ([#4](https://github.com/JstnMcBrd/dectalk-tts/pull/4))

## [1.0.0] - 2024-02-12

### Added

- Add Apache LICENSE ([#1](https://github.com/JstnMcBrd/dectalk-tts/pull/1))
- Add README with explanation, usage guide, and disclaimer ([#1](https://github.com/JstnMcBrd/dectalk-tts/pull/1))
- Add project code ([#1](https://github.com/JstnMcBrd/dectalk-tts/pull/1))
- Add CommonJS import path ([#1](https://github.com/JstnMcBrd/dectalk-tts/pull/1))
- Add Dectalk documentation PDF ([#1](https://github.com/JstnMcBrd/dectalk-tts/pull/1))

[Unreleased]: https://github.com/JstnMcBrd/dectalk-tts/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/JstnMcBrd/dectalk-tts/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/JstnMcBrd/dectalk-tts/releases/tag/v1.0.0
