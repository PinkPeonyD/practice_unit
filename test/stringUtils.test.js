import { expect } from 'chai';
import {
  capitalize,
  reverseString,
  isPalindrome,
} from '../utils/stringUtils.js';

describe('StringUtils', () => {
  describe('capitalize', () => {
    it('should capitalize first letter of string', () => {
      expect(capitalize('hello')).to.equal('Hello');
      expect(capitalize('world')).to.equal('World');
    });

    it('should work with already capitalized string', () => {
      expect(capitalize('Hello')).to.equal('Hello');
    });

    it('should work with single character', () => {
      expect(capitalize('a')).to.equal('A');
    });

    it('should work with empty string', () => {
      expect(capitalize('')).to.equal('');
    });

    it('should throw error for non-string input', () => {
      expect(() => capitalize(123)).to.throw('Input must be a string');
      expect(() => capitalize(null)).to.throw('Input must be a string');
      expect(() => capitalize(undefined)).to.throw('Input must be a string');
      expect(() => capitalize([])).to.throw('Input must be a string');
    });

    it('should work with uppercase string', () => {
      expect(capitalize('HELLO')).to.equal('HELLO');
    });
  });

  describe('reverseString', () => {
    it('should reverse string', () => {
      expect(reverseString('hello')).to.equal('olleh');
      expect(reverseString('world')).to.equal('dlrow');
    });

    it('should work with palindrome', () => {
      expect(reverseString('mom')).to.equal('mom');
    });

    it('should work with single character', () => {
      expect(reverseString('a')).to.equal('a');
    });

    it('should work with empty string', () => {
      expect(reverseString('')).to.equal('');
    });

    it('should throw error for non-string input', () => {
      expect(() => reverseString(123)).to.throw('Input must be a string');
      expect(() => reverseString(null)).to.throw('Input must be a string');
      expect(() => reverseString(undefined)).to.throw('Input must be a string');
    });

    it('should work with numbers in string', () => {
      expect(reverseString('123')).to.equal('321');
    });
  });

  describe('isPalindrome', () => {
    it('should return true for palindrome', () => {
      expect(isPalindrome('mom')).to.be.true;
      expect(isPalindrome('racecar')).to.be.true;
      expect(isPalindrome('level')).to.be.true;
    });

    it('should return false for non-palindrome', () => {
      expect(isPalindrome('hello')).to.be.false;
      expect(isPalindrome('world')).to.be.false;
    });

    it('should work with single character', () => {
      expect(isPalindrome('a')).to.be.true;
    });

    it('should work with empty string', () => {
      expect(isPalindrome('')).to.be.true;
    });

    it('should throw error for non-string input', () => {
      expect(() => isPalindrome(123)).to.throw('Input must be a string');
      expect(() => isPalindrome(null)).to.throw('Input must be a string');
      expect(() => isPalindrome(undefined)).to.throw('Input must be a string');
    });

    it('should be case sensitive', () => {
      expect(isPalindrome('Mom')).to.be.false;
    });
  });
});
