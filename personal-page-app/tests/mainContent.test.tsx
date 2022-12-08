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
    expect(mainContent).exist;
  });

  test('Testa se o texto do componente h2 está devidamente renderizado', () => {
    const header = screen.getByRole('heading', {
      level: 2,
    });

    expect(header.innerHTML).toBe('Olá! Boas-vindas ao meu portfólio.');
  });

  test('Testa se o texto do componente h2 está devidamente renderizado', () => {
    const paragraphText = /Chamado pelos amigos e colegas de "Manu", acredito na tecnologia como ponte para igualdade entre todos. Atuo com tecnologias que podem ser verificadas /ig;
    expect(screen.getByText(paragraphText)).exist;
  });

  test('Testa se existe o botão de Projetos', () => {
    const btn = screen.getByText(/projetos/i);
    expect(btn).to.exist;
  })

  test('Testa se o botão tem o href correto', () => {
    const btn = screen.getByText(/projetos/i);
    expect(btn.getAttribute('href')).to.eq('https://github.com/manupilation?tab=repositories');
  })

  test('Testa se a imagem está presente no documento', () => {
    const img = screen.getByAltText(/Foto de Manu/i);
    expect(img).to.exist;
  });
})