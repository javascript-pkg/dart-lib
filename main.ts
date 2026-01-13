#! /usr/bin/env deno-run
//import { readLines } from "https://deno.land/std@0.224.0/io/mod.ts";
import { getStdin } from "./stdinReader.ts";

/*
export async function getStdin(defaultStr?: string) {
  if (Deno.isatty(Deno.stdin.rid)) {
    return defaultStr ?? "";
  }
  const stdin: string[] = [];
  for await (const line of readLines(Deno.stdin)) {
    stdin.push(line);
  }
  return stdin.join("\n");
}

console.log(await getStdin());
*/
console.log(await getStdin());
