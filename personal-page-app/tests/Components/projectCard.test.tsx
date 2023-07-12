/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { describe, test, expect, beforeAll, afterAll } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import ProjectCard from '../../src/components/ProjectCard/projectCard';
import { BrowserRouter } from 'react-router-dom';
import ProjectCardMock from '../mocks/ProjectCard';

describe('Testa o projectCard', () => {
  let card;
  beforeAll(() => {
    card = render(<ProjectCard project={ProjectCardMock.ProjectCard}/>, {
      wrapper: BrowserRouter,
    });
  });

  afterAll(cleanup);

  test("Testa se o componente é renderizado", () => {
    expect(card).to.exist;
  });

  test("Testa se o texto renderizado do título é correto", () => {
    const title = screen.getByRole('heading', {
      level: 2,
    });

    expect(title.innerHTML).toBe("Mangustus");
  });

  test("Testa se o texto detalhes é correto", () => {
    const githubButton = screen.getAllByRole('link');

    expect(githubButton[0].getAttribute('href')).toBe("url");
  });


  test("Testa se a imagem possui propriedade para ir ao github", () => {
    const details = screen.getByText(/lorem ipsum/ig);

    expect(details).to.exist;
  });
});
