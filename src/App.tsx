import React from 'react';
import GlobalStyle from './styles/global';
// eslint-disable-next-line no-unused-vars
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
