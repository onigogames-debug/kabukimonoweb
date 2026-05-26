# Custom Domain Setup

Domain: `kabukimonostore.com`

Current Cloudflare Pages URL:

```text
https://www.kabukimonostore.com
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
- Cloudflare DNS zone was added on the Free plan:
  - `kabukimonostore.com`
  - assigned nameservers: `ursula.ns.cloudflare.com`, `wesley.ns.cloudflare.com`
- Cloudflare DNS records were reset and rebuilt for Pages:
  - `kabukimonostore.com` CNAME -> `kabukimonoweb.pages.dev`
  - `www.kabukimonostore.com` CNAME -> `kabukimonoweb.pages.dev`
- Onamae.com DNS record setup was submitted:
  - `www.kabukimonostore.com`
  - `CNAME`
  - `kabukimonoweb.pages.dev`
- Onamae.com nameserver change was submitted for DNS record hosting:
  - `01.dnsv.jp`
  - `02.dnsv.jp`
  - `03.dnsv.jp`
  - `04.dnsv.jp`
- Onamae.com nameservers were changed to Cloudflare:
  - `ursula.ns.cloudflare.com`
  - `wesley.ns.cloudflare.com`
- Cloudflare zone status is active.
- Cloudflare Pages status:
  - `www.kabukimonostore.com`: active
  - `kabukimonostore.com`: serves the site

Propagation note:

Onamae.com shows that nameserver changes can take up to 72 hours. The live canonical custom-domain URL is `https://www.kabukimonostore.com`.

## Apex Domain Note

Onamae.com DNS accepted the `www` CNAME record. It did not accept a blank-host CNAME for the apex domain `kabukimonostore.com`.

Onamae.com URL forwarding appears to require a DNS additional option application. Do not enable that option unless the cost and need are confirmed.

The clean free path for the apex domain is Cloudflare DNS:

1. In Onamae.com, change the domain nameservers to:
   - `ursula.ns.cloudflare.com`
   - `wesley.ns.cloudflare.com`
2. Wait for Cloudflare zone activation.
3. Confirm Cloudflare Pages SSL status becomes active.

## DNS Records

Current Cloudflare DNS records:

```text
Type: CNAME
Name: @
Target: kabukimonoweb.pages.dev
Proxy: Proxied
```

```text
Type: CNAME
Name: www
Target: kabukimonoweb.pages.dev
Proxy: Proxied
```

## Active Canonical URL

Use this URL in X, Instagram, email, LINE, and Amazon KDP promotion:

```text
https://www.kabukimonostore.com
```

Amazon UTM source:

```text
utm_source=kabukimonostore.com
```
