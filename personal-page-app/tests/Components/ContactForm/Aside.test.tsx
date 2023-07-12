/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { describe, test, expect, beforeAll, afterAll } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import AsideContact from '../../../src/components/ContactForm/AsideContact';
import { BrowserRouter } from 'react-router-dom';

describe('Testa o projectCard', () => {
  let aside;
  beforeAll(() => {
    aside = render(<AsideContact/>, {
      wrapper: BrowserRouter,
    });
  });

  afterAll(cleanup);

  test("Testa se o componente é renderizado", () => {
    expect(aside).to.exist;
  });

  test("Testa se o textBox contato exibe o email", () => {
    const inputEmail = screen.getByRole('textbox', {
      name: /contato:/i,
    });

    expect(inputEmail).to.exist;
    expect(inputEmail.getAttribute("value")).toMatch(/gmail.com/ig);
  });


  test("Testa se a lista de infos está presente", () => {
    const nomeElement = screen.getByText(/emanoel/i);
    const idadeElement = screen.getByText(/anos/i);
    const localElement = screen.getByText(/Pernambuco, Brasil/i);

    expect(nomeElement).to.exist;
    expect(idadeElement).to.exist;
    expect(localElement).to.exist;
  });
});