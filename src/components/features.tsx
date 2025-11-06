import { Card } from "./card";

const items = [
  { title: "ανάλυση εδάφους & δεδομένων", description: "δειγματοληψία, εργαστηριακή ανάλυση, ερμηνεία μετρήσεων." },
  { title: "σχέδια λίπανσης", description: "εξατομικευμένα πλάνα, μείωση κόστους, αύξηση παραγωγής." },
  { title: "συμβουλευτική καλλιεργειών", description: "παρακολούθηση, βέλτιστες πρακτικές, εκπαίδευση." },
];

export function Features() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((f) => (
        <Card key={f.title} title={f.title} description={f.description} />
      ))}
    </div>
  );
}


