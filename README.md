# İlk Spring MVC Denemesi

Spring MVC Form Handling, URL Mapping, Input Validation, Insert data to mysql server with spring jdbc örnekleri.


## Gereksinimler
- JDK 1.8
- Eclipse IDE veya Maven
- Tomcat 8.5
- MySQL Server


## Kurulum
1) Gereksinimler kurulu olmalı. (Maven Eclipse IDE'de yerleşik olarak varsayılan olarak bulunmaktadır.)

2) lokumcu.sql dosyasını MySQL sunucunuza import etmelisiniz. terminal kullanıcısı iseniz aşağıdaki kod ile sql dosyasını import edebilirsiniz.

3) resources içerisinde yer alan user-beans.xml dosyasında gerekli mysql konfigürasyon düzenlemelerini yapmalısınız.

4) Projeyi Eclipse IDE'ye Import yaptıktan sonra Project Properties içerisindeki sol sekmeden Project Faucets olarak Dynamic Web Module ve Java seçili olmalıdır.

5) Servers Sekmesinden Tomcat 8.5 üzerinde sağ tık yapıp Add and Remove seçip sol tarafta görünün projeyi Add butonuna tıklayıp Configured alanına taşınmalı.


## Deploy İşlemi

WAR uzantılı olarak projemizi export edip Tomcat'in kurulu dizini içerisindeki webapps klasörü içerisine taşımanız yeterlidir.

## Notlar
sbMask plugini, veri girişi yapılan noktalarda yalnızca backscape ile silme işlemini destekliyor. Select Range, paste event tarzı diğer eventler desteklenmemekte.

sbValidate ve sbMask fonksiyonları birer jQuery kütüphaneleridir. sbValidate için ek olarak showPopup fonksiyonu script.js'ten çağırılmaktadır.

Sweetalert2'nin güncel sürümünde fire sonrası scroll sorunu mevcut internette bu tip sorunlarla karşılaşılmış fix gelene kadar geçici bir çözüm uygulandı.

datepicker ile sbValidate uyumlu çalışabilmesi için ufak bir sleep time gerekiyordu o yüzden sbValidate fonksiyonuna SleepTıme değeri eklendi.
