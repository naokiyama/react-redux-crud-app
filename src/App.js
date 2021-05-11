import propTypes from 'prop-types'
function App() {
  return (
    <div>
      <UserProfile name={"naoki"} age={12} description={"hello"} />
    </div>
  );
}

const UserProfile = (props) => {
  return (
    <div>
      <h1>Profile</h1>
      <table>
        <tr>
          <td>Name:</td>
          <td>{props.name}</td>
        </tr>
        <tr>
          <td>Age:</td>
          <td>{props.age}</td>
        </tr>
        <tr>
          <td>Description:</td>
          <td>{props.description}</td>
        </tr>
      </table>
    </div>
  )
}

/*propTypesで型定義をすることができる*/
UserProfile.propTypes = {
  name: propTypes.string,
  age: propTypes.number.isRequired,
  description: propTypes.string
}


export default App; 
