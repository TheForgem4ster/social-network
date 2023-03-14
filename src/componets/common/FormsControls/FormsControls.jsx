import React from "react";
import styles from "./FormsControls.module.css";
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...restProps} {...input}/>
        </FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...restProps} {...input}/>
        </FormControl>
    )
}

export const createField = (placeholder, name, validate, component, props, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validate}
               component={component}
               {...props}/>{text}
    </div>)