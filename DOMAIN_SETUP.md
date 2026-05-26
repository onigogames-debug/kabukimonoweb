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

## Recommended Setup

Use Cloudflare DNS for the domain, even though the domain was purchased at Onamae.com.

This is the cleanest path because the apex domain `kabukimonostore.com` can point to Cloudflare Pages without CNAME limitations.

## Steps

1. Add `kabukimonostore.com` to Cloudflare.
2. Cloudflare will show two nameservers.
3. In Onamae.com, change the domain nameservers to the two Cloudflare nameservers.
4. Wait for DNS propagation.
5. In Cloudflare Pages project `kabukimonoweb`, add custom domains:
   - `kabukimonostore.com`
   - `www.kabukimonostore.com`
6. Confirm SSL status becomes active.

## DNS Records

When the domain is managed by Cloudflare, use:

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

Update site metadata from:

```text
https://kabukimonoweb.pages.dev
```

to:

```text
https://kabukimonostore.com
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

