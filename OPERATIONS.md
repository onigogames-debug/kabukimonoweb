# Operations

## Measurement

- Cloudflare Web Analytics: enable from Cloudflare dashboard and paste the token script before `</body>` if needed.
- Current public URL: `https://www.kabukimonostore.com`
- Custom domain active: `https://www.kabukimonostore.com`
- Apex domain now serves the site and is redirected to `www` in the browser for canonical consistency.
- Static asset cache headers are configured in `_headers`.
- Amazon links include UTM parameters by placement:
  - `hero_cta`
  - `floating_cta`
  - `book_cta`
  - `review_cta`
  - `final_cta`
- X posts should use campaign URLs:
  - `utm_source=x`
  - `utm_medium=social`
  - `utm_campaign=official_launch`, `problem_post`, or `review_ask`
- CTA clicks are stored locally in the browser for QA via:

```js
window.KABUKIMONO.getClickLog()
```

- Landing source is stored per browser session for QA via:

```js
window.KABUKIMONO.getLanding()
```

## Amazon Associate

When an Amazon Associate tag is available, replace links like:

```text
https://www.amazon.co.jp/dp/B0GY8549WX?utm_source=...
```

with:

```text
https://www.amazon.co.jp/dp/B0GY8549WX?tag=YOUR_TAG&utm_source=...
```

## A/B Test Ideas

1. Hero copy
   - A: 普通の会社員が出世する、静かな反逆の思考法。
   - B: 空気を読みながら、飲まれない。
2. CTA label
   - A: Amazonで読む
   - B: かぶきもの思考を読む
3. Review CTA
   - A: レビューを書く
   - B: 感想を残す

## Weekly Checklist

- Monday: X投稿を3本予約または投稿
- Tuesday: Amazon商品ページの表示と価格を確認
- Wednesday: LPのクリック導線を確認
- Thursday: レビュー依頼投稿
- Friday: 反応の良い投稿を再利用して改善
- Weekend: LPコピーを1箇所だけA/Bテスト

## Launch Funnel Log

Track weekly:

```text
Date | X post URL | Campaign | Impressions | Profile visits | LP clicks | Amazon clicks | Notes
```
