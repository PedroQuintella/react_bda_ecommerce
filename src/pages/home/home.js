import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import Header from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import ProdutosDisponiveis from "../../components/ProdutosDisponiveis/produtosdisponiveis";

export default class Home extends Component {

    render() {
        return (
            <article className="corpo">
                <Header />
                <section className="conteudo">
                    <ProdutosDisponiveis />
                </section>
                <Footer />
            </article>
        )
    }
}