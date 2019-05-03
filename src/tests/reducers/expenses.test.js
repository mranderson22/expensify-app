import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { setExpenses } from '../../actions/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      note: "Rent"
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {
  const note = 'testTime';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      note
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe('testTime')
});

test('should not edit an expense', () => {
  const note = 'testTime';
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      note
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});