module.exports = [
  {
    type: 'select',
    choices: ['component', 'container', 'structure', 'template', 'page'],
    name: 'type',
    message: "What's your component type?",
  },
  {
    type: 'input',
    name: 'name',
    message: "What's your component name?",
  },
];
