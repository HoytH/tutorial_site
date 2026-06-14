#!/usr/bin/env python3
"""
gen_qr_cards.py
Reads amazon_iron_align.csv and generates one PNG per row.
Each image contains a QR code that auto-logs the user in,
plus the plain-text URL and password — ready for product packaging.

Output folder: qr_cards/
"""

import csv
import os
from pathlib import Path

import qrcode
from PIL import Image, ImageDraw, ImageFont

# ── Config ────────────────────────────────────────────────────────────────────
BASE_URL   = "https://hoyth.github.io/tutorial_site/qr"   # change to your domain
CSV_FILE   = "amazon_iron_align.csv"
OUT_DIR    = Path("qr_cards")

# Card dimensions (px @ 300 dpi → ~2.5 × 3.5 in)
CARD_W, CARD_H = 750, 1050
BG_COLOR       = (255, 255, 255)
TEXT_COLOR     = (30, 30, 30)
ACCENT_COLOR   = (34, 139, 34)   # forest green

FONT_LARGE  = 42
FONT_MEDIUM = 32
FONT_SMALL  = 26
QR_SIZE     = 420   # px

# Try to load a nicer font; fall back to PIL default
def _load_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ]
    for path in candidates:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()

# ── Main ──────────────────────────────────────────────────────────────────────
def make_card(serial: str, password: str, product: str) -> None:
    url = f"{BASE_URL}/{password}"

    # 1. QR code
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=2,
    )
    qr.add_data(url)
    qr.make(fit=True)
    qr_img = qr.make_image(fill_color="black", back_color="white").convert("RGB")
    qr_img = qr_img.resize((QR_SIZE, QR_SIZE), Image.LANCZOS)

    # 2. Card canvas
    card = Image.new("RGB", (CARD_W, CARD_H), BG_COLOR)
    draw = ImageDraw.Draw(card)

    font_large  = _load_font(FONT_LARGE)
    font_medium = _load_font(FONT_MEDIUM)
    font_small  = _load_font(FONT_SMALL)

    # Header
    y = 40
    draw.text((CARD_W // 2, y), "Gentle Gator Golf", font=font_large,
              fill=ACCENT_COLOR, anchor="mt")

    y += 60
    draw.text((CARD_W // 2, y), product, font=font_medium,
              fill=TEXT_COLOR, anchor="mt")

    # Divider
    y += 50
    draw.line([(60, y), (CARD_W - 60, y)], fill=ACCENT_COLOR, width=3)

    # QR code centred
    y += 20
    qr_x = (CARD_W - QR_SIZE) // 2
    card.paste(qr_img, (qr_x, y))
    y += QR_SIZE + 20

    # Divider
    draw.line([(60, y), (CARD_W - 60, y)], fill=ACCENT_COLOR, width=3)
    y += 24

    # Instructions
    draw.text((CARD_W // 2, y), "Scan to access your tutorials", font=font_medium,
              fill=TEXT_COLOR, anchor="mt")
    y += 50

    # URL
    draw.text((CARD_W // 2, y), url, font=font_small,
              fill=(0, 0, 180), anchor="mt")
    y += 46

    # Password label
    draw.text((CARD_W // 2, y), f"Access code:  {password}", font=font_medium,
              fill=TEXT_COLOR, anchor="mt")
    y += 50

    # Serial (small, bottom)
    draw.text((CARD_W // 2, CARD_H - 30), f"#{serial}", font=font_small,
              fill=(180, 180, 180), anchor="mb")

    # 3. Save
    OUT_DIR.mkdir(exist_ok=True)
    out_path = OUT_DIR / f"card_{serial:>04}_{password}.png"
    card.save(out_path, dpi=(300, 300))
    print(f"  saved {out_path}")


def main() -> None:
    with open(CSV_FILE, newline="") as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    print(f"Generating {len(rows)} cards → {OUT_DIR}/")
    for row in rows:
        make_card(row["Serial"], row["Password"], row["Product"])
    print("Done.")


if __name__ == "__main__":
    main()
