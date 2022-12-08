/**
 * @vitest-environment jsdom
 */
 import React from 'react';
 import { describe, test, expect, beforeAll, afterAll } from 'vitest';
 import { cleanup, fireEvent, render, screen } from '@testing-library/react';
 import Header from '../src/components/Header/Header';
 import { BrowserRouter } from 'react-router-dom';

