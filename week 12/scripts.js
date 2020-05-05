// var select + document.querySelector('select');
// var para + socument.querySelector('p');
//
// select.addEvenListener('Cange', setWeather; )
//
// fuction setweather() { var choice =select.value;

// if(choice=='sunny'){
//   para.textContent= 'It is nice and sunny out.Go have a picnic!'
// }elseif(choice=='rain'){
//   para.textcontent = 'rain is fallin.teake an umbrella'
// }else if (chice== 'snowing'){
//   para.textcontent = 'better stay insdie with some cocoa'}
// }else if (chice== 'Overcast'){
//   para.textcontent = 'you may wan to bring your raincoat just in case'
// }else{
//   para.textContent=""
// }


//using switch statemments
// fucntion{ setWeather (){
//   var choice= select.value;
//
//   switch (choice) {
//     case 'suuny':
//     para.textContent= It is nice and sunny out.Go have a picnic!';
//     break;
//
//     case 'rainy':
//     para.textcontent ='better take an umbrella!';
//     break;
//
//         case 'snowing':
//         para.textcontent ='better stay insdie with some cocoa';
//         break;
//
//         case 'overcast':
//         para.textcontent ='you may wan to bring your raincoat just in case';
//         break;
//
//         default:
//         para.textContent= ''
//   }

 //ternary operators

var select =document.querySelector('select');
var html =document.querSelector('html');

document.body.style.padding= '100px';
  html.style.backgroundColor= bgColor;
  html.style.color= textcolor;

}

select.onchange = function () {
  (select.value === 'black') ?
  update ('black','white') :
  update ('white', 'black')
}
