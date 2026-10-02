---
title: Inception Flap Scanner
sdk: docker
app_port: 7860
---

<div align="center">

# Inception Flap Scanner

[![CI](https://github.com/arbincept/inception-flap-scanner/actions/workflows/ci.yml/badge.svg)](https://github.com/arbincept/inception-flap-scanner/actions/workflows/ci.yml)

**Explore BNB Chain token launches, bonding curves, and contract signals.**

Built and maintained by **[Luca Celebrano · @Lukecele](https://github.com/Lukecele)**, founder of [Arbitrage Inception](https://github.com/arbincept).

**[Open app](https://lucace-inception-flap-scanner.hf.space)** · **[Star this repository](https://github.com/arbincept/inception-flap-scanner)** · **[Follow Lukecele](https://github.com/Lukecele)**

[Watch the 20-second demo](docs/scanner-demo.webm) · [Source](https://github.com/arbincept/inception-flap-scanner) · [Quick start](#quick-start) · [Contribute](#contribute) · [MIT license](LICENSE)

</div>

![Inception Flap Scanner launch cards and token screening dashboard](docs/live-scanner.png)

<sub>Application screenshot from this repository. Live data and available routes change over time.</sub>

## What you can explore

- **Token launches:** a live dashboard for BNB Chain launch activity.
- **Bonding curves:** progress, liquidity, and market-cap signals alongside token details.
- **Contract screening:** tax signals, ERC-1167 proxy patterns, social duplication, and developer-wallet indicators.
- **Market context:** links to external token explorers and chart views.

Built with **React, Vite, Node.js, and ethers**, with a Docker deployment on [Hugging Face Spaces](https://huggingface.co/spaces/Lucace/inception-flap-scanner).

## Try it

1. Open the public scanner and select a launch card.
2. Inspect bonding-curve progress, holder concentration, and developer holdings where data is available.
3. Compare the automated screening signals with the linked source data.

The [demo recording](docs/scanner-demo.webm) shows the public feed, token selection, curve telemetry, and screening indicators as displayed on October 1, 2026. Unavailable values and automated labels are preserved; no trading actions were taken. See [sharing assets and capture notes](docs/sharing.md).

Browsing the dashboard does not require connecting a wallet. Screening results are heuristics and can be incomplete; they are not a manual contract audit.

## Quick start

### Docker

```bash
git clone https://github.com/arbincept/inception-flap-scanner.git
cd inception-flap-scanner
docker build -t inception-flap-scanner .
docker run --rm -p 7860:7860 inception-flap-scanner
```

Open [localhost:7860](http://localhost:7860). The [Dockerfile](Dockerfile) runs Node.js 22 and installs the GMGN CLI used by server routes.

### Local development

With **Node.js 22.12+** and **npm**:

```bash
npm ci
npm run dev -- --host 127.0.0.1 --port 7860
```

Run these commands from the cloned repository. The committed `package-lock.json` is the reproducible dependency set, so `npm ci` is the supported clean install. [.env.example](.env.example) documents optional GMGN API credentials. Some server routes invoke `gmgn-cli`, which is installed from the lockfile as an application dependency. Provider availability and authentication requirements affect which data can be retrieved.

### Project checks

```bash
npm test
npm run lint
npm run build
```

See [tests](tests) for the security and telemetry checks.

## Architecture and deployment

| Component | Responsibility |
| :--- | :--- |
| [Scanner UI](src/components/Scanner.jsx) | Launch cards, feed updates, and token selection. |
| [Token detail view](src/components/TokenDetailModal.jsx) | Token metrics and external research links. |
| [Screening utilities](src/utils/security-auditor.js) | Automated screening helpers. |
| [Vite server configuration](vite.config.js) | Provider proxy routes, GMGN integration, and local social-history storage. |

The backend lives in Vite's development-server middleware. Run `npm run dev` for local development; the same process serves the UI and provider/API routes. A static `dist/` deployment alone does not provide those API routes. The Docker image starts this server on port `7860`, which is the runtime used by the Hugging Face Space.

The server also exposes GMGN integration routes, including a swap route; review them before exposing a self-hosted instance. Keep API signing credentials private. The dashboard's screening labels should not be interpreted as guarantees about a token.

## Open-source references

Included in **Awesome-Web3** through [merged submission #795](https://github.com/ahmet/awesome-web3/pull/795).

## Contribute

Reproducible bug reports, clearer documentation, and focused improvements are welcome. Start with an [issue](https://github.com/arbincept/inception-flap-scanner/issues) describing the behavior, environment, and expected result. Include the relevant checks with a pull request.

For sensitive reports, use the organization's [security policy](https://github.com/arbincept/.github/blob/main/SECURITY.md).

## More from Lukecele

This project is part of an independent ecosystem built by **[Luca Celebrano (@Lukecele)](https://github.com/Lukecele)**.

[Arb-Inc All-in-Dex](https://github.com/arbincept/Arb-Inc-All-in-Dex) · [BSC Arbitrage Scanner](https://github.com/arbincept/bsc-arbitrage-scanner) · [Arbitrage Inc Earn](https://github.com/arbincept/arbitrage-inc-earn)

If this project helps you, **[give it a star](https://github.com/arbincept/inception-flap-scanner)** and **[follow Lukecele](https://github.com/Lukecele)** for future builds. [Sponsorship](https://github.com/sponsors/Lukecele) helps support ongoing work.

[Telegram](https://t.me/ArbitrageInception) · [Updates on X](https://x.com/Arbitrageincept) · [MIT license](LICENSE)
