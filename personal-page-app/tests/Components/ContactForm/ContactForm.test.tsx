/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { describe, test, expect, beforeAll, afterAll } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import ContactForm from '../../../src/components/ContactForm/ContactForm';
import { BrowserRouter } from 'react-router-dom';

describe('Testa o projectCard', () => {
  let contact;
  beforeAll(() => {
    contact = render(<ContactForm/>, {
      wrapper: BrowserRouter,
    });
  });

  afterAll(cleanup);

  test("Testa se o componente é renderizado", () => {
    expect(contact).to.exist;
  });

  test("Testa se é exibido o título", () => {
    const title = screen.getByRole('heading', { level: 3 });

    expect(title.innerHTML).to.match(/contato/ig);
  });

  test("Testa se o input de nome é renderizado", () => {
    const inputNome = screen.getByRole('textbox', {
      name: /nome:/i,
    });

    expect(inputNome).to.exist;
    expect(inputNome.getAttribute("id")).toBe("nome");
  });


  test("Testa se o input de email é renderizado", () => {
    const inputEmail = screen.getByRole('textbox', {
      name: /email:/i,
    });

    expect(inputEmail).to.exist;
    expect(inputEmail.getAttribute("id")).toBe("email");
  });

  test("Testa se o input de email é renderizado", () => {
    const inputMessage = screen.getByRole('textbox', {
      name: /mensagem:/i,
    });

    expect(inputMessage).to.exist;
    expect(inputMessage.getAttribute("placeholder")).toMatch(/mensagem/ig);
  });
});