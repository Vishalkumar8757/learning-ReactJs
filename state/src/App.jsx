import Hook from "./component/Hook"
function App(){

  function demo(a){
    alert("working...."+a)
  }
  function event(a){
    alert("event is working...."+a)
  }
  function heer(b){
    alert("event is working...."+b)
  }
  return(
    <>
    <button onClick={demo}>click</button> <hr />
    <button onClick={()=>demo(10)}>get here</button> <hr />
    <button onMouseEnter={event}>click</button> <hr />
    <button onMouseLeave={()=>event("vishal")}>tap</button> <hr />
    <button onContextMenu={heer}>click</button> <hr />
    <button onDoubleClick={()=>heer(22)}>tap</button> <hr />

    <Hook/>
    
    </>
  )
}
export default App