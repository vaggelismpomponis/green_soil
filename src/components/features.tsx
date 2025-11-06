import { Card } from "./card";

const items = [
  { title: "Ανάλυση εδάφους & δεδομένων", description: "Δειγματοληψία, εργαστηριακή ανάλυση, ερμηνεία μετρήσεων." },
  { title: "Σχέδια λίπανσης", description: "Εξατομικευμένα πλάνα, μείωση κόστους, αύξηση παραγωγής." },
  { title: "Συμβουλευτική καλλιεργειών", description: "Παρακολούθηση, βέλτιστες πρακτικές, εκπαίδευση." },
];

export function Features() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((f) => (
        <Card key={f.title} title={f.title} description={f.description} />
      ))}
    </div>
  );
}


