"use client";
import { Box, Button, Flex, Grid, Input } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface RangeProps {
	value: string;
	setValue: Function;
	min?: string;
	max?: string;
}

const Range = ({ value, setValue, min = "", max = "" }: RangeProps) => {
	return (
		<Input
			type="range"
			value={value}
			onChange={(e) => {
				setValue(e.target.value);
			}}
			min={min}
			max={max}
		/>
	);
};

interface BoxShadowProps {
	inset?: boolean;
	gridArea?: string;
}

const BoxShadow = ({
	inset = false,
	gridArea,
}: BoxShadowProps): JSX.Element => {
	const [offsetX, setOffsetX] = useState("0");
	const [offsetY, setOffsetY] = useState("0");
	const [blur, setBlur] = useState("10");
	const [spread, setSpread] = useState("10");
	const [text, setText] = useState(
		`${
			inset ? "inset" : ""
		} ${offsetX}px ${offsetY}px ${blur}px ${spread}px black`
	);
	useEffect(() => {
		setText(
			`${
				inset ? "inset" : ""
			} ${offsetX}px ${offsetY}px ${blur}px ${spread}px black`
		);
	}, [offsetX, offsetY, blur, spread]);
	return (
		<Flex
			justify="center"
			align="center"
			h="full"
			direction="column"
			gridArea={gridArea}
		>
			<Flex
				w={{ base: "50vw", md: "50vh" }}
				h={{ base: "50vw", md: "50vh" }}
				borderRadius="1rem"
				justify="center"
				align="center"
				direction="column"
				bg={useColorModeValue("purple.100", "purple.600")}
				boxShadow={text}
			>
				<Flex as="h1" fontSize="1.3rem" mb="2rem">
					{`box-shadow: ${text}`}
				</Flex>
				<Button
					onClick={() => {
						navigator.clipboard.writeText(`box-shadow: ${text}`);
					}}
				>
					Copy
				</Button>
			</Flex>
			<Box mt="1rem" bg={"#00000025"} p="1rem" borderRadius="1rem">
				<Range
					value={offsetX}
					setValue={setOffsetX}
					min="-100"
					max="100"
				/>
				<Range
					value={offsetY}
					setValue={setOffsetY}
					min="-100"
					max="100"
				/>
				<Range value={blur} setValue={setBlur} />
				<Range value={spread} setValue={setSpread} />
			</Box>
		</Flex>
	);
};

const Section = ({
	children,
	single = true,
}: {
	children: JSX.Element[] | JSX.Element;
	single?: boolean;
}) => {
	if (single) {
		return (
			<Grid w="100%" h="100vh" as="section" placeItems="center">
				{children}
			</Grid>
		);
	} else {
		return (
			<Grid
				w="100%"
				h="100vh"
				as="section"
				templateRows="1fr"
				templateColumns="1fr 1fr"
				templateAreas={`"left right"`}
			>
				{children}
			</Grid>
		);
	}
};
const Page = () => {
	const [val1, setVal1] = useState("0");
	const [val2, setVal2] = useState("0");
	const [val3, setVal3] = useState("10");
	const [val4, setVal4] = useState("10");
	const [movX, setMovX] = useState("0");
	const [movY, setMovY] = useState("0");
	const [valIn1, setValIn1] = useState("0");
	const [valIn2, setValIn2] = useState("0");
	const [valIn3, setValIn3] = useState("10");
	const [valIn4, setValIn4] = useState("10");

	return (
		<>
			<Section single={false}>
				<BoxShadow gridArea="left" />
				<BoxShadow gridArea="right" inset />
			</Section>
			<Section>
				<BoxShadow />
			</Section>
		</>
	);
};
export default Page;
