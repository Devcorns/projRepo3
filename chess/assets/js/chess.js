var chess = $("#chess");
var chess_items = ['Elephant','Horse','Camel','King','Queen','Camel','Horse','Elephant','pyada'];
for(var i=1;i<65;i++){
    chess.append("<div class='chess-box' id='"+i+"'></div>");
    if(i<9){
        $("#"+i).html("<p>"+chess_items[i+1]+"</p>")
    }
    if(i%8==0){
        chess.append("<div class='br-add'></div>");
    }
}

























