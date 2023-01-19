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

    return (
    <FlexBetween padding = " 1rem 6%" backgroundColor = {alt}>
        <FlexBetween gap = "1.75rem">
            <Typography
                fontWeight= "bold"
                fontSize =" clamp(1rem, 2rem, 2.25rem)"//clap is a function that determines the min,prefred and max respectively  value for font on a screen
                color= "primary"
                onClick= {()=> navigate("/home")}
                sx={{
                    "&:hover":{
                        color: primaryLight,
                        cursor:"pointer"
                    },
                }}
            >SocioPedia </Typography>

        {isNonMobileScreens && (
                    <FlexBetween
                      backgroundColor={neutralLight}
                      borderRadius="9px"
                      gap="3rem"
                      padding="0.1rem 1.5rem"//this show the 0.1rem is for the top and bottom and the 1.5rem is for left and right
                    >
                      <InputBase placeholder="Search..." />
                      <IconButton>
                        <Search />
                      </IconButton>
                    </FlexBetween>
                  )}
                </FlexBetween>
        {/*DESKTOP NAV*/}

        {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>  {/* icon button that changes the app from light to dark  */}

            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <Message sx={{ fontSize: "25px" }} />
          <Notifications sx={{ fontSize: "25px" }} />
          <Help sx={{ fontSize: "25px" }} />
          <FormControl variant="standard" value={fullName}> 

            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}
        
        {/* MOBILE NAV */}
        {!isNonMobileScreens && isMobilMenuToggled &&(
        <Box
        position="fixed"
        right="0"
        bottom="0"
        height="100%"
        zIndex="10"
        maxWidth="500px"
        minWidth="300px"
        backgroundColor={background}
      >
        {/* CLOSE ICON */}
        <Box display= "flex" justifyContent="flex-end" p="1rem">
            <IconButton 
            onClick={()=> setIsMobileMenuToggled (!isMobileMenuToggled)}>
                <close/>
            </IconButton>
        </Box>
        {/* MENU ITEMS */}
        <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>

        </Box>            
        )}
        </FlexBetween>         
    );
};

export default NavBar;