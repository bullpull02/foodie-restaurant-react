import { Helmet } from 'react-helmet-async';
// sections
import Login from '../../features/auth/Login';
// import Login from '../../sections/auth/LoginAuth0';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login | Foodie</title>
      </Helmet>

      <Login />
    </>
  );
}
