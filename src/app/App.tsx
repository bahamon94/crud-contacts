import './App.css'
import {AppRouter} from "./AppRouter";
import {Provider} from "react-redux";
import store from "./core/redux/store";



function App() {

  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  )
}

export default App
