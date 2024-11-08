"use client";

// import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface IContext {
  role: string;
  setRole: Dispatch<SetStateAction<string>>;
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  login: (role: string) => void;
  logout: () => void;
}

const AuthContext = createContext<IContext>({
  role: "",
  setRole: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<string>("freelancer");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  // const path = usePathname();
  // const router = useRouter();

  useEffect(() => {
    console.log("AUTH-TOKEN");
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const login = (role: string) => {
    setRole(role);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setRole("freelancer");
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  // useEffect(() => {
  //   console.log("PATH++>", path);
  //   if (isAuthenticated) {
  //     console.log("REF-LOGIN", path);
  //     router.push(path);
  //   }
  // }, [path, isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        role,
        setRole,
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
