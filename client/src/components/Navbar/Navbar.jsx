import { StyledNavbar, NavItemLink } from './style';
const Navbar = ({ children }) => {
  return (
    <StyledNavbar>
      <NavItemLink to='/login'>Log in</NavItemLink>
    </StyledNavbar>
  )
}

export default Navbar;