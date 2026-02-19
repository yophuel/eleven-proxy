// Minimal ESM re-export without esm.sh.
// We use jsdelivr because it обычно стабильнее у операторов, чем esm.sh.
// IMPORTANT: this file is served from YOUR vercel domain, so the page loads it even if esm.sh is blocked.

export { Conversation } from "https://cdn.jsdelivr.net/npm/@elevenlabs/client@0.14.0/dist/lib.modern.js";
