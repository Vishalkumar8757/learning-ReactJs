import Child from "./component/Child"
import Child1 from "./component/Child1"
import Child2 from "./component/Child2"
import { Parent } from "./component/Parent"

function App(){
  return(
    <>
    <h1>This is app jsx page</h1>
    <Child/>
    <Child1 city = "nawada " country = "india"/>
    <Child2 gender = "male"/>
    <hr />
    <Parent/>
    </>
     
  )
}
export default App 