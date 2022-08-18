import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
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
        </Routes>
      </HashRouter>
    </ApolloProvider>
  );
};

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<Root />);
