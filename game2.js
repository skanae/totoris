//ミノを入力したら設置可能な場所を表示する
var array = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
]
var array2 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
]

var mino11=[[0,0],[0,0]]
var mino21=[[0,0],[0,1]]
var mino22=[[0,0],[1,0]]
var mino23=[[0,0],[1,1]]
var mino=[mino11,mino21,mino22,mino23]

function generateTempmino(){
var ramdomnumber=Math.floor(Math.random()*(mino.length))
// console.log("ranfomnumber is ",ramdomnumber)
var tmpmino=mino[ramdomnumber] //このターン使うミノ
// console.log("tmpmino is ",tmpmino[0],tmpmino[1])
return tmpmino
}

function sensorCanput(canput){
for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array.length; x++) {
        var looptime=0;
        for (let i = 0; i < tmpmino.length; i++) {
            try{
                if(array[y+tmpmino[i][0]][x+tmpmino[i][1]]==0){
                    looptime++;
                }
            }
            catch{
                break;
            }
        }
        if(looptime==tmpmino.length){
            canput.push([y,x])
        }
    }
}
// console.log(canput)
return canput
}

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

function updateArray(array,mino,index){
    for (let i = 0; i < mino.length; i++) {
        array[mino[i][0]+index[0]][mino[i][1]+index[1]]=1
    }
    return array
}

//なんか縦横でミスってる
function clearArray(array){
    rowflag=[]
    colomflag=[]
    // boxflag=[]
    for (let i = 0; i < 9; i++) {
        tmpflag1=1
        for (let j = 0; j < 9; j++) {
            if(array[i][j]==0){
                tmpflag1=0
                break
            }           
        }    
        if(tmpflag1==1){
            rowflag.push(i)
        }    
    }
    for (let i = 0; i < 9; i++) {
        tmpflag2=1
        for (let j = 0; j < 9; j++) {
            if(array[j][i]==0){
                tmpflag2=0
                break
            }
        }
        if(tmpflag2==1){
            colomflag.push(i)
        }
    }
    for (let i = 0; i < rowflag.length; i++) {
        array = rowdelete(array,rowflag[i])
    }
    for (let i = 0; i < colomflag.length; i++) {
        array = colomdelete(array,colomflag[i])
    }
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
        
    // }
    return array
}

function rowdelete(array,row){
    for (let i = 0; i < array.length; i++) {
        array[raw][i]=0
    }
    return array
}
function colomdelete(array,colom){
    for (let i = 0; i < array.length; i++) {
        array[i][colom]=0
    }
    return array
}
function inArray(array,youso){
    for (let i = 0; i < array.length; i++) {
        if(array[i][0]==youso[0] && array[i][1]==youso[1]){
            return true
        }
    }
    return false
}
const isNumber = function(value) {
    return ((typeof value === 'number') && (isFinite(value)));
  };
//mino生成
var tmpmino=generateTempmino()
// console.log("tmpmino is ",tmpmino[0],tmpmino[1])
//array2を更新してtmpmino表示
array2=updateArray(array2,tmpmino,[2,2])
draw2()

//tmpミノが置ける座標の配列を出す
//上から順にみて行って全部OKならその座標を配列に
canput=[]
canput=sensorCanput(canput)
console.log(canput)


//formからどこに置くかを取得 buttonつけたほうがいいかも
var val = null
function showMessage(){

var text = document.getElementById("message")
val = text.value
console.log("val is "+ val)
x=val.split(",")
input=x.map(i=>Number(i))
// console.log("input is ",input)
// console.log("input is Number? =>" ,isNumber(input[0]),isNumber(input[1]))
// console.log("canput is Number? =>" ,isNumber(canput[0][0]),isNumber(canput[0][1]))
// console.log("canput[0] is ",canput[0],"input is ",input)
// console.log("canput[0] == input",canput[0] == input)
// console.log(canput.indexOf(input))

if(inArray(canput,input)){
    var output = val+"に配置しました"
    array=updateArray(array,tmpmino,input)
    draw()
    array=clearArray(array)
    draw()
}
else{
    var output = val+"にはおけません"
}

document.getElementById("output-message").innerHTML=output
//1秒待って中身とフォームをクリア (valの受け渡しちゃんとできてる)
}

draw()

// //置ける座標をそのまま表示 なんかいい感じにならないので後回し
// var displaycanput = document.getElementById("doc0"); 
// doc0.style.color="white"
// doc0.innerHTML=canput[0],"/n";

//Canputから座標を一つ選びarrayを更新
// function updateArray(array,)

//コンソールで対話しようとした、失敗
// while(true){
// console.log(canput)
// console.log("canputから一つ選び入力してください(例[0,0])")
// response1 = readline()
// console.log("選んだのは",response1,"であってますか？y/n")
// response2 = readline()
// if(response=="y"){
//     console.log(response2,"が選ばれました")
//     break
// }
// else{
// 　console.log("すみません、もう一度canputから選んでください")
// }
// }
