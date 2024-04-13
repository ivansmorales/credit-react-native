import React from "react";
import { Modal, StyleSheet, View } from "react-native";

import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";

export default function CongratsModal({ onSuccess }: any) {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CustomText fontSize="header">¡Felicidades!</CustomText>
            <CustomText>
              Encontramos estos créditos perfectos para ti:
            </CustomText>
            <CustomButton
              title="Seleccionar crédito"
              onPress={() => onSuccess()}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
