import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {

  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"100px"}
        py={{ base: 2 }}
        px={[4, 8, 16]}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        justifyContent={"space-between"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Text
          textAlign={useBreakpointValue({ base: "center", md: "center" })}
          fontFamily={"heading"}
          color={useColorModeValue("gray.800", "white")}
        >
          <Image
            w={"132px"}
            height={"62px"}
            src="https://madisonavenuearmor.com/new/wp-content/uploads/2023/07/New-Project.webp"
            alt="logo"
          />
        </Text>
        <Flex justify={"center"} alignItems={"center"}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          display={["none", "none", "inline-block"]}
          spacing={6}
        >
          <Link to={"/contact"}>
            <Button
              fontSize={"18px"}
              fontWeight={400}
              color={"white"}
              bg={"#051F16"}
              borderRadius={"none"}
              pl={8}
              pr={8}
              display={["none", "none", "inline-block"]}
              _hover={{
                bg: "white",
                color: "black",
                border: "1px solid black",
              }}
            >
              CONTACT US
            </Button>
          </Link>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} fontWeight={"400"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link to={navItem.href ?? "#"}>
                <Box
                  p={2}
                  fontSize={"18px"}
                  fontWeight={400}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Box>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                fontSize={"18px"}
                fontWeight={400}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
    
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}  fontWeight = {"300"}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={400}>
            {label}
          </Text>
          <Text fontSize={'sm'} fontWeight = {"400"}  >{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}



const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "ARMOR CAR RENTALS",
    children: [
      {
        label: "ARMOR VEHICLE RENTALS",
        href: "/armor-vehile-rentals",
      },
      {
        label: "MOTORCADE SERVICES",
        href: "/motorcade-services",
      },
      {
        label: "USA & INTERNATIONAL COVERAGE",
        href: "#",
      },
    ],
  },
  {
    label: "ARMOR CAR SALES",
    children: [
      {
        label: "NEW VEHICLE INVENTORY",
        href: "/cars",
      },
      {
        label: "PREOWNED VEHICLE INVENTORY",
        href: "/preowned-vehicle-inventory",
      },
      {
        label: "BUILD TO ORDER SERVICES",
        children: [
          {
            label: "UNDERSTANDING YOUR NEEDS",
            href: "#",
          },
          {
            label: "CUSTOMIZING YOUR CARS",
            href: "#",
          },
          {
            label: "BUY OR RENT",
            href: "#",
          },
          {
            label: "OWNERSHIP SUPPORT",
            href: "#",
          },
          {
            label: "ARMORSHIP PROCESS",
            href: "#",
          },
          {
            label: "PROTECTION & LEVEL",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    label: "CONSULTING AND AQUASITION",
    children: [
      {
        label: "ARMORED CASH IN TRANSIT VEHICLE",
        href: "#",
      },
      {
        label: "SPCECIAL USES AND TENCILE VEHICLE",
        href: "#",
      },
      {
        label: "CANNABIS SUPPORT",
        href: "#",
      },
      {
        label: "SECURITY SOLUTIONS",
        href: "#",
      },
    ],
  },
];
