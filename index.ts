import { $ } from 'bun';

const dirs = ['./Backend', './Frontend', './Full stack'];
const file = 'Giorgi Kakhoshvili.tex';

async function main() {
  for (const dir of dirs) {
    console.log(`Compiling ${dir}/${file}`);
    await $`pdflatex -interaction=nonstopmode -halt-on-error ${file}`.cwd(dir);
  }
}

await main();
