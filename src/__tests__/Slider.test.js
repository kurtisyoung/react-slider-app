import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as API from '../api/marvel';
import Slider from '../components/Slider';

const mockAPI = jest.spyOn(API, 'fetchAPI');
const mockData = {
  empty: [],
  oneResult: [
    {
      name: 'Hulk',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0',
        extension: 'jpg'
      }
    }
  ],
  multipleResults: [
    {
      name: 'Hulk',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0',
        extension: 'jpg'
      }
    },
    {
      name: 'Superman',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0',
        extension: 'jpg'
      }
    },
    {
      name: 'Spider-Man',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0',
        extension: 'jpg'
      }
    }
  ]
};

test('Renders loading message and then displays one image', async () => {
  mockAPI.mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => {
        return {
          data: {
            results: mockData.oneResult
          }
        }
      }
    });
  });

  render(<Slider/>);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  await waitFor(() => {
    // Slick makes a duplicate slide item so we mulitply the array length by 2
    expect(document.querySelectorAll('img').length).toBe(mockData.oneResult.length * 2);
  });
});

test('Renders loading message and then displays multiple images', async () => {
  mockAPI.mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => ({ data: { results: mockData.multipleResults } })
    });
  });

  render(<Slider/>);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  await waitFor(() => {
    // Slick makes a duplicate slide item so we mulitply the array length by 2
    expect(document.querySelectorAll('img').length).toBe(mockData.multipleResults.length * 2);
  });
});

test('Renders loading message and an empty slider', async () => {
  mockAPI.mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => ({ data: { results: mockData.empty } })
    });
  });

  render(<Slider/>);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  await waitFor(() => {
    expect(document.querySelectorAll('img').length).toBe(0);
  });
});


test('Renders loading message, displays multiple image and then fire click event on next arrow', async () => {
  mockAPI.mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => ({data: { results: mockData.multipleResults }})
    });
  });

  render(<Slider/>);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  await waitFor(() => {
    // TODO Figure out how to render the Next arrow in the test
    userEvent.click(screen.getByText('Next'));
    expect(window.getComputedStyle(document.querySelector('.slick-track').transform)).toBe('translate3d(translate3d(-3020px, 0px, 0px))');
  });
});