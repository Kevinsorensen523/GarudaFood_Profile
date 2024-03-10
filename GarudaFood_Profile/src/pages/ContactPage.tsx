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
  IonLabel,
} from "@ionic/react";
import "./../styles.css";

const ContactPage = () => {
  return (
    <>
      <IonContent>
        <IonGrid className="mt-20">
          <IonTitle className="text-center text-amber-200">
            HUBUNGI KAMI
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
        <IonRow className="py-2 px-8">
          <IonInput
            label="NOMOR TELEPON"
            labelPlacement="floating"
            fill="outline"
            placeholder="Enter text"
          ></IonInput>
        </IonRow>
        <IonRow className="py-2 px-8">
          <IonInput
            label="SUBYEK"
            labelPlacement="floating"
            fill="outline"
            placeholder="Enter text"
          ></IonInput>
        </IonRow>
        <IonRow className="py-2 px-8">
          <IonInput
            label="PESAN"
            labelPlacement="floating"
            fill="outline"
            placeholder="Enter text"
            className="h-32"
          ></IonInput>
        </IonRow>
        <IonRow className="ion-justify-content-center py-2">
          <IonButton expand="block">Kirim</IonButton>
        </IonRow>
        <IonRow className="ion-justify-content-center py-2">
          <IonTitle className="text-center text-amber-200">
            GARUDA HEAD OFFICE
          </IonTitle>
        </IonRow>
        <IonRow className="ion-justify-content-center py-2 ">
          <IonLabel className="text-center">
            Jalan Raya Bintaro Raya No.10A, Kebayoran Lama Utara, Kebayoran
            Lama, RT.4/RW.10, Kby.Lama Utara, Kby.Lama, Kota Jakarta Selata,
            Daerah Khusus Ibukota Jakarta 12240
          </IonLabel>
        </IonRow>
        <IonRow className="ion-justify-content-center py-2 ">
          <IonTitle className="text-center">www.garudafood.com</IonTitle>
        </IonRow>
      </IonContent>
    </>
  );
};

export default ContactPage;
