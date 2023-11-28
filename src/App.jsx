import { BrowserRouter } from "react-router-dom"
import RouterApp from "./routes/index"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <BrowserRouter>
        <GlobalStyle/>
        <RouterApp/>
    </BrowserRouter>
  )
}

export default App
