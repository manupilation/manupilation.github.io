/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { describe, test, expect, beforeAll, afterAll } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import NavProjects from '../../src/components/NavProjects/NavProjects';
import { BrowserRouter } from 'react-router-dom';

describe('Testa o componente NavProjects', () => {
  let navbar;
  beforeAll(() => {
    navbar = render(<NavProjects active={0} index={0} setActive={() => {}}/>, {
      wrapper: BrowserRouter,
    });
  });

  afterAll(cleanup);

  test('Testa se o componente é devidamente renderizado', () => {
    expect(navbar).to.exist;
  });
});