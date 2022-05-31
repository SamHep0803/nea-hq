import { ArrowRightIcon } from "@chakra-ui/icons";
import {
	CloseButton,
	Collapse,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	Flex,
	FlexProps,
	Icon,
	Img,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { ReactText } from "react";
import { IconType } from "react-icons";
import { FiAward, FiCalendar, FiHome, FiUser } from "react-icons/fi";

interface SidebarProps {
	isOpen: boolean;
	onClose: () => void;
}

interface LinkItemProps {
	name: string;
	icon: IconType;
	link: string;
}

interface DropdownLinkItemProps {
	name: string;
	icon: IconType;
	links: Array<LinkItemProps>;
}

const LinkItems: Array<LinkItemProps | DropdownLinkItemProps> = [
	{ name: "Home", icon: FiHome, link: "/" },
	{ name: "My Profile ", icon: FiUser, link: "/me" },
	{ name: "Events", icon: FiCalendar, link: "/events" },
	{
		name: "Training",
		icon: FiAward,
		links: [{ name: "Request Training", icon: FiAward, link: "/atc/request" }],
	},
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
	return (
		<Flex minH="100vh">
			<SidebarContent
				onClose={onClose}
				isOpen={isOpen}
				display={{ base: "none", md: "flex" }}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerOverlay />
				<DrawerContent>
					<SidebarContent isOpen={isOpen} onClose={onClose} />
				</DrawerContent>
			</Drawer>
		</Flex>
	);
};

interface SidebarContentProps extends FlexProps {
	isOpen: boolean;
	onClose: () => void;
}

export const SidebarContent = ({
	isOpen,
	onClose,
	...rest
}: SidebarContentProps) => {
	return (
		<Flex
			flexDir={"column"}
			bg={useColorModeValue("gray.100", "gray.900")}
			borderRight="1px"
			borderRightColor={useColorModeValue("gray.200", "gray.700")}
			w={{ base: "full", md: 64 }}
			pos="fixed"
			h="full"
			zIndex={{ base: 10, md: 10 }}
			{...rest}
		>
			<Flex
				h="20"
				alignItems="center"
				mt={4}
				mx="8"
				justifyContent="space-between"
			>
				<Img
					src={useColorModeValue("/black.png", "/white.png")}
					alt="logo"
					display={{ base: "none", md: "block" }}
				/>
				<Img
					src={useColorModeValue("/logo-black.png", "/logo-white.png")}
					alt="logo"
					boxSize={14}
					display={{ base: "block", md: "none" }}
				/>
				<CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
			</Flex>
			{LinkItems.map((link) => {
				let links: any[] = [];
				if ("links" in link) {
					link.links.map((link) =>
						links.push(
							<NavItem
								ml={8}
								fontSize={"sm"}
								key={link.name}
								icon={link.icon}
								link={link.link}
								onClick={onClose}
							>
								{link.name}
							</NavItem>
						)
					);

					return (
						<DropdownItem links={links} icon={link.icon} key={link.name}>
							{link.name}
						</DropdownItem>
					);
				}
				return (
					<NextLink key={link.name} href={link.link}>
						<a>
							<NavItem
								key={link.name}
								icon={link.icon}
								link={link.link}
								onClick={onClose}
							>
								{link.name}
							</NavItem>
						</a>
					</NextLink>
				);
			})}
		</Flex>
	);
};

interface DropdownItemProps extends FlexProps {
	icon: IconType;
	links: Array<LinkItemProps>;
	children: ReactText;
}
const DropdownItem = ({ icon, links, children }: DropdownItemProps) => {
	const { isOpen, onToggle } = useDisclosure();
	const color = useColorModeValue("gray.700", "gray.300");
	const router = useRouter();

	return (
		<Flex flexDir={"column"}>
			<Flex
				transition={".12s ease"}
				align="center"
				p="4"
				my={"1"}
				mx="4"
				borderRadius="lg"
				role={"group"}
				cursor={"pointer"}
				_hover={{
					bg: useColorModeValue("gray.200", "gray.700"),
				}}
				bg={"transparent"}
				fontWeight={"semibold"}
				onClick={onToggle}
				justifyContent="space-between"
				color={color}
			>
				<Flex>
					{icon && <Icon mr="4" fontSize="16" as={icon} alignSelf={"center"} />}
					{children}
				</Flex>
				<ArrowRightIcon
					transition={".12s ease"}
					boxSize={"0.75em"}
					transform={isOpen ? "rotate(90deg)" : "rotate(0deg)"}
				/>
			</Flex>
			<Collapse in={isOpen} animateOpacity>
				{links}
			</Collapse>
		</Flex>
	);
};

interface NavItemProps extends FlexProps {
	icon: IconType;
	link: string;
	children: any;
}
const NavItem = ({ icon, link, children, ...rest }: NavItemProps) => {
	const color = useColorModeValue("gray.700", "gray.300");
	const router = useRouter();

	return (
		<NextLink href={link}>
			<Flex
				transition={".12s ease"}
				align="center"
				p="4"
				my={"1"}
				mx="4"
				borderRadius="lg"
				role={"group"}
				cursor={"pointer"}
				color={
					router.pathname === link ? useColorModeValue("black", "white") : color
				}
				_hover={{
					bg: useColorModeValue("gray.200", "gray.700"),
				}}
				bg={
					router.pathname === link
						? useColorModeValue("gray.300", "gray.700")
						: "transparent"
				}
				fontWeight={"semibold"}
				{...rest}
			>
				{icon && <Icon mr="4" fontSize="16" alignSelf={"center"} as={icon} />}
				{children}
			</Flex>
		</NextLink>
	);
};
