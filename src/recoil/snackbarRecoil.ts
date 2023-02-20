import { atom } from "recoil";
import { SnackbarPropTypes } from "../components/common/Snackbar";
import { KEY_SNACKBAR } from "../constant/recoilKeys";


export const snackbarState = atom<SnackbarPropTypes | undefined>({
	key: KEY_SNACKBAR,
	default: undefined
});
