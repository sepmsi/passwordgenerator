import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ParentLayout from '../components/parent/ParentLayout'
import { store } from "../redux/setup/store"
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <ParentLayout>
      <Component {...pageProps} />
      </ParentLayout>
    </Provider>
  )
}
export default MyApp