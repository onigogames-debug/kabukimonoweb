# Custom Domain Setup

Domain: `kabukimonostore.com`

Current Cloudflare Pages URL:

```text
https://kabukimonoweb.pages.dev
```

Target production URLs:

```text
https://kabukimonostore.com
https://www.kabukimonostore.com
```

## Current Status

Completed on 2026-05-26:

- Cloudflare Pages custom domains were added:
  - `kabukimonostore.com`
  - `www.kabukimonostore.com`
- Onamae.com DNS record setup was submitted:
  - `www.kabukimonostore.com`
  - `CNAME`
  - `kabukimonoweb.pages.dev`
- Onamae.com nameserver change was submitted for DNS record hosting:
  - `01.dnsv.jp`
  - `02.dnsv.jp`
  - `03.dnsv.jp`
  - `04.dnsv.jp`

Propagation note:

Onamae.com shows that nameserver changes can take up to 72 hours.

## Apex Domain Note

Onamae.com DNS accepted the `www` CNAME record. It did not accept a blank-host CNAME for the apex domain `kabukimonostore.com`.

Onamae.com URL forwarding appears to require a DNS additional option application. Do not enable that option unless the cost and need are confirmed.

The clean free path for the apex domain is still Cloudflare DNS:

1. Add `kabukimonostore.com` as a Cloudflare zone.
2. Cloudflare will show two assigned nameservers.
3. In Onamae.com, change the domain nameservers to those Cloudflare nameservers.
4. In Cloudflare DNS, point:
   - `kabukimonostore.com` to Pages
   - `www.kabukimonostore.com` to Pages or redirect to apex
5. Confirm Cloudflare Pages SSL status becomes active.

## DNS Records

Current Onamae.com DNS record:

```text
Type: CNAME
Name: www
Target: kabukimonoweb.pages.dev
TTL: 3600
```

If the domain is moved to Cloudflare DNS, use:

```text
Type: CNAME
Name: @
Target: kabukimonoweb.pages.dev
Proxy: Proxied
```

```text
Type: CNAME
Name: www
Target: kabukimonostore.com
Proxy: Proxied
```

Cloudflare may create these automatically when adding the custom domain to Pages.

## After Domain Is Active

When the preferred custom domain is active, update site metadata from:

```text
https://kabukimonoweb.pages.dev
```

to either:

```text
https://kabukimonostore.com
```

or:

```text
https://www.kabukimonostore.com
```

Files to update:

- `index.html`
- `PROMOTION.md`
- `OPERATIONS.md`
- `DEPLOYMENT.md`

Also update Amazon UTM links:

```text
utm_source=kabukimonostore.com
```
