import capitalize from '../scripts/capitalize.js';

test('First character is capital', ()=>{
    const string = capitalize('jest is awesome');
    const firstCharacter = string[0];
    expect(firstCharacter).toMatch(/[A-Z]/);
});

test('First character is capital # 02', ()=>{
    const string = capitalize('jEST iS aWeSomE');
    const firstCharacter = string[0];
    expect(firstCharacter).toMatch(/[A-Z]/);
});

test("Invalid input", ()=>{
    expect(capitalize(200)).toMatch('Input is a number');
});

test("Invalid string", ()=>{
    expect(capitalize('200')).toMatch('Input is a number');
});