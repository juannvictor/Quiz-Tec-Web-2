
		var pessoa = prompt("Digite o seu nome para começar: ");
		while(pessoa == null || pessoa == false){
			alert("Você precisa preencher seu nome para começar o quiz.");
			var pessoa = prompt("Digite o seu nome para começar: ");
		}

		function somaresultado(){
			var cont = 0;
			var q1 = document.getElementById("correta1").checked;
			var q2 = document.getElementById("correta2").checked;
			var q3 = document.getElementById("correta3").checked;
			var q4 = document.getElementById("correta4").checked;
            var q5 = document.getElementById("correta5").checked;
            var q6 = document.getElementById("correta6").checked;
            var q7 = document.getElementById("correta7").checked;
            var q8 = document.getElementById("correta8").checked;
            var q9 = document.getElementById("correta9").checked;
            var q10 = document.getElementById("correta10").checked;

			var erradas = "";

			if (q1 == true){
                cont++;
			}
			else{
				var p1 = "Pergunta 1 - Resposta: Plot twist. \n";
				erradas += p1;
			}

			if (q2 == true){
                cont++;
			}
			else{
                var p2 = "Pergunta 2 - Resposta: Royale with cheese, por conta de seu sistema métrico. \n";
				erradas += p2;
			}
			if (q3 == true){
                cont++;
			}
			else{
				var p3 = "Pergunta 3 - Resposta: Círculo de Fogo. \n";
				erradas += p3;
			}
			if (q4 == true){
                cont++;
			}
			else{
				var p4 = "Pergunta 4 - Resposta: Cidade de Deus. \n";
				erradas += p4;
			}
            if (q5 == true){
                cont++;
            }
            else{
                p5 = "Pergunta 5 - Resposta: R2D2 e C3PO. \n";
                erradas += p5;
            }

            if (q6 == true){
                cont++;
            }
            else{
                p6 = "Pergunta 6 - Resposta: L'Arrivée d'un Train à La Ciotat. \n";
                erradas += p6;
            }
            if (q7 == true){
                cont++;
            }
            else{
                p7= "Pergunta 7 - Resposta: Click. \n";
                erradas += p7;
            }
            if (q8 == true){
                cont++;
            }
            else{
                p8 = "Pergunta 8 - Resposta: Vermelha e Azul. \n";
                erradas += p8;
            }
            if (q9 == true){
                cont++;
            }
            else{
                p9 = "Pergunta 9 - Resposta: Os Senhor dos Aneis: O Retorno do Rei (2003). \n";
                erradas += p9;
            }

            if (q10 == true){
                cont++;
            }
            else{
                p10 = "Pergunta 10 - Resposta: Bollywood. \n";
                erradas += p10;
            }
            alert("Você acertou " + cont + " questões.\n" + "\n" + "Questões erradas: \n" + erradas);

            if (cont == 10){
                alert("Parabéns " + pessoa + ", você acertou todas as perguntas! Você é realmente um verdadeiro cinéfilo!")
                }

            else if (cont >= 8 && cont < 10){
                alert("Parabéns" + pessoa + ", você acertou" + total + "% das perguntas, você é um grande apreciados da sétima arte, continue assim!\n" + "\n" + "Questões erradas: \n" + erradas)
                }
            else if (cont >= 5 && cont < 8){
                alert("Parabéns" + pessoa + ", você acertou" + total + "% das perguntas, você parece conhecer algumas coisas básicas e clássicas de cinema, continue assim!\n" + "\n" + "Questões erradas: \n" + erradas);
                }
            else if (cont >= 3 && cont < 5){
                alert(pessoa + ", você acertou" + total + "% das perguntas, parece que você não conhece muito sobre a sétima arte, mas esta é uma ótima oportunidade para começar a se interessar!\n" + "\n" + "Questões erradas: \n" + erradas);
                }
            else if (cont >= 0 && cont < 3){
                alert(pessoa + ", você não acertou nehuma pergunta, eu acho que você deveria começar a assistir mais filmes.....")
                }

            window.close("perguntas.html");
		}
