# Operations

## Measurement

- Cloudflare Web Analytics: enable from Cloudflare dashboard and paste the token script before `</body>` if needed.
- Current public URL: `https://www.kabukimonostore.com`
- Custom domain active: `https://www.kabukimonostore.com`
- Apex domain now serves the site and is redirected to `www` in the browser for canonical consistency.
- Static asset cache headers are configured in `_headers`.
- Google Search Console:
  - Account: `kabukimono.business42@gmail.com`
  - Property: `https://www.kabukimonostore.com/`
  - Verification: HTML tag
  - Sitemap: `/sitemap.xml` submitted successfully on 2026-05-27
- Search discovery files:
  - `https://www.kabukimonostore.com/sitemap.xml`
  - `https://www.kabukimonostore.com/robots.txt`
  - `https://www.kabukimonostore.com/feed.xml`
  - `https://www.kabukimonostore.com/llms.txt`
- The LP includes Book structured data for the Kindle title.
- Organic discovery pages:
  - `https://www.kabukimonostore.com/articles/kabukimono-thinking`
  - `https://www.kabukimonostore.com/articles/company-worker-promotion`
  - `https://www.kabukimonostore.com/articles/work-without-burnout`
- Referral/share page:
  - `https://www.kabukimonostore.com/press-kit`
- Amazon links include UTM parameters by placement:
  - `hero_cta`
  - `floating_cta`
  - `book_cta`
  - `review_cta`
  - `final_cta`
- Amazon outbound links also append landing-source carryover parameters:
  - `lp_source`
  - `lp_medium`
  - `lp_campaign`
  - `lp_path`
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

## Weekly Marketing Operation

- Use `SOCIAL_CALENDAR.md` for daily X post selection.
- Use `MARKETING_PLAN.md` for campaign URL discipline.
- Use `WEEKLY_GROWTH.md` every Friday or weekend to record numbers.
- Use `REVIEW_OUTREACH.md` for review asks; keep review asks to a controlled cadence.
- Use `promo-assets/` images for X and Instagram posts.
- Use `press-kit.html` for blog, LINE, newsletter, and direct sharing outreach.
- Use `KDP_PROMOTION_KIT.md` when updating Amazon KDP:
  - A+ Content project
  - Book description
  - Search keywords
  - Category candidates
  - Sponsored Products starter campaigns

## KDP Update Checklist

- Add A+ Content on Amazon.co.jp with assets in `kdp-assets/`.
- A+ Content submitted on 2026-05-27 for ASIN `B0GY8549WX`; current KDP status: `送信済み` / `承認待ち`.
- Submitted A+ module is text-first because KDP accepted image upload but did not accept automated alt-text validation reliably.
- KDP book description updated from `KDP_PROMOTION_KIT.md` on 2026-05-27.
- Seven recommended keyword fields submitted on 2026-05-27.
- Confirm book categories are still relevant.
- Current KDP status after submission: `販売中 変更事項のレビュー中`.
- If KDP Select is enabled, schedule a two-day Free Book Promotion only after LP and social announcements are ready.
- If starting Amazon Ads, begin with 500 yen/day automatic targeting for 7 days.

## A+ Content Follow-Up Notes

- After A+ approval, check the Amazon detail page within 24 hours.
- If editing the approved A+ content later, add the uploaded `aplus-01-hero.png` asset manually or retry the image module from `KDP_PROMOTION_KIT.md`.
- Keep the submitted text-first version live until an image-rich revision can be validated.

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
