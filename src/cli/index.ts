#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
  .name("linker")
  .description("AI Agent Handoff CLI")
  .version("1.0.0");

program
  .command("init")
  .description("Initialize LinkerAssistant")
  .action(() => {
    console.log("Repository initialized.");
  });

program
  .command("scan")
  .description("Scan repository")
  .action(() => {
    console.log("Scanning repository...");
  });

program
  .command("run")
  .argument("<task>")
  .description("Run AI task")
  .action((task) => {
    console.log(`Running task: ${task}`);
  });

program
  .command("review")
  .description("Review codebase")
  .action(() => {
    console.log("Reviewing repository...");
  });

program.parse();
