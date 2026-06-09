export class PlannerAgent {
  async plan(task: string) {
    return {
      objective: task,
      steps: [
        "Analyze repository",
        "Generate execution plan",
        "Assign agents",
        "Execute tasks",
        "Review output"
      ]
    };
  }
}
