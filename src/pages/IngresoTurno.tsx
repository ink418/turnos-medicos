import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonLabel, IonInput, IonSelect, IonSelectOption,
  IonButton, IonToast
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { getHorarios, getMedicos, postTurno } from '../api/api';

interface Medico {
  id: number;
  nombre: string;
  especialidad: string;
}

const IngresoTurno: React.FC = () => {
  const [paciente, setPaciente] = useState('');
  const [cedula, setCedula] = useState('');
  const [medico, setMedico] = useState('');
  const [horario, setHorario] = useState('');
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [horarios, setHorarios] = useState<{ id: number; rango: string }[]>([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    getMedicos().then(res => setMedicos(res.data));
    getHorarios().then(res => setHorarios(res.data));
  }, []);

  const handleSubmit = async () => {
    if (paciente && cedula && medico && horario) {
      const nuevoTurno = { paciente, cedula, medico, horario };
      await postTurno(nuevoTurno);
      setShowToast(true);
      setPaciente('');
      setCedula('');
      setMedico('');
      setHorario('');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ingreso de Turno</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Nombre del Paciente</IonLabel>
          <IonInput value={paciente} onIonChange={e => setPaciente(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Cédula</IonLabel>
          <IonInput value={cedula} onIonChange={e => setCedula(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel>Médico</IonLabel>
          <IonSelect value={medico} onIonChange={e => setMedico(e.detail.value)}>
            {medicos.map(m => (
              <IonSelectOption key={m.id} value={m.nombre}>
                {m.nombre} - {m.especialidad}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>Horario</IonLabel>
          <IonSelect value={horario} onIonChange={e => setHorario(e.detail.value)}>
            {horarios.map((h, i) => (
              <IonSelectOption key={i} value={h.rango}>{h.rango}</IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
        <IonButton expand="block" onClick={handleSubmit}>Guardar Turno</IonButton>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Turno registrado exitosamente"
          duration={1500}
        />
      </IonContent>
    </IonPage>
  );
};

export default IngresoTurno;
