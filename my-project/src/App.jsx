import Card from "./components/Card1"
function App() {
  // const newObj = {
  //   username: "Shivakant",
  //   age: 21,
  //   email:"user@gmail.com"
  // }
  
  return (
    <>
      <Card username="NIKE air Jordan" btnText="Add In bag"/>
      <h2 className="text-3xl ml-10 text-blue-700">from here , second card begins</h2>
    <Card username="nike airmax"/>
    </>
  )
}
export default App
//we can make a custom component for eg:Card
//we can reuse components and we can pass values to the components to change the content of the card

