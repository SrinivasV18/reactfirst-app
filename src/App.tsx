import { ArrayUpdating } from "./components/ArrayUpdating";
import ListGroup from "./components/ListGroup";
import ListGroup1 from "./components/ListGroup1";
import { NestedObjectUpdate } from "./components/NestedObjectUpdate";

function App(){
  let items=[
    'Hyderabad',
    'Chennai',
    'Delhi',
    'Mumbai',
    'Kolkata'
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);

  }
  return <div>
    {/* <ListGroup/> 
    <ListGroup1 items={items}
     heading="Indian Cities" onSelectItem={handleSelectItem}/>
  */}
  <NestedObjectUpdate/>
  <ArrayUpdating/>
     </div>
}
export default App