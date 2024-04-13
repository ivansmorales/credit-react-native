import React from "react";
import { Formik, useField } from "formik";

import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import CustomText from "../components/CustomText";
import { TextInputProps } from "react-native";

type Props = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialValues = {
  name: "",
  email: "",
};

type FormikInputValueProps = {
  name: string;
} & TextInputProps;

const FormikInputValue = ({ name, ...props }: FormikInputValueProps) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <CustomTextInput
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        error={meta.error}
        {...props}
      />
      {meta.error && <CustomText variant="error">{meta.error}</CustomText>}
    </>
  );
};

const validate = (values: any) => {
  const errors: any = {};
  if (!values.name) {
    errors.name = "Debes ingresar tu nombre";
  } else if (!/^[a-zA-Z ]+$/.test(values.name)) {
    errors.name = "Solo se permiten letras y espacios";
  }
  if (!values.email) {
    errors.email = "Campo requerido";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Correo inválido";
  }

  return errors;
};

export default function GetYourCredit({ setShow }: Props) {
  return (
    <>
      <CustomText fontSize="large">Descubre tu crédito</CustomText>
      <CustomText variant="secondary">
        Llena el siguiente formulario para conocer {"\n"}los créditos que
        tenemos disponibles para ti.
      </CustomText>
      <Formik
        initialValues={initialValues}
        onSubmit={() => setShow(true)}
        validate={validate}
      >
        {({ values, errors, handleSubmit }) => {
          const isFormEmpty = Object.values(values).some((value) => !value);
          const hasErrors = Object.keys(errors).length > 0;

          return (
            <>
              <CustomText variant="secondary">Nombre</CustomText>
              <FormikInputValue
                name="name"
                placeholder="Ingresa tu nombre aquí"
              />

              <CustomText variant="secondary">Correo</CustomText>
              <FormikInputValue
                name="email"
                placeholder="Ingresa tu correo aquí"
              />

              <CustomButton
                title="Descubrir créditos"
                onPress={handleSubmit}
                disabled={isFormEmpty || hasErrors}
              />
            </>
          );
        }}
      </Formik>
    </>
  );
}
