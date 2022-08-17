import React from 'react';
import { createRoot } from 'react-dom/client';

const Root = () => {
  return (
    <div>
      Auth Starter
    </div>
  );
};

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<Root />);
