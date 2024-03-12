import React, { useState } from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonTitle,
  IonMenuButton,
  IonButton,
  IonMenuToggle,
  IonCol,
  IonRow,
  IonGrid,
  IonItem,
  IonAlert,
  IonLoading,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router";
import {
  cubeOutline,
  downloadOutline,
  bagRemoveOutline,
  mailOutline,
  newspaperOutline,
  settingsOutline,
  personOutline,
  alertCircle,
  bookOutline,
  exitOutline,
  chatboxOutline,
} from "ionicons/icons";
import NewsPage from "./NewsPage";
import ProductPage from "./ProductPage";
import UnduhanPage from "./UnduhanPage";
import StorePage from "./StorePage";
import ContactPage from "./ContactPage";
import AkunPage from "./AkunPage";
import AboutPage from "./AboutPage";
import PengaturanPage from "./PengaturanPage";
import "./Layout.css";
import "./../styles.css";
import ChatPage from "./ChatPage";
import DetailChatPage from "./DetailChatPage";

const Layout: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogout = () => {
    setShowLogoutAlert(true);
  };

  const handleLogoutConfirmed = () => {
    setShowLogoutAlert(false);
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      window.location.href = "/news";
    }, 5000);
  };

  return (
    <IonReactRouter>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle slot="end">GARUDA FOOD</IonTitle>
          <IonButton onClick={toggleMenu} slot="start" fill="solid">
            <IonMenuButton />
          </IonButton>
          <IonButton onClick={toggleTheme} slot="start" fill="solid">
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonMenu contentId="main-content" side="start" menuId="main-menu">
        <IonContent className="ion-padding">
          <IonMenuToggle auto-hide="false">
            <IonButton
              onClick={toggleMenu}
              slot="start"
              fill="clear"
              className="bg-white"
            >
              <IonMenuButton />
            </IonButton>
          </IonMenuToggle>
          <IonGrid>
            <IonRow>
              <IonCol size="20">
                <IonMenuToggle auto-hide="false">
                  <IonButton
                    routerLink="/akun"
                    onClick={toggleMenu}
                    fill="clear"
                  >
                    <IonIcon icon={personOutline} slot="start" />
                    AKUN
                  </IonButton>
                </IonMenuToggle>
              </IonCol>
              <IonCol size="20">
                <IonMenuToggle auto-hide="false">
                  <IonButton
                    routerLink="/about"
                    onClick={toggleMenu}
                    fill="clear"
                  >
                    <IonIcon icon={alertCircle} slot="start" />
                    TENTANG KAMI
                  </IonButton>
                </IonMenuToggle>
              </IonCol>
              <IonCol size="20">
                <IonMenuToggle auto-hide="false">
                  <IonButton
                    routerLink="/unduhan"
                    onClick={toggleMenu}
                    fill="clear"
                  >
                    <IonIcon icon={downloadOutline} slot="start" />
                    UNDUHAN
                  </IonButton>
                </IonMenuToggle>
              </IonCol>
              <IonCol size="20">
                <IonMenuToggle auto-hide="false">
                  <IonButton
                    routerLink="/sejarah"
                    onClick={toggleMenu}
                    fill="clear"
                    disabled
                  >
                    <IonIcon icon={bookOutline} slot="start" />
                    SEJARAH
                  </IonButton>
                </IonMenuToggle>
              </IonCol>
              <IonCol size="20">
                <IonMenuToggle auto-hide="false">
                  <IonButton
                    routerLink="/pengaturan"
                    onClick={toggleMenu}
                    fill="clear"
                  >
                    <IonIcon icon={settingsOutline} slot="start" />
                    PENGATURAN
                  </IonButton>
                </IonMenuToggle>
              </IonCol>
              <IonCol size="20">
                <IonMenuToggle auto-hide="false">
                  <IonButton
                    routerLink="/contact"
                    onClick={toggleMenu}
                    fill="clear"
                  >
                    <IonIcon icon={mailOutline} slot="start" />
                    HUBUNGI KAMI
                  </IonButton>
                </IonMenuToggle>
              </IonCol>
              <IonCol size="20">
                <IonMenuToggle auto-hide="false">
                  <IonButton onClick={handleLogout} fill="clear">
                    <IonIcon icon={exitOutline} slot="start" />
                    KELUAR
                  </IonButton>
                </IonMenuToggle>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonMenu>
      <IonPage className={isDarkMode ? "dark-mode" : "light-mode"}>
        <IonHeader>
          <IonToolbar>
            <IonMenuButton slot="start" />
            <IonTitle>GARUDA FOOD</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonRouterOutlet id="main-content">
            <Redirect exact path="/" to="/product" />
            <Route
              path="/news"
              render={(props) => (
                <NewsPage {...props} isDarkMode={isDarkMode} />
              )}
              exact={true}
            />
            <Route path="/product" component={ProductPage} exact={true} />
            <Route path="/unduhan" component={UnduhanPage} exact={true} />
            <Route path="/store" component={StorePage} exact={true} />
            <Route path="/contact" component={ContactPage} exact={true} />
            <Route path="/akun" component={AkunPage} exact={true} />
            <Route path="/about" component={AboutPage} exact={true} />
            <Route path="/pengaturan" component={PengaturanPage} exact={true} />
            <Route path="/chat" component={ChatPage} exact={true} />
            <Route path="/DetailChatPage" component={DetailChatPage} />
          </IonRouterOutlet>
        </IonContent>
      </IonPage>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/product" />
          <Route
            path="/news"
            render={(props) => <NewsPage {...props} isDarkMode={isDarkMode} />}
            exact={true}
          />
          <Route path="/product" component={ProductPage} exact={true} />
          <Route path="/unduhan" component={UnduhanPage} exact={true} />
          <Route path="/store" component={StorePage} exact={true} />
          <Route path="/contact" component={ContactPage} exact={true} />
          <Route path="/akun" component={AkunPage} exact={true} />
          <Route path="/about" component={AboutPage} exact={true} />
          <Route path="/pengaturan" component={PengaturanPage} exact={true} />
          <Route path="/chat" component={ChatPage} exact={true} />
          <Route path="/DetailChatPage" component={DetailChatPage} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="news" href="/news">
            <IonIcon icon={newspaperOutline} />
            <IonLabel>NEWS</IonLabel>
          </IonTabButton>

          <IonTabButton tab="product" href="/product">
            <IonIcon icon={cubeOutline} />
            <IonLabel>PRODUCT</IonLabel>
          </IonTabButton>

          <IonTabButton tab="unduhan" href="/unduhan">
            <IonIcon icon={downloadOutline} />
            <IonLabel>UNDUHAN</IonLabel>
          </IonTabButton>

          <IonTabButton tab="store" href="/store">
            <IonIcon icon={bagRemoveOutline} />
            <IonLabel>STORE</IonLabel>
          </IonTabButton>

          <IonTabButton tab="contact" href="/contact">
            <IonIcon icon={mailOutline} />
            <IonLabel>HUBUNGI KAMI</IonLabel>
          </IonTabButton>
          <IonTabButton tab="chat" href="/chat">
            <IonIcon icon={chatboxOutline} />
            <IonLabel>CHAT</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      <IonAlert
        isOpen={showLogoutAlert}
        onDidDismiss={() => setShowLogoutAlert(false)}
        header="Confirmation"
        message="Are you sure you want to log out?"
        buttons={[
          {
            text: "YA",
            handler: handleLogoutConfirmed,
          },
          {
            text: "TIDAK",
            handler: () => {
              console.log("TIDAK clicked");
            },
          },
        ]}
      />
      <IonLoading
        isOpen={showLoading}
        message={"Tunggu 5 detik untuk kembali ke halaman awal ya Pak..."}
        duration={5000}
      />
    </IonReactRouter>
  );
};

export default Layout;
