import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, Container } from "./styles";

import api from "../../services/Api";

class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        error: "",
        msgErrors: "",
    };

    handleSignUp = async e => {
        e.preventDefault();
        const { username, email, password } = this.state;
        if (!username || !email || !password) {
            this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
            try {
                await api.post("/register", { name: username, email, password });
                this.props.history.push("/");
            } catch (err) {
                let errorMsg = ''
                Object.entries(err.response.data.errors).forEach(([key, value]) => {
                    errorMsg += value[0] + "\n";
                });
                this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T", msgErrors: errorMsg  });
            }
        }
    };

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSignUp}>

                    {this.state.error && <p>{this.state.error}</p>}
                    {this.state.msgErrors && <p>{this.state.msgErrors}</p>}
                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        onChange={e => this.setState({ username: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <button type="submit">Cadastrar grátis</button>
                    <hr />
                    <Link to="/">Fazer login</Link>
                </Form>
            </Container>
        );
    }
}

export default withRouter(SignUp);