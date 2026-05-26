# Deployment

This site is published on Cloudflare Pages.

## Production

- URL: https://www.kabukimonostore.com
- Fallback URL: https://www.kabukimonostore.com
- Apex domain in progress: https://kabukimonostore.com
- Project: `kabukimonoweb`
- Build output directory: repository root (`.`)

## Domain Status

Onamae.com DNS setup was submitted on 2026-05-26:

- `www.kabukimonostore.com` CNAME -> `kabukimonoweb.pages.dev`
- Nameserver change -> `01.dnsv.jp`, `02.dnsv.jp`, `03.dnsv.jp`, `04.dnsv.jp`

Cloudflare DNS setup was completed on 2026-05-26:

- Zone: `kabukimonostore.com`
- Nameservers: `ursula.ns.cloudflare.com`, `wesley.ns.cloudflare.com`
- `kabukimonostore.com` CNAME -> `kabukimonoweb.pages.dev`
- `www.kabukimonostore.com` CNAME -> `kabukimonoweb.pages.dev`

Remaining activation step:

- Completed: Onamae.com nameservers changed to `ursula.ns.cloudflare.com` and `wesley.ns.cloudflare.com`

DNS propagation can take up to 72 hours.

Initial verification:

- Cloudflare zone status: active
- Cloudflare Pages: `www.kabukimonostore.com` is active
- Cloudflare Pages: `kabukimonostore.com` is pending apex verification

## Deploy

```bash
wrangler pages deploy . --project-name kabukimonoweb --commit-dirty=true
```
