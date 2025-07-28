import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { calendar, list } from 'ionicons/icons';
import IngresoTurno from './IngresoTurno';
import ListaTurnos from './ListaTurnos';
import { useState } from 'react';
import { Turno } from '../types/Turno';

const Tabs: React.FC = () => {
  const [turnos, setTurnos] = useState<Turno[]>([]);

  const handleAddTurno = (nuevoTurno: Turno) => {
    setTurnos([...turnos, nuevoTurno]);
  };

  return (
    <>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/ingreso" exact>
            <IngresoTurno onAdd={handleAddTurno} />
          </Route>
          <Route path="/lista" exact>
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
    </>
  );
};

export default Tabs;
