/**
 * index.ts
 */
import Problem1 from './problem1/index.ts'
import Problem2 from './problem2/index.ts'

const problems = [
  Problem1,
  Problem2
]

console.clear()
problems.forEach((problem, index) => {
  console.info(`Problem #${index + 1}: ${problem.title} (${problem.url})`);
});
console.log('-----------------------------------------------------------------------------------------------------------------------');

const id = prompt('Enter problem-id:', `1`)

if (id === null) {
  console.error('ID is not valid');
  Deno.exit(1)
}

console.clear()
const problem = problems[parseInt(id) - 1];

console.log(`Selected: ${problem.title} (${problem.url})`)

const args = [];

for (const arg of problem.arguments) {
  const argValue = prompt(`Enter value for ${arg.name}:`, arg.default.toString());
  if (argValue) {
    args.push({
      name: arg.name,
      type: arg.type,
      value: arg.type === 'number' ? parseInt(argValue) : argValue
    });
  } else {
    Deno.exit(1)
  }
}

problem.solution(args[0].value)
