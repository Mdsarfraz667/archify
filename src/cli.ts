// Command flow for archify
import { getProjectConfig } from './prompts.js';

export async function runCli(argv: string[]) {
  const projectName = argv[2];

  if (!projectName) {
    console.error('Please provide a project name.');
    process.exit(1);
  }

  const config = await getProjectConfig(projectName);

  console.log('\nProject configuration:\n');
  console.log(config);
}
