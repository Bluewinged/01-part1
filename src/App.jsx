const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were propably born {bornYear()}</p>
    </>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);

  const nimi = "Pekka";
  const ika = 10;
  const friends = [
    { name: "Leevi", age: 4 },

    { name: "Venla", age: 10 },
  ];

  return (
    <>
      <section>
        <p>Hello world, it's now {now.toString()}</p>
        <p>
          {a} plus {b} is {a + b}
        </p>
      </section>

      <section>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <Hello name={nimi} age={ika} />
        <p>
          Kaverisi {friends[0].name}n ikä on {friends[0].age}
        </p>
        <p>
          Kaverisi {friends[1].name}n ikä on {friends[1].age}
        </p>
        <Footer />
      </section>
    </>
  );
};

const Footer = () => {
  return (
    <>
      greeting app created by
      <a href="https://github.com/Bluewinged"> Bluewinged</a>
    </>
  );
};

export default App;
