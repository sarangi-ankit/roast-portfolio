import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium-min";

export async function getBrowser() {

  const executablePath =
    process.env.VERCEL
      ? await chromium.executablePath(
          "https://github.com/Sparticuz/chromium/releases/download/v123.0.0/chromium-v123.0.0-pack.tar"
        )
      : undefined;

  return puppeteer.launch({
    args: chromium.args,
    executablePath,
    headless: true,
  });

}