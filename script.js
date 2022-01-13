var i = 0;
const txt = '阿兰 牛逼！！'; 
const speed = 100; 

const typeWriter = () => {
  if (i < txt.length) {
    document.getElementById("alan").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}