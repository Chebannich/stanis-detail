export type Step = {
  number: number,
  name: string,
  description: string,
};

export const steps: Step[] = [
  { number: 1, name: 'Anfrage senden', description: 'Fahrzeugtyp und gewünschtes Paket über das Formular mitteilen.' },
  { number: 2, name: 'Termin bestätigen', description: 'Wir schlagen dir einen Termin in deiner Nähe vor.' },
  { number: 3, name: 'Vor-Ort-Aufbereitung', description: 'Dein Auto wird direkt bei dir zuhause oder auf der Arbeit aufbereitet.' },
  { number: 4, name: 'Abnahme & Übergabe', description: 'Du prüfst das Ergebnis — fertig ist es erst, wenn du zufrieden bist.' },
];