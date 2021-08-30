let cenario = 0;
let titulo = document.getElementById("titulo")
let texto = document.getElementById("texto")
let botão1 = document.getElementById("botão1")
let botão2 = document.getElementById("botão2")

inicio();

function inicio(){
    cenario = 0;
    titulo.innerHTML = "PRIMEIRO ATO!"
    texto.innerHTML = "Você é o dono do time de futebol Manchester City e deve contratar um jogador.<br><br>Você tem duas opções: Jack Grealish do Aston Villa ou Harry Kane do Tottenham. Qual você escolhe?"
    botão1.innerHTML = "Jack Grealish"
    botão2.innerHTML = "Harry Kane"
}

function resposta(opcao){
    switch(cenario){
        case 0:
            decisao0(opcao);
            break;
        case 1:
            decisao1(opcao);
            break;
        case 2:
            decisao2(opcao);
            break;
        case 3:
            decisao3(opcao);
            break
        case 4:
            decisao4(opcao);
            break;
        case 5:
            decisao5(opcao);
            break;
        case 6:
            decisao6(opcao);
            break;
        case 7:
            decisao7(opcao);
            break;
        case 8:
            decisao8(opcao);
            break;
        case 9:
            decisao9(opcao);
            break;
        case 10:
            decisao10(opcao);
            break;
        case 11:
            decisao11(opcao);
            break;
        case 12:
            decisao12(opcao);
            break;
        case 13:
            decisao13(opcao);
            break;
        case 14:
            decisao14(opcao);
            break;
        case 15:
            decisao15(opcao);
            break;                    
        case 16:
            decisao16(opcao);
            break;
        case 17:
            decisao17(opcao);
            break;
        case 18:
            decisao18(opcao);
            break
        case 19:
            decisao19(opcao);
            break;           
        case 20:
            decisao20(opcao);
            break;
        case 21:
            decisao21(opcao);
            break;        
        case 22:
            decisao22(opcao);
            break;
        case 23:
            decisao23(opcao);
            break;
        case 24:
            decisao24(opcao);
            break;
        case 25:
            decisao25(opcao);
            break;
        case 26:
            decisao26(opcao);
            break;
     }
 }
 
 function decisao0(opcao){
     if(opcao == 1){
         cenario1();
     }else if(opcao == 2){
        cenario2();
     }
 }

    function cenario1(){
        cenario = 1
        titulo.innerHTML = ""
        texto.innerHTML = "Grealish é contrato pelo seu time!<br><br>Grealish deve usar a camisa 10?"
        botão1.innerHTML = "Sim"
        botão2.innerHTML = "Não"
    }
    function cenario2(){
        cenario = 2
        texto.innerHTML = "Kane é contratado pelo seu time!<br><br>Kane deve usar a camisa 10?"
        botão1.innerHTML = "Sim"
        botão2.innerHTML = "Não"
    }

function decisao1(opcao){
    if(opcao == 1){
        cenario3();
    }else if(opcao == 2){
        cenario4();}
    }
    
    function cenario3(){
        cenario = 3
        titulo.innerHTML = ""
        texto.innerHTML = "Grealish ficou muito feliz e motivado com a camisa 10!<br><br>O seu time ainda tem muito dinheiro, você deve decidir o que fazer com o que sobrou:"
        botão1.innerHTML = "Contratar mais um jogador"
        botão2.innerHTML = "Investir nas categorias de base"
    }
    function cenario4(){
        cenario = 4
        titulo.innerHTML = ""
        texto.innerHTML = "Grealish pensou que poderia ser o 10, mas não se sente abalado.<br><br>O seu time ainda tem muito dinheiro, você deve decidir o que fazer com o que sobrou:"
        botão1.innerHTML = "Contratar mais um jogador"
        botão2.innerHTML = "Investir nas categorias de base"
    }

function decisao2(opcao){
    if(opcao == 1){
        cenario5();
    }else if(opcao == 2){
        cenario6()
    }
}
    function cenario5(){
        cenario = 5
        titulo.innerHTML = ""
        texto.innerHTML =  "Kane ficou muito feliz, porém com um pouco de medo pela pressão de ser o 10.<br><br>O seu time ainda tem muito dinheiro, você deve decidir o que fazer com o que sobrou:"
        botão1.innerHTML = "Contratar mais um jogador"
        botão2.innerHTML = "Investir nas categorias de base"
    }
    function cenario6(){
        cenario = 6
        titulo.innerHTML = ""
        texto.innerHTML = "Kane se sente bem ao não receber a 10, sabe que é uma pressão que talvez não suportasse.<br><br>O seu time ainda tem muito dinheiro, você deve decidir o que fazer com o que sobrou:"
        botão1.innerHTML = "Contratar mais um jogador"
        botão2.innerHTML = "Investir nas categorias de base"
    }

function decisao3(opcao){
    if(opcao == 1){
        cenario7()
    }else if(opcao == 2){
        cenario8()
    }
}
    function cenario7(){
        cenario = 7
        titulo.innerHTML = "DE VOLTA AO MERCADO!"
        texto.innerHTML = "Você tem duas opções no mercado:"
        botão1.innerHTML = "Toni Kroos"
        botão2.innerHTML = "Frankie De Jong"
    }
    function cenario8(){
        cenario =  8
        titulo.innerHTML = "JÓIAS DA BASE!"
        texto.innerHTML = "Você pode subir apenas um garoto da base. Qual você escolhe?"
        botão1.innerHTML = "Gabriel Fernandes"
        botão2.innerHTML = "Rafael Vaz"
    }
function decisao4(opcao){
    if(opcao == 1){
        cenario7()
    }else if(opcao == 2){
        cenario8()
    }
}
function decisao5(opcao){
    if(opcao == 1){
        cenario7()
    }else if(opcao == 2){
        cenario8()
    }
}
function decisao6(opcao){
    if(opcao == 1){
        cenario7()
    }else if(opcao == 2){
        cenario8()
    }
}
function decisao7(opcao){
    if(opcao == 1){
        cenario9()
    }else if(opcao == 2){
        cenario10()
    }
}
    function cenario9(){
        cenario = 9
        titulo.innerHTML = "REFORÇO A CAMINHO!"
        texto.innerHTML = "Você contratou Toni Kroos!<br><br>Você quer dar uma entrevista falando do seu novo atleta?"
        botão1.innerHTML = "Sim"
        botão2.innerHTML = "Não"
    }
    function cenario10(){
        cenario = 10
        titulo.innerHTML = "REFORÇO A CAMINHO!"
        texto.innerHTML = "Você contratou Frankie De Jong!<br><br>Você quer dar uma entrevista falando do seu novo atleta?"
        botão1.innerHTML = "Sim"
        botão2.innerHTML = "Não"
    }

function decisao8(opcao){
    if(opcao == 1){
        cenario11()
    }else if(opcao == 2){
        cenario12()
    }
}
    function cenario11(){
        cenario = 11
        titulo.innerHTML = "PRATA DA CASA!"
        texto.innerHTML = "Você subiu Gabriel Fernandes para a equipe principal.<br><br>Você quer dar uma entrevista falando do seu novo atleta?"
        botão1.innerHTML = "Sim"
        botão2.innerHTML = "Não"
    }
    function cenario12(){
        cenario = 12
        titulo.innerHTML = "PRATA DA CASA!"
        texto.innerHTML = "Você subiu Rafael Vaz para a equipe principal.<br><br>Você quer dar uma entrevista falando do seu novo atleta?"
        botão1.innerHTML = "Sim"
        botão2.innerHTML = "Não"
    }

function decisao9(opcao){
    if(opcao == 1){
        cenario13()
    }else if(opcao == 2){
        cenario14()                
    }
}
    function cenario13(){
        cenario = 13
        titulo.innerHTML = "PRÉ-TEMPORADA"
        texto.innerHTML = "O seu jogador ficou muito feliz e motivado com as palavras do presidente!<br><br><br>Com o início da pré-temporada seu time tem duas opções:<br><br>Realizar amistosos contra bons times na Suíça ou priorizar dinheiro contra medianos times chineses."
        botão1.innerHTML = "Amistosos na Suíça"
        botão2.innerHTML = "Amistosos na China"
    }
    function cenario14(){
        cenario = 14
        titulo.innerHTML = "PRÉ-TEMPORADA"
        texto.innerHTML = "O seu jogador ficou frustrado por não receber elogios do dono do clube.<br><br><br>Com o início da pré-temporada, seu time tem duas opções:<br><br>Realizar amistosos contra bons times na Suíça ou priorizar dinheiro, contra medianos times chineses."
        botão1.innerHTML = "Amistosos na Suíça"
        botão2.innerHTML = "Amistosos na China"
    }

function decisao10(opcao){
    if(opcao == 1){
        cenario13()
    }else if(opcao == 2){
        cenario14()                
    }
}
function decisao11(opcao){
    if(opcao == 1){
        cenario15()
    }else if(opcao == 2){
        cenario16()
    }
}
    function cenario15(){
        cenario = 15
        titulo.innerHTML = "PRÉ-TEMPORADA"
        texto.innerHTML = "O jovem se sentiu muito motivado e certamente, será um diferencial para temporada.<br><br><br>Com o início da pré-temporada, seu time tem duas opções:<br><br>Realizar amistosos contra bons times na Suíça ou priorizar dinheiro, contra medianos times chineses."
        botão1.innerHTML = "Amistosos na Suíça"
        botão2.innerHTML = "Amistosos na China" 
    }
    function cenario16(){
        cenario = 16
        titulo.innerHTML = "PRÉ-TEMPORADA"
        texto.innerHTML = "O jovem esperava algo mais de alguém que o levou para a equipe principal.<br><br><br>Com o início da pré-temporada, seu time tem duas opções:<br><br>Realizar amistosos contra bons times na Suíça ou priorizar dinheiro, contra medianos times chineses."
        botão1.innerHTML = "Amistosos na Suíça"
        botão2.innerHTML = "Amistosos na China"
    }
function decisao12(opcao){
    if(opcao == 1){
        cenario15()
    }else if(opcao == 2){
        cenario16()
    }
}

function decisao13(opcao){
    if(opcao == 1){
        cenario17()
    }else if(opcao == 2){
        cenario18()
    }
}
    function cenario17(){
        cenario = 17
        titulo.innerHTML = ""
        texto.innerHTML = "O seu time não ganhou dinheiro, mas os novos jogadores se destacaram e estão em ótimas condições de jogo.<br><br><br>O seu time não está bem no campeonato nacional e você deve decidir se um novo treinador é necessário ou não para o resto da temporada."
        botão1.innerHTML = "Contratar um novo treinador"
        botão2.innerHTML = "Deixar o time como está"
    }
    function cenario18(){
        cenario = 18
        titulo.innerHTML = ""
        texto.innerHTML = "O seu time ganha bastante dinheiro, mas está mal fisicamente para a temporada e teve 4 jogadores lesionados durante os amistosos.<br><br><br>O seu time não está bem no campeonato nacional e você deve decidir se um novo treinador é necessário ou não para o resto da temporada."
        botão1.innerHTML = "Contratar um novo treinador"
        botão2.innerHTML = "Deixar o time como está"
    }

function decisao14(opcao){
    if(opcao == 1){
        cenario17()
    }else if(opcao == 2){
        cenario18()
    }
}

function decisao15(opcao){
    if(opcao == 1){
        cenario17()
    }else if(opcao == 2){
        cenario18()
    }
}

function decisao16(opcao){
    if(opcao == 1){
        cenario17()
    }else if(opcao == 2){
        cenario18()
    }
}

function decisao17(opcao){
    if(opcao == 1){
        cenario19()
    }else if(opcao == 2){
        cenario20()
    }
}
    function cenario19(){
        cenario = 19
        titulo.innerHTML = "TÉCNICO NOVO!"
        texto.innerHTML = "O seu time contratou Marcus Romero, uma promessa entre os treinadores<br><br>O seu time está com problemas de condicionamento, deseja contratar o preparador físico Matias de Almeida?"
        botão1.innerHTML = "Contratar Matias de Almeida"
        botão2.innerHTML = "Seguir sem preparador"
    }
    function cenario20(){
        cenario = 20
        titulo.innerHTML = "GAME OVER!"
        texto.innerHTML = "O seu time não foi campeão."
        botão1.innerHTML = "Voltar ao Início"
        botão2.innerHTML = "Voltar ao Início"
    }

function decisao18(opcao){
    if(opcao == 1){
        cenario19()
    }else if(opcao == 2){
        cenario20()
    }
}

function decisao19(opcao){
    if(opcao == 1){
        cenario21()
    }else if(opcao == 2){
        cenario22()
    }
}
    function cenario21(){
        cenario = 21
        titulo.innerHTML = "ARES RENOVADOS!"
        texto.innerHTML = "Matias consegue melhorar a condição física dos atletas, que agora luta firme pelo título!<br><br>As duas promessas, Juliette e Jimmy devem ser titulares na penúltima rodada contra o Manchester United?"
        botão1.innerHTML = "Escalar os dois"
        botão2.innerHTML = "Deixá-los na reserva"
    }
    function cenario22(){
        cenario = 22
        titulo.innerHTML = "GAME OVER!"
        texto.innerHTML = "O seu time não teve condições físicas para ser campeão e ficou apenas com o vice."
        botão1.innerHTML = "Voltar ao Início"
        botão2.innerHTML = "Voltar ao Início"
    }

function decisao20(opcao){
    if(opcao == 1){
        inicio()
    }else if(opcao == 2){
        inicio()
    }
}

function decisao21(opcao){
    if(opcao == 1){
        cenario23()
    }else if(opcao == 2){
        cenario24()
    }
}
    function cenario23(){
        cenario = 23
        titulo.innerHTML = ""
        texto.innerHTML = "A equipe vence o jogo por 2-1 com gols de Jimmy e Juliette!<br><br>A dupla deve ser escalada no último jogo que define o título?"
        botão1.innerHTML = "Sim"
        botão2.innerHTML = "Não"
    }
    function cenario24(){
        cenario = 24
        titulo.innerHTML = "GAME OVER!"
        texto.innerHTML = "Sem a presença dos dois o time perde o jogo e consequentemente o título."
        botão1.innerHTML = "Voltar ao Início"
        botão2.innerHTML = "Voltar ao Início"
    }

function decisao22(opcao){
    if(opcao == 1){
        inicio()
    }else if(opcao == 2){
        inicio()
    }
}

function decisao23(opcao){
    if(opcao == 1){
        cenario25()
    }else if(opcao == 2){
        cenario26()
    }
}
    function cenario25(){
        cenario = 25
        titulo.innerHTML = "VOCÊ FOI CAMPEÃO!!!"
        texto.innerHTML = "A equipe começou perdendo mas, com 3 gols de Juliette, conseguiu a virada e conquistou o título da liga!!!"
        botão1.innerHTML = "Voltar ao Início"
        botão2.innerHTML = "Voltar ao Início"
    }
    function cenario26(){
        cenario = 26
        titulo.innerHTML = "GAME OVER!"
        texto.innerHTML = "Somente Jimmy jogou e a equipe apenas empatou e ficou com o 2º lugar."
        botão1.innerHTML = "Voltar ao Início"
        botão2.innerHTML = "Voltar ao Início"
    }

function decisao24(opcao){
    if(opcao == 1){
        inicio()
    }else if(opcao == 2){
        inicio()
    }
}

function decisao25(opcao){
    if(opcao == 1){
        inicio()
    }else if(opcao == 2){
        inicio()
    }
}

function decisao26(opcao){
    if(opcao == 1){
        inicio()
    }else if(opcao == 2){
        inicio()
    }
}