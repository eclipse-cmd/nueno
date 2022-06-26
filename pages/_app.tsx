import AppContext, { initialState } from "@store/index";
import reducer from "@store/reducer";
import { SessionProvider } from "next-auth/react";
import { useReducer } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <ToastContainer
            autoClose={5000}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnHover
            limit={2}
          />
          <Component {...pageProps} />
        </SessionProvider>
      </QueryClientProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
