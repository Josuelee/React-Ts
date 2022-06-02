import { useState } from "react";

interface userType {
  uid: string;
  name: string;
}

const User = () => {
  const [user, setUser] = useState<userType>();

  const login = () => {
    setUser({
      uid: "abcd12345",
      name: "Josue Lee",
    });
  };

  return (
    <div className="mt-2">
      <h3>User:</h3>
      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>
      {!user ? <pre>No hay Usuario</pre> : <pre>{JSON.stringify(user)}</pre>}
    </div>
  );
};
export default User;
