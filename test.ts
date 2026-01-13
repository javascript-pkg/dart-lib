#! /usr/bin/env deno-run
import { getStdin } from "https://github.com/javascript-pkg/dart-lib/raw/v2026.0113.2007.10/stdinReader.ts";

console.log(await getStdin());
