# nodejsodev

NodeJs ile kitapçı kayıt sayfası oluşturmak.
kitapci dosyası backup file - PostgreSQL version:10

Bu uygulamada NodeJS Express module yardımı ile oluşturulan bir servera HTTP Requestleri (GET, POST, PUT, DELETE) gönderilerek kitapçıdaki kitaplar PostgreSQL veritabanı yönetim sistemi üzerinden kontrol edilerek bir tablo ile kullanıcıya sunulmuştur. POST requesti için form, diğer requestler içinse Jquery-AJAX methodu kullanılmıştır. .jade uzantısının çalışma mantığını daha iyi anlamak için AJAX methodu sonrasında dataları göndermeyip, server tarafında .jade dosyasını hazırladığım için ekleme, silme, güncelleme işlemlerinden sonra web sayfası kendini yenileyerek güncel tabloyu oluşturmaktadır. Bunun yerine AJAX methoduna veritabanındaki datayı göndererek ve o dataları client tarafında HTML'e yazdırarak sayfayı güncellemeden de güncel kodlara ulaşmak mümkündür (AJAX methodu success işlemi sonucu gelen datayı jquery append ile ilgili HTML tag'ına id ile birlikte ekleyebilirdim.).
