import fs from 'fs';
import path from 'path';
import statement from "../src/statement";

describe('statement', () => {
  it('should process invoices correctly', () => {
    const invoices = JSON.parse(fs.readFileSync(path.resolve('../project1/src/invoices.json'), 'utf-8'));
    const plays = JSON.parse(fs.readFileSync(path.resolve('../project1/src/plays.json'), 'utf-8'));

    const result = statement(invoices[0], plays);
    const expectedResult = `
Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Like It: $580.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`.trim();
    
    expect(result.trim()).toEqual(expectedResult);
  });
});
