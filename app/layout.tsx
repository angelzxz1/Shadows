"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { teal, purple } = theme.colors;
	const [tealC, purpleC] = [teal[100], purple[900]];
	return (
		<html lang="en">
			<head />
			<body
				style={{
					background: "#e0ddd1",
				}}
			>
				<CacheProvider>
					<ChakraProvider theme={theme}>{children}</ChakraProvider>
				</CacheProvider>
			</body>
		</html>
	);
}
