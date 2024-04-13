import React, { useState } from "react";
import { View } from "react-native";

import Constants from "expo-constants";

import GetYourCredit from "./wizard/GetYourCredit";
import CongratsModal from "./wizard/CongratsModal";
import ConfirmYourCredit from "./wizard/ConfirmYourCredit";

const Main = () => {
  const [wizardStep, setWizardStep] = useState<"step1" | "step2">("step1");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={{ marginTop: Constants.statusBarHeight, flexGrow: 1, padding: 20 }}
    >
      {wizardStep === "step1" && <GetYourCredit setShow={setModalVisible} />}
      {modalVisible && (
        <CongratsModal
          onSuccess={() => {
            setModalVisible(false);
            setWizardStep("step2");
          }}
        />
      )}
      {wizardStep === "step2" && !modalVisible && <ConfirmYourCredit />}
    </View>
  );
};

export default Main;
