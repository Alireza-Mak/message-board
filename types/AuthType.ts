type AuthStateType = {
    isAuthenticated: boolean | null;
    setAuthentication: (isLoggedIn: boolean) => void;
};
export type { AuthStateType };