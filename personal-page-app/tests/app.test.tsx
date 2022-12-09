/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';


describe('Testes relacionados ao App.', () => {
  test('Testa se existe um componente App', () => {
    const app = render(<App />)
    expect(app).exist
  });
});