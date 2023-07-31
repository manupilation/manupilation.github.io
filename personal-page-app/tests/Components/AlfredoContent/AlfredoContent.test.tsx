/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { describe, test, expect, beforeEach, beforeAll } from 'vitest';
import { render } from '@testing-library/react';
import AlfredoContent from '../../../src/components/Body/AlfredoContent/AlfredoContent';

describe('Testa o componente AlfredoContent', () => {
  let renderAlfredoContent;

  beforeAll(() => {
    renderAlfredoContent = render(<AlfredoContent />);
  });

  test('Test if AlfredoContent component exists', () => {
    expect(renderAlfredoContent).to.exist;
  });

  test('Test if image of Alfredo is rendered with the correct src and alt text', () => {
    const image = renderAlfredoContent.getByAltText(/^Alfredo/ig);
    expect(image).to.exist;
    expect(image.getAttribute('src')).contains('/Alfredo.jpg');
  });

  test('Test if Separator component is rendered', () => {
    const separator = renderAlfredoContent.container.querySelector('.separator');
    expect(separator).to.exist;
  });

  test('Test if article content is correctly displayed', () => {
    const article = renderAlfredoContent.container.querySelector('article');
    expect(article).to.exist;

    const heading = article.querySelector('h2');
    expect(heading.textContent).toBe('Conheça o Alfredo!');

    const paragraph = article.querySelector('p');
    expect(paragraph.textContent).toContain('Alfredo é o meu pet.');
    expect(paragraph.textContent).toContain('adote um Pet ❤️');
  });

  test('Test if main element is rendered', () => {
    const mainElement = renderAlfredoContent.container.querySelector('main');
    expect(mainElement).to.exist;
  });
});
