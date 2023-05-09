import React from "react";
import { useState } from "react";
import styles from './Body.module.css';
import Perfil from '../../assets/images/perfil.png'
import Insta from '../../assets/images/instagram.png'
import Whats from '../../assets/images/whatsapp.png'
import Linkedin from '../../assets/images/linkedin.png'
import Email from '../../assets/images/email.png'
import Github from '../../assets/images/github.png'
import Logo from '../../assets/images/foto.png';
import Controle from '../../assets/images/controle.png';
import Transacoes from '../../assets/images/transacoes.png';
import Usuarios from '../../assets/images/usuarios.png';
import Js from '../../assets/images/js.png';
import Html from '../../assets/images/html.png';
import Css from '../../assets/images/css.png';
import LogoReact from '../../assets/images/react.png';
import Ingles from '../../assets/images/ingles.png';
import Menu from '../../assets/images/menu.jpg';

export default function Body() {
    const [menuAberto, setMenuAberto] = useState(false);
    function toggleMenu() {
        setMenuAberto(!menuAberto);
    }
    const scrollToHome = () => {
        const home = document.getElementById("scrollHome");
        if (home) {
            home.scrollIntoView();
            toggleMenu();
        }
    };  
    const scrollToAbout = () => {
        const about = document.getElementById("scrollAbout");
        if (about) {
            about.scrollIntoView();
            toggleMenu();
        }
    };
    const scrollToProjects = () => {
        const projects = document.getElementById("scrollProjects");
        if (projects) {
            projects.scrollIntoView();
            toggleMenu();
        }
    };
    const scrollToSkills = () => {
        const skills = document.getElementById("scrollSkills");
        if (skills) {
            skills.scrollIntoView();
            toggleMenu();
        }
    };

    return(
        <div className={styles.container}>
            <div className={styles.menuPequeno}>
            <img src={Logo} alt="Logo" className={styles.logoMenu}/>
                <input type="checkbox" id="icone" checked={menuAberto} onChange={toggleMenu} />
                <label htmlFor="icone">
                    <img className={styles.abrir} id="abrir" src={Menu} alt="" />
                </label>
                <nav className={styles.icone}>
                    <ul className={styles.conteudoIcone}>
                        <li>
                            <a id="menuInicio" onClick={scrollToHome}>Home</a>
                        </li>
                        <li>
                            <a id="menuSobre" onClick={scrollToAbout}>About</a>
                        </li>
                        <li>
                            <a id="menuProjetos" onClick={scrollToProjects}>Projects</a>
                        </li>
                        <li>
                            <a id="menuHabilidades" onClick={scrollToSkills}>Skills</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.cabecalho}>
                <button onClick={scrollToHome} id={styles.botaoInicio}>Home</button>
                <button onClick={scrollToAbout} id={styles.botaoSobre}>About me</button>
                <img src={Logo} alt="Logo" className={styles.logoHeader}/>
                <button onClick={scrollToProjects} id={styles.botaoProjetos}>Projects</button>
                <button onClick={scrollToSkills} id={styles.botaoHabilidades}>Skills</button>
            </div>
            
            <div id="scrollHome" className={styles.inicio}>
                <h1 className={styles.tituloInicio}>HOME</h1>
                <div className={styles.corpoInicio}>
                    <div className={styles.textoInicio}>
                    <h2 className={styles.introducao}>Front-end<br></br> developer.</h2>
                        <div className={styles.redesSociais}>
                            <a href="https://www.linkedin.com/in/elielsilvafilho/" target="_blank" className={styles.linkedin}>
                                <img src={Linkedin} alt="linkedin"/>
                            </a>
                            <a href="mailto:elielsilvaf@hotmail.com" className={styles.email}>
                                <img src={Email} alt="mail"/>
                            </a>
                            <a href="https://www.instagram.com/eliel.dev/" target="_blank" className={styles.insta}>
                                <img src={Insta} alt="insta"/>
                            </a>
                            <a href="https://wa.me/message/SAIS7BTC6AZNC1" target="_blank" className={styles.whatsApp}>
                                <img src={Whats} alt="zapzap"/>
                            </a>
                            <a href="https://github.com/elieldev" target="_blank" className={styles.github}>
                                <img src={Github} alt="github"/>
                            </a>
                        </div>
                    </div>
                    <img src={Perfil} alt="" className={styles.perfil} />
                </div>
            </div>

            <div id="scrollAbout" className={styles.sobre}>
                <h1 className={styles.tituloSobre}>ABOUT ME</h1>
                <div className={styles.corpoPt}>
                    <h2>Portuguese</h2>
                    <p className={styles.textoPt}>
                        <b>Olá,</b> <br></br> 
                        Meu nome é Eliel, sou graduando em Ciência da Computação, tenho 19 anos e sou desenvolvedor front-end Júnior com experiência em JavaScript, React e API.<br></br>
                        Estou em busca de uma oportunidade de trabalho na área de tecnologia, aberto para novos desafios e linguagens de
                        programação. Apesar de ter experiência apenas em JS, tenho facilidade na assimilação de novos conceitos, vontade de aprender e
                        estou disposto a trabalhar com qualquer tecnologia, seja back ou front-end. Procuro por um trabalho no qual consiga evoluir
                        profissional e pessoalmente, além de, claro, contribuir para o crescimento da empresa.

                    </p>
                </div>
                <div className={styles.corpoIngles}>
                <h2 className={styles.tituloIngles}>English</h2>
                    <p className={styles.textoEng}>
                        <b>Hello,</b> <br></br> 
                        My name is Eliel, i'm 19 years old, currently studying Computer Science and i am a Junior front-end developer with experience in JavaScript, React and API.
                        I'm looking for a job opportunity in technology, open to new challenges and programming languages.
                        Despite having experience only in JS, I have an ease of assimilation of new concepts, willingness to learn and
                        I am willing to work with any technology, whether back or front-end. I am looking for a job where I can evolve professionally and personally, besides 
                        contributing to the growth of the company.
                    </p>
                </div>
            </div>

            <div id="scrollProjects" className={styles.projetos}>
                <h1>PROJECTS</h1>
                <p className={styles.responsivos}>Todos responsivos e funcionais, clique na imagem e você será direcionado para o site.</p>
                <div className={styles.corpoProjetos}>
                    <div className={styles.corpoControle}>
                        <a href="https://elieldev.github.io/meu-projeto-individual/" target="_blank">
                            <img src={Controle} alt="" className={styles.controle} />
                        </a>
                        <p className={styles.textoControle}>Projeto de controle financeiro desenvolvido em JavaScript puro usando LocalStorage.</p>
                    </div>
                    <div className={styles.corpoTransacoes}>
                        <a href="https://elieldev.github.io/newtab-payment/" target="_blank">
                            <img src={Transacoes} alt="" className={styles.transacoes} />
                        </a>
                        <p className={styles.textoTransacoes}>Projeto de transações financeiras com validação de cartões em React.</p>
                    </div>
                    <div className={styles.corpoUsuarios}>
                        <a href="https://elieldev.github.io/projeto-guiado/index.html" target="_blank">
                            <img src={Usuarios} alt="" className="" />{styles.usuarios}
                        </a>
                        <p className={styles.textoUsuarios}>Projeto de listagem e cadastro de usuários em JavaScript puro usando LocalStorage</p>
                    </div>
                </div>
            </div>

            <div id="scrollSkills" className={styles.habilidades}>
                <h1 className={styles.tituloHabilidades}>SKILLS</h1>
                <div className={styles.corpoHabilidades}>
                    <img src={Js} alt="" className={styles.javaScript} />
                    <img src={Html} alt="" className={styles.html} />
                    <img src={Css} alt="" className={styles.css} />
                    <img src={LogoReact} alt="" className={styles.react} />
                    <img src={Ingles} alt="" className={styles.ingles} />
                </div>
                <p className={styles.textoHabilidades}>
                    <br></br>
                    - Mais de 1 ano desenvolvendo em JavaScript;<br></br>
                    - Disponibilidade de aprender e trabalhar com qualquer linguagem ou tecnologia;<br></br>
                    - Familiaridade com outras linguagens, não desenvolvi nenhum projeto em outra linguagem por falta de tempo para aprender, mas estou disposto a encarar novos desafios;<br></br>
                    - Facilidade no aprendizado;<br></br>
                    - Inglês intermediário;<br></br>
                    - Proatividade;<br></br>
                    <br></br>
                </p>
                <div className={styles.creditos}>
                        Site todo desenvolvido em ReactJs. Código disponível no meu <a href="https://github.com/elieldev/meu-site" target="_blank" className={styles.linkGit}>GitHub</a>.
                </div>
            </div>
        </div>
    )
}