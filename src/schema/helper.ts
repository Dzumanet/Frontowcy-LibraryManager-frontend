import { string } from "yup";

export const requiredString = (customMessage: string = "This field is required") =>
    string().required(customMessage);