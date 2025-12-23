// Interactive questions for archify
import prompts from 'prompts';

export async function getProjectConfig(projectName: string) {
  const response = await prompts([
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
  ]);

  return {
    projectName,
    ...response
  };
}
