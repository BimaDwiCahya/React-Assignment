export default function Child({ valueDariParent, setDariParent }) {
  const hilangkanInputan = (inputan) => {
    const hapusInputan = valueDariParent.filter(
      (inputan) => (inputan = !valueDariParent)
    );
    setDariParent(hapusInputan);
  };
  return (
    <div>
      <ul>
        {valueDariParent.map((event) => (
          <div key={event}>
            <li style={{ listStyle: "none" }}>
              {event} <button onClick={() => hilangkanInputan(event)}>X</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
