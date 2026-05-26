# Deployment

This site is published on Cloudflare Pages.

## Production

- URL: https://kabukimonoweb.pages.dev
- Custom domain in progress: https://www.kabukimonostore.com
- Apex domain in progress: https://kabukimonostore.com
- Project: `kabukimonoweb`
- Build output directory: repository root (`.`)

## Domain Status

Onamae.com DNS setup was submitted on 2026-05-26:

- `www.kabukimonostore.com` CNAME -> `kabukimonoweb.pages.dev`
- Nameserver change -> `01.dnsv.jp`, `02.dnsv.jp`, `03.dnsv.jp`, `04.dnsv.jp`

DNS propagation can take up to 72 hours.

Initial verification:

- DNS: `www.kabukimonostore.com` resolves to `kabukimonoweb.pages.dev`
- Cloudflare Pages: custom domain verification is pending

## Deploy

```bash
wrangler pages deploy . --project-name kabukimonoweb --commit-dirty=true
```
