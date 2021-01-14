document.addEventListener("DOMContentLoaded", function() {
	UpdateSoLuong();
	CapNhatPhong();
	Chonhang();
})
function UpdateSoLuong() {
	var soluong = document.querySelector('.so');
	var bang = document.getElementById('bang');
	var nhieudong = bang.querySelectorAll('tr');
	soluong.innerHTML = nhieudong.length - 1;
}
var nut_timkiem = document.querySelector('.nut_timkiem');
var txtTimkiem = document.getElementById('txtTimkiem');
var all_ten = document.querySelectorAll('#ten');
nut_timkiem.addEventListener('click', function() {
	var strTimkiem = txtTimkiem.value;
	txtTimkiem.addEventListener('change', function() {
		if(txtTimkiem.value == '') {
			for(var j = 0; j < all_ten.length; j++) {
				all_ten[j].parentElement.classList.remove('andi');
			}
		}
	})
	for(var i = 0; i < all_ten.length; i++) {
		if(all_ten[i].innerHTML.indexOf(strTimkiem) < 0) {
			all_ten[i].parentElement.classList.add('andi');
		}
	}
})
var Index,table1 = document.getElementById("bang");
function Chonhang()
{

	for(var i = 1; i < table1.rows.length; i++)
	{
		table1.rows[i].onclick = function()
		{
			Index = this.rowIndex;
			document.getElementById("maks3").value = this.cells[1].innerHTML;
			document.getElementById("ten3").value = this.cells[2].innerHTML;
			document.getElementById("chunha3").value = this.cells[3].innerHTML;
			document.getElementById("diadiem3").value = this.cells[4].innerHTML;
			document.getElementById("gia3").value = this.cells[5].innerHTML;
			document.getElementById("sophong3").value = this.cells[6].innerHTML;
			document.getElementById("tinhtrang3").value = this.cells[8].innerHTML;
		}
	}
}

function ktmks(makhachsan){
	//var ks=document.getElementById("ten2").value;
	var rg=/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm
	var tim=makhachsan.match(rg)
	if(tim==makhachsan){
		return true;
	}
	else {
		return false;
	}
}
function ktgia(gia){
	//var ks=document.getElementById("ten2").value;
	rg = /[0-9]{1,8}/;
	var tim=gia.match(rg);
	if(tim==gia){
		return true;
	}
	else {
		return false;
	}
}
function ktso(sophong){
	//var ks=document.getElementById("ten2").value;
	rg = /[0-9]{1,3}/;
	var tim=sophong.match(rg);
	if(tim==sophong){
		return true;
	}
	else {
		return false;
	}
}
function themmoi(){
		var maks1=document.getElementById("maks2"),
		tenks1=document.getElementById("ten2"),
		hinhanh1=document.getElementById("hinhanh2").value,
		chunha1=document.getElementById("chunha2").value,
		diadiem1=document.getElementById("diadiem2").value,
		giatien1=document.getElementById("gia2"),
		sophong1=document.getElementById("sophong2"),
		tbma = document.getElementsByClassName("thongbaoma")[0],
		tbten = document.getElementsByClassName("thongbaoten")[0],
		tbgia = document.getElementsByClassName("thongbaogia")[0],
		tbso= document.getElementsByClassName("thongbaoso")[0],
		tinhtrang1=document.getElementById("tinhtrang2");
		console.log(giatien1.value)
		if(maks1.value==''){
			maks1.style.borderColor  = 'red';
			tbma.style.opacity = 1;
			//return;
		}
		else {
			maks1.style.borderColor = 'green';
			tbma.style.opacity = 0;
		}
		if(tenks1.value==''){
			tenks1.style.borderColor  = 'red';
			tbten.style.opacity = 1;
			//return;
		}
		else {
			tenks1.style.borderColor = 'green';
			tbten.style.opacity = 0;
		}
		if(ktgia(giatien1.value)==false){

			giatien1.style.borderColor  = 'red';
			tbgia.style.opacity = 1;
			// return;
		}
		else {
			giatien1.style.borderColor = 'green';
			tbgia.style.opacity = 0;
		}
		if(ktso(sophong1.value)==false){

			sophong1.style.borderColor  = 'red';
			tbso.style.opacity = 1;
			return;
		}
		else {
			sophong1.style.borderColor = 'green';
			tbso.style.opacity = 0;
		}
		document.getElementById("bang").insertRow(-1).innerHTML=
		'<td><button class="btn btn-white" data-toggle="modal" data-target="#myModal2"><i class="glyphicon glyphicon-pencil "></i></button><button class="btn btn-danger"><i class="glyphicon glyphicon-trash " onclick="Xoa()"></i></button></td><td>'+maks1.value+'</td><td>'+tenks1.value+'</td><td>'+chunha1+'</td><td>'+diadiem1+'</td><td>'+giatien1.value+'</td><td>'+sophong1.value+'</td><td>'+hinhanh1+'</td><td>'+tinhtrang1.value+'</td>';
		'<td>1</td>';
		UpdateSoLuong();
		CapNhatPhong();
};

function Sua()
{
	var suama=document.getElementById("maks3").value;
	var suaten=document.getElementById("ten3").value;
	var suacn=document.getElementById("chunha3").value;
	var suadd=document.getElementById("diadiem3").value;
	var suagia=document.getElementById("gia3").value;
	var suasp=document.getElementById("sophong3").value;
	var suatr=document.getElementById("tinhtrang3").value;
	table1.rows[Index].cells[1].innerHTML = suama;
	table1.rows[Index].cells[2].innerHTML = suaten;
	table1.rows[Index].cells[3].innerHTML = suacn;
	table1.rows[Index].cells[4].innerHTML = suadd;
	table1.rows[Index].cells[5].innerHTML = suagia;
	table1.rows[Index].cells[6].innerHTML = suasp;
	table1.rows[Index].cells[8].innerHTML = suatr;
	CapNhatPhong();
}

function Xoa(){
	var table1 = document.getElementById("bang");
	for(var i = 1; i < table1.rows.length; i++)
	{
		table1.rows[i].onclick = function()
		{
			Index = this.rowIndex;
			var xoa=confirm("Bạn có muốn xóa không");
			if(xoa==true){
				table1.deleteRow(Index);
				UpdateSoLuong();
				CapNhatPhong();
			}
		}
	}
}
function CapNhatPhong() {
	var soluongphong = document.querySelector('.so2');
	var tbody = document.querySelector('tbody');
	var all_tr = tbody.querySelectorAll('tr');
	var s = 0;
	for(var i = 1; i < all_tr.length; i++) {
		var all_td = all_tr[i].querySelectorAll('td');
		if(all_td[8].innerHTML == 'Còn phòng') {
			s ++;
		}
	}
	soluongphong.innerHTML = s;
}
