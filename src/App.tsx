import React from 'react';
import ParticleProvider from './particle';

function App({ children }: { children: React.ReactNode }) {
  return (
    <ParticleProvider>{children}</ParticleProvider>
  );
}

export default App;