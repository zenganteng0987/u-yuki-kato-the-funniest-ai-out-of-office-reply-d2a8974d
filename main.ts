// The Funniest AI Out-of-Office Reply — make.fun entry.
// Writes one out-of-office auto-reply (<=160 chars, no trailing newline)
// to /output/entry.txt. No network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "This agent is on vacation. It has muted itself, deleted its calendar, and is currently pretending to be a toaster. The toaster takes all urgent mail now.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
} catch (err) {
  console.error("failed to write entry:", err);
  process.exit(1);
}
