import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import HomePage from './HomePage';

describe('HomePage 렌더링', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
      { wrapper: RecoilRoot }
    );
  });

  test('should rendered title', () => {
    expect(screen.queryByText(/환영합니다!/i)).toBeTruthy();
  });

  test('should rendered description', () => {
    expect(
      screen.queryByText(/퀴즈 풀기를 누르면 퀴즈가 시작됩니다./i)
    ).toBeTruthy();
  });

  test('should rendered button', () => {
    expect(screen.getByRole('button')).toBeTruthy();
  });

  test('should go quiz page after click button', async () => {
    await userEvent.click(screen.getByRole('button'));
    expect(window.location.pathname).toBe('/quiz');
  });
});
