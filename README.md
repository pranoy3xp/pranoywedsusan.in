# Wedding Website

A single-page Christian wedding invitation built with React + Vite, in a soft pink and
lavender theme. Layout inspired by
[vibinwedsjesme.online/wedding](https://www.vibinwedsjesme.online/wedding).

Sections: hero with glowing cross, doves and arched photo · Holy Matrimony invitation &
schedule · venue cards (Google/Apple Maps, calendar links) · 1 Corinthians 13 verse and
"cord of three strands" · live countdown with `.ics` download · prayers & wishes · footer ·
background music toggle. Falling petals/hearts and scroll animations are disabled for
visitors who prefer reduced motion.

## Run

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Personalise

- **Content** — edit `src/config.js` (names, parents, events, venues with lat/lng, Bible
  verses, contact). Event `start` values are ISO strings with a UTC offset; the event marked
  `main: true` drives the hero date and countdown.
- **Photo** — add `public/images/couple.jpg` (portrait). A monogram placeholder shows until it exists.
- **Colours** — CSS variables at the top of `src/index.css`.
- **Music** — add `public/music/background.mp3`, or set `music: null` in the config.
- **Title / share preview** — update the `<title>` and `og:` tags in `index.html`.

## Wishes

Wishes are saved in each guest's browser (`localStorage`). To collect them for the couple,
swap the load/save logic in `src/components/Wishes.jsx` for a backend such as Firebase,
Supabase, or a form service.

## Deploy

Pushing to `main` on GitHub runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages at `https://<username>.github.io/<repo-name>/`. One-time setup:
in the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.

The build uses relative asset paths (`base: './'` in `vite.config.js`), so `dist/` can also be
hosted from any sub-path on Netlify, Vercel, or another static host.
