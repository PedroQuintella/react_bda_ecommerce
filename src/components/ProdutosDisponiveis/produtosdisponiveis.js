import React, { useState } from 'react';
import { Component } from 'react';
import ProductCard from '../cards/card';
import "./produtosDisponiveis.css";

export default class ProdutosDisponiveis extends Component { 

    constructor(props) {
        super(props);
        this.state = {produtoLista: []};
    }

    onFalhaCarregamentoProdutosDisponiveis(erro) {
        console.log(erro);
    }

    componentDidMount() {
        fetch("http://localhost:8080/produto")
        .then(response => response.json(), this.onFalhaCarregamentoProdutosDisponiveis)
        .then(json => this.setState({ produtoLista: json }), this.onFalhaCarregamentoProdutosDisponiveis);
    }

    render() {
        return (
            <section id="produtosdisponiveis">
                {
                    this.state.produtoLista.map(
                        function (produto) {
                            return <ProductCard produto={produto} />
                        },
                    )
                }
            </section>
        )
    }
}