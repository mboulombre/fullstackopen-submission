import Note from "./components/Notes";

const App = ({notes}) => {
  // const { notes } = props

  // const lastElement = notes.at(-1);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/* <li>{lastElement.content}</li> */}
        {
          notes.map((item, index) => {
              return(
                <Note key={item.id} note={item} />
              )
          })
        }
       
        
      </ul>
    </div>
  )
}
export default App;
