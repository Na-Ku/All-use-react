const Person = (props) => {
  return (
    <ul>
      <li>
        <p>First Nama : {props.firstName} </p>
        <p>Last Name : {props.lastName} </p>
        <p>Age : {props.age} </p>
      </li>
    </ul>
  );
};

const Try = () => {
  const nama1 = "React";
  const dynamicNama1 = false;

  return (
    <>
      <p>Hello, {dynamicNama1 ? nama1 : "Learn Freamwork"}!</p>
      <hr />
      <div>
        <h3>Berikut ini adalah contoh Passing data di dalam satu Component menggunakan "props"</h3>
        <fieldset>
          <legend>List Data</legend>
          <Person firstName={"John"} lastName={"Doe"} age={20} />
          <Person firstName={"Marry"} lastName={"Swan"} age={10 + 9} />
        </fieldset>
      </div>
    </>
  );
};

export default Try;
