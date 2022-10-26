const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  const Content = (props) => {
    return (
      <>
        <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
        <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
      </>
    );
  };

  const Part = (props) => {
    return (
      <p>
        {props.part}: {props.exercises} exercises
      </p>
    );
  };

  const Total = (props) => {
    const total = props.parts.reduce((acc, obj) => acc + obj.exercises, 0);

    return <p>Number of exercises {total}</p>;
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
