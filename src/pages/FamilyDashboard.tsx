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
  CreditCard
} from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';

const FamilyDashboard = () => {
  const { user } = useApp();
  const navigate = useNavigate();

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
                <h1 className="text-xl font-thai-heading font-bold text-primary">Unjai Care</h1>
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

      {/* Care Plan Section */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-3xl font-thai-heading font-bold text-gray-800 mb-8 text-center">
          แผนการดูแล
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Plan Card 1 */}
          <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
            <CardHeader>
              <CardTitle className="text-xl font-thai-heading">การดูแลทั่วไป</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 font-thai mb-4">
                บริการดูแลพื้นฐานสำหรับผู้สูงอายุที่บ้าน
              </p>
              <ul className="list-disc list-inside text-gray-600 font-thai">
                <li>ดูแลความสะอาดส่วนตัว</li>
                <li>เตรียมอาหารและป้อน</li>
                <li>ช่วยเหลือในการเคลื่อนไหว</li>
              </ul>
              <Button className="mt-4 font-thai touch-button">ดูรายละเอียด</Button>
            </CardContent>
          </Card>

          {/* Plan Card 2 */}
          <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
            <CardHeader>
              <CardTitle className="text-xl font-thai-heading">การดูแลพิเศษ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 font-thai mb-4">
                บริการดูแลสำหรับผู้ที่มีความต้องการพิเศษ เช่น ผู้ป่วยอัลไซเมอร์
              </p>
              <ul className="list-disc list-inside text-gray-600 font-thai">
                <li>การดูแลด้านการแพทย์เบื้องต้น</li>
                <li>กิจกรรมบำบัด</li>
                <li>การดูแลด้านจิตใจและสังคม</li>
              </ul>
              <Button className="mt-4 font-thai touch-button">ดูรายละเอียด</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-white/20 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-thai-heading font-bold text-primary">Unjai Care</span>
            </div>
            <p className="text-gray-600 font-thai">
              © 2024 Unjai Care - อุ่นใจดูแล | ดูแลด้วยใจ เชื่อใจได้
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FamilyDashboard;
