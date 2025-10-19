import { expect } from 'chai';
import {
  filterUsersByAge,
  sortUsersByName,
  findUserById,
  isEmailTaken,
} from '../utils/usersListUtils.js';

describe('UsersListUtils', () => {
  const users = [
    { id: 1, name: 'John', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Alice', age: 30, email: 'alice@example.com' },
    { id: 3, name: 'Bob', age: 20, email: 'bob@example.com' },
    { id: 4, name: 'Charlie', age: 35, email: 'charlie@example.com' },
  ];

  describe('filterUsersByAge', () => {
    it('should filter users by age range', () => {
      const result = filterUsersByAge(users, 20, 30);
      expect(result).to.have.lengthOf(3);
      expect(result.map((u) => u.name)).to.deep.equal(['John', 'Alice', 'Bob']);
    });

    it('should return empty array when no users match', () => {
      const result = filterUsersByAge(users, 40, 50);
      expect(result).to.be.an('array').that.is.empty;
    });

    it('should include users at boundary ages', () => {
      const result = filterUsersByAge(users, 25, 25);
      expect(result).to.have.lengthOf(1);
      expect(result[0].name).to.equal('John');
    });

    it('should throw error for non-array input', () => {
      expect(() => filterUsersByAge('not array', 20, 30)).to.throw(
        'Users must be an array',
      );
      expect(() => filterUsersByAge(null, 20, 30)).to.throw(
        'Users must be an array',
      );
      expect(() => filterUsersByAge(undefined, 20, 30)).to.throw(
        'Users must be an array',
      );
    });

    it('should work with empty array', () => {
      const result = filterUsersByAge([], 20, 30);
      expect(result).to.be.an('array').that.is.empty;
    });
  });

  describe('sortUsersByName', () => {
    it('should sort users alphabetically by name', () => {
      const result = sortUsersByName(users);
      expect(result.map((u) => u.name)).to.deep.equal([
        'Alice',
        'Bob',
        'Charlie',
        'John',
      ]);
    });

    it('should not modify original array', () => {
      const original = [...users];
      sortUsersByName(users);
      expect(users).to.deep.equal(original);
    });

    it('should work with empty array', () => {
      const result = sortUsersByName([]);
      expect(result).to.be.an('array').that.is.empty;
    });

    it('should throw error for non-array input', () => {
      expect(() => sortUsersByName('not array')).to.throw(
        'Users must be an array',
      );
      expect(() => sortUsersByName(null)).to.throw('Users must be an array');
      expect(() => sortUsersByName(undefined)).to.throw(
        'Users must be an array',
      );
    });

    it('should work with single user', () => {
      const result = sortUsersByName([users[0]]);
      expect(result).to.have.lengthOf(1);
      expect(result[0].name).to.equal('John');
    });
  });

  describe('findUserById', () => {
    it('should find user by id', () => {
      const result = findUserById(users, 2);
      expect(result).to.not.be.null;
      expect(result.name).to.equal('Alice');
    });

    it('should return null when user not found', () => {
      const result = findUserById(users, 999);
      expect(result).to.be.null;
    });

    it('should work with first user', () => {
      const result = findUserById(users, 1);
      expect(result.name).to.equal('John');
    });

    it('should work with last user', () => {
      const result = findUserById(users, 4);
      expect(result.name).to.equal('Charlie');
    });

    it('should throw error for non-array input', () => {
      expect(() => findUserById('not array', 1)).to.throw(
        'Users must be an array',
      );
      expect(() => findUserById(null, 1)).to.throw('Users must be an array');
      expect(() => findUserById(undefined, 1)).to.throw(
        'Users must be an array',
      );
    });

    it('should return null for empty array', () => {
      const result = findUserById([], 1);
      expect(result).to.be.null;
    });
  });

  describe('isEmailTaken', () => {
    it('should return true when email exists', () => {
      const result = isEmailTaken(users, 'alice@example.com');
      expect(result).to.be.true;
    });

    it('should return false when email does not exist', () => {
      const result = isEmailTaken(users, 'nonexistent@example.com');
      expect(result).to.be.false;
    });

    it('should be case sensitive', () => {
      const result = isEmailTaken(users, 'ALICE@example.com');
      expect(result).to.be.false;
    });

    it('should throw error for non-array input', () => {
      expect(() => isEmailTaken('not array', 'test@example.com')).to.throw(
        'Users must be an array',
      );
      expect(() => isEmailTaken(null, 'test@example.com')).to.throw(
        'Users must be an array',
      );
      expect(() => isEmailTaken(undefined, 'test@example.com')).to.throw(
        'Users must be an array',
      );
    });

    it('should return false for empty array', () => {
      const result = isEmailTaken([], 'test@example.com');
      expect(result).to.be.false;
    });
  });
});
