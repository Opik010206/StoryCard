// Fungsi Tombol
const Tombol = document.getElementById("tombol"); //Tombol Save
const tForm = document.getElementById('tForm'); //Tombol Form
const batal = document.getElementById('batal'); //Tombol Batal

let form = document.getElementById('form');
let cform = document.querySelector('.cform');

// Tombol Form
tForm.addEventListener('click', function(){
    form.style.display='flex';
    setTimeout(() => {
        cform.classList.toggle('cfclose');
    }, 100);
});

// Tombol Batal
batal.addEventListener('click', function(e){
    e.preventDefault();
    setTimeout(() => {
        form.style.display='none';
    }, 200);
    cform.classList.toggle('cfclose');
});

// Tombol Simpan
Tombol.addEventListener("click", function (e) {
    e.preventDefault();

    let caption = document.getElementById('caption');
    
    let input = document.getElementById('judul');
    let desc = document.getElementById('desc');
    
    // Buat Element Box
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    const Ctr = document.getElementById("container");
    let tJudul = document.createTextNode(input.value);
    let tP = document.createTextNode(desc.value);
    // Nambahin Atribut Pada Element
    div.classList.add("box");
    div.setAttribute("id", "box");

    if(input.value == '' || desc.value == ''){
        alert('Maaf data anda tidak ditambahkan, salah satu atau kedua inputannya harus di isi ya.. :)');
    }else{
        caption.style.display="none";

        // Memasukkan Element Ke Element Lain
        div.appendChild(h2);
        h2.appendChild(tJudul);
        div.appendChild(p);
        p.appendChild(tP);
        Ctr.insertBefore(div, tForm);
    }
  
  input.value='';
  desc.value='';

  setTimeout(() => {
        form.style.display='none';
    }, 200);
    cform.classList.toggle('cfclose');
});
