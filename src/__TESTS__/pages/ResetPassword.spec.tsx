import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import AxiosMock from 'axios-mock-adapter';
import api from '../../services/api';
import ResetPassword from '../../pages/ResetPassword';

const mockedHistoryPush = jest.fn();
const mockedLocation = {
  pathname: '/reset-password',
  hash: '',
  search: '?token=123456',
  state: '',
};
const mockedResetPassword = jest.fn();
const mockedAddToast = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    useLocation: () => ({
      pathname: mockedLocation.pathname,
      hash: mockedLocation.hash,
      search: mockedLocation.search,
      state: mockedLocation.state,
    }),
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

describe('ResetPassword Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should not be able reset a password without a token', async () => {
    const { getByPlaceholderText, getByText } = render(<ResetPassword />);

    const passwordField = getByPlaceholderText('Nova senha');
    const passwordConfirmationField = getByPlaceholderText(
      'Confirmação da senha',
    );
    const buttonElement = getByText('Alterar senha');

    fireEvent.change(passwordField, { target: { value: '654321' } });
    fireEvent.change(passwordConfirmationField, {
      target: { value: '654321' },
    });

    fireEvent.click(buttonElement);

    let token;

    if (!token) {
      mockedResetPassword.mockImplementation(() => {
        throw new Error();
      });
    }

    await wait(() => {
      expect(mockedResetPassword).toThrow();
    });
  });

  it('should be able reset a password', async () => {
    const { getByPlaceholderText, getByText } = render(<ResetPassword />);

    const passwordField = getByPlaceholderText('Nova senha');
    const passwordConfirmationField = getByPlaceholderText(
      'Confirmação da senha',
    );
    const buttonElement = getByText('Alterar senha');

    fireEvent.change(passwordField, { target: { value: '654321' } });
    fireEvent.change(passwordConfirmationField, {
      target: { value: '654321' },
    });

    fireEvent.click(buttonElement);

    const token = mockedLocation.search.replace('?token=', '');

    const data = [
      {
        password: '123456',
        password_confirmation: '123456',
        token,
      },
    ];

    apiMock.onPost('/password/reset').reply(200, data);

    await wait(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/');
    });
  });

  it('should not be able reset a password with invalid password confirmation', async () => {
    const { getByPlaceholderText, getByText } = render(<ResetPassword />);

    const passwordField = getByPlaceholderText('Nova senha');
    const passwordConfirmationField = getByPlaceholderText(
      'Confirmação da senha',
    );
    const buttonElement = getByText('Alterar senha');

    fireEvent.change(passwordField, { target: { value: '654321' } });
    fireEvent.change(passwordConfirmationField, {
      target: { value: 'not-valid-password-confirmation' },
    });

    fireEvent.click(buttonElement);

    const token = mockedLocation.search.replace('?token=', '');

    const data = [
      {
        password: '123456',
        password_confirmation: 'not-valid-password-confirmation',
        token,
      },
    ];

    apiMock.onPost('/password/reset').reply(400, data);

    await wait(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
    });
  });

  it('should display an error if reset password fails', async () => {
    mockedResetPassword.mockImplementation(() => {
      throw new Error();
    });

    const { getByPlaceholderText, getByText } = render(<ResetPassword />);

    const passwordField = getByPlaceholderText('Nova senha');
    const passwordConfirmationField = getByPlaceholderText(
      'Confirmação da senha',
    );
    const buttonElement = getByText('Alterar senha');

    fireEvent.change(passwordField, { target: { value: '654321' } });
    fireEvent.change(passwordConfirmationField, {
      target: { value: '654321' },
    });

    fireEvent.click(buttonElement);

    const token = mockedLocation.search.replace('?token=', '');

    const data = [
      {
        password: '123456',
        password_confirmation: '123456',
        token,
      },
    ];

    apiMock.onPost('/password/reset').reply(400, data);

    await wait(() => {
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'error',
        }),
      );
    });
  });
});
