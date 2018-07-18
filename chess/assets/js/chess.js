

var chess = $("#chess");
var chess_items1 = [{id:'rookA',name:'Rook',img:'assets/images/rook.png'},{id:'knightA',name:'Knight',img:'assets/images/knight.png'},{id:'bishopsA',name:'Bishop',img:'assets/images/bishop.png'},{id:'queenA',name:'Queen',img:'assets/images/queen.png'},{id:'kingA',name:'King',img:'assets/images/king.png'},{id:'bishopAR',name:'Bishop',img:'assets/images/bishop.png'},{id:'knightAR',name:'Knight',img:'assets/images/knight.png'},{id:'rookAR',name:'Rook',img:'assets/images/rook.png'}];
var chess_pawn = [{name:'Pawn',img:'assets/images/pawn.png'}];
var chess_items2 = [{id:'rookB',name:'Rook',img:'assets/images/rook.png'},{id:'knightB',name:'Knight',img:'assets/images/knight.png'},{id:'bishopsB',name:'Bishop',img:'assets/images/bishop.png'},{id:'queenB',name:'Queen',img:'assets/images/queen.png'},{id:'kingB',name:'King',img:'assets/images/king.png'},{id:'bishopBR',name:'Bishop',img:'assets/images/bishop.png'},{id:'knightBR',name:'Knight',img:'assets/images/knight.png'},{id:'rookBR',name:'Rook',img:'assets/images/rook.png'}];
var initliazed = function(){
    for(var i=1;i<65;i++){

    
  
    
        if(i<9){
            chess.append("<div class='chess-box' id='"+i+"'><div class='chess-item' id='"+chess_items1[i-1].id+"'><img src='"+chess_items1[i-1].img+"'></div></div>");
        }
        if(i>8&&i<17){
            chess.append("<div class='chess-box' id='"+i+"'><div class='chess-item' id='pawnB"+i+"'><img src='"+chess_pawn[0].img+"'></div></div>");
        }
        if(i>16&&i<49){
            chess.append("<div class='chess-box'  id='"+i+"'><div class='chess-item' id='blank"+i+"'></div></div>");
        }
        if(i>48&&i<57){
            chess.append("<div class='chess-box' id='"+i+"'><div class='chess-item' id='pawnA"+i+"'><img src='"+chess_pawn[0].img+"'></div></div>");
        }
        if(i>56&&i<65){
            chess.append("<div class='chess-box' id='"+i+"' ><div class='chess-item' id='"+chess_items2[i-57].id+"'><img src='"+chess_items2[i-57].img+"'></div></div>");
            
        }
        if(i%8==0){
            chess.append("<div class='br-add'></div>");
        }
    }
};
initliazed();

$("[id^='pawnA']").on("click",function(e){
    console.log(e.target);
    var pawnCurrentPosition = $(e.target).parent().parent().attr("id");
    console.log(pawnCurrentPosition)
    //var pawnVal = pawnCurrentPosition.slice(-2);
    var pawnNextPosition = pawnCurrentPosition-8;
    console.log(pawnNextPosition);
    var blankStorage = $("#blank"+pawnNextPosition).parent().html();
    
    $("#blank"+pawnNextPosition).parent().html($(e.target).parent());
    
    $("#"+pawnCurrentPosition).html(blankStorage)
    
})

// ,'Elephant','Horse','Camel','Queen','King','Camel','Horse','Elephant','pyada'
























