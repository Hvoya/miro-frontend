module.exports = {
  prompt: async ({ inquirer }) => {
    const { type } = await inquirer.prompt({
      type: 'select',
      choices: ['component', 'container', 'structure', 'template', 'page'],
      name: 'type',
      message: "What's your component type?",
    });
    const { name } = await inquirer.prompt({
      type: 'input',
      name: 'name',
      message: "What's your component name?",
    });

    if (!name) {
      return Promise.reject('Error: Name is required');
    }

    let suffix = '';
    if (type !== 'component') {
      const typeStringArray = type.split('');
      typeStringArray[0] = typeStringArray[0].toUpperCase();
      suffix = typeStringArray.join('');
    }

    return Promise.resolve({ type, name, suffix });
  },
};
