import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  user: string | null;
  children: ReactElement;
};

const ProtectedRoute = ({ user, children }: Props) => {
  // const navigate = useNavigate();
  // if (!user) {
  //   return <Navigate to="/login" />;
  // }

  return children;
};

export default ProtectedRoute;
