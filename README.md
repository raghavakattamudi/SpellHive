# SpellHive

A free, open-source spelling bee trainer. Paste a word list, and SpellHive reads each word aloud, checks the spelling, teaches missed words, and brings them back until they stick.

No accounts, no server, no tracking. Everything runs in the browser and progress stays on the device.

## Features

- **Hears the word for you**: dictionary audio when available, browser text-to-speech otherwise. Slow replay, definition, example sentence and origin on request.
- **Teaches on a miss**: letter-by-letter comparison, the word broken into chunks, then cover-and-retype. The word returns later in the same session.
- **Adaptive review** (Leitner boxes): missed words come first, then words due for review, then new ones. A word is mastered after three first-try correct answers on three different days.
- **Three modes**: Practice, Trouble words, Mock Bee (one try per word, a miss ends the round).
- **Gamified**: points, daily streak, levels, badges, and a hive that fills with honey as words are mastered.
- **Grown-ups area**: add word lists, see hardest words and actual misspellings, fix pronunciations ("Say it as"), override chunks, back up and restore progress.
- **Multiple players** per device.

## Run it

Open `index.html` in a browser. There is no build step.

## Deploy on GitHub Pages

Every push to `main` runs a syntax check and deploys the app with GitHub Actions.

One-time setup: go to **Settings → Pages** and set **Source** to **GitHub Actions**. The app then goes live at `https://raghavakattamudi.github.io/SpellHive/`.

## Contributing

Report bugs with the bug report issue template. Pull requests run `node scripts/check.mjs` automatically.

## Notes and limits

- **Pronunciation**: text-to-speech can mispronounce rare words. Use "Say it as" in the grown-ups area to correct a word.
- **Chunks** are split by a simple rule, not a dictionary. Override them per word when they look wrong.
- **Progress is per browser**. Use backup and restore to move it to another device.
- **Word lists**: official competition lists are copyrighted, so none are bundled. Paste your own.
- Definitions and audio come from the free [Dictionary API](https://dictionaryapi.dev/). The app works without it.

## Roadmap

- Recorded parent pronunciations
- Installable offline app (PWA)
- Countdown to competition day
- Shareable word lists

## License

MIT
