# mediamonkey-types
TypeScript declarations for MediaMonkey.

This is a work in progress. Tracked on Mantis as https://www.ventismedia.com/mantis/view.php?id=19015

# How to use
Normally, TypeScript declaration (`.d.ts`) files in your work environment are not read when type-checking JS files.

The way TS reads type declarations depends on your work environment and whether you are coding in TS or JS. The simplest method of making your IDE recognize the global type declarations is by adding the following to the top of every JS file:

```js
/// <reference path="./path/to/mediamonkey-types/all.d.ts" />
```
while, of course, changing `./path/to/mediamonkey-types` to the appropriate file path. This comment will be recognized by Visual Studio Code's built in TypeScript engine, but ignored by MediaMonkey.