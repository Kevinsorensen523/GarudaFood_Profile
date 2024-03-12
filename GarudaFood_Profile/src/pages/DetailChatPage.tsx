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
  IonSearchbar,
  IonAvatar,
  IonBackButton,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const DetailChatPage = () => {
  const history = useHistory();

  function kembali() {
    console.log("Aku kembali");
    history.push("/chat");
  }
  return (
    <>
      <IonContent>
        <IonGrid className="mt-20">
          <IonButton onClick={kembali}>
            <IonBackButton />
            Balik ke page chat
          </IonButton>
          <IonTitle>Ini Chat Orang</IonTitle>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default DetailChatPage;
