// Make the AI Judge Laugh: Office Jokes — one-line office joke.
// The program writes a single joke line (under 200 chars) to /output/entry.txt.
// The joke: an out-of-office reply left on so long it becomes the employee's
// most reliable piece of work — a concrete office truth with the twist landing
// on the final words.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My out-of-office reply has been on for three years \u2014 HR just named it my most consistent deliverable.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke + "\n", "utf8");
console.log(joke);
