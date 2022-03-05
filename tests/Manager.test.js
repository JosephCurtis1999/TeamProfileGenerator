const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Joseph', 89, 'joecurtis9999@gmail.com', 5);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Joseph', 89, 'joecurtis9999@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 