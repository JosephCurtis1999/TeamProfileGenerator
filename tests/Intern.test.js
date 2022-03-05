const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Joseph', 89, 'joecurtis9999@gmail.com', 'UOB');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Joseph', 89, 'joecurtis9999@gmail.com', 'UOB');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Joseph', 89, 'joecurtis9999@gmail.com', 'UOB');

    expect(intern.getRole()).toEqual("Intern");
}); 