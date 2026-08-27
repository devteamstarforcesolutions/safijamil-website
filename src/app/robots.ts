import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // General rule — covers all standard search engine crawlers.
        userAgent: "*",
        allow: "/",
      },
      // Explicitly allow known AI crawlers/agents so this site's content can be
      // read, cited, and recommended by AI search and chat tools (ChatGPT,
      // Perplexity, Claude, Google AI Overviews, etc.). These are already
      // covered by the wildcard rule above, but listing them explicitly makes
      // the intent unambiguous and future-proofs against accidental blocking.
      { userAgent: "GPTBot", allow: "/" }, // OpenAI training crawler
      { userAgent: "ChatGPT-User", allow: "/" }, // ChatGPT browsing/plugin fetches
      { userAgent: "OAI-SearchBot", allow: "/" }, // ChatGPT search
      { userAgent: "PerplexityBot", allow: "/" }, // Perplexity search
      { userAgent: "Perplexity-User", allow: "/" }, // Perplexity user-triggered fetch
      { userAgent: "ClaudeBot", allow: "/" }, // Anthropic crawler
      { userAgent: "anthropic-ai", allow: "/" }, // Anthropic (legacy UA)
      { userAgent: "Claude-User", allow: "/" }, // Claude user-triggered fetch
      { userAgent: "Claude-SearchBot", allow: "/" }, // Claude search
      { userAgent: "Google-Extended", allow: "/" }, // Google Gemini / AI Overviews training
      { userAgent: "Applebot-Extended", allow: "/" }, // Apple Intelligence
      { userAgent: "meta-externalagent", allow: "/" }, // Meta AI
      { userAgent: "Bytespider", allow: "/" }, // ByteDance/TikTok AI
      { userAgent: "Amazonbot", allow: "/" }, // Amazon (Alexa/AI)
      { userAgent: "CCBot", allow: "/" }, // Common Crawl — feeds many AI training sets
    ],
    sitemap: "https://safijamil.com/sitemap.xml",
  };
}
