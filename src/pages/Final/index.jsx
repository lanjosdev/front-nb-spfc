// Components:
import { Cabecalho } from '../../components/Elements/Cabecalho';
import { Rodape } from '../../components/Elements/Rodape';

//imagens previa
import previa_1 from '../../assets/Moeda.png'
import previa_2 from '../../assets/ClubeDaFe.png'
import previa_3 from '../../assets/EscudoCamisa.png'
import previa_4 from '../../assets/Superbet.png'
import previa_5 from '../../assets/NBCamisa.png'
import previa_logos from '../../assets/previa-logos.png'

//imagens download
import stories_01 from '../../assets/stories_01.png'
import stories_02 from '../../assets/stories_02.png'
import stories_03 from '../../assets/stories_03.png'
import stories_04 from '../../assets/stories_04.png'
import stories_05 from '../../assets/stories_05.png'

import './final.scss';
import {useEffect, useMemo, useState} from "react";

// Hooks utilitários e constantes (fora do componente) para melhor organização
const MEDIA_QUERIES = {
    desk: "(max-width: 1280px)",
    tb_l: "(max-width: 990px)",
    tb_s: "(max-width: 646px)",
    mobile: "(max-width: 450px)",
};

function useMediaQuery(query)
{
    const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
    const [match, setMatch] = useState(mediaQuery.matches);

    useEffect(() => {
        const onChange = () => setMatch(mediaQuery.matches);
        mediaQuery.addEventListener("change", onChange);

        return () => mediaQuery.removeEventListener("change", onChange);
    }, [mediaQuery]);
    return match;
}

function useMediaQueries() {
    const desk = useMediaQuery(MEDIA_QUERIES.desk);
    const tb_l = useMediaQuery(MEDIA_QUERIES.tb_l);
    const tb_s = useMediaQuery(MEDIA_QUERIES.tb_s);
    const mobile = useMediaQuery(MEDIA_QUERIES.mobile);

    return { desk, tb_l, tb_s, mobile };
}

const PREVIEW_ASSETS = Object.freeze({
    previewImages: [previa_1, previa_2, previa_3, previa_4, previa_5],
    storiesImages: [stories_01, stories_02, stories_03, stories_04, stories_05],
});

export default function Final()
{
    const preview = useMemo(() => Math.floor(Math.random() * 5) + 1, []);

    function handleShare() {
        const index = Math.max(1, Math.min(5, preview)) - 1;
        const image = PREVIEW_ASSETS.storiesImages[index];
        const link = document.createElement('a');
        link.download = 'stories_0' + preview;
        link.href = image;
        link.click();
    }

    const { tb_s, mobile } = useMediaQueries();

    function getTopText()
    {
        if(preview === 1)
        {
            return mobile? (
                <div className="item-texto">
                    Alguns times têm sorte de campeão.
                    Outros fazem a própria sorte.
                    No Campeonato Paulista de 1943, a sorte era a única variável que contava.
                    O resultado dentro de campo não cabia na equação.
                    Assim pensavam os cartolas.
                    Para definir o campeonato bastava jogar uma moeda ao ar.
                    Afinal a moeda é justa.
                    Ou é cara ou é coroa.
                    Mas e o Tricolor?<br/><br/>
                </div>
            ):(
                <div className="item-texto">
                    Alguns times têm sorte de campeão.<br/>
                    Outros fazem a própria sorte.<br/>
                    No Campeonato Paulista de 1943,<br/>
                    a sorte era a única variável que contava.<br/>
                    O resultado dentro de campo não cabia<br/>
                    na equação.<br/>
                    Assim pensavam os cartolas.<br/>
                    Para definir o campeonato bastava jogar<br/>
                    uma moeda ao ar.<br/>
                    Afinal a moeda é justa.<br/>
                    Ou é cara ou é coroa.<br/>
                    Mas e o tricolor?<br/>
                </div>
            );
        }
        else if(preview === 2)
        {
            return mobile? (
            <div className="item-texto item-texto-2">
                Quem era cético começou a acreditar.
                1986. Campinas. Brinco de Ouro.
                O Campeonato Brasileiro já tinha dito amém.
                3x2 contra, 118’ na final? Esquece, tricolor, pede a bença do juiz e volta para casa.
                Os bugrinos botaram o próprio hino para tocar enquanto a bola ainda rolava, enquanto os jogadores ainda corriam.
                Vá lá, cantar vitória antes da hora.
                Atire uma pedra quem nunca caiu nessa tentação.
                Mas uma coisa é confiança, outra é soberba.
                Está na escritura: soberba, um dos sete pecados capitais.
                Tal ato só poderia desagradar o Homem lá em cima.
                É verdade: perdoai as nossas ofensas, diz a reza.
                Deus, dessa vez, não perdoou.
                <br/><br/>
            </div>
            ):(
                <div className="item-texto item-texto-2">
                    Quem era cético começou a acreditar.<br/>
                    1986. Campinas. Brinco de Ouro.<br/>
                    O Campeonato Brasileiro já tinha dito amém.<br/>
                    3x2 contra, 118’ na final? Esquece, tricolor,<br/>
                    pede a bença do juiz e volta para casa.<br/>
                    Os bugrinos botaram o próprio hino<br/>
                    para tocar enquanto a bola ainda rolava,<br/>
                    enquanto os jogadores ainda corriam.<br/>
                    Vá lá, cantar vitória antes da hora.<br/>
                    Atire uma pedra quem nunca caiu nessa tentação.<br/>
                    Mas uma coisa é confiança, outra é soberba.<br/>
                    Está na escritura: soberba, um dos sete pecados capitais.<br/>
                    Tal ato só poderia desagradar o Homem lá em cima.<br/>
                    É verdade: perdoai as nossas ofensas, diz a reza.<br/>
                    Deus, dessa vez, não perdoou.
                </div>
            )
        }
        else if(preview === 3)
        {
            return mobile? (
                <div className="item-texto item-texto-2 item-texto-3">
                    17 de junho de 1992, 23h.
                    105 mil pessoas vieram testemunhar um nascimento no Morumbi.
                    No jogo de ida, 0x1 na Argentina.
                    No jogo de volta, 1x0 no tempo normal.
                    O nascimento seria nas penalidades.
                    Raí, Ivan e Cafu converteram.
                    Ronaldão desperdiçou.
                    Zamora e Llop fizeram.
                    Berizzo e Mendoza erraram.
                    O parto estava nos pés de Gamboa.
                    Ou melhor, nas mãos de Zetti.
                    Que espalmou a cobrança e comemorou como quem dissesse: &quot;Aqui nasce tua obsessão&quot;.
                    <br/><br/>
                </div>
            ):(
                <div className="item-texto item-texto-2 item-texto-3">
                    17 de junho de 92, 23h.<br/>
                    105 mil pessoas vieram testemunhar<br/>
                    um nascimento no Morumbi.<br/>
                    No jogo de ida, 0x1 na Argentina.<br/>
                    No jogo de volta, 1x0 no tempo normal.<br/>
                    O nascimento seria nas penalidades.<br/>
                    Raí, Ivan e Cafú converteram.<br/>
                    Ronaldão desperdiçou.<br/>
                    Zamora e Llop fizeram.<br/>
                    Berizzo e Mendoza erraram.<br/>
                    O parto estava nos pés de Gamboa.<br/>
                    Ou melhor, nas mãosde Zetti.<br/>
                    Que espalmou a cobrança.<br/>
                    e comemorou como quem dissesse:<br/>
                    &quot;Aqui nasce tua obsessão&quot;.<br/>
                </div>
            )
        }
        else if(preview === 4)
        {
            return mobile? (
                <div className="item-texto item-texto-4">
                    Estamos abrindo o jogo.
                    Colocando todas as fichas na mesa.
                    Não temos essa de blefe.
                    Muito menos de mão fraca.
                    O maior patrocínio máster de um dos maiores clubes do país?
                    Isso aqui está longe de ser uma mera aposta.
                    Isso aqui é torcida.
                    É apoio.
                    É jogar junto.
                    <br/><br/>
                </div>
            ):(
                <div className="item-texto item-texto-4">
                    Estamos abrindo o jogo.<br/>
                    Colocando todas as fichas na mesa.<br/>
                    Não temos essa de blefe.<br/>
                    Muito menos de mão fraca.<br/>
                    O maior patrocínio máster de um dos maiores<br/>
                    clubes do país?<br/>
                    Isso aqui está longe de ser uma mera aposta.<br/>
                    Isso é aqui torcida.<br/>
                    É apoio.<br/>
                    É jogar junto.
                </div>
            )
        }
        else if(preview === 5)
        {
            return mobile? (
                <div className="item-texto item-texto-4">
                    Antes das glórias, o suor, o sangue e as lágrimas.
                    Quem é tricolor está acostumado.
                    Quem é tricolor conhece essa história.
                    Nela, não há capítulos sobre Golias.
                    Mas há sobre Barcelona, Milan, Liverpool.
                    E adivinha quem é Davi?
                    Para quem duvida do clube, tenha uma certeza: ele ressurge.
                    E mais forte.
                    <br/><br/>
                </div>
            ):(
                <div className="item-texto item-texto-4">
                    Antes das glórias, o suor,<br/>
                    o sangue e as lágrimas.<br/>
                    Quem é tricolor está acostumado.<br/>
                    Quem é tricolor conhece essa história.<br/>
                    Nela, não há capítulos sobre Golias.<br/>
                    Mas há sobre Barcelona, Milan, Liverpool.<br/>
                    E adivinha quem é Davi?<br/>
                    Para quem duvida do clube,<br/>
                    tenha uma certeza: ele ressurge.<br/>
                    E mais forte.
                </div>
            )
        }
    }

    function getBottomText()
    {
        if(preview === 1)
        {
            return mobile?(
                <div className="item-texto">
                    Ah, o Tricolor.
                    Pro São Paulo ser campeão, disse um cartola, só se a moeda cair em pé.
                    A matemática não mente.
                    50% a 50%.
                    Mas mente quem faz mau uso dela.
                    Probabilidade nenhuma vence títulos.
                    A moeda é justa. Mas quem disse que há justiça no futebol?
                    Os cartolas erraram.
                    No Campeonato Paulista de 1943, a sorte não era a única variável que contava.
                    Porque a moeda caiu em pé.
                    E quando o juiz encerrou o campeonato, foi o São Paulo o último time a ficar de pé.
                    <br/><br/>
                </div>
                ):(
                    <div className="item-texto">
                        Ah, o tricolor.<br/>
                        Pro São Paulo ser campeão, disse<br/>
                        um cartola, só se a moeda cair em pé.<br/>
                        A matemática não mente.<br/>
                        50% a 50%.<br/>
                        Mas mente quem faz mau uso dela.<br/>
                        Probabilidade nenhuma vence títulos.<br/>
                        A moeda é justa. Mas quem disse que<br/>
                        há justiça no futebol?<br/>
                        Os cartolas erraram.<br/>
                        No Campeonato Paulista de 1943, a sorte<br/>
                        não era a única variável que contava.<br/>
                        Porque a moeda caiu em pé.<br/>
                        E quando o juiz encerrou o campeonato,<br/>
                        foi o São Paulo o último time a ficar de pé.
                    </div>
                );
        }
        else if(preview === 2)
        {
            return mobile?(
                <div className="item-texto item-texto-2 item-texto-bottom-2">
                    Como se fosse mais um jogo de xadrez que de futebol, Ele mexeu as peças.
                    A torcida tricolor, que suplicava por um milagre, teve suas preces atendidas.
                    O jogo virou a favor do Clube da Fé.
                    Com um gol que caiu do céu, Careca empatou aos 119’.
                    E, nas penalidades, o São Paulo conquistou seu segundo título nacional.
                    Acaso, coincidência, destino.
                    Chame como queira. Nós chamamos de fé.
                    Podem achar que a fé é cega. Não a nossa.
                    Porque quando se vive certos milagres, é impossível ficar de olhos fechados.
                    <br/><br/>
                </div>
            ):(
                <div className="item-texto item-texto-2 item-texto-bottom-2">
                    Como se fosse mais um jogo de xadrez que de futebol,<br/>
                    Ele mexeu as peças.<br/>
                    A torcida tricolor, que suplicava por um milagre,<br/>
                    teve suas preces atendidas.<br/>
                    O jogo virou a favor do Clube da Fé.<br/>
                    Com um gol que caiu do céu, Careca empatou aos 119’.<br/>
                    E, nas penalidades, o São Paulo conquistou seu segundo título nacional.<br/>
                    Acaso, coincidência, destino.<br/>
                    Chame como queira. Nós chamamos de fé.<br/>
                    Podem achar que a fé é cega. Não a nossa.<br/>
                    Porque quando se vive certos milagres,<br/>
                    é impossível ficar de olhos fechados.<br/>
                </div>
            )
        }
        else if(preview === 3)
        {
            return mobile?(
                <div className="item-texto item-texto-2 item-texto-bottom-2">
                    Em segundos, o gramado virou mar. Mar de pessoas. Mar de alegria.
                    Celebrando não um título, mas o nascimento de um campeonato.
                    Celebrando que a partir dali nenhum clube brasileiro seria grande sem levantar aquela taça.
                    Celebrando que o São Paulo havia dado à luz a Copa Libertadores da América.
                    Daí em diante, muitos times entraram para a história por ganhar ou perder a Libertadores.
                    Mas só o São Paulo entrou para a história por inventar a Libertadores.
                    <br/><br/>
                </div>
            ):(
                <div className="item-texto item-texto-2 item-texto-bottom-2">
                    Em segundos, o gramado virou mar. Mar de pessoas.<br/>
                    Mar de alegria.<br/>
                    Celebrando não um título, mas o nascimento<br/>
                    de um campeonato.<br/>
                    Celebrando que a partir dali nenhum clube brasileiro<br/>
                    seria grande sem levantar aquela taça.<br/>
                    Celebrando que o São Paulo havia dado à luz<br/>
                    a Copa Libertadores da América.<br/>
                    Daí em diante, muitos times entraram para a história<br/>
                    por ganhar ou perder a Libertadores.<br/>
                    Mas só o São Paulo entrou para a história<br/>
                    por inventar a Libertadores.
                </div>
            )
        }
        else if(preview === 4)
        {
            return mobile?(
                <div className="item-texto item-texto-bottom-4">
                    Sabemos do peso que o manto tricolor carrega.
                    Da responsa de combater rivais e possibilidades.
                    Porque esse clube não joga por pitacos.
                    Joga por títulos.
                    Pelos próximos três anos, vamos bancar essa história ao seu lado, torcedor.
                    Vamos fazer de tudo pela camisa do São Paulo.
                    Pode apostar.
                    <br/><br/>
                </div>
            ):(
                <div className="item-texto item-texto-bottom-4">
                    Sabemos do peso que o manto tricolor carrega.<br/>
                    Da responsa de combater rivais e possibilidades.<br/>
                    Porque esse clube não joga por pitacos.<br/>
                    Joga por títulos.<br/>
                    Pelos próximos três anos, vamos bancar<br/>
                    essa história ao seu lado, torcedor.<br/>
                    Vamos fazer de tudo pela camisa do São Paulo.<br/>
                    Pode apostar.
                </div>
            )
        }
        else if(preview === 5)
        {
            return mobile?(
                <div className="item-texto item-texto-bottom-4">
                    A New Balance veio para ajudar o São Paulo a escrever novos capítulos.
                    Sim, chegamos como a nova fornecedora de material esportivo.
                    Com uma camisa de tecnologia NB Dry, para melhor absorção de suor dos atletas e torcedores.
                    Até porque, para defender o São Paulo, tem que dar tudo pela camisa.
                    Mas também chegamos para ser parte da torcida que conduz.
                    Para sentir na pele o sentimento que nunca acaba.
                    E para levar o manto tricolor de volta ao lugar que lhe pertence.
                    <br/><br/>
                </div>
            ):(
                <div className="item-texto item-texto-bottom-4">
                    A New Balance veio para ajudar<br/>
                    o São Paulo a escrever novos capítulos.<br/>
                    Sim, chegamos como a nova fornecedora<br/>
                    de material esportivo.<br/>
                    Com uma camisa de tecnologia NB Dry, para melhor absorção de suor dos atletas e torcedores.<br/>
                    Até porque, para defender o São Paulo,<br/>
                    tem que dar tudo pela camisa.<br/>
                    Mas também chegamos para ser parte<br/>
                    da torcida que conduz.<br/>
                    Para sentir na pele o sentimento que nunca acaba.<br/>
                    E para levar o manto tricolor de volta ao lugar<br/>
                    que lhe pertence.
                </div>
            )
        }
    }

    function getTitleText()
    {
        if(preview === 1) {
            if(mobile)
                return (
                    <div className="texto-titulo">
                        Desde 1943,existem três <br/>
                        opções no cara ou coroa.
                    </div>
                )
                else
                return (
                    <div className="texto-titulo">
                    Desde 1943,<br/>
                    existem três opções<br/>
                    no cara ou coroa.<br/>
                    </div>
                )
        }
        else if(preview === 2)
        {
            if(mobile)
                return (
                    <div className="texto-titulo">
                        Um milagre<br/>
                        de 37 mil testemunhas.<br/>
                    </div>
                )
            else
            return (
                <div className="texto-titulo">
                    Um milagre<br/>
                    de 37 mil<br/>
                    testemunhas.<br/>
                </div>
            )
        }
        else if(preview === 3)
        {
            if(mobile)
                return (
                    <div className="texto-titulo texto-titulo-libertadores">
                        Em 1992 nasce a<br/>
                        Libertadores da América.
                    </div>
                )
            else
            return (
                <div className="texto-titulo texto-titulo-libertadores">
                    Em 1992,<br/>
                    nasce a Libertadores<br/>
                    da América.
                </div>
            )
        }
        else if(preview === 4)
        {
            return (
                <div className="texto-titulo">
                    A Superbet <br/>
                    está all in.
                </div>
            )
        }
        else if(preview === 5)
        {
            return (
                <div className="texto-titulo">
                    Não é uma camisa.<br/>
                    É uma segunda pele.
                </div>
            )
        }
    }

    function getPreviewImg()
    {
        const index = Math.max(1, Math.min(5, preview)) - 1;
        const src = PREVIEW_ASSETS.previewImages[index];
        const alt = `Prévia ${preview}`;
        return (
            <img className="item-previa" src={src} alt={alt}/>
        )
    }

    function getLogoImg()
    {
        const c = (preview === 3)?"item-logo item-logo-2":"item-logo";
        return (<img className={c} src={previa_logos} alt="" />);
    }

    return (
        <div className="Final-container" onClick={handleShare}>
            <Cabecalho />

            <div className="previa-body">
                <div className="grid grid-top">
                    <div className="item item-img-big">
                        {mobile || tb_s ?(getTitleText()):(getPreviewImg())}
                    </div>

                    {mobile || tb_s ?(getPreviewImg()):(getTopText())}
                    
                    {mobile || tb_s ?(
                    <div className="item">
                        {getTopText()}
                    </div>
                    ):(
                        <div className="item">
                            {getLogoImg()}
                        </div>
                    )}

                </div>
                <div className="grid grid-bottom">
                    {mobile || tb_s ?(getBottomText()):(getTitleText())}
                    <div> </div>
                    {mobile || tb_s ?(getLogoImg()):(getBottomText())}
                </div>
            </div>

            <Rodape />
        </div>
    );
}