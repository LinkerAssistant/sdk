import { PlannerAgent } from "../agents/planner.agent";
import { CoderAgent } from "../agents/coder.agent";
import { ReviewerAgent } from "../agents/reviewer.agent";

export async function executeTask(task: string) {
  const planner = new PlannerAgent();
  const coder = new CoderAgent();
  const reviewer = new ReviewerAgent();

  const plan = await planner.plan(task);

  for (const step of plan.steps) {
    await coder.execute(step);
  }

  return reviewer.review();
}
