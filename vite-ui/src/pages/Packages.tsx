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
import TrustSafety from './TrustSafety';

const Packages = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      titleTh: "อุ่นใจแคร์ยู",
      titleEn: "Oonjai Care U",
      description: "บริการพาส่งโรงพยาบาล พร้อมประสานงานครบวงจร",
      icon: "🏥",
      features: ["พาส่งโรงพยาบาล", "ประสานงานแพทย์", "รายงานผลตรวจ", "จัดการนัดหมาย"],
      price: "เริ่มต้น ฿800/วัน",
      gradient: "from-blue-500 to-blue-600",
      popular: false
    },
    {
      id: 2,
      titleTh: "สุขพาไป",
      titleEn: "Sook pa Pai",
      description: "พาเที่ยว ทำธุระ ไปวัด ไปธนาคาร ตามความต้องการ",
      icon: "🚶‍♂️",
      features: ["พาทำธุระ", "ไปวัดทำบุญ", "ช้อปปิ้ง", "พาเที่ยวตามใจ"],
      price: "เริ่มต้น ฿400/ชั่วโมง",
      gradient: "from-green-500 to-green-600",
      popular: true
    },
    {
      id: 3,
      titleTh: "เยี่ยมแทนใจ",
      titleEn: "Yiam Tan-Jai",
      description: "เยี่ยมบ้าน เช็คสุขภาพ และให้กำลังใจ แพ็กเกจ 3-5 วัน",
      icon: "🏠",
      features: ["เยี่ยมบ้านประจำ", "เช็คสุขภาพ", "คุยเล่นให้กำลังใจ", "รายงานสุขภาพ"],
      price: "เริ่มต้น ฿1,200/แพ็กเกจ",
      gradient: "from-orange-500 to-orange-600",
      popular: false
    },
    {
      id: 4,
      titleTh: "เคียงข้างอุ่นใจ",
      titleEn: "Khiang-Khang Oonjai",
      description: "ผู้ดูแลประจำบ้าน มืออาชีพและผู้เชี่ยวชาญ",
      icon: "👨‍⚕️",
      features: ["ดูแลประจำบ้าน", "ผู้ดูแลมืออาชีพ", "Basic / Expert", "รายชั่วโมง/วัน/สัปดาห์"],
      price: "เริ่มต้น ฿600/ชั่วโมง",
      gradient: "from-purple-500 to-purple-600",
      popular: false
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

  const handleSubscribe = (serviceId) => {
    // You can update this logic as needed
    if (serviceId === 1) {
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
            เลือกบริการที่เหมาะกับคุณ
          </h2>
          <p className="text-lg text-gray-600 font-thai max-w-2xl mx-auto leading-relaxed">
            บริการดูแลผู้สูงอายุคุณภาพสูง ด้วยผู้ดูแลมืออาชีพที่ผ่านการตรวจสอบ
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`relative bg-white/80 backdrop-blur-sm border-2 transition-all duration-300 transform hover:scale-105 ${
                service.popular 
                  ? 'border-accent/30 shadow-xl ring-2 ring-accent/20' 
                  : 'border-white/30 hover:border-primary/30'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent font-thai px-4 py-1">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    ยอดนิยม
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br ${service.gradient} text-3xl`}>
                  {service.icon}
                </div>
                <CardTitle className="font-thai-heading text-xl mb-2">
                  {service.titleTh}
                </CardTitle>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg font-thai-heading font-bold text-gray-800">
                    {service.titleEn}
                  </span>
                </div>
                <p className="text-muted-foreground font-thai mt-2">{service.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-primary">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="font-thai text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center text-xl font-bold text-primary">
                  {service.price}
                </div>
                <Button
                  onClick={() => handleSubscribe(service.id)}
                  className={`w-full touch-button font-thai ${
                    service.popular ? 'bg-accent hover:bg-accent/90' : ''
                  }`}
                >
                  {service.popular ? 'สมัครแพ็กเกจ' : 'จองบริการ'}
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

        {/* Trust & Safety Section */}
        <div className="mt-16">
          <TrustSafety />
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
