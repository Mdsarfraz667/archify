export type Language = 'ts' | 'js';
export type Architecture = 'mvc' | 'mvc-service';
export type Framework = 'none' | 'express' | 'fastify';

export interface ProjectConfig {
  projectName: string;
  language: Language;
  architecture: Architecture;
  framework: Framework;
}

export interface FilePlan {
  type: 'file';
  path: string;
  template: string;
}

export interface DirectoryPlan {
  type: 'dir';
  path: string;
}

export type PlanItem = FilePlan | DirectoryPlan;
