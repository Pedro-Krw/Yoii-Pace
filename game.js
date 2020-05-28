alert ('😎 Selamat Datang Pace..😁\n Di Game Super Cerdas🤣');
var tanya = true;

while (tanya){

			// menagkap pilihan player
			var p = prompt ('Pilih : batu, gunting, kertas');
			// menagkap pilihan computer
			// membangkitkan bilangan random
			var comp = Math.random();

			if (comp < 0.34)
			{
				comp='batu';
			}
			else if( comp >=0.34 && comp < 0.67){
				comp = 'gunting';
			}
			else {
				comp = 'kertas';
			}
			var hasil = '';

			// menentukan rules
			if (p == comp){
				 hasil = 'Sama 🙋‍♂️'

			}
			else if (p == 'batu'){
				// if ( comp == 'gunting'){
				// 	hasil= 'Ko Menang';
				// }else{
				// 	hasil= 'ko Kalah'
				// }
				hasil = (comp == 'gunting') ? 'Ko Menang😮' : 'Ko Kalah🤣';
			}
			else if (p == 'gunting'){
				hasil = ( comp == 'batu') ? 'Ko Kalah😛' : 'Ko Menang😒';
			}
			else if (p == 'kertas'){
				hasil = ( comp == 'gunting') ? 'Ko Kalah😂' : 'Ko Menang🙄';
			}
			else{
				hasil = 'KO PILIH BARANG APA INI';
			}
			// tampilkan hasilnya

			alert ('ko pilih :' + p + ' Sa Pilih :' + comp + '\n De punya hasil ' + hasil);

tanya = confirm ('Ko Mau Main Lagi Kah Tra 😝?')
}

alert (' Yoi Mantap Ko Su Main Game Ini. Thanks🦾😎')