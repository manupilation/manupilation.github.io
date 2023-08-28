/**
 * @vitest-environment jsdom
 */
import React from 'react';
import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import ExperienceFilter from '../../../src/components/ExperienceFilter/ExperienceFilter';
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
        <ExperienceFilter />
      </experienceContext.Provider>
    , {wrapper: BrowserRouter});
  });

  afterEach(cleanup);

  it('renders without crashing', () => {
    expect(container).to.exist;
  });
});