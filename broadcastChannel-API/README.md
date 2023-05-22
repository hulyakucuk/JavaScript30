# BroadcastChannel API
----------------------------------
Bir kanal üzerinden mesajlar göndermek ve almak için kullanılır. Kanal, aynı adı taşıyan farklı tarayıcı pencereleri veya sekme arasında veri alışverişi yapmaya izin verir. Farklı sekmeler veya pencereler arasında gerçek zamanlı veri paylaşımını mümkün kılar.

## BroadcastChannel API Kullanımı 
----------------------------------
İlk olarak, bir kanal oluşturulur ve bu kanal üzerinden mesajlar gönderilir ve alınır. Kanalı kullanarak gönderilen mesajlar, aynı kanala abone olan tüm pencerelere veya sekmelere iletilir.

Kanalı oluştur
const channel = new BroadcastChannel('my-channel');

Mesaj gönder
channel.postMessage('Hello from sender');

Mesajı al
channel.onmessage = function(event) {
  console.log('Received message:', event.data);
};

Yukarıdaki örnekte, "my-channel" adında bir kanal oluşturulur. postMessage yöntemi aracılığıyla "Hello from sender" mesajı gönderilir. Ardından, onmessage olayı üzerinden gelen mesajlar dinlenir ve konsola yazdırılır.