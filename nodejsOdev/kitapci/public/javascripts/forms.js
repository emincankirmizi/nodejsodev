function veriHatasi(){
    var fromkitap = document.getElementById("title").value;
    var fromyazar = document.getElementById("yazar").value;
    if( fromkitap === "" || fromyazar === ""){
      alert("Kitap Adı veya Yazar Adı boş olmamalıdır.");
    }
    else{
        alert('Veri başarıyla eklendi');
        location.reload();
    }
};

function silHatasi(){
    var fromkitap = document.getElementById("kitapID").value;
    if( fromkitap === ""){
      alert("Kitap ID boş olmamalıdır.");
    }
    else{
      $.ajax({
        url: '/sil?id=' + fromkitap,
        type: 'DELETE',
        success: function(result) {
            // Do something with the result
            console.log(result);
        }
    });
        alert('Veri başarıyla silindi');
        location.reload();
    }
};

function guncelHatasi(){
    var fromkitap = parseInt(document.getElementById("kitapID").value);
    var fromtarih = document.getElementById("tarih").value;
    var fromalan = document.getElementById("alan").value;
    if( fromkitap === ""){
      alert("Kitap ID boş olmamalıdır.");
    }
    else{
      $.ajax({
        url: '/guncelle?' + 'id=' + fromkitap + '&alan=' + fromalan + '&tarih=' + "'" + fromtarih + "'",
        type: 'PUT',
        success: function(result) {
            // Do something with the result
            console.log(result);
        }
    });
        alert('Veri başarıyla güncellendi');
        console.log(fromtarih);
        location.reload();

    }
};