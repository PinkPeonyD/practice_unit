import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../utils/mathUtils.js';

describe('MathUtils', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).to.equal(5);
      expect(add(10, 15)).to.equal(25);
    });

    it('should add negative numbers', () => {
      expect(add(-5, -3)).to.equal(-8);
      expect(add(-10, 5)).to.equal(-5);
    });

    it('should add zero', () => {
      expect(add(5, 0)).to.equal(5);
      expect(add(0, 0)).to.equal(0);
    });

    it('should add decimal numbers', () => {
      expect(add(1.5, 2.3)).to.be.closeTo(3.8, 0.01);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).to.equal(2);
      expect(subtract(10, 4)).to.equal(6);
    });

    it('should subtract negative numbers', () => {
      expect(subtract(-5, -3)).to.equal(-2);
      expect(subtract(5, -3)).to.equal(8);
    });

    it('should subtract zero', () => {
      expect(subtract(5, 0)).to.equal(5);
      expect(subtract(0, 5)).to.equal(-5);
    });

    it('should subtract decimal numbers', () => {
      expect(subtract(5.5, 2.2)).to.be.closeTo(3.3, 0.01);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(2, 3)).to.equal(6);
      expect(multiply(5, 4)).to.equal(20);
    });

    it('should multiply negative numbers', () => {
      expect(multiply(-2, 3)).to.equal(-6);
      expect(multiply(-2, -3)).to.equal(6);
    });

    it('should multiply by zero', () => {
      expect(multiply(5, 0)).to.equal(0);
      expect(multiply(0, 0)).to.equal(0);
    });

    it('should multiply decimal numbers', () => {
      expect(multiply(2.5, 2)).to.equal(5);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers', () => {
      expect(divide(6, 3)).to.equal(2);
      expect(divide(10, 2)).to.equal(5);
    });

    it('should divide negative numbers', () => {
      expect(divide(-6, 3)).to.equal(-2);
      expect(divide(-6, -3)).to.equal(2);
    });

    it('should divide decimal numbers', () => {
      expect(divide(7, 2)).to.equal(3.5);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => divide(5, 0)).to.throw('Cannot divide by zero');
      expect(() => divide(0, 0)).to.throw('Cannot divide by zero');
    });

    it('should return zero when dividing zero by non-zero', () => {
      expect(divide(0, 5)).to.equal(0);
    });
  });
});
