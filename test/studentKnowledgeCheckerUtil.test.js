import { expect } from 'chai';
import { checkStudentKnowledge } from '../utils/studentKnowledgeCheckerUtil.js';

describe('StudentKnowledgeCheckerUtil', () => {
  describe('checkStudentKnowledge', () => {
    it('should return true when all answers are correct', () => {
      const studentAnswers = {
        question1: 'answer1',
        question2: 'answer2',
        question3: 'answer3',
      };
      const correctAnswers = {
        question1: 'answer1',
        question2: 'answer2',
        question3: 'answer3',
      };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
    });

    it('should return false when at least one answer is incorrect', () => {
      const studentAnswers = {
        question1: 'answer1',
        question2: 'wrong',
        question3: 'answer3',
      };
      const correctAnswers = {
        question1: 'answer1',
        question2: 'answer2',
        question3: 'answer3',
      };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should return false when number of answers differs', () => {
      const studentAnswers = {
        question1: 'answer1',
        question2: 'answer2',
      };
      const correctAnswers = {
        question1: 'answer1',
        question2: 'answer2',
        question3: 'answer3',
      };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should return false when question keys do not match', () => {
      const studentAnswers = {
        question1: 'answer1',
        question3: 'answer2',
      };
      const correctAnswers = {
        question1: 'answer1',
        question2: 'answer2',
      };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should work with empty objects', () => {
      const studentAnswers = {};
      const correctAnswers = {};
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
    });

    it('should work with single question', () => {
      const studentAnswers = { question1: 'answer1' };
      const correctAnswers = { question1: 'answer1' };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
    });

    it('should be case sensitive', () => {
      const studentAnswers = { question1: 'Answer1' };
      const correctAnswers = { question1: 'answer1' };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should work with numeric answers', () => {
      const studentAnswers = { question1: 42 };
      const correctAnswers = { question1: 42 };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
    });

    it('should return false for different numeric answers', () => {
      const studentAnswers = { question1: 42 };
      const correctAnswers = { question1: 43 };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });
  });
});
