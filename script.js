		function calc(){
			for (var i = 0; i <= 32; i++) {
				if (document.querySelector("input[type=number]").value == "") {
					var valorItem = 0;
				}else{
					var qnt = document.querySelector("input[type=number]").value;
					var mult = parseInt(document.querySelector("input[name=valorbtt]").value);
					var valorItem = qnt * mult
				}	
			}
		}
