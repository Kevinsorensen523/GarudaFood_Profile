import React from "react";
import {
  IonContent,
  IonCol,
  IonTitle,
  IonGrid,
  IonRadioGroup,
  IonRadio,
  IonRow,
  IonButton,
} from "@ionic/react";

const PengaturanPage = () => {
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
          <IonButton>CEK DATA BARU</IonButton>
        </IonRow>
      </IonContent>
    </>
  );
};
export default PengaturanPage;
