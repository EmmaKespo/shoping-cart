

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

const renderWithRouter = (initialEntries = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

describe('React Store App Routing and Layout', () => {

  it('renders the navbar, footer, and initial Home page content', () => {
    renderWithRouter(['/']);
    expect(screen.getByText(/ReactStore/i)).toBeInTheDocument();
    expect(screen.getByText(/Welcome to Our Store/i)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });

  it('navigates dynamically to the Shop page when a Navbar link is clicked', async () => {
    renderWithRouter(['/']);
    const user = userEvent.setup();

    // 1. Target the navbar container specifically using its HTML5 <nav> tag
    const navbarContainer = screen.getByRole('navigation');
    
    // 2. Find the "Shop" link strictly INSIDE that navbar container
    const shopNavbarLink = screen.getByRole('link', { name: /Shop/i }, { container: navbarContainer });
    
    // 3. Perform the click action
    await user.click(shopNavbarLink);

    // 4. Use `findBy` to wait gracefully for the virtual DOM to update the text content
    expect(await screen.findByText(/Our Shop/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
  });

  it('navigates dynamically to the Cart page when a Footer link is clicked', async () => {
    renderWithRouter(['/']);
    const user = userEvent.setup();

    // 1. Target the footer container specifically using its HTML5 <footer> tag
    const footerContainer = screen.getByRole('contentinfo');
    
    // 2. Find the "Cart" link strictly INSIDE that footer container
    const cartFooterLink = screen.getByRole('link', { name: /Cart/i }, { container: footerContainer });
    
    // 3. Perform the click action
    await user.click(cartFooterLink);

    // 4. Use `findBy` to wait gracefully for the virtual DOM to update the text content
    expect(await screen.findByText(/Your Cart/i)).toBeInTheDocument();
    expect(screen.getByText(/Your shopping cart is currently empty/i)).toBeInTheDocument();
  });
});




















































































































































/*import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

const renderWithRouter = (initialEntries = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

describe('React Store App Routing and Layout', () => {

  it('renders the navbar, footer, and initial Home page content', () => {
    renderWithRouter(['/']);
    expect(screen.getByText(/ReactStore/i)).toBeInTheDocument();
    expect(screen.getByText(/Welcome to Our Store/i)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });

  it('navigates dynamically to the Shop page when a Navbar link is clicked', async () => {
    renderWithRouter(['/']);
    const user = userEvent.setup();

    // 1. Find all links matching "Shop"
    const shopLinks = screen.getAllByRole('link', { name: /Shop/i });
    
    // 2. Click the FIRST link [0] which sits inside the Navbar
    await user.click(shopLinks[0]);

    expect(screen.getByText(/Our Shop/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
  });

  it('navigates dynamically to the Cart page when a Footer link is clicked', async () => {
    renderWithRouter(['/']);
    const user = userEvent.setup();

    // 1. Find all links matching "Cart"
    const cartLinks = screen.getAllByRole('link', { name: /Cart/i });
    
    // 2. Click the SECOND link [1] which sits inside the Footer
    await user.click(cartLinks[1]);

    expect(screen.getByText(/Your Cart/i)).toBeInTheDocument();
    expect(screen.getByText(/Your shopping cart is currently empty/i)).toBeInTheDocument();
  });
});













































































































































































































































/*import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

// Consolidated routing function for clean test isolation
const renderWithRouter = (initialEntries = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

describe('React Store App Routing and Layout', () => {

  it('renders the navbar, footer, and initial Home page content', () => {
    renderWithRouter(['/']);

    // 1. Target the navbar text specifically using a flexible regex string
    expect(screen.getByText(/ReactStore/i)).toBeInTheDocument();
    
    // 2. Target the main welcoming text inside the Home view
    expect(screen.getByText(/Welcome to Our Store/i)).toBeInTheDocument();

    // 3. Target the footer copyright wrapper string 
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });

  it('navigates dynamically to the Shop page when a Navbar link is clicked', async () => {
    renderWithRouter(['/']);
    const user = userEvent.setup();

    // Select all links with the name "Shop" across the component 
    const shopLinks = screen.getAllByRole('link', { name: /Shop/i });
    
    // Click the very first instance found (which is the navigation bar item)
    await user.click(shopLinks[0]);

    // Check if the unique dynamic component content mounts cleanly
    expect(screen.getByText(/Our Shop/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
  });

  it('navigates dynamically to the Cart page when a Footer link is clicked', async () => {
    renderWithRouter(['/']);
    const user = userEvent.setup();

    // Select all links matching "Cart" across the layout wrapper
    const cartLinks = screen.getAllByRole('link', { name: /Cart/i });
    
    // Click the second instance found (which sits directly within the Footer container)
    await user.click(cartLinks[1]);

    // Check if the unique Cart view elements switch into place
    expect(screen.getByText(/Your Cart/i)).toBeInTheDocument();
    expect(screen.getByText(/Your shopping cart is currently empty/i)).toBeInTheDocument();
  });
});


























































































/*import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

/* global describe, it, expect */


/*// Helper function to render our entire routing setup for testing
const renderWithRouter = (initialEntries = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

describe('React Store App Routing and Layout', () => {
  
  it('renders the navbar, footer, and initial Home page content', () => {
    renderWithRouter(['/']);

    // Check Navbar elements exist
    expect(screen.getByText('ReactStore')).toBeInTheDocument();
    
    // Check Home page unique text
    expect(screen.getByText('Welcome to Our Store')).toBeInTheDocument();

    // Check Footer element exists
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });

  it('navigates dynamically to the Shop page when a Navbar link is clicked', async () => {
    renderWithRouter(['/']);
    const user = userEvent.setup();

    // Grab the 'Shop' link specifically inside the navigation bar
    const navBar = screen.getByRole('navigation');
    const shopLink = screen.getByRole('link', { name: 'Shop' }, { container: navBar });

    // Click the shop link
    await user.click(shopLink);

    // Verify the Shop page content displays dynamically
    expect(screen.getByText('Our Shop')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });

  it('navigates dynamically to the Cart page when a Footer link is clicked', async () => {
    renderWithRouter(['/']);
    const user = userEvent.setup();

    // Grab the 'Cart' link specifically inside the footer element
    const footer = screen.getByRole('contentinfo');
    const cartLink = screen.getByRole('link', { name: 'Cart' }, { container: footer });

    // Click the cart link
    await user.click(cartLink);

    // Verify the Cart page content displays dynamically
    expect(screen.getByText('Your Cart')).toBeInTheDocument();
    expect(screen.getByText('Your shopping cart is currently empty.')).toBeInTheDocument();
  });
}); */
