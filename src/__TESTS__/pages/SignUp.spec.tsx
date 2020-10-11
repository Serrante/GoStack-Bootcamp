import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import AxiosMock from 'axios-mock-adapter';
import api from '../../services/api';
import SignUp from '../../pages/SignUp';

const mockedHistoryPush = jest.fn();
const mockedSignUp = jest.fn();
const mockedAddToast = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
    }),
  };
});

const apiMock = new AxiosMock(api);

describe('SignUp Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should be able to create a new profile', async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />);

    const nameField = getByPlaceholderText('Nome');
    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByText('Cadastrar');

    fireEvent.change(nameField, { target: { value: 'John Doe' } });
    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    const user = [
      {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: '123456',
      },
    ];

    apiMock.onPost('/users').reply(200, user);

    await wait(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/');
    });
  });

  it('should not be able to create a new profile using invalid credentials', async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />);

    const nameField = getByPlaceholderText('Nome');
    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByText('Cadastrar');

    fireEvent.change(nameField, { target: { value: 'John Doe' } });
    fireEvent.change(emailField, { target: { value: 'not-valid-email' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    const user = [
      {
        name: 'John Doe',
        email: 'not-valid-email',
        password: '123456',
      },
    ];

    apiMock.onPost('/users').reply(400, user);

    await wait(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
    });
  });

  it('should display an error if login fails', async () => {
    mockedSignUp.mockImplementation(() => {
      throw new Error();
    });

    const { getByPlaceholderText, getByText } = render(<SignUp />);

    const nameField = getByPlaceholderText('Nome');
    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByText('Cadastrar');

    fireEvent.change(nameField, { target: { value: 'John Doe' } });
    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    const user = [
      {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: '123456',
      },
    ];

    apiMock.onPost('/users').reply(400, user);

    await wait(() => {
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'error',
        }),
      );
    });
  });
});
