import { Provider } from "react-redux";
import store from "../../../redux/store"; // Assuming your Redux store is at this path

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {console.log("_app.js")}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
