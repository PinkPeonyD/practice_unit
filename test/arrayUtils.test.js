import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../utils/arrayUtils.js';

describe('ArrayUtils', () => {
  describe('findMax', () => {
    it('should return maximum value from array', () => {
      expect(findMax([1, 2, 3, 4, 5])).to.equal(5);
      expect(findMax([10, 5, 8, 2])).to.equal(10);
    });

    it('should work with negative numbers', () => {
      expect(findMax([-1, -5, -2, -10])).to.equal(-1);
    });

    it('should work with single element', () => {
      expect(findMax([42])).to.equal(42);
    });

    it('should throw error for non-array input', () => {
      expect(() => findMax('not array')).to.throw('Input must be an array');
      expect(() => findMax(null)).to.throw('Input must be an array');
      expect(() => findMax(undefined)).to.throw('Input must be an array');
      expect(() => findMax(123)).to.throw('Input must be an array');
    });

    it('should return -Infinity for empty array', () => {
      expect(findMax([])).to.equal(-Infinity);
    });
  });

  describe('findMin', () => {
    it('should return minimum value from array', () => {
      expect(findMin([1, 2, 3, 4, 5])).to.equal(1);
      expect(findMin([10, 5, 8, 2])).to.equal(2);
    });

    it('should work with negative numbers', () => {
      expect(findMin([-1, -5, -2, -10])).to.equal(-10);
    });

    it('should work with single element', () => {
      expect(findMin([42])).to.equal(42);
    });

    it('should throw error for non-array input', () => {
      expect(() => findMin('not array')).to.throw('Input must be an array');
      expect(() => findMin(null)).to.throw('Input must be an array');
      expect(() => findMin(undefined)).to.throw('Input must be an array');
      expect(() => findMin(123)).to.throw('Input must be an array');
    });

    it('should return Infinity for empty array', () => {
      expect(findMin([])).to.equal(Infinity);
    });
  });

  describe('removeDuplicates', () => {
    it('should remove duplicate values', () => {
      expect(removeDuplicates([1, 2, 2, 3, 3, 3])).to.deep.equal([1, 2, 3]);
      expect(removeDuplicates(['a', 'b', 'a', 'c'])).to.deep.equal([
        'a',
        'b',
        'c',
      ]);
    });

    it('should return same array if no duplicates', () => {
      expect(removeDuplicates([1, 2, 3, 4])).to.deep.equal([1, 2, 3, 4]);
    });

    it('should work with empty array', () => {
      expect(removeDuplicates([])).to.deep.equal([]);
    });

    it('should work with single element', () => {
      expect(removeDuplicates([42])).to.deep.equal([42]);
    });

    it('should throw error for non-array input', () => {
      expect(() => removeDuplicates('not array')).to.throw(
        'Input must be an array',
      );
      expect(() => removeDuplicates(null)).to.throw('Input must be an array');
      expect(() => removeDuplicates(undefined)).to.throw(
        'Input must be an array',
      );
    });
  });
});
