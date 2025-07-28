import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonList, IonItem, IonLabel, IonRefresher,
  IonRefresherContent
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { getTurnos } from '../api/api';
import { Turno } from '../types/Turno';

const ListaTurnos: React.FC = () => {
  const [turnos, setTurnos] = useState<Turno[]>([]);

  const cargarTurnos = async () => {
    const res = await getTurnos();
    setTurnos(res.data);
  };

  useEffect(() => {
    cargarTurnos();
  }, []);

  const doRefresh = (event: CustomEvent) => {
    cargarTurnos().then(() => event.detail.complete());
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Turnos Registrados</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent pullingText="Desliza para actualizar" />
        </IonRefresher>
        {turnos.length === 0 ? (
          <p>No hay turnos registrados.</p>
        ) : (
          <IonList>
            {turnos.map((t, index) => (
              <IonItem key={index}>
                <IonLabel>
                  <h2>{t.paciente} - {t.cedula}</h2>
                  <p><strong>Médico:</strong> {t.medico}</p>
                  <p><strong>Horario:</strong> {t.horario}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ListaTurnos;
