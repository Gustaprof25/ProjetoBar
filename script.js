		function calc(){
				if (document.querySelector("input[type=number]").value == "") {
					var valorItem = 0;
				}else{
					var qnt = document.querySelector("input[type=number]").value;
					var mult = parseInt(document.querySelector("td[class=valorbtt]"));
					var valorItem = qnt * mult
				}	
			
			alert(valorItem);
		}
