const channels = [
  { id: 1, name: 'Science' },
  { id: 2, name: 'Social Studies', hasUnreads: true },
  { id: 3, name: 'Maths' },
  { id: 4, name: 'Geography' }
];

const people = [
  { id: 1, name: 'Anuj' },
  { id: 2, name: 'Neel' },
  { id: 3, name: 'Prassanna' },
  { id: 4, name: 'Suchindra' },
  { id: 5, name: 'Rahul' },
  { id: 6, name: 'Keshav' },
  { id: 7, name: 'Mayur' },
  { id: 8, name: 'Siddhant' }
];

function generateFakeMessages(count) {
  return Array.from(Array(count).keys()).map(i => {
    const userName = randomUser();
    return {
      id: i,
      userName,
      text: `A message from ${userName}`,
      timestamp: new Date()
    };
  })
}

function randomUser() {
  return people.map(p => p.name)[Math.floor(Math.random() * 1000) % people.length];
}

function createFakeActivity(channels, maxMessages) {
  return channels.reduce((result, channel) => {
    const rndNum = Math.floor(Math.random() * maxMessages);
    result[channel.id] = generateFakeMessages(rndNum);
    return result;
  }, {});
}

export { channels, people, createFakeActivity };
