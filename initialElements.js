export const treeRootId = 1;
export const initialTree = {
  1: {
    id: '1',
    name: 'root',
    type: 'input',
    children: ['2', '3'],
  },
  2: { id: '2', name: 'mode', children: ['4', '5'] },
  3: {
    id: '3',
    name: 'color',
    children: ['6', '7'],
  },
  4: { id: '4', name: 'mode: day', children: ['8', '9', '10', '11'] },
  5: { id: '5', name: 'mode: night', children: ['8', '9', '10', '11'] },
  6: { id: '6', name: 'blue', children: ['12', '13', '14'] },
  7: { id: '7', name: 'green', children: ['15', '16', '17'] },
  8: { id: '8', name: 'base', children: ['18', '19', '20'] },
  9: { id: '9', name: 'success', children: ['21', '22', '23'] },
  10: { id: '10', name: 'warning', children: ['24', '25', '26'] },
  11: { id: '11', name: 'negative', children: ['27', '28', '29'] },
  12: { id: '12', name: 'blue/50' },
  13: { id: '13', name: 'blue/100' },
  14: { id: '14', name: 'blue/200' },
  15: { id: '15', name: 'green/50' },
  16: { id: '16', name: 'green/100' },
  17: { id: '17', name: 'green/200' },
  18: { id: '18', name: 'base/bg' },
  19: { id: '19', name: 'base/border' },
  20: { id: '20', name: 'base/text' },
  21: { id: '21', name: 'success/bg' },
  22: { id: '22', name: 'success/border' },
  23: { id: '23', name: 'success/text' },
  24: { id: '24', name: 'warning/bg' },
  25: { id: '25', name: 'warning/border' },
  26: { id: '26', name: 'warning/text' },
  27: { id: '27', name: 'warning/bg' },
  28: { id: '28', name: 'warning/border' },
  29: { id: '29', name: 'warning/text' },
};
