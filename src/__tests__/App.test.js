import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import MainPage from '../components/MainPage';
import axios from "axios";
import { moviesData } from "../__mock__/mockResponse";

jest.mock("axios");

test('Renders the Landing Page', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const actionButton = screen.getByText(/get started/i);
  expect(actionButton).toBeInTheDocument();
});

test("Redirects to the Main Page properly", async () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const actionButton = screen.getByText(/get started/i);
  await waitFor(() => userEvent.click(actionButton));
  const searchBar = screen.getByPlaceholderText(/Search for a movie/i);
  expect(searchBar).toBeInTheDocument();
});

test("User can search for a movie and view results", async () => {
  axios.get.mockReturnValue(Promise.resolve(moviesData));
  render(<BrowserRouter><MainPage /></BrowserRouter>);
  const searchBar = screen.getByPlaceholderText(/Search for a movie/i);
  const searchButton = screen.getByText(/Search/i);
  fireEvent.change(searchBar, {target: {value: "bat"}});
  await waitFor(() => fireEvent.click(searchButton));
  const firstResult = screen.getByText(/batman begins/i);
  expect(firstResult).toBeInTheDocument();
});

test("User can nominate a movie", async () => {
  axios.get.mockReturnValue(Promise.resolve(moviesData));
  render(<BrowserRouter><MainPage /></BrowserRouter>);
  const nominateButton = screen.getByText(/nominate/i);
  await waitFor(() => fireEvent.click(nominateButton));
  const nominated = screen.getByText(/nominated/);
  expect(nominated).toBeInTheDocument();
})