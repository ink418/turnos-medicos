import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { calendar, list } from 'ionicons/icons';
import React, { useState } from 'react';

import IngresoTurno from './pages/IngresoTurno';
import ListaTurnos from './pages/ListaTurnos';
import { Turno } from './types/Turno';

/* Estilos Ionic */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const [turnos, setTurnos] = useState<Turno[]>([]);

  const handleAddTurno = (nuevoTurno: Turno) => {
    setTurnos([...turnos, nuevoTurno]);
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/ingreso">
              <IngresoTurno onAdd={handleAddTurno} />
            </Route>
            <Route exact path="/lista">
              <ListaTurnos turnos={turnos} />
            </Route>
            <Route exact path="/">
              <Redirect to="/ingreso" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="ingreso" href="/ingreso">
              <IonIcon icon={calendar} />
              <IonLabel>Nuevo Turno</IonLabel>
            </IonTabButton>
            <IonTabButton tab="lista" href="/lista">
              <IonIcon icon={list} />
              <IonLabel>Turnos</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
