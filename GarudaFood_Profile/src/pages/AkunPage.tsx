import React from "react";
import {
  IonContent,
  IonGrid,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonList,
  IonCol,
  IonRow,
  IonButton,
} from "@ionic/react";
import "./../styles.css";

const AkunPage = () => {
  return (
    <>
      <IonContent>
        <IonGrid className="mt-20">
          <IonTitle className="text-center text-amber-200 text-7xl py-16">
            LOGIN
          </IonTitle>
        </IonGrid>
        <IonRow className="py-2 px-8">
          <IonInput
            label="NAMA"
            labelPlacement="floating"
            fill="outline"
            placeholder="Enter text"
          ></IonInput>
        </IonRow>
        <IonRow className="py-2 px-8">
          <IonInput
            label="ALAMAT EMAIL"
            labelPlacement="floating"
            fill="outline"
            placeholder="Enter text"
          ></IonInput>
        </IonRow>
        <IonRow className="ion-justify-content-center py-10">
          <div className="flex gap-[250px] lg:gap-[700px]">
            <IonButton expand="block" className="text-3xl py-4">
              Login
            </IonButton>
            <IonButton expand="block" className="text-3xl py-4">
              Register
            </IonButton>
          </div>
        </IonRow>
      </IonContent>
    </>
  );
};

export default AkunPage;
