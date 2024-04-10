import Header from "./Components/Header/Header.tsx";
import Content from "./Components/Content/Content.tsx";

function App() {


  return (
    <>
    <div className='w-full h-full bg-main flex flex-col items-center'>
      <Header />
     <Content />
    </div>
    </>
  )
}

export default App
