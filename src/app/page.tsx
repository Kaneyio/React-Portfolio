import "./page.css";
import Avatar from "@/components/Avatar/Avatar";
import { HeaderNav } from "@/components/NavElement/NavElement";
import { SocialContacts } from "@/components/Socials/Socials";
import pBannerImg from "@/imgs/backtec.png";
import { Cards } from "@/components/Card/Card";
import arrowRight from "@/imgs/arrow.png";
import { InfoElements } from "@/components/InfoElement/InfoElement";
import { SkillBars } from "@/components/SkillBar/SkillBar";
import { Projects } from "@/components/Project/Project";
import { Ratings } from "@/components/Rating/Rating";
import { ContactElements } from "@/components/ContactElement/ContactElement";
import sBannerImg from "@/imgs/backtec2.jpg";

var skillColor1 = "#f4c31e";
var skillColor2 = "#0d99ff";

export default function portfolio() {
	return (
		<>
			<header>
				<div className="avatar-container">
					<Avatar></Avatar>
					<div className="name">Rafael Azevedo da Silva</div>
					<div className="titles">
						Desenvolvedor Web / Full-Stack
					</div>
				</div>
				<div className="nav-container">
					<HeaderNav></HeaderNav>
				</div>
				<SocialContacts></SocialContacts>
			</header>
			<div className="portfolio">
				<section className="start" id="start"></section>
				<div className="presentation-banner">
					<img className="p-banner" src={pBannerImg.src} alt="Presentation banner" />
					<div className="p-title-container">
						Bem vindo ao meu Portifólio!
						<a href="#contact" className="dft-button">Entrar em contato</a>
					</div>
					<div className="p-cards-container">
						<Cards></Cards>
					</div>
				</div>
				<section id="about-me" className="dft-title">Sobre mim:</section>
				<div className="info-container">
					<div className="info master">
						<div className="info-m-title">Minha história:</div>
						<div className="info-m-desc">Iniciei minha carreira como programador aos 14 anos de idade e logo soube que era o que queria para minha vida. Ao iniciar a faculdade logo identifiquei que gostaria de prosseguir na área de programação web, onde me identifiquei principalmente na área do Front-End.</div>
						<div className="more">
							<div>Ver mais</div>
							<img src={arrowRight.src} alt="More" />
						</div>
					</div>
					<div className="info">
						<InfoElements></InfoElements>
					</div>
				</div>
				<section id="skills" className="dft-title">Habilidades:</section>
				<div className="skills-container">
					<div className="skills" style={{border: `2px solid ${skillColor1}`}}>
						<SkillBars barsColor={skillColor1} barsTitles={["PYTHON", "HTML", "CSS"]} barsPercents={[70, 90, 75]}></SkillBars>
					</div>
					<div className="skills" style={{border: `2px solid ${skillColor2}`}}>
						<SkillBars barsColor={skillColor2} barsTitles={["Comunicação", "Trabalho em equipe", "Inglês"]} barsPercents={[70, 90, 50]}></SkillBars>
					</div>
				</div>
				<section id="projects" className="dft-title">Meus projetos:</section>
				<div className="projects-container">
					<Projects projectsTitles={["Plataforma Nuape", "Site de provedor de internet"]} projectsPositions={["Full Stack", "Front End"]} projectsDescs={["Neste projeto realizei a criação de um sistema completo para registro de atendimento aos alunos para o núcleo NUAPE da universidade federal UTFPR.", "Criação simples de uma página para venda de planos de internet."]}></Projects>
					<div className="p-more">
						<img src={arrowRight.src} alt="More projects" />
					</div>
				</div>
				<section id="ratings" className="dft-title">Avaliações:</section>
				<div className="ratings-container">
					<Ratings ratingsAvatars={[]} ratingsDescs={["O trabalho desenvolvido pelo protagonista é exemplar e demonstra seu grande potencial como futuro profissional. Ele se destaca como um aluno, capaz de tomar iniciativa, ser autônomo e proativo, e de desenvolver soluções inovadoras e de alta qualidade."]} ratingsNames={["Prof. Dr. Davi Marcondes Rocha"]}></Ratings>
				</div>
				<section id="contact" className="dft-title">Entre em contato:</section>
				<div className="contact-container">
					<img className="contact-background" src={sBannerImg.src} alt="Contact background" />
					<ContactElements></ContactElements>
					<div>
						Envie uma mensagem:
						<input type="text" placeholder="Nome" />
						<input type="text" placeholder="E-mail" />
						<input type="text" placeholder="Mensagem" />
						<button>Entrar em contato</button>
					</div>
				</div>
				<a href="#start" className="to-top">Voltar ao topo</a>
			</div>
		</>
	)
}