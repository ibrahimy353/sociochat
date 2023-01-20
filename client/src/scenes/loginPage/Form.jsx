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
                    gridTemplateColums= "repeat (4, minmax(0, 1fr))"
                    sx= {{
                        "& > div": {gridAutoColumn: isNonMobile ? undefined : "span 4"},

                    }}>

                    </Box>
                </form>
            )}
        </Formik>
    )
  };

  export default Form;