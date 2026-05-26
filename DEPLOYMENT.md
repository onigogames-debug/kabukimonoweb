# Deployment

This site is published on Cloudflare Pages.

## Production

- URL: https://kabukimonoweb.pages.dev
- Project: `kabukimonoweb`
- Build output directory: repository root (`.`)

## Deploy

```bash
wrangler pages deploy . --project-name kabukimonoweb --commit-dirty=true
```

