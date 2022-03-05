const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Joseph', 89, 'joecurtis9999@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})