/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import ExpList from '../../../src/components/ExpList/ExpList';
import { experienceContext } from '../../../src/context/experienceContext';
import { BrowserRouter } from 'react-router-dom';

describe('ExperienceFilter component', () => {
  let container;

  beforeEach(() => {
    container = render(
      <experienceContext.Provider
        value={{
          isFront: false,
          isBack: false,
          setIsFront: () => {},
          setIsBack: () => {},
        }}
      >
        <ExpList />
      </experienceContext.Provider>
    , {wrapper: BrowserRouter});
  });

  afterEach(cleanup);

  it('renders without crashing', () => {
    expect(container).to.exist;
  });
});