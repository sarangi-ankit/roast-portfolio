import puppeteer from "puppeteer-core";
// import puppeteer from "puppeteer";
import chromium from "@sparticuz/chromium";
import { NextResponse } from "next/server";
import { analyzePortfolio } from "../../lib/analyzeAI";
import { generateAudio } from "@/app/lib/generateAudio";

type PortfolioData = {
  title: string;
  heroHeading: string;
  headings: string[];
  paragraphs: string[];
  buttons: string[];
};

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const { url, mode } = await req.json();
    const selectedMode = mode || "brutal";

    // PRODUCTION (VERCEL)
    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });

    
    // LOCAL DEVELOPMENT (COMMENTED)
    // const browser = await puppeteer.launch({
    //   headless: true,
    // });
    

    const page = await browser.newPage();

    await page.goto(url, {
      waitUntil: "domcontentloaded",
    });

    const data: PortfolioData = await page.evaluate(() => ({
      title: document.title,

      heroHeading:
        document.querySelector("h1")?.textContent || "",

      headings: Array.from(
        document.querySelectorAll("h2, h3")
      )
        .map(h => h.textContent || "")
        .filter(Boolean)
        .slice(0, 10),

      paragraphs: Array.from(
        document.querySelectorAll("p")
      )
        .map(p => p.textContent || "")
        .filter(Boolean)
        .slice(0, 10),

      buttons: Array.from(
        document.querySelectorAll("button, a")
      )
        .map(btn => btn.textContent || "")
        .filter(Boolean)
        .slice(0, 10),
    }));

    await browser.close();

    const aiResult = await analyzePortfolio(
      data,
      selectedMode
    );

    const audioBase64 = await generateAudio(
      aiResult.first_impression
    );

    return NextResponse.json({
      success: true,
      roast: aiResult,
      audio: audioBase64,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Please enter a valid website URL",
      },
      { status: 500 }
    );
  }
}