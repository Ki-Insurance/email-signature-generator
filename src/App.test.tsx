import { screen, render } from '@testing-library/react';
import App from './App';

describe('GIVEN a user is on the homepage', () => {
  it('THEN they should see information about the application', () => {
    render(<App />);
    expect(screen.getByText('Ki email signature generator')).toBeInTheDocument();
  });
});
