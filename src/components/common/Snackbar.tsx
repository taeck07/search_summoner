import { Alert, Snackbar as MuiSnackbar } from "@mui/material";
import { useEffect, useState } from "react";

export type SnackbarPropTypes = {
    msg: string;
    type: "warning" | "error" | "info" | "success";
}

export const Snackbar = ({ snackbar }: { snackbar?: SnackbarPropTypes }) => {
	const [open, setOpen] = useState(false);
	const [key, setKey] = useState(Symbol());

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		if (!snackbar?.type && !snackbar?.msg) return;
		setKey(Symbol());
	}, [snackbar]);

	return <MuiSnackbar open={open} onClose={handleClose} key={key.toString()}>
		<Alert severity={snackbar?.type}>{snackbar?.msg}</Alert>
	</MuiSnackbar>;
};