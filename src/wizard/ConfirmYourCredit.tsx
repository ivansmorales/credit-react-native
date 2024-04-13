import React from "react";

import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";

export default function ConfirmYourCredit({ setShow }: any) {
  return (
    <>
      <CustomText fontSize="header">Acepta tu crédito</CustomText>
      <CustomText fontSize="header">
        Confirma que has seleccionado el crédito deseado
      </CustomText>
      <CustomText fontSize="header" variant="secondary">
        Crédito seleccionado
      </CustomText>

      <CustomButton title="Contratar" onPress={() => setShow(true)} />
    </>
  );
}
