const fs = require('fs/promises');

const showNameAndId = async () => {
  try {
    const response = await fs.readFile('simpsons.json', 'utf-8');
    const data = await JSON.parse(response);
    data.forEach(({ id, name }) => {
      console.log(`${id} - ${name}`)
    });
  } catch (err) {
    console.log(err);
  }
}

showNameAndId();