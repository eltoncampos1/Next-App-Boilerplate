import { render, screen } from '@testing-library/react';
import Main from './index';

describe('<Main />', () => {
  it('Should Render heading', () => {
    render(<Main />);

    expect(screen.getByRole('heading', { name: /react avançado/i }));
  });
});
