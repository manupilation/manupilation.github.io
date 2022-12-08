/**
 * @vitest-environment jsdom
 */
 import React from 'react';
 import { describe, test, expect, beforeAll, afterAll } from 'vitest';
 import { cleanup, fireEvent, render, screen } from '@testing-library/react';
 import Header from '../src/components/Header/Header';
 import { BrowserRouter } from 'react-router-dom';

function responsiveScreen() {
  document.body.style.width = '600px';
}

describe('Testa o componente header', () => {
  let renderHeader;
  beforeAll(() => {
    renderHeader = render(<Header />, {
      wrapper: BrowserRouter
    });
  });

  afterAll(cleanup);

  test('Testa se existe o componente Header', () => {

    expect(renderHeader).exist;
  });

  test('Testa se exibe um titulo H1', () => {
    const getH1 = screen.getAllByRole('heading', { level: 1, name: /emanoel/i });

    expect(getH1).toHaveLength(1);
  });

  test('Testa se exibe o navBar', () => {
    const getNavBar = screen.getAllByRole('navigation');

    expect(getNavBar).exist;
  });

  test('Testa se a navBar contém quatro links internos', () => {
    const getNavBar = screen.getByRole('navigation');
    const getLinks = Array.from(getNavBar.children[0].children);

    expect(getLinks).toHaveLength(4)
  });
});

describe('Testes relacionados as funcionalidades e eventos do Header', () => {
  let renderHeader;
  beforeAll(() => {
    renderHeader = render(<Header />, {
      wrapper: BrowserRouter
    });
  });

  afterAll(cleanup);

  test('Testa se o click na navegação mobile ativa a lista', () => {
    responsiveScreen();
    const getNavBar = screen.getByRole('navigation');
    const getHeaderNav = screen.getByRole('button', {
      name: /menu/i
    });
    fireEvent.click(getHeaderNav);

    expect(getNavBar.className.includes('_active_')).toBe(true);
  })

  test('Testa se o segundo click no menu mobile desativa a lista', () => {
    responsiveScreen();

    const getNavBar = screen.getByRole('navigation');
    const getHeaderNav = screen.getByRole('button', {
      name: /menu/i
    });

    fireEvent.click(getHeaderNav);
    console.log(getNavBar.className);

    expect(!getNavBar.className.includes('_active_')).toBe(true);
  })
});
