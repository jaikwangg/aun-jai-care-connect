import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  MapPin, 
  Clock, 
  Phone, 
  Car,
  Navigation,
  Calendar,
  User,
  Bell,
  CreditCard,
  Star,
  Check
} from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import PricingEstimator from './PricingEstimator';

const FamilyDashboard = () => {
  const { user } = useApp();
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center warm-glow">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-thai-heading font-bold text-primary">Oonjai Care</h1>
                <p className="text-sm text-muted-foreground font-thai">สวัสดี คุณ{user?.nameTH}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 text-xs bg-highlight">2</Badge>
              </Button>
              <Button variant="ghost" onClick={() => navigate('/profile')}>
                <User className="w-4 h-4 mr-2" />
                <span className="font-thai">โปรไฟล์</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-thai-heading font-bold text-gray-800 mb-6 caring-pulse">
            ดูแลคนที่คุณรัก<br />
            <span className="text-primary">ด้วยความใส่ใจ</span>
          </h2>
          <p className="text-xl text-gray-600 font-thai mb-12 leading-relaxed">
            ติดตามการดูแลแบบเรียลไทม์ พร้อมบริการที่ตอบโจทย์ทุกความต้องการ
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
              <CardContent className="p-6 flex items-center justify-center flex-col">
                <Clock className="w-8 h-8 text-highlight mb-3" />
                <div className="text-2xl font-thai-heading font-bold text-gray-800">24/7</div>
                <p className="text-gray-600 font-thai">บริการตลอด 24 ชั่วโมง</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
              <CardContent className="p-6 flex items-center justify-center flex-col">
                <MapPin className="w-8 h-8 text-accent mb-3" />
                <div className="text-2xl font-thai-heading font-bold text-gray-800">15+</div>
                <p className="text-gray-600 font-thai">สาขาในกรุงเทพฯ</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
              <CardContent className="p-6 flex items-center justify-center flex-col">
                <Heart className="w-8 h-8 text-primary mb-3" />
                <div className="text-2xl font-thai-heading font-bold text-gray-800">100+</div>
                <p className="text-gray-600 font-thai">ผู้ดูแลที่พร้อมให้บริการ</p>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button size="lg" className="touch-button font-thai">
              <Phone className="w-5 h-5 mr-2" />
              ติดต่อผู้ดูแล
            </Button>
            <Button size="lg" className="touch-button font-thai">
              <Car className="w-5 h-5 mr-2" />
              จองบริการเดินทาง
            </Button>
            <Button size="lg" className="touch-button font-thai">
              <CreditCard className="w-5 h-5 mr-2" />
              จัดการค่าใช้จ่าย
            </Button>
          </div>
        </div>
      </section>


      {/* Service Offerings Section (Consistent with Packages) */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-3xl font-thai-heading font-bold text-gray-800 mb-8 text-center">
          บริการของเรา
        </h3>
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
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
      </section>

      {/* Pricing Estimator Section */}
      <PricingEstimator />

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-white/20 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-thai-heading font-bold text-primary">Oonjai Care</span>
            </div>
            <p className="text-gray-600 font-thai">
              © 2024 Oonjai Care - อุ่นใจดูแล | ดูแลด้วยใจ เชื่อใจได้เลย
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FamilyDashboard;
