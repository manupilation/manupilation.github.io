/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { describe, test, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../../src/components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

describe('Testa o componente footer e suas funcionalidades', () => {
  let renderFooter;
  beforeAll(() => {
    renderFooter = render(<Footer></Footer>, {
      wrapper: BrowserRouter,
    });
  })
  
  test('Testa se o componente é devidamente renderizado', () => {
    expect(renderFooter).to.exist;
  });

  test('Testa se está disponivel os dois emails', () => {
    const getEmails = screen.getAllByRole('heading', { level: 3 });

    expect(getEmails).to.have.lengthOf(2)
  });

  test('Testa o copyright', () => {
    expect(screen.getByText(/todos os direitos/i)).to.exist
  });

  test('Testa a navegação do footer', () => {
    const getNav = screen.getByRole('navigation');

    expect(Array.from(getNav.children[0].children)).to.have.lengthOf(4)
  });
}); 