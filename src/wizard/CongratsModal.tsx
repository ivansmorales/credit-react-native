import React from "react";
import { FlatList, Modal, StyleSheet, View } from "react-native";

import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
import theme from "../../theme";
import useCredits from "../hooks/useCredits";
import { Credit } from "../types";

type Props = {
  onSuccess: () => void;
  selectedCredit: { id: number; amount: number } | null;
  setSelectedCredit: React.Dispatch<React.SetStateAction<Credit | null>>;
};

export default function CongratsModal({
  onSuccess,
  selectedCredit,
  setSelectedCredit,
}: Props) {
  const { loading, credits } = useCredits();

  return (
    <View style={styles.wrapper}>
      <Modal animationType="slide" transparent={true} visible={true}>
        <View style={styles.wrapper}>
          <View style={styles.modalView}>
            <CustomText fontSize="large">¡Felicidades!</CustomText>
            <CustomText variant="secondary">
              Encontramos estos créditos perfectos para ti:
            </CustomText>
            {loading && <CustomText>Cargando...</CustomText>}
            <FlatList
              data={credits}
              renderItem={({ item, index }: any) => {
                // Fixing issue from API on duplicated id's
                const idx = index + 1;
                return (
                  <CustomButton
                    key={index}
                    title={`Crédito ${idx}  $${item.amount}`}
                    onPress={() =>
                      setSelectedCredit({ id: idx, amount: item.amount })
                    }
                    style={{
                      backgroundColor:
                        selectedCredit?.id === idx
                          ? theme.colors.btnPrimary
                          : theme.colors.grey,
                    }}
                  />
                );
              }}
            />
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
  wrapper: {
    marginTop: 100,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
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
