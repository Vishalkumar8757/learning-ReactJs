
import { ToastContainer, toast } from 'react-toastify';
  function App() {
  const notify = () => toast('Wow so easy !');

  return (
    <div className="grid place-items-center h-dvh bg-zinc-900/15">
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}
export default App