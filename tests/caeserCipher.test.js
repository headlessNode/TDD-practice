import caeserCipher from '../scripts/caeserCipher.js';

test('shift of 4', ()=>{
    expect(caeserCipher('Hello', 4)).toMatch('LIPPS');
});

test('shift of 20', ()=>{
    expect(caeserCipher('Hello', 20)).toMatch(',Y??C');
});

test('shift of 10', ()=>{
    expect(caeserCipher('Hello, my good friend!', 10)).toMatch('ROVVYF WC QYYN P,SOXNI');
});