import { useUser } from "@/lib/user";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface ProtectedRouteProps {
	exceptions: string[];
	children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
	exceptions,
	children,
}) => {
	const router = useRouter();
	const user = useUser();

	const pathIsExcluded = exceptions.indexOf(router.pathname) !== -1;

	useEffect(() => {
		if (user === null && !pathIsExcluded) {
			router.push("/login");
		}
	}, [user]);

	if (!user && !pathIsExcluded) {
		return null;
	}

	return <>{children}</>;
};
