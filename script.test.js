/**
 * @jest-environment jsdom 
 */

import {getResult} from '../calculator_app/public/script'

describe("Addition Tests", ()=>{
    it.each([['1+1', 2], ['1+1+1', 3], ['1+2+3+4', 10]])
    ("%s should return the result of the %d", (input, output)=>{
        expect(getResult(input)).toBe(output)
    })
})

describe("Subtraction Tests", ()=>{
    it.each([['1-1', 0], ['1+1-1', 1], ['1+2+3-4', 2]])
    ("%s should return the result of the %d", (input, output)=>{
        expect(getResult(input)).toBe(output)
    })
})

describe("Division Tests", ()=>{
    it.each([['1/1', 1], ['1+1/1', 2], ['1+2+3/3', 4]])
    ("%s should return the result of the %d", (input, output)=>{
    expect(getResult(input)).toBe(output)
})
})

describe("Multiplication Tests", ()=>{
    it.each([['1x1', 1], ['1+1*1', 2], ['1+2+3*3', 12]])
    ("%s should return the result of the %d", (input, output)=>{
    expect(getResult(input)).toBe(output)
})
})

describe("Decimal Tests", ()=>{
    it.each([['1.5/1', 1.5], ['1.29+1.5x2', 4.29], ['3.6/3', 1.2]])
    ("%s should return the result of the %d", (input, output)=>{
    expect(getResult(input)).toBe(output)
})
})

describe("Error Tests", ()=>{
    it.each([['1/1', 1], ['1+1/1', 2], ['1+2+3/3', 4]])
    ("Should throw an error if decimal is used more than once in one number", (input, output)=>{
    expect(getResult(input)).toBe(output)
})
})