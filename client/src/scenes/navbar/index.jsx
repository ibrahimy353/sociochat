import { useState } from "react";
import {
    Box,
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {
    Search,
    Message,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Menu,
    Close
} from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from 'state';
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";


const NavBar = () => {
    const [isMobilMenuToggled, setMobileMenuToggled] = useState(false);//allows us to determine the value when in small screen
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state);
    const isNonMobileScreens = useMediaQuery("(min-width = 1000px)");//this is a hook build in mui to determine whether the current screen is below the min width of higher
    
    const theme =useTheme();
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const backgroung = theme.palette.background.default;
    const primaryLight = theme.palatte.primary.light;
    const alt = theme.palette.background.alt;

    const fullName = `${ user.firstName} ${user.lastName}`;
    
    return <div>navbar</div>;
};

export default NavBar;