
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Heart, 
  Check, 
  Star, 
  Clock, 
  Shield, 
  Phone,
  Car,
  Home
} from 'lucide-react';

const Packages = () => {
  const navigate = useNavigate();

  const packages = [
    {
      id: 'peace-of-mind',
      title: 'Peace-of-Mind Monthly',
      titleTH: 'แพ็กเกจอุ่นใจรายเดือน',
      price: 4990,
      originalPrice: 6000,
      visits: '1-2 ครั้ง/สัปดาห์',
      popular: true,
      features: [
        'การดูแลทั่วไป 8 ชั่วโมง/ครั้ง',
        'ผู้ดูแลประจำที่ผ่านการตรวจสอบ',
        'รายงานการดูแลแบบเรียลไทม์',
        'บริการฉุกเฉินตลอด 24 ชั่วโมง',
        'ปรึกษาพยาบาลออนไลน์ฟรี',
        'ประกันการดูแล 50,000 บาท'
      ],
      color: 'accent'
    },
    {
      id: 'one-time',
      title: 'One-Time Service',
      titleTH: 'บริการครั้งเดียว',
      price: 990,
      visits: 'ตามต้องการ',
      popular: false,
      features: [
        'เลือกประเภทบริการได้',
        'ผู้ดูแลที่ผ่านการตรวจสอบ',
        'ค่าใช้จ่ายตามเวลาจริง',
        'จองล่วงหน้า 24 ชั่วโมง',
        'ยกเลิกได้ฟรี (ก่อน 12 ชม.)',
        'ใบเสร็จอิเล็กทรอนิกส์'
      ],
      color: 'primary'
    }
  ];

  const serviceTypes = [
    {
      icon: Car,
      title: 'พาไปโรงพยาบาล',
      price: 'เริ่มต้น 1,200 บาท',
      duration: '4-8 ชั่วโมง'
    },
    {
      icon: Home,
      title: 'ดูแลตลอดคืน',
      price: 'เริ่มต้น 2,800 บาท',
      duration: '12-24 ชั่วโมง'
    },
    {
      icon: Heart,
      title: 'เพื่อนคู่คิด',
      price: 'เริ่มต้น 600 บาท',
      duration: '2-6 ชั่วโมง'
    }
  ];

  const handleSubscribe = (packageId: string) => {
    if (packageId === 'peace-of-mind') {
      // Simulate subscription flow
      alert('ระบบจะนำไปสู่หน้าชำระเงินรายเดือน (Stripe)');
    } else {
      navigate('/book-care');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="font-thai"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                กลับ
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-lg font-thai-heading font-bold text-primary">แพ็กเกจและราคา</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-thai-heading font-bold text-gray-800 mb-4">
            เลือกแพ็กเกจที่เหมาะกับคุณ
          </h2>
          <p className="text-lg text-gray-600 font-thai max-w-2xl mx-auto leading-relaxed">
            บริการดูแลผู้สูงอายุคุณภาพสูง ด้วยผู้ดูแลมืออาชีพที่ผ่านการตรวจสอบ
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative bg-white/80 backdrop-blur-sm border-2 transition-all duration-300 transform hover:scale-105 ${
                pkg.popular 
                  ? 'border-accent/30 shadow-xl ring-2 ring-accent/20' 
                  : 'border-white/30 hover:border-primary/30'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent font-thai px-4 py-1">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    ยอดนิยม
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  pkg.color === 'accent' ? 'bg-accent/20' : 'bg-primary/20'
                }`}>
                  <Heart className={`w-8 h-8 ${
                    pkg.color === 'accent' ? 'text-accent' : 'text-primary'
                  }`} />
                </div>
                <CardTitle className="font-thai-heading text-xl mb-2">
                  {pkg.titleTH}
                </CardTitle>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-3xl font-thai-heading font-bold text-gray-800">
                    {pkg.price.toLocaleString()} บาท
                  </span>
                  {pkg.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {pkg.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground font-thai">{pkg.visits}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        pkg.color === 'accent' ? 'bg-accent' : 'bg-primary'
                      }`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="font-thai text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button
                  onClick={() => handleSubscribe(pkg.id)}
                  className={`w-full touch-button font-thai ${
                    pkg.color === 'accent' ? 'bg-accent hover:bg-accent/90' : ''
                  }`}
                >
                  {pkg.id === 'peace-of-mind' ? 'สมัครแพ็กเกจ' : 'จองบริการ'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Types Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
          <h3 className="text-2xl font-thai-heading font-bold text-center text-gray-800 mb-8">
            ประเภทบริการที่ให้
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {serviceTypes.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="text-center p-6 bg-white/60 rounded-xl border border-white/30">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-thai-heading font-semibold text-lg mb-2">
                    {service.title}
                  </h4>
                  <p className="text-primary font-medium font-thai mb-1">
                    {service.price}
                  </p>
                  <div className="flex items-center justify-center text-sm text-muted-foreground font-thai">
                    <Clock className="w-3 h-3 mr-1" />
                    {service.duration}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-thai-heading font-semibold mb-2">ผู้ดูแลที่ได้รับการตรวจสอบ</h4>
            <p className="text-sm text-muted-foreground font-thai">
              ตรวจสอบประวัติ ใบประกาศนียบัตร และประสบการณ์ทุกคน
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-thai-heading font-semibold mb-2">ติดต่อได้ตลอด 24 ชั่วโมง</h4>
            <p className="text-sm text-muted-foreground font-thai">
              ทีมงานพร้อมให้ความช่วยเหลือทุกเมื่อที่ต้องการ
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-highlight/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="w-6 h-6 text-highlight" />
            </div>
            <h4 className="font-thai-heading font-semibold mb-2">ใส่ใจทุกรายละเอียด</h4>
            <p className="text-sm text-muted-foreground font-thai">
              รายงานการดูแลแบบละเอียด และอัปเดตแบบเรียลไทม์
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
