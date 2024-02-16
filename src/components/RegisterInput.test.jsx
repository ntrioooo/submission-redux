/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle name typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from './RegisterInput';

expect.extend(matchers);

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('johndoe@gmail.com');
    // Action
    await userEvent.type(emailInput, 'email@gmail.com');
    // Assert
    expect(emailInput).toHaveValue('email@gmail.com');
  });

  it('should handle name typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Full Name');
    // Action
    await userEvent.type(nameInput, 'john doe');
    // Assert
    expect(nameInput).toHaveValue('john doe');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<RegisterInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('********');
    // Action
    await userEvent.type(passwordInput, 'password123');
    // Assert
    expect(passwordInput).toHaveValue('password123');
  });

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockRegister = vi.fn();
    render(<RegisterInput login={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText('Full Name');
    await userEvent.type(nameInput, 'john doe');
    const emailInput = await screen.getByPlaceholderText('johndoe@gmail.com');
    await userEvent.type(emailInput, 'email@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('********');
    await userEvent.type(passwordInput, 'password123');
    const registerButton = await screen.getByRole('button', { name: 'Register' });

    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(mockRegister).toBeCalledWith({
      email: 'email@gmail.com',
      name: 'john doe',
      password: 'password123',
    });
  });
});
