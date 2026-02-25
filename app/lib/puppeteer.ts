import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export async function getBrowser() {

  const isVercel = !!process.env.VERCEL;

  return puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: isVercel
      ? await chromium.executablePath()
      : undefined,
    headless: true,
  });

}