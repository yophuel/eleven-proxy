export const config = { runtime: "edge" };

export default async function handler() {
  const upstream =
    "https://esm.sh/@elevenlabs/client@0.14.0?standalone&target=es2022";

  const r = await fetch(upstream);

  return new Response(await r.text(), {
    status: r.status,
    headers: {
      "content-type":
        r.headers.get("content-type") || "application/javascript; charset=utf-8",
      "access-control-allow-origin": "*",
      "cache-control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
