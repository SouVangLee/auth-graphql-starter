import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import './style/reset.css';
import './style/styles.css'

const link = createHttpLink({
  uri: '/graphql',
  credentials: 'same-origin',
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    dataIdFromObject: obj => obj.id
  }),
});

const Root = () => {
  return (
    <ApolloProvider client={client} >
      <HashRouter>
        <Routes>
          <Route path='/' element={<App />} />
          {/* <Route path='/signup' element={<Sign} */}
        </Routes>
      </HashRouter>
    </ApolloProvider>
  );
};

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<Root />);
