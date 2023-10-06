function generateWithVariables(element) {
  let output = '';
  const numLines = 20;

  for (let i = 1; i <= numLines; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      output += `${i}. bitsbots\n`;
    } else if (i % 2 === 0) {
      output += `${i}. bits\n`;
    } else if (i % 3 === 0) {
      output += `${i}. bots\n`;
    } else {
      output += `${i}. 0\n`;
    }
  }

  element.innerText = output;
}

const codeSnippetWithVariables = `
function generateWithVariables(element) {<br /> &nbsp;&nbsp;
  let output = ''; <br /> &nbsp;&nbsp;
  const numLines = 20; <br /><br /> &nbsp;&nbsp;

  for (let i = 1; i <= numLines; i++) { <br /> &nbsp;&nbsp;
    if (i % 2 === 0 && i % 3 === 0) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;
      output += \`\${i}. bitsbots\n\`;
    } else if (i % 2 === 0) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;
      output += \`\${i}. bits\n\`;
    } else if (i % 3 === 0) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;
      output += \`\${i}. bots\n\`;
    } else { <br /> &nbsp;&nbsp;&nbsp;&nbsp;
      output += \`\${i}. 0\n\`;
    } <br /> &nbsp;&nbsp;&nbsp;&nbsp;
  } <br /><br /> &nbsp;&nbsp;

  element.innerText = output;<br />
}
`;

function generateWithoutVariables(element) {
  const outputLines = new Array(20)
    .fill(0)
    .map((_, i) => {
      if ((i + 1) % 6 === 0) return `${i + 1}. bitsbots`;
      if ((i + 1) % 2 === 0) return `${i + 1}. bits`;
      if ((i + 1) % 3 === 0) return `${i + 1}. bots`;
      return `${i + 1}. 0`;
    })
    .join('\n');

  element.innerText = outputLines;
}

const codeSnippetWithoutVariables = `
function generateWithoutVariables(element) { <br /> &nbsp;&nbsp;
  const outputLines = new Array(20) <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    .fill(0) <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    .map((_, i) => { <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      if ((i + 1) % 6 === 0) return \`\${i + 1}. bitsbots\`; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      if ((i + 1) % 2 === 0) return \`\${i + 1}. bits\`; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      if ((i + 1) % 3 === 0) return \`\${i + 1}. bots\`; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      return \`\${i + 1}. 0\`; <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    }) <br /> &nbsp;&nbsp&nbsp;&nbsp;
    .join('\n'); <br /><br />&nbsp;&nbsp;

  element.innerText = outputLines;<br />
}
`;

function generateUsingArray(element) {
  const outputLines = [];

  for (let i = 1; i <= 20; i++) {
    if (i % 6 === 0) {
      outputLines.push(`${i}. bitsbots`);
    } else if (i % 2 === 0) {
      outputLines.push(`${i}. bits`);
    } else if (i % 3 === 0) {
      outputLines.push(`${i}. bots`);
    } else {
      outputLines.push(`${i}. 0`);
    }
  }

  const outputText = outputLines.join('\n');
  element.innerText = outputText;
}

const codeSnippetUsingArray = `
function generateUsingArray(element) {<br /> &nbsp;&nbsp;
  const outputLines = [];<br /><br/> &nbsp;&nbsp;

  for (let i = 1; i <= 20; i++) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    if (i % 6 === 0) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      outputLines.push(\`\${i}. bitsbots\`); <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    } else if (i % 2 === 0) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      outputLines.push(\`\${i}. bits\`); <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    } else if (i % 3 === 0) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      outputLines.push(\`\${i}. bots\`); <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    } else { <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      outputLines.push(\`\${i}. 0\`);<br /> &nbsp;&nbsp;&nbsp;&nbsp;
    } <br /> &nbsp;&nbsp;
  } <br /><br /> &nbsp;&nbsp;

  const outputText = outputLines.join('\n'); <br /> &nbsp;&nbsp;
  element.innerText = outputText; <br />
}
`;

function generateUsingForEach(element) {
  const outputLines = [];

  Array.from({ length: 20 }).forEach((_, i) => {
    if ((i + 1) % 6 === 0) {
      outputLines.push(`${i + 1}. bitsbots`);
    } else if ((i + 1) % 2 === 0) {
      outputLines.push(`${i + 1}. bits`);
    } else if ((i + 1) % 3 === 0) {
      outputLines.push(`${i + 1}. bots`);
    } else {
      outputLines.push(`${i + 1}. 0`);
    }
  });

  const outputText = outputLines.join('\n');
  element.innerText = outputText;
}

const codeSnippetUsingForEach = `
function generateUsingForEach(element) { <br /> &nbsp;&nbsp;
  const outputLines = []; <br /><br /> &nbsp;&nbsp;

  Array.from({ length: 20 }).forEach((_, i) => { <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    if ((i + 1) % 6 === 0) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      outputLines.push(\`\${i + 1}. bitsbots\`); <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    } else if ((i + 1) % 2 === 0) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      outputLines.push(\`\${i + 1}. bits\`); <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    } else if ((i + 1) % 3 === 0) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      outputLines.push(\`\${i + 1}. bots\`); <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    } else { <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      outputLines.push(\`\${i + 1}. 0\`); <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    } <br /> &nbsp;&nbsp;
  }); <br /><br /> &nbsp;&nbsp;

  const outputText = outputLines.join('\n'); <br /> &nbsp;&nbsp;
  element.innerText = outputText; <br />
}
`;

function generateUsingWhileLoop(element) {
  const outputLines = [];
  let i = 1;

  while (i <= 20) {
    if (i % 6 === 0) {
      outputLines.push(`${i}. bitsbots`);
    } else if (i % 2 === 0) {
      outputLines.push(`${i}. bits`);
    } else if (i % 3 === 0) {
      outputLines.push(`${i}. bots`);
    } else {
      outputLines.push(`${i}. 0`);
    }
    i++;
  }

  const outputText = outputLines.join('\n');
  element.innerText = outputText;
}

const codeSnippetUsingWhileLoop = `
function generateUsingWhileLoop(element) { <br /> &nbsp;&nbsp;
  const outputLines = []; <br /> &nbsp;&nbsp;
  let i = 1; <br /><br /> &nbsp;&nbsp;

  while (i <= 20) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    if (i % 6 === 0) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      outputLines.push(\`\${i}. bitsbots\`); <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    } else if (i % 2 === 0) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      outputLines.push(\`\${i}. bits\`); <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    } else if (i % 3 === 0) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      outputLines.push(\`\${i}. bots\`); <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    } else { <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      outputLines.push(\`\${i}. 0\`); <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    } <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    i++; <br /> &nbsp;&nbsp;
  } <br /><br /> &nbsp;&nbsp;

  const outputText = outputLines.join('\n'); <br /> &nbsp;&nbsp;
  element.innerText = outputText; <br />
}
`;

function generateUsingRecursion(element) {
  let outputLines = [];

  function recursiveRun(element, i = 1) {
    if (i > 20) {
      const outputText = outputLines.join('\n');
      element.innerText = outputText;
      return;
    }

    if (i % 6 === 0) {
      outputLines.push(`${i}. bitsbots`);
    } else if (i % 2 === 0) {
      outputLines.push(`${i}. bits`);
    } else if (i % 3 === 0) {
      outputLines.push(`${i}. bots`);
    } else {
      outputLines.push(`${i}. 0`);
    }

    recursiveRun(element, i + 1);
  }

  recursiveRun(element);
}

const codeSnippetUsingRecursion = `
function generateUsingRecursion(element) { <br /> &nbsp;&nbsp;
  let outputLines = []; <br /><br /> &nbsp;&nbsp;

  function recursiveRun(element, i = 1) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    if (i > 20) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      const outputText = outputLines.join('\n'); <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      element.innerText = outputText; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      return; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    } <br /> &nbsp;&nbsp;&nbsp;&nbsp;

    if (i % 6 === 0) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      outputLines.push(\`\${i}. bitsbots\`); <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    } else if (i % 2 === 0) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      outputLines.push(\`\${i}. bits\`); <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    } else if (i % 3 === 0) { <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      outputLines.push(\`\${i}. bots\`); <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    } else { <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      outputLines.push(\`\${i}. 0\`); <br /> &nbsp;&nbsp;&nbsp;&nbsp;
    } <br /><br />  &nbsp;&nbsp;&nbsp;&nbsp;

    recursiveRun(element, i + 1); <br />  &nbsp;&nbsp;
  } <br /><br />  &nbsp;&nbsp;

  recursiveRun(element); <br />
}
`;

const outputElement = document.getElementById('output');

function updateCodeBlock(codeSnippet) {
  document.getElementById('code').innerHTML = codeSnippet;
}

function handleMenu(menuItems) {
  menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', () => {
      menuItems.forEach(menuItem => {
        menuItem.classList.remove('active');
      });
      menuItem.classList.add('active');

      if (menuItem.textContent === 'with variables') {
        generateWithVariables(outputElement);
        updateCodeBlock(codeSnippetWithVariables);
      }

      if (menuItem.textContent === 'without variables') {
        generateWithoutVariables(outputElement);
        updateCodeBlock(codeSnippetWithoutVariables);
      }

      if (menuItem.textContent === 'using array') {
        generateUsingArray(outputElement);
        updateCodeBlock(codeSnippetUsingArray);
      }

      if (menuItem.textContent === 'using for each loop') {
        generateUsingForEach(outputElement);
        updateCodeBlock(codeSnippetUsingForEach);
      }

      if (menuItem.textContent === 'using while loop') {
        generateUsingWhileLoop(outputElement);
        updateCodeBlock(codeSnippetUsingWhileLoop);
      }

      if (menuItem.textContent === 'using recursion') {
        generateUsingRecursion(outputElement);
        updateCodeBlock(codeSnippetUsingRecursion);
      }
    });
  });
}

function onLoad() {
  generateWithVariables(outputElement);
  updateCodeBlock(codeSnippetWithVariables);
  handleMenu(document.querySelectorAll('.menu .menu-item'));
}

window.addEventListener('load', onLoad);
