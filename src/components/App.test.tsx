import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should render the App component', () => {
    const { container } = render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /React starter/i,
        level: 1
      })
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        /This is a React 18 starter project featuring Vite, TypeScript, Vitest, Testing Library, TailwindCSS, tailwindcss prettier plugin, Axios, Eslint and Prettier./i
      )
    ).toBeInTheDocument()

    expect(container.firstChild).toBeInTheDocument()
  })
})
