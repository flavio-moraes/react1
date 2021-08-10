import logo from './logo.svg';

export const MeuComponente = props => (
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>{props.message}</h1>
    <p>
        Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React
    </a>
    </header>
);
/*
export const UserScreen () => {
    const [loading, setLoading] = useState(false)
    const [pageTitle, setPageTitle] = useState('')

    return (
        <h1>{pageTitle}</h1>
        <button onClick={() => setLoading(true)}>{loading ? 'Loading...' : 'Login'}</button>
    )
}
*/