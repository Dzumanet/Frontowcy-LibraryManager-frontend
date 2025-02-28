import { NavAdmin } from "./NavAdmin.tsx";
import { NavClient } from "./NavClient.tsx";
import { useAuthStore } from "../../store/useAuthStore.ts";

export const Nav = () => {
    const role = useAuthStore((state) => state.role);

    return role === "admin" ? <NavAdmin /> : <NavClient />;
};