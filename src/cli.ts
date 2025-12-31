// Command flow for archify
import { getProjectConfig } from './prompts.js';
import { generateProject } from './generator/index.js';

export async function runCli(argv: string[]) {
  const projectName = argv[2];

  const config = await getProjectConfig(projectName);

  console.log('\nProject configuration:\n');
  console.log(config);
  //generate project 
  generateProject(config);
}