const assert = require('assert');
const operation = require('./operation')

it('should correctly calculate the sum of 3 and 2', () => {
    assert.equal(operation.add(3, 2), 5);
});

it('correctly calculates the sum of -2 and -1', () => {
    assert.equal(operation.add(-2, -1), -3);
});

it('correctly calculates the sum of 3 and 2 regardless of the String input', () => {
    assert.equal(operation.add(3, '2'), 5);
});


// Tests for validating
it('indicates failure when a string is used instead of a number', () => {
    assert.equal(operation.validateNumbers('sammy', 5), false);
});

it('indicates failure when two strings is used instead of numbers', () => {
    assert.equal(operation.validateNumbers('sammy', 'sammy'), false);
});

it('successfully runs when two numbers are used', () => {
    assert.equal(operation.validateNumbers(5, 5), true);
});