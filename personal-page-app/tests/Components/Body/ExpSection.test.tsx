/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { describe, test, expect, beforeEach, beforeAll } from 'vitest';
import { render } from '@testing-library/react';
import ExpSection, { exps } from '../../../src/components/Body/SecondBody/ExpSection/ExpSection';

describe('Testa o componente ExpSection', () => {
  let renderExpSection;

  beforeAll(() => {
    renderExpSection = render(<ExpSection />);
  });

  test('Test if ExpSection component exists', () => {
    expect(renderExpSection).to.exist;
  });

  test('Test if heading "Tenho experiência em:" is present', () => {
    const heading = renderExpSection.getByRole('heading', { level: 2 });
    expect(heading.textContent).toBe('Tenho experiência em:');
  });

  test('Test if list items are correctly rendered', () => {
    const listItems = renderExpSection.getAllByRole('listitem');
    expect(listItems.length).toBe(exps.length);

    exps.forEach((exp, index) => {
      expect(listItems[index].textContent).toBe(exp);
    });
  });

  test('Test if section element is rendered', () => {
    const sectionElement = renderExpSection.container.querySelector('section');
    expect(sectionElement).to.exist;
  });
});
