import '../footer/footer.css';

function Footer() {
    return (
        <div class="mt-5 pt-5 pb-5 footer">
            <div class="container">
              <div class="row">
                <div class="col-lg-5 col-xs-12 about-company">
                  <h2>Loja Brincando de Aprender</h2>
                  <p class="pr-5 text-white-50">
                    Aproveitamos da tecnologia para oferecer acessórios personalizados de temas infantis variados para jogadores do game 
                    de tabuleiro Brincando de Aprender.
                  </p>
                  <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
                </div>
                <div class="col-lg-3 col-xs-12 links">
                  <h4 class="mt-lg-0 mt-sm-3">Links</h4>
                    <ul class="m-0 p-0">
                      <li><a href="#">Mais vendidos</a></li>
                      <li><a href="#">Categorias</a></li>
                      <li><a href="#">Sobre nós</a></li>
                      <li><a href="#">Entrar</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-xs-12 location">
                  <h4 class="mt-lg-0 mt-sm-4">Contato</h4>
                  <p class="mb-0"><i class="fa fa-phone mr-3"></i>(11) 99277-4560</p>
                  <p><i class="fa fa-envelope-o mr-3"></i><a className="mailto" href="mailto:loja@brincandodeaprender.com">loja@brincandodeaprender.com</a></p>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col copyright">
                  <p class=""><small class="text-white-50">© 2021. Todos os direitos reservados.</small></p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Footer;