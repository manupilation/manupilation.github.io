/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { describe, test, expect, beforeAll } from 'vitest';
import { render } from '@testing-library/react';
import SecondBody from '../../../src/components/Body/SecondBody/SecondBody';
import { BrowserRouter } from 'react-router-dom';

describe('Tests SecondBody component', () => {
  let renderSecBody;
  beforeAll(() => {
    renderSecBody = render(<SecondBody></SecondBody>, {
      wrapper: BrowserRouter,
    });
  });

  test('Test if SecondBody exists', () => {
    expect(renderSecBody).to.exist;
  });

  test('Test if Image component is rendered with the correct src and alt text', () => {
    const image = renderSecBody.getByAltText('Pessoas felizes trabalhando');
    expect(image).to.exist;
    expect(image.getAttribute('src')).contains('/PeopleJob.png');
  });
});