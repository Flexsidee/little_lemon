import * as React from "react";
import { Text, View } from "react-native";

// Import a local component here
import LittleLemonHeader from "./LittleLemonHeader";
import LittleLemonFooter from "./LittleLemonFooter";

export default function App() {
	return (
		<>
			<View
				style={{
					flex: 1,
					backgroundColor: "#495E57",
				}}
			>
				<LittleLemonHeader />
			</View>
			<View
				style={{
					backgroundColor: "#495E57",
				}}
			>
				<LittleLemonFooter />
			</View>
		</>
	);
}
