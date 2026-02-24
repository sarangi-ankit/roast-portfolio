import puppeteer from "puppeteer";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const browser = await puppeteer.launch({
      headless: true,
    });

    const page = await browser.newPage();

    await page.goto("https://shimmering-otter-0aea56.netlify.app/", {
      waitUntil: "networkidle2",
    });

    const data = await page.evaluate(() => {
  return {
    title: document.title,

    heroHeading:
      document.querySelector("h1")?.textContent || null,

    headings: Array.from(document.querySelectorAll("h2, h3"))
      .map(h => h.textContent)
      .filter(Boolean)
      .slice(0, 10),

    paragraphs: Array.from(document.querySelectorAll("p"))
      .map(p => p.textContent)
      .filter(Boolean)
      .slice(0, 10),

    buttons: Array.from(document.querySelectorAll("button, a"))
      .map(btn => btn.textContent)
      .filter(Boolean)
      .slice(0, 10),
  };
});

    return NextResponse.json({
      success: true,
      data,
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Puppeteer failed" },
      { status: 500 }
    );
  }
}
