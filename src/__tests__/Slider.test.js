import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
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
}

test('Renders loading message and then displays one image', () => {
  mockAPI.mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => {
        return {
          data: {
            results: mockData.oneResult
          }
        }
      }
    })
  });

  render(<Slider/>);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  waitFor(() => {
    // Slick makes a duplicate slide item so we mulitply the array length by 2
    expect(document.querySelector('img').toBe(mockData.oneResult.length * 2));
  });
});

test('Renders loading message and then displays multiple images', () => {
  mockAPI.mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => {
        return {
          data: {
            results: mockData.multipleResults
          }
        }
      }
    })
  });

  render(<Slider/>);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  waitFor(() => {
    // Slick makes a duplicate slide item so we mulitply the array length by 2
    expect(document.querySelector('img').toBe(mockData.multipleResults.length * 2));
  });
});

test('Renders loading message and an empty slider', () => {
  mockAPI.mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => {
        return {
          data: {
            results: mockData.empty
          }
        }
      }
    })
  });

  render(<Slider/>);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  waitFor(() => {
    expect(document.querySelector('img').toBe(0));
  })
});
