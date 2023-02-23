import './App.css';
import {useEffect, useState} from "react";

function App(props) {
    const [data, setData] = useState(props.data);

    useEffect(() => {
        window.updateMe = () =>{
            setData(window.integrationData);
        }
    }, []);


    return (
        <div className="App">
            <header className="App-header">
                <p>{data.version}</p>
            </header>
        </div>
    );
}

export default App;
