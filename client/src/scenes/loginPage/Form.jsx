import { useState } from "react";
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme
} from "@mui/material";
import { EditOutlinedIcon } from "@mui/icons-material/EditOutlined";
import {Formik} from "formik";
import  * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setLogin} from "state";
import Dropzone from "react-dropzone";
import { Email } from "@mui/icons-material";
import { color, margin } from "@mui/system";

const registerSchema = yup.object().shape({
    //values found in the schema when the inputs in an incorrect 
    //value the feedback would be error bt if the user leaves the registration blank it will give back required.
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    loaction: yup.string().required("required"),
    occupation: yup.string().required("required"),
    picture: yup.string().required("required"),
})

const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
});
const initialValueRegister ={
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    occupation: "",
    picture: "",
  };
  
  const initialValuesLogin = {
    email: "",
    password: "",
  };

  const Form = () =>{
    const [pageType, setPageType] = useState("login");
    const {palette} = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width: 60px)");
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";

    const handleFormSubmit = async (values, onsubmitProps) => {};
    // this allows us to send form info with image
    return (
        <Formik
        onSubmit={handleFormSubmit}
        initialValues ={ isLogin ? initialValuesLogin : initialValuesRegister}
        validationSchema = { isLogin ? loginSchema: registerSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) => (
                <form onSubmit ={ handleSubmit}>
                    <Box 
                    display="grid"
                    gap ="30px"
                    gridTemplateColums= "repeat (4, minmax(0, 1fr))" //this means that we are spliting the grind into 4 section
                    sx= {{
                        "& > div": {gridAutoColumn: isNonMobile ? undefined : "span 4"},

                    }}
                    > 
                    {isRegister && (
                        <>
                        <TextField
                        label= "Fist Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={value.firstName}
                        name="firstName"
                        error= {"Boolean(touched.firstName) && Boolean(erros.fistName)"}
                        helperText = {touched.firstName && errors.firstName}
                        sx={{gridColumn: "span 2"}}
                        />
                        <TextField
                        label= "Last Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={value.lasttName}
                        name="lastName"
                        error= {"Boolean(touched.lastName) && Boolean(erros.lastName)"}
                        helperText = {touched.lasName && errors.lastName}
                        sx={{gridColumn: "span 2"}}
                        />
                        
                        <TextField
                        label= "Location"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={value.location}
                        name="firstName"
                        error= {"Boolean(touched.location) && Boolean(erros.location)"}
                        helperText = {touched.location && errors.location}
                        sx={{gridColumn: "span 4"}}
                        />
                        
                        <TextField
                        label= "Occupation"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={value.occupation}
                        name="firstName"
                        error= {"Boolean(touched.occupation) && Boolean(erros.occupation)"}
                        helperText = {touched.occupation && errors.occupation}
                        sx={{gridColumn: "span 4"}}
                        />
                    <Box 
                        gridColumn= "span 4"
                        border={`1px solid ${palatte.neutral.medium}`}
                        borderRadius ="5PX"
                        p="1rem"
                        >
                            <Dropzone
                              acceptedFiles =".jpg, .jpg, .png"
                              multiple= {false} //means that only one image is accepted at most in login
                              onDrop= {(acceptedFiles) =>
                                setFieldValue ("picture", acceptedFiles [0])}
                            >
                                {({getRootProps, getInputProps}) =>(
                                    <Box
                                        {...getRootProps()}
                                        border= {`2px dashed ${palette.primary.main}`}
                                        p="1rem"
                                        sx={{"&:hover": {cursor: "pointer"}}}
                                    >
                                        <input{...getInputProps}/>
                                        {!value.picture?(
                                          <p>Add Picture Here</p>
                                          ):(
                                            <FlexBetween>
                                                <Typography>{value.picture.name}</Typography>
                                                <EditOutlinedIcon/>
                                            </FlexBetween>
                                          ) }
                                    </Box>
                                )}

                            </Dropzone>
                        </Box>
                        </>
                    )}
                    {/* section for login incase you havent registered */}
                    <TextField
                        label= "Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={value.email}
                        name="firstName"
                        error= {"Boolean(touched.email) && Boolean(erros.email)"}
                        helperText = {touched.email && errors.email}
                        sx={{gridColumn: "span 2"}}
                        />

                    <TextField
                        label= "Password"
                        type= "pasword"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={value.password}
                        name="firstName"
                        error= {"Boolean(touched.password) && Boolean(erros.password)"}
                        helperText = {touched.password && errors.password}
                        sx={{gridColumn: "span 2"}}
                        />
                </Box>
                {/* Button section */}
                <Button
                    fullWidth
                    type="submit"
                    sx={{
                        margin:"2rem 0",
                        p: "1rem",
                        backgroundColor: palatte.primary.main,
                        color: palette.background.alt,
                        "&: hover": {color: palatte.primary.main},
                    }}
                    >

                    </Button>

                </form>
            )}
        </Formik>
    )
  };

  export default Form;