function convertNumber(num){
  let lookup =['Không','Một','Hai','Ba','Bốn','Năm','Sáu','Bảy','Tám','Chín'];
  array = Array.from(num.toString());
  X = array.map(item => lookup[item]).reverse();

  for(let i = 0; i < X.length; i++){
    let alt = ['','Mươi','Trăm','Nghìn','Mươi','Trăm','Triệu','Mươi','Trăm'];
     X[i]+= ' ' + alt[i];
  }
  X = X.filter(item => item!=='');
  return X.reverse().join(' ')
  .replace(/Mươi Không/g,'Mươi')
  .replace(/Một Mươi/g,'Mười')
  .replace(/Không Trăm Không Mươi Nghìn /g,'')
  .replace(/Không Mươi /g,'Linh ')
  .replace(/Không Trăm Không Mươi /,'')
  .replace(/Không Trăm $/,'')
  .replace(/Linh Triệu/g,'Triệu')
  .replace(/Linh Nghìn/g,'Nghìn')
  .replace(/Linh $/,'')
  .replace(/Mươi Một/g,'Mươi Mốt')
  .replace(/Không Trăm $/,'');
}

console.log(convertNumber(100012350));