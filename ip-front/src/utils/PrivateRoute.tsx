"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { parseJwt } from "./jwt";
interface PrivateRouteProps {
    children: React.ReactNode;
    requiredUserType?: 'ADMIN' | 'CLIENT';
}

export default function PrivateRoute({ children, requiredUserType }: PrivateRouteProps) {
    const router = useRouter();

    useEffect(() => {
        const checkAuth = () => {
            try {

                const token = decodeURIComponent(document.cookie
                    .split("; ")
                    .find((row) => row.startsWith("auth-token="))
                    ?.split("=")[1] || "");

                if (!token) {
                    router.push("/login");
                    return;
                }

                const decodedToken = parseJwt(token);

                if (requiredUserType && decodedToken.UserType !== requiredUserType) {
                    router.push("/home");
                    return;
                }

            } catch (error) {
                console.error("Auth check failed:", error);
                router.push("/login");
            }
        };

        checkAuth();
    }, [router, requiredUserType]);

    return <>{children}</>;
}