#!/bin/bash

# سكريبت لنشر موقع Eco Technology على Raspberry Pi
# استخدم: ./deploy-to-raspberry.sh [عنوان-IP] [اسم-المستخدم]

# التحقق من المعلمات
if [ "$#" -lt 2 ]; then
    echo "الاستخدام: $0 [عنوان-IP-الخاص-بـ-Raspberry-Pi] [اسم-المستخدم]"
    echo "مثال: $0 192.168.1.100 pi"
    exit 1
fi

RASPBERRY_IP=$1
RASPBERRY_USER=$2
REMOTE_DIR="/home/$RASPBERRY_USER/ecotech-landing"

echo "جاري بناء المشروع..."
npm run build

if [ $? -ne 0 ]; then
    echo "فشل بناء المشروع. الرجاء التحقق من الأخطاء وإعادة المحاولة."
    exit 1
fi

echo "جاري التحقق من الاتصال بـ Raspberry Pi..."
ssh -q $RASPBERRY_USER@$RASPBERRY_IP exit
if [ $? -ne 0 ]; then
    echo "لا يمكن الاتصال بـ Raspberry Pi. الرجاء التحقق من عنوان IP واسم المستخدم."
    exit 1
fi

echo "جاري التحقق من وجود المجلد على Raspberry Pi..."
ssh $RASPBERRY_USER@$RASPBERRY_IP "if [ ! -d $REMOTE_DIR ]; then mkdir -p $REMOTE_DIR; fi"

echo "جاري نقل الملفات إلى Raspberry Pi..."
rsync -avz --delete dist/ $RASPBERRY_USER@$RASPBERRY_IP:$REMOTE_DIR/dist/
rsync -avz package.json $RASPBERRY_USER@$RASPBERRY_IP:$REMOTE_DIR/

echo "جاري تثبيت التبعيات على Raspberry Pi..."
ssh $RASPBERRY_USER@$RASPBERRY_IP "cd $REMOTE_DIR && npm install --production --legacy-peer-deps"

echo "جاري إعادة تشغيل خدمة Nginx..."
ssh $RASPBERRY_USER@$RASPBERRY_IP "sudo systemctl restart nginx"

echo "تم نشر الموقع بنجاح على Raspberry Pi!"
echo "يمكنك الوصول إلى الموقع من خلال: http://$RASPBERRY_IP"

exit 0
