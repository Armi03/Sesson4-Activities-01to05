// src/App.jsx
import UserGreeting from './UserGreeting';

function App() {
    return (
        <div className="App">
            <UserGreeting isLoggedIn={true} />
            <UserGreeting isLoggedIn={false} />
        </div>
    );
}

export default App;