export default function handleChange(e, object, setObject) {
  setObject({ ...object, [e.target.name]: e.target.value });
}
