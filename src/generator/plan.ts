import { ProjectConfig, PlanItem } from './types.js';

export function buildPlan(config: ProjectConfig): PlanItem[] {
  const { projectName, language } = config;

  const ext = language === 'ts' ? 'ts' : 'js';

  const plan: PlanItem[] = [
    { type: 'dir', path: projectName },
    { type: 'dir', path: `${projectName}/src` },
    { type: 'dir', path: `${projectName}/src/config` },
    { type: 'dir', path: `${projectName}/src/modules` },
    { type: 'dir', path: `${projectName}/src/common` },

    {
      type: 'file',
      path: `${projectName}/src/index.${ext}`,
      template: 'base/src/index'
    },
    {
      type: 'file',
      path: `${projectName}/src/app.${ext}`,
      template: 'base/src/app'
    }
  ];

  return plan;
}
