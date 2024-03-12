import React from "react";
import {
  IonContent,
  IonGrid,
  IonTitle,
  IonSearchbar,
  IonItem,
  IonAvatar,
  IonLabel,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const ChatPage = () => {
  const history = useHistory();

  function handleItemClick() {
    console.log("Item clicked");
    // Navigate to DetailChatPage
    history.push("/DetailChatPage");
  }

  return (
    <>
      <IonContent>
        <IonGrid className="mt-20">
          <IonTitle>Ini Chat</IonTitle>
          <IonSearchbar></IonSearchbar>
          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>
          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>
          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>
          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>
          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>
          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>
          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>
          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>
          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>
          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>
          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>
          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>
          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>

          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>
          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>
          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>
          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>
          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>
          <IonItem onClick={handleItemClick}>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel>Avatar Item</IonLabel>
          </IonItem>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default ChatPage;
