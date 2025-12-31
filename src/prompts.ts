// Interactive questions for archify
import prompts, { type PromptObject } from 'prompts';
import { type ProjectConfig } from './generator/types.js';

export async function getProjectConfig(projectName?: string): Promise<ProjectConfig> {
  const questions: PromptObject[] = [];

  if(!projectName){
    questions.push({
      type: 'text',
      name: 'projectName',
      message: 'Enter the project name...'
    })
  }

  questions.push(
    {
      type: 'select',
      name: 'language',
      message: 'Language?',
      choices: [
        { title: 'TypeScript', value: 'ts' },
        { title: 'JavaScript', value: 'js' }
      ]
    },
    {
      type: 'select',
      name: 'architecture',
      message: 'Architecture?',
      choices: [
        { title: 'MVC', value: 'mvc' },
        { title: 'MVC + Services', value: 'mvc-service' }
      ]
    },
    {
      type: 'select',
      name: 'framework',
      message: 'Framework?',
      choices: [
        { title: 'None', value: 'none' },
        { title: 'Express', value: 'express' },
        { title: 'Fastify', value: 'fastify' }
        ]
      }
    );

  const response = await prompts(questions);

  if (!response.language || !response.architecture || !response.framework) {
    throw new Error('Missing required configuration fields');
  }

  return {
    projectName: projectName ?? (response.projectName as string),
    language: response.language as ProjectConfig['language'],
    architecture: response.architecture as ProjectConfig['architecture'],
    framework: response.framework as ProjectConfig['framework']
  };

}
