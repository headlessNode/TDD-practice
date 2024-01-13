import calculator from '../scripts/calculator';

test('add 4 and 100', ()=>{
    expect(calculator.add(4, 100)).toEqual(104);
});

test('add -3 and -5', ()=>{
    expect(calculator.add(-3, -5)).toEqual(-8);
});

test('add a and b', ()=>{
    expect(calculator.add('a', 'b')).toMatch('Input is not a number');
});


test('subtract 20 and 5', ()=>{
    expect(calculator.subtract(20, 5)).toEqual(15);
});

test('subtract -3 and -5', ()=>{
    expect(calculator.subtract(-3, -5)).toEqual(2);
});

test('subtract 2 and -10', ()=>{
    expect(calculator.subtract(2, -10)).toEqual(12);
});

test('subtract -2 and 10', ()=>{
    expect(calculator.subtract(-2, 10)).toEqual(-12);
});

test('subtract a and b', ()=>{
    expect(calculator.subtract('a', 'b')).toMatch('Input is not a number');
});



test('multiply 4 and 100', ()=>{
    expect(calculator.multiply(4, 100)).toEqual(400);
});

test('multiply -3 and -5', ()=>{
    expect(calculator.multiply(-3, -5)).toEqual(15);
});

test('multiply -10 and 5', ()=>{
    expect(calculator.multiply(-10, 5)).toEqual(-50);
});

test('multiply 10 and 0', ()=>{
    expect(calculator.multiply(10, 0)).toEqual(0);
});

test('multiply a and b', ()=>{
    expect(calculator.multiply('a', 'b')).toMatch('Input is not a number');
});

test('divide 20 and 4', ()=>{
    expect(calculator.divide(20, 4)).toEqual(5);
});

test('divide 0 and 5', ()=>{
    expect(calculator.divide(0, 5)).toEqual(0);
});

test('divide 5 and 0', ()=>{
    expect(calculator.divide(5, 0)).toMatch('Cannot divide by zero');
});

test('dviide a and b', ()=>{
    expect(calculator.divide('a', 'b')).toMatch('Input is not a number');
});