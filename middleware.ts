import { NextResponse, type NextRequest } from "next/server";

const AISO_TRACK_URL = "https://ai-visability-six.vercel.app/api/track";
const AISO_SITE_KEY = "stk_0c93eb3439b08d16efa6fbdc7503eb68";

const AI_BOTS: Record<string, string> = {
  GPTBot: "indexing",
  "ChatGPT-User": "indexing",
  PerplexityBot: "citation",
  ClaudeBot: "indexing",
  "Claude-Web": "indexing",
  "anthropic-ai": "training",
  CCBot: "training",
  "cohere-ai": "training",
  GoogleOther: "training",
  "Google-CloudVertexBot": "training",
};

const AI_REFERRERS: Record<string, string> = {
  "chat.openai.com": "chatgpt",
  "chatgpt.com": "chatgpt",
  "perplexity.ai": "perplexity",
  "gemini.google.com": "gemini",
  "claude.ai": "claude",
};

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") ?? "";

  for (const [bot, cat] of Object.entries(AI_BOTS)) {
    if (ua.includes(bot)) {
      void fetch(AISO_TRACK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sk: AISO_SITE_KEY,
          bn: bot,
          bc: cat,
          p: request.nextUrl.pathname,
          ua,
        }),
      }).catch(() => {});
      break;
    }
  }

  const referer = request.headers.get("referer") ?? "";
  if (referer) {
    try {
      const refHost = new URL(referer).hostname;
      for (const [host, engine] of Object.entries(AI_REFERRERS)) {
        if (refHost === host || refHost.endsWith(`.${host}`)) {
          void fetch(AISO_TRACK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              sk: AISO_SITE_KEY,
              t: "ref",
              se: engine,
              ref: referer.slice(0, 2048),
              p: request.nextUrl.pathname,
              ua,
            }),
          }).catch(() => {});
          break;
        }
      }
    } catch {
      // invalid referer URL
    }
  }

  return NextResponse.next();
}
