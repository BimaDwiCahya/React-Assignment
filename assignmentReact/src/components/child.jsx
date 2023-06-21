export default function Child({ valueDariParent, setDariParent }) {
  const hilangkanInputan = (inputan) => {
    const inputanBaru = valueDariParent.filter((input) => input !== inputan);
    setDariParent(inputanBaru);
  };
  return (
    <div>
      <ul>
        {valueDariParent.map((valInputan) => (
          <div>
            <li style={{ listStyle: "none" }}>
              {valInputan}{" "}
              <button onClick={() => hilangkanInputan(valInputan)}>X</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
