import analyzeArray from "../scripts/analyzeArray.js";

test('Check avg,min,max,length', ()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({"average": 4, "length": 6, "max": 8, "min": 1});
});

test('Check avg, min, max, length for negative numbers', () => {
    expect(analyzeArray([-5, -2, -8, -1, -3])).toEqual({"average": -3.8, "length": 5, "max": -1, "min": -8});
});

