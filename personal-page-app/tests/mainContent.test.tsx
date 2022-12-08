/**
 * @vitest-environment jsdom
 */
 import React from 'react';
 import { describe, test, expect, beforeAll, afterAll } from 'vitest';
 import { cleanup, fireEvent, render, screen } from '@testing-library/react';
 import MainContent from '../src/components/Main-content/Main-content';
 import { BrowserRouter } from 'react-router-dom';


describe('Testa as funcionalidades da mainContent component', () => {
  let mainContent;
  beforeAll(() => {
    mainContent = render(<MainContent></MainContent>, {
      wrapper: BrowserRouter,
    });
  });

  afterAll(cleanup);

  test('Testa se o componente MainContent está renderizado', () => {
    expect(mainContent).exist
  })

  test('Testa se o texto do componente está devidamente renderizado', () => {
    const header = screen.getByRole('heading', {
      level: 2,
    });

    expect(header.innerHTML).toBe('Olá! Boas-vindas ao meu portfólio.')
  });
})