function Users(props) {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <p>{props.data.age}</p>
      <button>Click Me</button>;
    </div>
  );
}

export default Users;
