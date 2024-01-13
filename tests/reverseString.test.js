import reverseString from '../scripts/reverseString.js';

test('Input string reversed', ()=>{
    expect(reverseString('Jest iS Awesome')).toMatch('emosewA Si tseJ');
});

test('Number string reverse', ()=>{
    expect(reverseString('152012 3123131')).toMatch('1313213 210251');
});

test('Input is not a string', ()=>{
    expect(reverseString(200)).toMatch('Input is not a string');
});
