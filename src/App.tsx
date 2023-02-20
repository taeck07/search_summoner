import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot, useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { Snackbar } from "./components/common/Snackbar";
import Home from "./pages/Home";
import { snackbarState } from "./recoil/snackbarRecoil";

const theme = {
	border: {
		default: "1px solid #d8d8d8",
	},
	color: {
		charcoal: "#242929",
		slateGrey: "#657070",
		bluish: "#1f8ecd",
		blueyGreen: "#2daf7f",
		yellowOchre: "#e19205",
		greyish: "#b6b6b6",
		warmGreyFour: "#979797",
		greyishTwo: "#a7a7a7",
		oceanBlue: "#04609e",
		reddish: "#c6443e",
		white: "#f2f2f2",
		coolGrey: "#879292",
		brownishGrey: "#5e5e5e",
		coral: "#ee5a52",
		lightGreyBlue: "#a1b8cd",
		lightBlueGrey: "#b0ceea",
		pinkishGrey: "#d6b5b2",
		brownishGreyTwo: "#666666",
		greyishBrown: "#555555",
		pinkishGreyTwo: "#c0aba8"
	},
	templateStyle: {
		width: {
			width: "1000px",
			margin: "0 auto",
		}
	},
};


const Routes = () => {
	const snackbarInfo = useRecoilValue(snackbarState);
	return (
		<>
			<Home />
			<Snackbar snackbar={snackbarInfo} />
		</>
	);
};
const App = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});
	return (
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<Routes />
				</ThemeProvider>
			</QueryClientProvider>
		</RecoilRoot>
	);
};

export default App;