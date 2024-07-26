import './App.css';
import ReduxCore from './redux-core';
import ReduxToolkit from "./redux-toolkit"

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        height: '100vh',
      }}
    >
      <div style={{ display: "flex" }}>
        <ReduxCore />
        <ReduxToolkit />
      </div>
    </div >
  );
}

export default App;
