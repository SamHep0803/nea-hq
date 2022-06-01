import { useUser } from "@/lib/user";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
	Avatar,
	Box,
	Flex,
	HStack,
	IconButton,
	Img,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Spinner,
	Text,
	useColorMode,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FiBell, FiChevronDown, FiMenu } from "react-icons/fi";

interface HeaderProps {
	onOpen: () => void;
}
export const Header: React.FC<HeaderProps> = ({ onOpen }) => {
	const user = useUser();
	const { colorMode, toggleColorMode } = useColorMode();
	const bg = useColorModeValue("white", "gray.900");
	const borderColor = useColorModeValue("gray.200", "gray.700");
	const router = useRouter();
	const isDark = colorMode === "dark";

	let body;

	if (user) {
		body = (
			<Flex alignItems={"center"}>
				<Menu>
					<MenuButton
						py={2}
						transition="all 0.3s"
						_focus={{ boxShadow: "none" }}
					>
						<HStack>
							<Avatar size={"sm"} name={user.personal!.name_full} />
							<VStack
								display={{ base: "none", md: "flex" }}
								alignItems="flex-start"
								spacing="1px"
								ml="2"
							>
								<Text fontSize="sm" fontWeight={"semibold"}>
									{user.personal!.name_full}
								</Text>
								<Text fontSize="xs" color="gray.500">
									{user.cid}
								</Text>
							</VStack>
							<Box display={{ base: "none", md: "flex" }}>
								<FiChevronDown />
							</Box>
						</HStack>
					</MenuButton>
					<MenuList bg={bg} borderColor={borderColor}>
						<MenuItem>Profile</MenuItem>
						<MenuItem>Settings</MenuItem>
						<MenuDivider />
						<NextLink href="/api/logout">
							<MenuItem>Sign out</MenuItem>
						</NextLink>
					</MenuList>
				</Menu>
			</Flex>
		);
	} else if (user === undefined) {
		body = <Spinner />;
	}

	return (
		<Flex
			px={{ base: 4, md: 4 }}
			height="20"
			alignItems="center"
			bg={useColorModeValue("gray.100", "gray.900")}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue("gray.200", "gray.700")}
			justifyContent={{ base: "space-between", md: "flex-end" }}
			w={"100%"}
			pos="fixed"
		>
			<IconButton
				display={{ base: "flex", md: "none" }}
				onClick={onOpen}
				variant="outline"
				aria-label="open menu"
				icon={<FiMenu />}
			/>

			<Img
				src={useColorModeValue("/logo-black.png", "/logo-white.png")}
				alt="logo"
				display={{ base: "block", md: "none" }}
				boxSize={14}
			/>
			<HStack spacing={2}>
				<IconButton
					icon={isDark ? <SunIcon /> : <MoonIcon />}
					aria-label="Toggle Theme"
					onClick={toggleColorMode}
					size="lg"
				/>
				<IconButton
					size="lg"
					variant="ghost"
					aria-label="open menu"
					icon={<FiBell />}
				/>
				{body}
			</HStack>
		</Flex>
	);
};
