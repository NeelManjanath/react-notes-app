export default function extractLocalStorage<T>(): T | null {
  const storedNotes = localStorage.getItem("notes");
  if (!storedNotes) return null;
  const json = JSON.parse(storedNotes);
  return json;
}
