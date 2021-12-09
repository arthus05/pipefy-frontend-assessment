import { Header } from './components/Header';
import { Pipes } from './components/Pipes';
import { ThemeProvider } from './theme/ThemeProvider';

function App() {
  
  return (
    <ThemeProvider>
      <Header />
      <Pipes organizationId={300562393}/>
    </ThemeProvider>
  );
}

export default App;
