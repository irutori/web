/*
中央ボタン画像 フリー素材？

すっとこどっこいブラウザ用CSS?
Opera,FireFoxでの動作確認
safariは知らん

降ってくるやつ

bg-img wachi?
*/
var counter = 0;

function reset(){
counter=0;
}

function animemanage(){
setInterval("animation()",200)
}

function animation(){
	if(counter < 10){
		if(counter == 0){
			document.area0.area0.value = "auto login";
		}
		if(counter == 1){
			document.area0.area0.value = "auto login .";
		}
		if(counter == 2){
			document.area0.area0.value = "auto login . .";
		}
		if(counter == 3){
			document.area0.area0.value = "auto login . . .";
		}
		if(counter == 4){
			document.area0.area0.value = "auto login . . .OK";
		}
		if(counter == 5){
			document.area0.area0.style.display = "none";
		}
		if(counter == 6){
			var obj = document.getElementsByClassName("button");
			for(i = 0;i < 4;i = i+1){
				reverse(obj[i]);
			}	
		}
		counter+=1;
	}else{
		return;
	}
	
}

function taplacechange(num){
	var area = document.getElementsByClassName("area");
	if(num == 1){
		area[0].style.top = '70px';
	}else if(num == 2){
		area[0].style.top = '220px';
	}else if(num == 3){
		area[0].style.top = '150px';
	}else if(num == 4){
		area[0].style.top = '300px';
	}
}

function setvisi(num){
	var area = document.getElementsByClassName("area");
	if(num == 0){
		area[0].style.visibility = "hidden"
	}
	if(num == 1){
		area[0].style.visibility = "visible";
	}
}

function reverse(obj){
	if (obj.style.visibility == "hidden") {
		obj.style.visibility = "visible"; 
		} else {
			obj.style.visibility = "hidden";
		}
}

function subhide(){
	var obj = document.getElementsByClassName("subbutton");
	subsubhide();
	for(i = 0;i < 4;i++){
		obj[i].style.visibility = "hidden";
	}
}

function subsubhide(){
	var obj = document.getElementsByClassName("subsubbutton");
		for(i = 0;i < 13;i++){//  									increment max
		obj[i].style.visibility = "hidden";
		}
}

function setforarea(num){
	if(num == 1){
		document.area1.area1.value = "\nプロジェクトの概要と方針について";
	}else if(num == 2){
		document.area1.area1.value = "\nメンバーと役割";
	}else if(num == 3){
		document.area1.area1.value = "\nプロジェクトの進捗状況の履歴";
	}else if(num == 4){
		document.area1.area1.value = "\nこのページに関して";
	}else if(num == 11){
		document.area1.area1.value = "\n対話を行うプログラムの作成を行う。\n\n対話の応答をより\"人間らしく\"行うためのアルゴリズムを考案する\n\nそれに伴った応答関数を実装し評価する";
	}else if(num == 12){
		document.area1.area1.value = "\n構文解析部はOpenNLPを利用する\n\n実装は各々担当箇所を決め行う\n\n使用言語はjava\n\nまた、応答関数のアルゴリズムの考案は全員で行う";
	}else if(num == 21){
		document.area1.area1.value = "\nプロジェクトリーダー\n\n応答関数の実装担当\n	及び構文解析部実装ヘルプ\n\nほむほむほむほむ";
	}else if(num == 22){
		document.area1.area1.value = "\n応答関数部の実装を担当";
	}else if(num == 23){
		document.area1.area1.value = "\n構文解析部の実装担当\n\nemt!emt!";
	}else if(num == 24){
		document.area1.area1.value = "\n構文解析部の実装担当";
	}else if(num == 25){
		document.area1.area1.value = "\n応答関数の実装担当";
	}else if(num == 26){
		document.area1.area1.value = "\n同上\n";
	}else if(num == 27){
		document.area1.area1.value = "\n入出力部の実装担当";
	}else if(num == 31){
		document.area1.area1.value = "\n2012-10-26\n\nｗｅｂページのプロトタイプをチーム内に公開\n\n役割分担の決定";
	}
	/* ここに追加
	   template

		else if(num == 3n){
		document.area1.area1.value = "hoge";
	}
	*/
	else if(num == 41){
		document.area1.area1.value ="";
	}else if(num == 42){
		document.area1.area1.value ="";
	}else if(num == 43){
		document.area1.area1.value =　"\nログアウト出来ないのはこのページの\n\n    \"本来の仕様\"\n\nである";
	}
	
	
}

function dispmain(num){
	var obj = document.getElementsByClassName("subbutton");
	var flag = false;
	var min = 0;
	var max = 0;
	
	if(num == 1){
		if(obj[0].style.visibility == "hidden"){
			flag = true;
		}
		min = 0;
		max = 1;
		subhide();
		setvisi(0);
	}else if(num == 2){
		if(obj[1].style.visibility == "hidden"){
			flag = true;
		}
		min = 1;
		max = 2;
		subhide();
		setvisi(0);
	}else if(num == 3){
		if(obj[2].style.visibility == "hidden"){
			flag = true;
		}
		min = 2;
		max = 3;
		subhide();
		setvisi(0);
	}else if(num == 4){
		if(obj[3].style.visibility == "hidden"){
			flag = true;
		}
		min = 3;
		max = 4;
		subhide();
		setvisi(0);
	}
	
	if(flag){
		for(i = min;i < max;i = i+1){
			reverse(obj[i]);
		}
		flag = false;
	}
	
}

function dispsub(num){
	var obj = document.getElementsByClassName("subsubbutton");
	var flag = false;
	var max = 0;
	var min = 0;
	
	if(num == 1){
		if(obj[0].style.visibility == "hidden"){
			flag = true;
		}
		min = 0;
		max = 2;
		subsubhide();
		setforarea(1);
		taplacechange(1);
	}
	
	if(num == 2){
		if(obj[2].style.visibility == "hidden"){
			flag = true;
		}
		min = 2;
		max = 9;
		subsubhide();
		setforarea(2);
		taplacechange(2);
	}
	
	if(num == 3){
		if(obj[9].style.visibility == "hidden"){
			flag = true;
		}
		min = 9;
		max = 10;// ここを増やす。以下をずらす
		subsubhide();
		setforarea(3);
		taplacechange(3);
	}
	
	if(num == 4){//obj[] increment
		if(obj[10].style.visibility == "hidden"){
			flag = true;
		}
		min = 10;// increment
		max = 13;// increment
		subsubhide();
		setforarea(4);
		taplacechange(4);
	}
	
	if(flag){
		for(i = min;i < max;i = i+1){
			reverse(obj[i]);
		}
		flag = false;
		setvisi(1);
	}
}