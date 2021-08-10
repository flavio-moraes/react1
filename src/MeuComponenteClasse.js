import { Component } from "react";
import logo from './logo.svg';

export class MeuComponenteClasse extends Component {
    state = {
        count: 0
    }

    componentDidMount() {
        console.log('Mounted!');
    }
/*
    componentDidUpdate(prevProps, prevState) {
        if (this.props.userID !== prevProps.userID) {
            this.fetchData(this.props.userID);
            window.title = 'New user received!';
        }
    }
*/
    render() {
        return <>
            <p>Você clicou {this.state.count} vezes no botão.</p>
            <button onClick={() => this.setState({count: this.state.count+1})}>Incrementar</button>
        </>;
    }
}