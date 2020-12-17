#!/usr/bin/env node
const { execSync } = require("child_process");

const {
  testMode,
  e2eTestMode,
  unitTestMode,
  unitWatchTestMode,
} = require("./commands.js");

if (testMode) {
}

if (unitTestMode) {
  execSync("npx jest");
}

if (unitWatchTestMode) {
}

if (e2eTestMode) {
}
