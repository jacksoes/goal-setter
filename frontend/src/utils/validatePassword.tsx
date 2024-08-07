import { stringHasNumber, stringHasSpecial } from "./utils";

const validatePassword = (password: string, setErrorMessage, setIsValidated) => {
   

    let errorMessage: string[] = [];
    if(password.length < 8)
        errorMessage.push("- Password must be at least 8 characters long.\n");
    if(password === password.toLowerCase())
        errorMessage.push("- Password must contain at least one capital letter.\n");
    if(!stringHasNumber(password))
        errorMessage.push("- Password must contain at least one number. \n");
    if(!stringHasSpecial(password))
        errorMessage.push("- Password must contain at least one special character. \n")
    
    if(errorMessage.length === 0)
        setIsValidated(true)
    else{
        setErrorMessage(errorMessage);
        setIsValidated(false);
    }

    

}


export default validatePassword;