import React, { useState } from "react";
import {
  IonContent,
  IonCol,
  IonTitle,
  IonGrid,
  IonRadioGroup,
  IonRadio,
  IonRow,
  IonButton,
  IonAlert,
  IonLoading,
} from "@ionic/react";

const PengaturanPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const handleOkayClick = () => {
    setShowAlert(false);
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);
    }, 2000);
  };

  return (
    <>
      <IonContent>
        <IonGrid className="mt-20">
          <IonTitle className="text-3xl text-center text-amber-200 py-4">
            PENGATURAN
          </IonTitle>
          <IonTitle className="text-3xl text-center py-6">
            Ganti Bahasa
          </IonTitle>
        </IonGrid>
        <IonRow className="px-96 flex justify-center gap-36">
          <IonRadioGroup className="px-96 flex justify-center gap-36">
            <IonRadio
              aria-label="Warning"
              color="warning"
              value="start"
              labelPlacement="start"
              className="text-xl"
            >
              Indonesia
            </IonRadio>

            <IonRadio
              aria-label="Warning"
              color="warning"
              value="end"
              labelPlacement="end"
              className="text-xl"
            >
              Inggris
            </IonRadio>
          </IonRadioGroup>
        </IonRow>
        <IonTitle className="text-3xl text-center pt-10">
          App Version: 8,9
        </IonTitle>
        <IonTitle className="text-3xl text-center pt-2">
          Data Version: 6816
        </IonTitle>
        <IonRow className="justify-center py-24">
          <IonButton onClick={() => setShowAlert(true)}>
            CEK DATA BARU
          </IonButton>
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header="Data Base baru terdeteksi. Apakah anda ingin melakukan update ?"
            buttons={[
              {
                text: "OK",
                handler: handleOkayClick,
              },
              {
                text: "BATAL",
                handler: () => {
                  console.log("BATAL clicked");
                },
              },
            ]}
          ></IonAlert>
          <IonLoading
            isOpen={showLoading}
            message={"Please wait..."}
            duration={2000}
          />
        </IonRow>
      </IonContent>
    </>
  );
};
export default PengaturanPage;
