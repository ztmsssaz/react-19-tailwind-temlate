import { Provider } from 'react-redux'
import { store } from './context/store'
import MainRouter from './router/router'

function App() {
   return (
      <Provider store={store}>
         <MainRouter />
      </Provider>
   )
}

export default App
