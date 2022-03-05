const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Nicole', 90, 'nicole.elisaw@gmail', 'SFSU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

