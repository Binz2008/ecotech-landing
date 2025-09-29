# استضافة موقع Eco Technology على Raspberry Pi

هذا الدليل يشرح كيفية استخدام جهاز Raspberry Pi لاستضافة موقع Eco Technology.

## المتطلبات

- جهاز Raspberry Pi (يُفضل الإصدار 4 أو أحدث مع ذاكرة 4GB على الأقل)
- بطاقة SD بسعة 16GB أو أكثر
- نظام Raspberry Pi OS (سابقاً Raspbian) مثبت على البطاقة
- اتصال إنترنت مستقر
- عنوان IP ثابت أو خدمة DDNS

## خطوات الإعداد

### 1. تثبيت متطلبات النظام

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install -y nodejs npm git nginx
```

### 2. تثبيت Node.js الإصدار الأحدث (اختياري)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

### 3. استنساخ المشروع من GitHub

```bash
cd /home/pi
git clone https://github.com/Binz2008/ecotech-landing.git
cd ecotech-landing
```

### 4. تثبيت تبعيات المشروع وبناء الموقع

```bash
npm install --legacy-peer-deps
npm run build
```

### 5. إعداد Nginx كخادم ويب

إنشاء ملف تكوين لموقع Eco Technology:

```bash
sudo nano /etc/nginx/sites-available/ecotech
```

أضف التكوين التالي:

```nginx
server {
    listen 80;
    server_name ecotech.local; # استبدل بعنوان النطاق الخاص بك أو IP

    root /home/pi/ecotech-landing/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

تفعيل الموقع وإعادة تشغيل Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/ecotech /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 6. إعداد خدمة النظام للتشغيل التلقائي (اختياري)

إذا كنت ترغب في تشغيل خادم تطوير بدلاً من الإصدار المبني:

```bash
sudo nano /etc/systemd/system/ecotech.service
```

أضف المحتوى التالي:

```ini
[Unit]
Description=Eco Technology Website
After=network.target

[Service]
Type=simple
User=pi
WorkingDirectory=/home/pi/ecotech-landing
ExecStart=/usr/bin/npm run dev
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

تفعيل وتشغيل الخدمة:

```bash
sudo systemctl enable ecotech
sudo systemctl start ecotech
```

### 7. إعداد اسم النطاق (اختياري)

إذا كنت ترغب في استخدام اسم نطاق بدلاً من عنوان IP:

1. قم بتسجيل اسم نطاق من مزود خدمة النطاقات
2. قم بإعداد خدمة DDNS إذا لم يكن لديك عنوان IP ثابت
3. قم بتوجيه اسم النطاق إلى عنوان IP الخاص بجهاز Raspberry Pi
4. قم بتحديث ملف تكوين Nginx باسم النطاق الجديد

## الأمان

لتأمين الموقع، يُنصح بإعداد HTTPS باستخدام Let's Encrypt:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## الصيانة

### تحديث الموقع

لتحديث الموقع عند إجراء تغييرات:

```bash
cd /home/pi/ecotech-landing
git pull
npm install --legacy-peer-deps
npm run build
```

### مراقبة الأداء

يمكنك مراقبة أداء الخادم باستخدام:

```bash
htop
```

## الاعتبارات

- **الأداء**: Raspberry Pi قد يكون أبطأ من خوادم الويب التقليدية، لذا يُنصح باستخدامه للمواقع ذات الحركة المنخفضة أو للاختبار.
- **الاستقرار**: تأكد من وجود مصدر طاقة مستقر وتبريد مناسب لجهاز Raspberry Pi.
- **النسخ الاحتياطي**: قم بإعداد نظام للنسخ الاحتياطي المنتظم لبطاقة SD.
- **الأمان**: قم بتحديث النظام بانتظام وتأمين الجهاز ضد الوصول غير المصرح به.

## الخلاصة

استضافة موقع Eco Technology على Raspberry Pi يمكن أن تكون حلاً فعالاً من حيث التكلفة للبيئات التطويرية أو المواقع الصغيرة. ومع ذلك، للمواقع الإنتاجية ذات الحركة العالية، قد ترغب في النظر في خيارات استضافة أكثر قوة.
