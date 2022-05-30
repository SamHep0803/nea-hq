import { Flex, FlexProps, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { ReactText } from "react";
import { IconType } from "react-icons";
import { FiAward, FiCalendar, FiHome, FiUser } from "react-icons/fi";

interface SidebarProps {}

interface LinkItemProps {
	name: string;
	icon: IconType;
	link: string;
}

const LinkItems: Array<LinkItemProps> = [
	{ name: "Home", icon: FiHome, link: "/" },
	{ name: "My Profile ", icon: FiUser, link: "/me" },
	{ name: "Events", icon: FiCalendar, link: "/events" },
	{ name: "Training", icon: FiAward, link: "/training" },
];

export const Sidebar: NextPage<SidebarProps> = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Flex minH="100vh">
			<SidebarContent />
			{/* <Box ml={{ base: 0, md: 60 }} p="4">
				{children}
			</Box> */}
		</Flex>
	);
};

const SidebarContent = () => {
	return (
		<Flex
			flexDir={"column"}
			bg={"gray.900"}
			borderRight="1px"
			borderRightColor={"gray.700"}
			w={60}
			pos="fixed"
			h="full"
		>
			<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
				<Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
					Logo
				</Text>
			</Flex>
			{LinkItems.map((link) => {
				console.log(link.name);
				return (
					<NextLink key={link.name} href={link.link}>
						<a>
							<NavItem key={link.name} icon={link.icon} link={link.link}>
								{link.name}
							</NavItem>
						</a>
					</NextLink>
				);
			})}
		</Flex>
	);
};

interface NavItemProps extends FlexProps {
	icon: IconType;
	link: string;
	children: ReactText;
}
const NavItem = ({ icon, link, children }: NavItemProps) => {
	const router = useRouter();

	return (
		<Flex
			align="center"
			p="4"
			my={"1"}
			mx="4"
			borderRadius="lg"
			// role={"group"}
			cursor={"pointer"}
			_hover={{
				bg: "gray.700",
				color: "white",
			}}
			bg={router.pathname === link ? "gray.700" : "transparent"}
		>
			{icon && (
				<Icon
					mr="4"
					fontSize="16"
					_groupHover={{
						color: "white",
					}}
					as={icon}
				/>
			)}
			{children}
		</Flex>
	);
};

// interface MobileProps extends FlexProps {
// 	onOpen: () => void;
// }
// const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
// 	return (
// 		<Flex
// 			ml={{ base: 0, md: 60 }}
// 			px={{ base: 4, md: 4 }}
// 			height="20"
// 			alignItems="center"
// 			bg={useColorModeValue("white", "gray.900")}
// 			borderBottomWidth="1px"
// 			borderBottomColor={useColorModeValue("gray.200", "gray.700")}
// 			justifyContent={{ base: "space-between", md: "flex-end" }}
// 			{...rest}
// 		>
// 			<IconButton
// 				display={{ base: "flex", md: "none" }}
// 				onClick={onOpen}
// 				variant="outline"
// 				aria-label="open menu"
// 				icon={<FiMenu />}
// 			/>

// 			<Text
// 				display={{ base: "flex", md: "none" }}
// 				fontSize="2xl"
// 				fontFamily="monospace"
// 				fontWeight="bold"
// 			>
// 				Logo
// 			</Text>

// 			<HStack spacing={{ base: "0", md: "6" }}>
// 				<IconButton
// 					size="lg"
// 					variant="ghost"
// 					aria-label="open menu"
// 					icon={<FiBell />}
// 				/>
// 				<Flex alignItems={"center"}>
// 					<Menu>
// 						<MenuButton
// 							py={2}
// 							transition="all 0.3s"
// 							_focus={{ boxShadow: "none" }}
// 						>
// 							<HStack>
// 								<Avatar
// 									size={"sm"}
// 									src={
// 										"https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
// 									}
// 								/>
// 								<VStack
// 									display={{ base: "none", md: "flex" }}
// 									alignItems="flex-start"
// 									spacing="1px"
// 									ml="2"
// 								>
// 									<Text fontSize="sm">Justina Clark</Text>
// 									<Text fontSize="xs" color="gray.600">
// 										Admin
// 									</Text>
// 								</VStack>
// 								<Box display={{ base: "none", md: "flex" }}>
// 									<FiChevronDown />
// 								</Box>
// 							</HStack>
// 						</MenuButton>
// 						<MenuList
// 							bg={useColorModeValue("white", "gray.900")}
// 							borderColor={useColorModeValue("gray.200", "gray.700")}
// 						>
// 							<MenuItem>Profile</MenuItem>
// 							<MenuItem>Settings</MenuItem>
// 							<MenuItem>Billing</MenuItem>
// 							<MenuDivider />
// 							<MenuItem>Sign out</MenuItem>
// 						</MenuList>
// 					</Menu>
// 				</Flex>
// 			</HStack>
// 		</Flex>
// 	);
// };,
