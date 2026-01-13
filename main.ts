#! /usr/bin/env deno-run
import { getStdin } from "./stdinReader.ts";

console.log(await getStdin());
