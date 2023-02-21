import { useSession } from "next-auth/react";

export default function useLoggedIn() {
    const { data } = useSession();
    if (data) {
        return true;
    }
    return false;
}
