document.addEventListener("DOMContentLoaded", function() {
	UpdateSoLuong();
})
function UpdateSoLuong() {

	var soluong = document.querySelector('.so');
	// var bang = document.getElementById('bang');
	// var nhieudong = bang.querySelectorAll('tr');
	// soluong.innerHTML = nhieudong.length - 1;
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
		var makh1=document.getElementById("makh2"),
		tenkh1=document.getElementById("ten2"),
		email1=document.getElementById("email2").value,
		sdt1=document.getElementById("sdt2").value,
		cmt1=document.getElementById("cmt2").value,
		diachi1=document.getElementById("diachi2"),
		// tbma = document.getElementsByClassName("thongbaoma")[0],
		// tbten = document.getElementsByClassName("thongbaoten")[0],
		// tbgia = document.getElementsByClassName("thongbaogia")[0],
		// tbso= document.getElementsByClassName("thongbaoso")[0],
		// tinhtrang1=document.getElementById("tinhtrang2");
		// console.log(giatien1.value)
		// if(maks1.value==''){
		// 	maks1.style.borderColor  = 'red';
		// 	tbma.style.opacity = 1;
		// 	//return;
		// }
		// if(tenks1.value==''){
		// 	tenks1.style.borderColor  = 'red';
		// 	tbten.style.opacity = 1;
		// 	//return;
		// }
		// if(ktgia(giatien1.value)==false){

		// 	giatien1.style.borderColor  = 'red';
		// 	tbgia.style.opacity = 1;
		// 	// return;
		// }
		// if(ktso(sophong1.value)==false){

		// 	sophong1.style.borderColor  = 'red';
		// 	tbso.style.opacity = 1;
		// 	return;
		// }
		bang = document.querySelector('#bang');
		bang.insertRow(-1).innerHTML=
		'<td><button class="btn btn-white" data-toggle="modal" data-target="#myModal2"><i class="glyphicon glyphicon-pencil "></i></button><button class="btn btn-danger"><i class="glyphicon glyphicon-trash " onclick="Xoa()"></i></button></td><td>'+makh1.value+'</td><td>'+tenkh1.value+'</td><td>'+email1+'</td><td>'+sdt1+'</td><td>'+cmt1+'</td><td>'+diachi1.value+'</td>';
		'<td>1</td>';
		UpdateSoLuong();
};

function Sua()
{
	var suama=document.getElementById("makh3").value;
	var suaten=document.getElementById("ten3").value;
	var suaem=document.getElementById("email3").value;
	var suasdt=document.getElementById("sdt3").value;
	var suacmt=document.getElementById("cmt3").value;
	var suadc=document.getElementById("diachi3").value;
	table1.rows[Index].cells[1].innerHTML = suama;
	table1.rows[Index].cells[2].innerHTML = suaten;
	table1.rows[Index].cells[3].innerHTML = suaem;
	table1.rows[Index].cells[4].innerHTML = suasdt;
	table1.rows[Index].cells[5].innerHTML = suacmt;
	table1.rows[Index].cells[6].innerHTML = suadc;
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
			}
		}
	}
}