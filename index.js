document.getElementById("flamesform").addEventListener("submit", (e) => {
  e.preventDefault();
  const name1 = document.getElementById("myname").value;
  const name2 = document.getElementById("crushname").value;
  var str1 = name1.replace(/ /g, "").toLowerCase();
  var str2 = name2.replace(/ /g, "").toLowerCase();
  var arr1 = str1.split("");
  var arr2 = str2.split("");
  console.log(arr1, arr2);
  var final_array = arr1.length + arr2.length;
  var count = 0;

  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        arr1.splice(i, 1);
        arr2.splice(j, 1);
        count += 2;
        i--;
      }
    }
  }
  var res = final_array - count;

  var flames = [
    "friends",
    "love",
    "affection",
    "marriage",
    "enemies",
    "siblings",
  ];
  while (flames.length != 1) {
    var r =
      res %
      flames.length; /* logic is for example unmatched charaters is 10 and length of flames array is 6
                                    iteration one==>10%6=4-1 =index(3) //output flames--> flaes
                                    iteration two==>10%5=0-1 =index(-1)   //output flaes--> flae 
                                    iteration three==>10%4=2-1 =index(1)   //output flae--> fae
                                    iteration two==>10%3=1-1 =index(0)  //output fae--> ae
                                    iteration two==>10%2=0-1 =index(-1)   //output ae--> a */
    flames.splice(r - 1, 1);
  }

  document.getElementById("myres").innerHTML =
    "You Both are Endedup with " + flames;
  document.getElementById("myres").style.color = "lightgreen";
  document.getElementById("myres").style.textShadow = " 0px 0px 16px #CECECE";
  document.getElementById("flamesform").reset();
});
//   for (a = 0; a < str2.length; a++) {
//     for (b = 0; b < str1.length; b++) {
//       if (str2[a] == str1[b]) {
//         count2.push(str2[a]);
//       }
//     }
//   }
// }
// res = count.length ,count2.length;

// if (flames.length >= res) {
//   relation = flames[res - 1];
// }

// console.log(count);

// for (var i = 0; i < str1.length; i++) {
//   if (str2.includes(str1[i])) {
//     // count1.push(str1[i]);
//     count += 2;
//   }
// }
// console.log(count);
// for (var j = 0; j < str2.length; j++) {
//   if (str1.includes(str2[j])) {
//     // count2.push(str2[j]);
//     count += 1;
//   }
// }
// // res = count1.length + count2.length;
// res = str3.length - count;
// while (flames.length != 1) {
//   var r = res % flames.length;
//   flames.splice(r - 1, 1);
// }
// // var ind = res % flames.length;
// console.log(flames);
