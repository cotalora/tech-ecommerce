import { Alert, Snackbar } from "@mui/material";
import { createContext, useState } from "react";

export const NotificationContext = createContext([]);

export const NotificationContextProvider = ({ children }) => {

    const [showSnackbar, setShowSnackbar] = useState(false);
    const [msgSnackbar, setMsgSnackbar] = useState('');
    const [variantSnackbar, setVariantSnackbar] = useState('');

    const handleOpen = (msgObj) => {
        setShowSnackbar(true);
        setMsgSnackbar(msgObj.msg);
        setVariantSnackbar(msgObj.variant);
    };

    const handleClose = () => {
        setShowSnackbar(false);
        setMsgSnackbar('');
        setVariantSnackbar('');
    };

    return (
        <NotificationContext.Provider value={{ showSnackbar, handleOpen }}>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={showSnackbar}
                onClose={handleClose}
                autoHideDuration={3000}
            >
                <Alert severity={variantSnackbar}>{msgSnackbar}</Alert>
            </ Snackbar>
            {children}
        </NotificationContext.Provider>
    )
}