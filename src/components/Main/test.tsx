import { render, screen } from '@testing-library/react';
import Main from './index';

describe('<Main />', () => {
  it('Should Render heading', () => {
    const { container } = render(<Main />);

    expect(screen.getByRole('heading', { name: /react avançado/i }));

    expect(container.firstChild).toMatchSnapshot();
  });
});
