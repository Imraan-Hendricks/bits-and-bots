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

generateWithVariables(document.getElementById('generate-with-variables'));
generateWithoutVariables(document.getElementById('generate-without-variables'));
generateUsingArray(document.getElementById('generate-using-array'));
generateUsingArray(document.getElementById('generate-using-for-each'));
generateUsingRecursion(document.getElementById('generate-using-while-loop'));
generateUsingRecursion(document.getElementById('generate-using-recursion'));

function handleMenu(menuItems, cards, activateCard) {
  menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', () => {
      menuItems.forEach(menuItem => {
        menuItem.classList.remove('active');
      });
      menuItem.classList.add('active');

      cards.forEach(card => {
        card.classList.remove('active');
      });
      if (menuItem.textContent === 'with variables')
        activateCard('generate-with-variables');

      if (menuItem.textContent === 'without variables')
        activateCard('generate-without-variables');

      if (menuItem.textContent === 'using array')
        activateCard('generate-using-array');

      if (menuItem.textContent === 'using for each loop')
        activateCard('generate-using-for-each');

      if (menuItem.textContent === 'using while loop')
        activateCard('generate-using-while-loop');

      if (menuItem.textContent === 'using recursion')
        activateCard('generate-using-recursion');
    });
  });
}

function activateCard(id) {
  document.getElementById(id).parentElement.classList.add('active');
}
const menuItems = document.querySelectorAll('.menu .menu-item');
const cards = document.querySelectorAll('.cards .card');

handleMenu(menuItems, cards, activateCard);
