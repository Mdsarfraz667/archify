import { ProjectConfig } from './types.js';
import { buildPlan } from './plan.js';

export function generateProject(config: ProjectConfig) {
  const plan = buildPlan(config);

  console.log('\n📦 Generation Plan:\n');

  for (const item of plan) {
    if (item.type === 'dir') {
      console.log(`📁 ${item.path}`);
    } else {
      console.log(`📄 ${item.path} ← ${item.template}`);
    }
  }
  return plan;
}
