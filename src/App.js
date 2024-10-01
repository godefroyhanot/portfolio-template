import './App.css';
import Button from './components/atoms/Buttons/Button'; 
import {Title , Paragraph, Hyperlien} from './components/atoms/Typo'; 
import ProjectList from './components/molecules/ProjectList';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
            <ProjectList />
      {/* <Title>Mon Portfolio</Title>
      <Hyperlien href='#'color='red'>Pls Help Me</Hyperlien>
      <Button label="Voir mes projets" onClick={handleClick} className="primary" /> */}
    </div>
  );
};


export default App;
