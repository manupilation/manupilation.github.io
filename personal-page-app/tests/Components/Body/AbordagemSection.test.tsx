/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { describe, test, expect, beforeAll } from 'vitest';
import { render } from '@testing-library/react';
import AbordagemSection from '../../../src/components/Body/SecondBody/AbordagemSection/AbordagemSection';

describe('Testa o componente AbordagemSection', () => {
  let renderAbordagemSection;

  beforeAll(() => {
    renderAbordagemSection = render(<AbordagemSection />);
  });

  test('Test if AbordagemSection component exists', () => {
    expect(renderAbordagemSection).to.exist;
  });

  test('Test if heading and paragraph content are correct', () => {
    const heading = renderAbordagemSection.getByRole('heading', { level: 2 });
    expect(heading.textContent).toBe('Minha abordagem consiste em...');

    const paragraph = renderAbordagemSection.getByText(
      'Analisar o problema e pensar em caminhos para resolvê-lo. Acredito que o trabalho em equipe é a chave para resultados mais expressivos.'
    );
    expect(paragraph).to.exist;
  });

  test('Test if section element is rendered', () => {
    const sectionElement = renderAbordagemSection.container.querySelector('section');
    expect(sectionElement).to.exist;
  });
});
