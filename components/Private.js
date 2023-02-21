import useLoggedIn from "@/hooks/useLoggedIn";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Private({ children }) {
    const isLoggedIn = useLoggedIn();
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) {
            router.push("/login");
        }
    }, [isLoggedIn, router]);

    return <>{children}</>;
}
