
function getPilihanComputer(){
			const comp = Math.random();

			if (comp < 0.34) return'batu';
			
			if( comp >=0.34 && comp < 0.67)  return 'gunting';
		    return 'kertas';
			
			var hasil = '';
}

 function getHasil(comp, player){


			if (player == comp) return 'Wih Sama';
		    if (player == 'batu') return (comp == 'gunting') ? 'Ko Menang' : 'Ko Kalah';
			
			if (player == 'gunting') return ( comp == 'batu') ? 'Ko Kalah' : 'Ko Menang';
			if (player == 'kertas') return( comp == 'gunting') ? 'Ko Kalah' : 'Ko Menang';
			
 }

//awal bagian set time out

function putar() {
	 const imgComputer = document.querySelector('.img-komputer');
	 const gambar = ['batu', 'gunting', 'kertas'];
	 let i = 0;
	 const waktuMulai = new Date().getTime();
	 setInterval(function(){
	 	if( new Date().getTime() -waktuMulai > 1000){
	 		clearInterval;
	 		return;
	 	}
        imgComputer.setAttribute('src', gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
        


	 },100)
}



 //akhihr bagian Set time out

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click',function(){
		    const pilihanComputer = getPilihanComputer();
		 	const pilihanPlayer =  pil.className;
		 	const hasil = getHasil(pilihanComputer, pilihanPlayer);

           putar();

		 	// console.log ('comp : ' + pilihanComputer);
		 	// console.log ('player: ' + pilihanPlayer);
		 	// console.log('hasil: ' + hasil);

      setTimeout(function(){
		 	const imgComputer = document.querySelector('.img-komputer');
		 	imgComputer.setAttribute('src',pilihanComputer +'.png');

		 	const info = document.querySelector('.info');
		 	info.innerHTML = hasil;
      }, 1000);

	});
});










//  const pGajah = document.querySelector('.batu');
//  pGajah.addEventListener('click', function(){
//  	const pilihanComputer = getPilihanComputer();
//  	const pilihanPlayer =  pGajah.className;
//  	const hasil = getHasil(pilihanComputer, pilihanPlayer);
//  	// console.log ('comp : ' + pilihanComputer);
//  	// console.log ('player: ' + pilihanPlayer);
//  	// console.log('hasil: ' + hasil);


//  	const imgComputer = document.querySelector('.img-komputer');
//  	imgComputer.setAttribute('src', 'img/' + pilihanComputer +'.png');

//  	const info = document.querySelector('.info');
//  	info.innerHTML = hasil;

//  });


// const pOrang = document.querySelector('.gunting');
//  pOrang.addEventListener('click', function(){
//  	const pilihanComputer = getPilihanComputer();
//  	const pilihanPlayer =  pOrang.className;
//  	const hasil = getHasil(pilihanComputer, pilihanPlayer);
//  	// console.log ('comp : ' + pilihanComputer);
//  	// console.log ('player: ' + pilihanPlayer);
//  	// console.log('hasil: ' + hasil);


//  	const imgComputer = document.querySelector('.img-komputer');
//  	imgComputer.setAttribute('src', 'img/' + pilihanComputer +'.png');

//  	const info = document.querySelector('.info');
//  	info.innerHTML = hasil;

//  });


// const pKertas = document.querySelector('.kertas');
//  pKertas.addEventListener('click', function(){
//  	const pilihanComputer = getPilihanComputer();
//  	const pilihanPlayer =  pKertas.className;
//  	const hasil = getHasil(pilihanComputer, pilihanPlayer);
//  	// console.log ('comp : ' + pilihanComputer);
//  	// console.log ('player: ' + pilihanPlayer);
//  	// console.log('hasil: ' + hasil);


//  	const imgComputer = document.querySelector('.img-komputer');
//  	imgComputer.setAttribute('src', 'img/' + pilihanComputer +'.png');

//  	const info = document.querySelector('.info');
//  	info.innerHTML = hasil;

//  });