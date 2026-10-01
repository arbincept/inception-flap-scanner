# Sharing Inception Flap Scanner

## Social card

- [PNG for upload](social-card.png): 1280 × 640, under 1 MB.
- [Editable SVG source](social-card.svg): self-contained vector artwork, system sans-serif fonts, no external assets.
- Message: “Explore token launches on BNB Chain”, with the project name and “by Lukecele”.

The artwork reuses the charcoal, cyan, teal and text colors from [src/index.css](../src/index.css). Its scanner rings are decorative, not token data or a new project logo. Both files are covered by this repository's [MIT license](../LICENSE). The existing [dashboard screenshot](live-scanner.png) is unchanged.

To export an edited source, open the SVG in a browser or vector editor and export a 1280 × 640 PNG. Check legibility at half size and keep the file below 1 MB.

## Demo and capture notes

[Watch the approximately 20-second demo](scanner-demo.webm).

This is a real capture of the [public app](https://lucace-inception-flap-scanner.hf.space) on October 1, 2026, using a browser without a connected wallet. It shows:

1. The launch feed and selection of a token card.
2. The bonding-curve view with the values available during capture.
3. The automatic screening indicators, followed by a return to the feed.

The recording preserves the application pixels, missing values and screening outcomes. The footer adds project attribution, capture date and a reminder that automated signals are not a manual audit. No credentials or session data are displayed, and no trade, wallet connection or transaction signing was performed. Tokens shown are incidental examples, not endorsements. The application's “SECURITY AUDIT” and “PASSED” labels are heuristic output, not evidence of a formal audit or a safety guarantee. Live provider data and labels may differ when replaying the workflow.

Format: WebM/VP8, 15 fps, with an attribution footer below the original 1280 × 800 browser capture. If your repository viewer offers a download instead of inline playback, open the downloaded WebM in a browser.

To record again, open the public app, wait for launch cards, record for 15–30 seconds, select a card, inspect the curve and screening tabs, and return to the feed. Avoid trade links. Retain unavailable values and warnings; update the capture date. If providers are unavailable, document that limitation rather than fabricating a feed.

## Repository discovery settings

These settings are separate from Markdown content and require repository permissions. The values below are prepared for configuration; their actual application is reported in the task delivery.

**Description**

> BNB Chain token-launch dashboard with bonding-curve telemetry and automated contract screening. Built by Lukecele.

**Website**

https://lucace-inception-flap-scanner.hf.space

**Topics**

`bnb-chain`, `token-scanner`, `bonding-curve`, `on-chain-analytics`, `security-screener`, `erc-1167`, `react`, `vite`, `docker`, `huggingface`

To configure manually:

1. On the repository home page, edit **About**, paste the description and website, and replace the topics with the list above. In particular, remove `security-audit` and the “bonding curve auditor” wording.
2. Open **Settings → General → Social preview → Edit → Upload an image** and upload [social-card.png](social-card.png). Adding a README image does not configure GitHub's social preview.
3. Save and inspect the displayed About fields and preview image.

GitHub permits up to 20 topics, each with at most 50 lowercase letters, numbers or hyphens. Its recommended social preview size is 1280 × 640, in PNG/JPG/GIF format under 1 MB. See the official [topic documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics) and [social preview documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview).

## Announcement draft

Copy the text below when you choose to announce the project; this draft has not been posted.

---

Explore token launches on BNB Chain with Inception Flap Scanner, an open-source dashboard built by Luca Celebrano (@Lukecele), founder of Arbitrage Inception.

Browse the launch feed, select a token and inspect bonding-curve telemetry and automated contract signals: tax rates, ERC-1167 proxy patterns, reused social links and developer-wallet indicators, where data is available.

Built with React, Vite, Node.js and ethers. The API middleware runs in Vite's development server, including GMGN routes; a static build alone does not provide those routes. Browsing needs no wallet connection. Screening is heuristic and is not a manual audit or a guarantee of token safety.

Try it: https://lucace-inception-flap-scanner.hf.space

Explore the source and give it a star: https://github.com/arbincept/inception-flap-scanner

Follow future builds: https://github.com/Lukecele
