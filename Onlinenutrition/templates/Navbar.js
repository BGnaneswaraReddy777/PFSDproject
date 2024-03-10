import React from 'react'
import { NavLink,useLocation } from 'react-router-dom'
import { useAuth } from './auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
//import { Link } from 'react-router-dom'

export default function Navbar() {
 const auth= useAuth();
 const location = useLocation(); // Get the current route location
  const isLoginPage = location.pathname === '/';
const linkstyles = ({isActive}) => {
    return{
        textDecoration : isActive ? 'none' : 'none' ,
        fontWeight : isActive ? 'none' : 'none'   ,
    }
}
const navStyles = {
  position: 'fixed',// Fix the position to the top
  top: 0, // Stick to the top of the viewport
  left: 0,
  right: 0,
  backgroundColor: 'white', // Add a background color
  zIndex: 1000, // Set a high z-index to ensure it's above other content
  boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
 // Optional: Add a shadow
};
const buttonStyles = {
  color: 'black',
  backgroundColor: 'white',
  border: '2px solid black',
  borderRadius: '0px',
  padding: '5px 10px',
  fontSize: '18px',
  cursor: 'pointer', // Add a pointer cursor to indicate it's clickable
};
// const activeButtonStyles = {
//   color: 'white', // Text color for active state
//   backgroundColor: 'green', // Background color for active state
// };
// const hoverStyles = {
//   textDecoration: 'underline',
// };

return (
  <>
    <div style={navStyles}>
      <nav className='primary-nav'>
        {/* <Link to="/">Home</Link>
        <Link to="/about">AboutUs</Link> */}
        <img src="healthlogo.png"   style={{ marginRight: '20px', width: '120px', height: '50px',verticalAlign: 'middle'}} />
        <NavLink to="/"   style={{ ...linkstyles, color: 'black',backgroundColor: 'white',paddingRight:'10px' , fontSize: '18.5px',textDecoration : 'none' }} > Home</NavLink>
        <NavLink to="/consult" style={{ ...linkstyles ,color: 'black', backgroundColor: 'white', paddingRight:'10px',textDecoration : 'none' }}>Consultation</NavLink>
        <NavLink to="/healthyhabits"   style={{ ...linkstyles ,color: 'black', backgroundColor: 'white',paddingRight:'10px', textDecoration : 'none' }}>HealthyHabits</NavLink>
        <NavLink to="/info"  style={{ color: 'black', backgroundColor: 'white',padding:'auto',textDecoration : 'none' }}>NutritionalInfo</NavLink>
        <NavLink to="/expert"   style={{ ...linkstyles,color: 'black', backgroundColor: 'white',paddingright:'10px',textDecoration : 'none' }}>Health Q&A</NavLink>
        <NavLink to="/contact"  style={{ ...linkstyles,color: 'black', backgroundColor: 'white',paddingRight:'10px',textDecoration : 'none'}}>Contact&AboutUs</NavLink>
        {/* <NavLink to="/profile" style={{ ...linkstyles,color: 'black', backgroundColor: 'white',paddingRight:'10px',textDecoration : 'none'}} FontAwesomeIcon icon={faUser}>Profile</NavLink> */}
        <NavLink to="/profile" style={{ ...linkstyles,color: 'black', backgroundColor: 'white',textDecoration : 'none'}}>
            <FontAwesomeIcon icon={faUser}  />
            <span>Profile</span>
          </NavLink>
        {
          (!auth.user) && (
            <NavLink to="/login"  className="login-button" activeClassName="active" style={{textDecoration:'none'}}>Login/SignUp</NavLink>
          )
        }
      </nav>
    </div>
    </>
  )
}