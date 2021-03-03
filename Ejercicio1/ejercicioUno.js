/**
 * Aqui dentro probar el codigo que quieran
 */
function probarEjercicio(){
	var tipoMascota;
	var pelaje;
	var nombreMascota;
	var edad;
	var raza;
	var peso;
	var estadoClinico;
	var temperarutaCorporal;
	var continuar;

	var perroMasPesado;
	var nombrePerroMasPesado;
	var menorTemperatura;
	var mayorPromedioTemperatura;

	var contadorGatos=0;
	var contadorPerros=0;
	var contadorOtraCosa=0;
	var contadorTotalMascotas;

	var contadorEnfermos=0;
	var estado

	var nombreOtracosa;

	var nombreGatoSinPelos;
	var razaGatoSinPelos;
	var gatoSinPelosMasLiviano;
	

	do{
		
	
		nombreMascota=prompt("Ingrese el nombre de su mascota (un solo nombre)")
		
		var divisorPalabras = nombreMascota.split(" ");
		var contadorPalabras = divisorPalabras.length;
		if(contadorPalabras>1){
			alert("Solo se puede ingresar una palabra");
		}
		else{
			tipoMascota=prompt("Ingrese tipo mascota (gato-perro-otra cosa)");
			
			
			

			if(!(tipoMascota=="gato" || tipoMascota=="perro" || tipoMascota=="otra cosa")){
				alert("tipo de mascota incorrecto, por favor ingrese de nuevo.");
			}
			else{

				peso=parseInt(prompt("Ingrese el peso de su mascota."));

				if(isNaN(peso)==true){
					alert("Valor incorrecto, por favor ingrese numeros.");
				}
				else{			

					pelaje=prompt("Ingrese tipo de pelaje(corto-largo-sin pelo)");
					if(!(pelaje=="corto" || pelaje=="largo" || pelaje=="sin pelo") || (isNaN(pelaje)==false)){
						alert("tipo de pelaje incorrecto, por favor ingrese de nuevo.");
					}
					else{
						edad= parseInt(prompt("Ingrese edad de su mascota"));
						if(isNaN(edad)==true){
							alert("Valores incorrectos, intente nuevamente");
						}
						else{
							raza=prompt("Ingrese raza de la mascota")
							if(isNaN(raza)==false){
								alert("Raza incorrecta, intente una vez más.");
							}
							else{
								estadoClinico=prompt("Ingrese estado clinico de la mascota (enfermo,internado o en adopcion)");
								if(!(estadoClinico=="enfermo" || estadoClinico=="internado" || estadoClinico=="en adopcion")){
									alert("Estado clinico incorrecto, ingrese estado clinico valido.");
								}
								else{
									temperarutaCorporal=parseInt(prompt("Ingrese temperatura corporal"))
									if(isNaN(temperarutaCorporal)==true){
										alert("Valores incorrectos, por favor ingrese numeros");
									}
									else{
										switch(pelaje){
											case "sin pelos":
												menorTemperatura=100;
												if(temperarutaCorporal<menorTemperatura){
													menorTemperatura=temperarutaCorporal;
													//d)El animal sin pelo con menor temperatura corporal
													document.write("El animal sin pelos con mayor temperatura es");
												}
												break;
										}
									}
								}
							
							}
						}

					}
				}

			}
		}		
		

		switch(estadoClinico){
			case "enfermo":
				contadorEnfermos++;
				break;
			
			case "internado":
				break;

			case "en adopcion":
				break;
		}

		switch(tipoMascota){
			case "gato":
				contadorGatos++;
				if(gatoSinPelosMasLiviano<peso){
					if(pelaje=="sin pelos"){
						nombreGatoSinPelos=nombreMascota;
						razaGatoSinPelos=raza
					}
				}
				break;

			case "perro":
				contadorPerros++;
				
				if(perroMasPesado=0 ||peso>perroMasPesado){
					//a)El perro mas pesado*
					perroMasPesado=peso;
					nombrePerroMasPesado=nombreMascota;
				}
				break;

			case "otra cosa":
				contadorOtraCosa++;
				if(contadorOtraCosa>=1){
					nombreOtracosa=nombreMascota;
					//c)El nombre de la ultima mascota de tipo "otra cosa"*
					document.write("El nombre de la ultima mascota ingresada tipo otra cosa  es " + nombreOtracosa + "<br/>");
				}
				break;
		}
		contadorTotalMascotas=contadorGatos+contadorOtraCosa+contadorPerros;

		var porcentajeEnfermos;
		//b)El porcentaje de enfermos sobre el total de mascotas
		porcentajeEnfermos= (contadorTotalMascotas/100)*contadorEnfermos;

		var perrosGatosPorcentaje;
		//f)Sumando gatos y perros que porcentaje del total de mascotas son?
		perrosGatosPorcentaje=(contadorTotalMascotas/100)*(contadorGatos+contadorPerros);
	


		continuar=confirm("¿Desea ingresar otra mascota?");
	}while(continuar==true && isNaN(tipoMascota)==true)

	document.write("El perro mas pesado es " + nombrePerroMasPesado+ " y tiene un peso de "+ perroMasPesado + "kg "+ "<br/>");
	document.write("El porcentaje de enfermos sobre el total de mascotas es "+porcentajeEnfermos + "% "+"<br/>");
	document.write("El porcentaje de perros y gatos sobre el total es "+ perrosGatosPorcentaje+ "% "+ "<br/>");
	document.write();
	document.write();
}



/*Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria:

necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe




e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal

g)Que estado clinico tiene la menor cantidad de mascotas
H)Cual es el promedio de kilos de peso de tomando todas las mascotas
i)El nombre y raza del gato sin pelos mas liviano*
*/