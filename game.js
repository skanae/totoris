var array = [
    [0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
var array2 = [
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
 
];

function draw() {
    $('#game').find('tr').each(function(i, elemTr) { // trタグそれぞれに対する処理
        $(elemTr).children().each(function(j, elemTd) { // tdタグそれぞれに対する処理
            $(elemTd).removeClass(); // まずはクラスをすべてなしにする
            switch (array[i][j]) {
                case 1:
                    $(elemTd).addClass("stick"); // 1の時にはstickクラスを割り振る
                    break;
                default:
                    $(elemTd).addClass("default"); // それ以外の時にはdefaultクラスを割り振る
            }
        })
    });
}

function draw2() {
    $('#game2').find('tr').each(function(i, elemTr) { // trタグそれぞれに対する処理
        $(elemTr).children().each(function(j, elemTd) { // tdタグそれぞれに対する処理
            // $(elemTd).removeClass(); // まずはクラスをすべてなしにする
            switch (array2[i][j]) {
                case 1:
                    $(elemTd).addClass("stick"); // 1の時にはstickクラスを割り振る
                    break;
                default:
                    $(elemTd).addClass("default"); // それ以外の時にはdefaultクラスを割り振る
            }
        })
    });
}

function createoneblock(y,x,array){
    array[y][x]=1
    draw()
}

function deleteoneblock(y,x,array){
    array[y][x]=0
    draw()
}

function createminos(mino){
    for(let i=0; i<mino.length; i++){
        createoneblock(mino[i][0],mino[i][1],array);
    }
}


// var minotemp=[[7,7]]

// var mino11=[[19,4]]                      
// var mino21=[[19,4],[19,5]]　                
// var mino22=[[19,4],[18,4]]
// var mino23=[[19,4],[18,5]]
// var mino24=[[19,4],[18,3]]
// var mino31=[[19,4],[19,5],[19,6]]
// var mino32=[[19,4],[18,4],[17,4]]
// var mino33=[[19,4],[19,5],[18,5]]
// var mino34=[[19,4],[19,5],[18,4]]
// var mino35=[[19,4],[18,4],[18,3]]
// var mino36=[[19,4],[18,4],[18,5]]
// var mino23=[[19,4],[18,5],[17,6]]
// var mino24=[[19,4],[18,3],[17,2]]
// var mino41=[[19,4],[19,5],[19,6],[19,7]]
// var mino42=[[19,4],[18,4],[17,4],[16,4]]
// var mino43=[[19,4],[19,5],[19,6],[18,6]]
// var mino44=[[19,4],[19,5],[19,6],[18,4]]
// var mino45=[[19,4],[18,4],[18,3],[18,2]]
// var mino46=[[19,4],[18,4],[18,5],[18,6]]


// var minos=[mino11,mino21,mino22,mino31,mino32]

// // createminos(mino33)

draw(); // 読込が完了したらまず表示
draw2();
// const div1 = document.getElementById("div1");

//createElementsでブロックを生成仕様とした
// for(let i=0; i<5; i++){
//     var newDiv = document.createElement("div");
//       for(let j=0; j<5; j++){
//         const newBtn = document.createElement("button");
//         if(i==2 && j==1 || i==3 && j==1){
//             newBtn.className="stick";
//             document.body.appendChild(newBtn)
//             newDiv.appendChild(newBtn);
//         }
//         else{
//             newBtn.className="transparent";
//             document.body.appendChild(newBtn)
//             newDiv.appendChild(newBtn);
//         }
//        }
//       div1.appendChild(newDiv);
// }
$(function draganddrop() {
    // ドラッグ
    $('.minotable').draggable({
        // containment:".draggable-area" //ドラッグの範囲を制限
    });
    // ドロップ
    $('.drop').droppable({
        //ドロップした時に呼び出される
        accept:'.minotable', //ドロップできる対象を指定
        snap:true,
        drop: function(e, ui) { 
            $( this )
                .find( "p" )
                .html( ui.draggable.text() + "が枠に入りました" );
                console.log("sucsess")
        },
        
    });
});

//canvasでブロックを生成仕様とした
// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// canvas.width = 360;
// canvas.height = 360;
// ctx.fillStyle = 'red';
// ctx.fillRect(160, 160, 40, 40);

// setInterval(function() {
//     draw();
// }, 500); // 0.5秒ごとに表示を更新していきます
