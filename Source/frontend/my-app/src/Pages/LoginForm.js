// import React, { useState } from 'react';
// import 'Styles/LoginForm.css';

// const LoginForm = () => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   const handleSignUpClick = () => {
//     setIsSignUp(true);
//   };

//   const handleSignInClick = () => {
//     setIsSignUp(false);
//   };

//   return (
//     <div className="body-container">
//       <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
//         <div>
//           <div className="form-container sign-up-container">
//             <form action="#">
//               <h1>Create Account</h1>
//               <input type="text" placeholder="Name" />
//               <input type="email" placeholder="Email" />
//               <input type="password" placeholder="Password" />
//               <div className="btn-grad" onClick={handleSignUpClick}>Sign Up</div>
//             </form>
//           </div>
//           <div className="form-container sign-in-container">
//             <form action="#">
//               <h1>Sign In</h1>
//               <input type="email" placeholder="Email" />
//               <input type="password" placeholder="Password" />
//               <a href="#">Forgot your password?</a>
//               <div className="btn-grad" onClick={handleSignInClick}>Sign In</div>
//             </form>
//           </div>
//         </div>

//         <div>
//           <div className="overlay-container">
//             <div className="overlay">
//               <div className="overlay-panel overlay-left">
//                 <h1>Welcome Back!</h1>
//                 <p>
//                   Start from where you left
//                 </p>
//                 <div className="btn-grad" onClick={handleSignInClick}>Sign In</div>
//               </div>
//               <div className="overlay-panel overlay-right">
//                 <h1>Welcome to The 3D Craft House!</h1>
//                 <p>Let's Start a New Creative Journey Together</p>
//                 <div className="btn-grad" onClick={handleSignUpClick}>Sign Up</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;