import puppeteer from "puppeteer";
import { NextResponse } from "next/server";
import { analyzePortfolio } from "../../lib/analyzeAI";
import { generateAudio } from "@/app/lib/generateAudio";

export async function POST(req: Request) {
  try {
    const { url, mode } = await req.json();

    const selectedMode = mode || "brutal";

    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    const data = await page.evaluate(() => ({
      title: document.title,
      heroHeading: document.querySelector("h1")?.textContent || "",
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
    }));

    await browser.close();

    const aiResult = await analyzePortfolio(data, selectedMode);
    
    const audioBase64 = await generateAudio(aiResult.first_impression);

    return NextResponse.json({
      success: true,
      roast: aiResult,
      audio: audioBase64,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: "Please enter a valid website URL" },
      { status: 500 }
    );
  }
}


