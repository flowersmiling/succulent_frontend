import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from 'pages/CheckoutPage/store/store';
import { client } from 'graphql/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'theme';
import { changeLanguage, initI18n } from './services/i18n';
import Loading from 'components/Loading';
import { ErrorBoundary } from 'react-error-boundary'

const root = ReactDOM.createRoot(document.getElementById('root'));


const defaultLanguage = 'en-GB';
initI18n(process.env.PUBLIC_URL + '/i18n/{{lng}}.json', defaultLanguage);
changeLanguage(defaultLanguage);

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <CssBaseline />
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => {
                // reset the state of your app so the error doesn't happen again
              }}>

              <App style={{ width: '100vw', overflowX: 'hidden' }} />
            </ErrorBoundary>
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
