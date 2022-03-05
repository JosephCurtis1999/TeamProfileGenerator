const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Joseph', 89, 'joecurtis9999@gmail.com');

    expect(engineer.github).toEqual(expect.any(String));
});