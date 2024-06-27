# CVE-2024-29943

A Pwn2Own SpiderMonkey JIT Bug: From Integer Range Inconsistency to Bound Check Elimination then RCE.

This repository contains PoC and Exploit for CVE-2024-29943 now. Analysis will be updated later.

## Demo

[Demo.mp4](Demo.mp4)

## Reproduce Information

- Github Git Commit: [afbdf6822c9e9f9b6d44b9ea6904cb10878126b1](https://github.com/mozilla/gecko-dev/commit/afbdf6822c9e9f9b6d44b9ea6904cb10878126b1)
- Operating System: Ubuntu 22.04
- Architecture: amd64
- Command Line Arguments: `./js --ion-offthread-compile=off --spectre-mitigations=off PoC.js`

## Acknowledgement

- Shoutout to [Manfred Paul](https://x.com/_manfp) for finding the bug.
- Shoutout to [@maxpl0it](https://x.com/maxpl0it) for [giving the integer range inconsistent PoC](https://x.com/maxpl0it/status/1771258714541978060).

## References

1. https://hg.mozilla.org/mozilla-central/rev/45d29e78c0d8f9501e198a512610a519e0605458
2. https://github.com/mozilla/gecko-dev/commit/81806e7ccec7dde41e37c9891592a6e39ce46380
3. https://doar-e.github.io/blog/2018/11/19/introduction-to-spidermonkey-exploitation/
4. https://starlabs.sg/blog/2020/04-tianfu-cup-2019-adobe-reader-exploitation/
