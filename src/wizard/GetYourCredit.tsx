import React from "react";

import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import CustomText from "../components/CustomText";

type Props = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function GetYourCredit({ setShow }: Props) {
  return (
    <>
      <CustomText fontSize="large">Descubre tu crédito</CustomText>
      <CustomText variant="secondary">
        Llena el siguiente formulario para conocer {"\n"}los créditos que
        tenemos disponibles para ti.
      </CustomText>

      <CustomText variant="secondary">Nombre</CustomText>
      <CustomTextInput placeholder="Ingresa tu nombre aquí" />

      <CustomText variant="secondary">Correo</CustomText>
      <CustomTextInput placeholder="Ingresa tu correo aquí" />

      <CustomButton
        title="Descubrir créditos"
        onPress={() => setShow(true)}
        disabled={true}
      />
    </>
  );
}
