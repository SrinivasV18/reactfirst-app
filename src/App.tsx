import { ArrayUpdating } from "./components/ArrayUpdating";
import ArrayofObjects from "./components/ArrayofObjects";
import { Form1 } from "./components/Form1";
import { Form2 } from "./components/Form2";
import { HookForm } from "./components/HookForm";
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
  {/* <NestedObjectUpdate/>
  <ArrayUpdating/> 
  <ArrayofObjects/>
  <Form1/>
  
  <Form2/>*/}
  <HookForm/>
     </div>
}
export default App