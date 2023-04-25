import '@/styles/globals.css'
import { AppProps } from "next/app";
import { SessionProvider as AuthProvider } from "next-auth/react";
import { Provider } from 'react-redux';
import { wrapper } from "@/data-access/redux/store";

const App = ({ Component , ...rest }: AppProps) => {
  // @ts-ignore
  const getLayout = Component.getLayout ?? ((page) => page)
  const { pageProps } = rest;

  return getLayout(
    <Component { ...pageProps } />
  )
}

const AppWrapper = (appProps: AppProps) => {
  const { Component, ...rest } = appProps;
  const { store, props } = wrapper.useWrappedStore(rest);
  const { session } = props;

  return (
    <Provider store={store}>
      <AuthProvider session={session}>
        <App { ...appProps } />
      </AuthProvider>
    </Provider>
  )
}

export default AppWrapper;
