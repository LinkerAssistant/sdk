export class CoderAgent {
  async execute(step: string) {
    return {
      status: "success",
      action: step
    };
  }
}
