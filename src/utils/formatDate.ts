export function formatDate(firestoreTimestamp: any) {
  // Convert the Firestore Timestamp object to a JavaScript Date object
  const date = firestoreTimestamp.toDate();

  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based in JavaScript
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}