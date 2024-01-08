import './index.css'
import ProfileOne from "./assets/Developer activity-bro.svg"
import ProfileTwo from "./assets/401 Error Unauthorized-amico.svg"
import Checkmark from "./assets/checkmark.png"
import Education from "./assets/education.png"
import Experience from "./assets/experience.png"
import Img from "./assets/img.png"
import LinkImg from "./assets/WhatsApp Image 2024-01-08 at 18.02.43.jpeg"
import P1 from "./assets/p1.png"
import P2 from "./assets/p2.png"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  function copyLink(){
    navigator.clipboard.writeText('herbertcarvalhoxxi@gmail.com')
    toast.success('Copiado')
  }

  function toggleMenu() {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      menu.classList.toggle('open');
      icon.classList.toggle('open');
    }

    const scrollToContact = () => {
      // Obtém a referência à seção de contato (ou outra seção desejada)
      const contactSection = document.getElementById('contact');
  
      // Verifica se a seção foi encontrada
      if (contactSection) {
        // Rola até a posição da seção de contato
        window.scrollTo({
          top: contactSection.offsetTop,
          behavior: 'smooth' // Adiciona um efeito de rolagem suave
        });
      }
    }  

    const scrollToContact2 = () => {
      // Obtém a referência à seção de contato (ou outra seção desejada)
      const contactSection = document.getElementById('projects');
  
      // Verifica se a seção foi encontrada
      if (contactSection) {
        // Rola até a posição da seção de contato
        window.scrollTo({
          top: contactSection.offsetTop,
          behavior: 'smooth' // Adiciona um efeito de rolagem suave
        });
      }
    }


  return (  
    <div className='container'> 
        <nav id="desktop-nav">
        <div className="logo">Bert.</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">Sobre Mim</a></li>
            <li><a href="#experience">Experiência</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Fale Comigo</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Bert.</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={()=> toggleMenu()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={()=> toggleMenu()}>Sobre Mim</a></li>
            <li><a href="#experience" onClick={()=> toggleMenu()}>Experiência</a></li>
            <li><a href="#projects" onClick={()=> toggleMenu()}>Projetos</a></li>
            <li><a href="#contact" onClick={()=> toggleMenu()}>Fale Comigo</a></li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
          <img src={ProfileOne} alt="Herbert photo" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Olá, me chamo</p>
          <h1 className="title">Herbert</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={()=>scrollToContact2()}
            >
              Veja meus projetos
            </button>
            <button className="btn btn-color-1" onClick={()=>scrollToContact()}>
            LinkTree
            </button>
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Descubra mais</p>
        <h1 className="title">Sobre Mim</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src={ProfileTwo}
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src={Experience}
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experiência</h3>
                <p>Buscando <br />Minha primeira vaga</p>
              </div>
              <div className="details-container">
                <img
                  src={Education}
                  alt="Education icon"
                  className="icon"
                />
                <h3>Formação</h3>
                <p>4/8 Ciência da Computação<br />Centro Universitário Unipê</p>
              </div>
            </div>
            <div className="text-container">
              <p>
              Olá, me chamo Hérbert Carvalho! Tenho 20 anos e estou no 4º período de Ciência da Computação (Bacharelado). Iniciei meus estudos em programação ao entrar na faculdade e estou em busca da minha primeira oportunidade para mostrar e evoluir cada vez meu conhecimento, focando principalmente no Desenvolvimento <b>Web Frontend.</b>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore Minha</p>
        <h1 className="title">Experiência</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src={Checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experiente</p>
                  </div>
                </article>
                <article>
                  <img
                    src={Checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experiente</p>
                  </div>
                </article>
                <article>
                  <img
                    src={Checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Básico</p>
                  </div>
                </article>
                <article>
                  <img
                    src={Checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>React</h3>
                    <p>Básico</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Outras Stacks</h2>
              <div className="article-container">
                <article>
                  <img
                    src={Checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>TypeScript</h3>
                    <p>Aprendendo</p>
                  </div>
                </article>
                <article>
                  <img
                    src={Checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Node JS</h3>
                    <p>Aprendendo</p>
                  </div>
                </article>
                <article>
                  <img
                    src={Checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Styled Components</h3>
                    <p>Básico</p>
                  </div>
                </article>
                <article>
                  <img
                    src={Checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git / GitHub</h3>
                    <p>Básico</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <p className="section__text__p1">Conheça meus</p>
        <h1 className="title">Projetos</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={P1}
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Projeto Filmes</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={()=>{window.open('https://github.com/HerbertCarvalhoxxi/Filmes')}}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={()=>window.open('https://projetocursofilmesreact.netlify.app/')}
                >
                  Deploy
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={P2}
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Projeto SmartFit</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={()=>window.open('https://github.com/HerbertCarvalhoxxi/SmartFit-Teste')}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={()=>window.open('https://smartfitproj.netlify.app/')}
                >
                  Deploy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section id='contact'>
      <div className="about-container">
      <p className="section__text__p1">Se interessou?</p>
      <h1 className="title">Fale Comigo</h1>  
            <img src={LinkImg} alt="imagem de perfil"/>
            <p>@herbert_cs</p>
            <div className='links-container'>
                <div className='email'>
                    <a onClick={()=> copyLink()} >Gmail<ion-icon name="mail-outline"></ion-icon></a>
                </div>
                <div className='github'>
                    <a onClick={()=> window.open('https://github.com/HerbertCarvalhoxxi/')}>GitHub <ion-icon name="logo-github"></ion-icon></a>
                </div>
                <div className='linkedin'>
                    <a onClick={()=> window.open('https://www.linkedin.com/in/herbert-carvalho-dos-santos-78581422b/')}>LinkedIn <ion-icon name="logo-linkedin"></ion-icon></a>
                </div>
                <div className='insta'>
                    <a onClick={()=> window.open('https://www.instagram.com/herbert_cs/')}>Instagram<ion-icon name="logo-instagram"></ion-icon></a>
                </div>
            </div>
        </div>
      </section>
      <footer>
        <p>Developed by Bert</p>
        <a href="https://storyset.com/work">Work illustrations by Storyset</a>
      </footer>   
        
    </div>
  )
}

export default App
