
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Phone, 
  Car, 
  Video, 
  Activity, 
  Bell, 
  Calendar,
  Droplets,
  Pill,
  User,
  Navigation
} from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';

const SeniorDashboard = () => {
  const { user } = useApp();
  const navigate = useNavigate();
  const [timeUntilVisit, setTimeUntilVisit] = React.useState('2 ชั่วโมง 30 นาที');

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

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Visit Card */}
            <Card className="bg-white/80 backdrop-blur-sm border border-white/30 warm-glow">
              <CardHeader>
                <CardTitle className="font-thai-heading flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  การเยียมครั้งถัดไป
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" />
                    <AvatarFallback className="bg-accent text-white font-thai-heading">กมล</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-thai-heading font-semibold text-lg">คุณกมลวรรณ จันทร์เพ็ญ</h3>
                    <p className="text-muted-foreground font-thai">ผู้ดูแลมืออาชีพ • ประสบการณ์ 5 ปี</p>
                    <div className="flex items-center mt-2">
                      <Badge variant="secondary" className="mr-2 font-thai">การดูแลทั่วไป</Badge>
                      <Badge variant="outline" className="font-thai">14:00 - 18:00</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-thai-heading font-bold text-primary caring-pulse">
                      {timeUntilVisit}
                    </div>
                    <p className="text-sm text-muted-foreground font-thai">จะมาถึง</p>
                  </div>
                </div>
                <div className="mt-4 flex space-x-2">
                  <Button size="sm" className="font-thai touch-button">
                    <Phone className="w-4 h-4 mr-2" />
                    โทรหาผู้ดูแล
                  </Button>
                  <Button size="sm" variant="outline" className="font-thai touch-button">
                    <Navigation className="w-4 h-4 mr-2" />
                    ติดตามตำแหน่ง
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions Grid */}
            <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
              <CardHeader>
                <CardTitle className="font-thai-heading">เมนูด่วน</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col font-thai touch-button bg-accent/5 hover:bg-accent/10 border-accent/20"
                  >
                    <Phone className="w-6 h-6 text-accent mb-2" />
                    โทรหาผู้ดูแล
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col font-thai touch-button bg-primary/5 hover:bg-primary/10 border-primary/20"
                    onClick={() => navigate('/book-care')}
                  >
                    <Car className="w-6 h-6 text-primary mb-2" />
                    จองการเดินทาง
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col font-thai touch-button bg-highlight/5 hover:bg-highlight/10 border-highlight/20"
                  >
                    <Video className="w-6 h-6 text-highlight mb-2" />
                    วิดีโอคอลครอบครัว
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex-col font-thai touch-button bg-green-500/5 hover:bg-green-500/10 border-green-500/20"
                  >
                    <Activity className="w-6 h-6 text-green-500 mb-2" />
                    กิจกรรมวันนี้
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Daily Checklist */}
            <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
              <CardHeader>
                <CardTitle className="font-thai-heading text-lg">รายการประจำวัน</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                      <Pill className="w-4 h-4 text-accent" />
                    </div>
                    <span className="font-thai">ทานยา</span>
                  </div>
                  <Badge className="bg-accent font-thai">เสร็จแล้ว</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Droplets className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-thai">ดื่มน้ำ</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-thai">6/8 แก้ว</div>
                    <Progress value={75} className="w-16 h-2" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-highlight/20 rounded-full flex items-center justify-center">
                      <Activity className="w-4 h-4 text-highlight" />
                    </div>
                    <span className="font-thai">ออกกำลังกาย</span>
                  </div>
                  <Badge variant="outline" className="font-thai">รอดำเนินการ</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Today's Schedule */}
            <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
              <CardHeader>
                <CardTitle className="font-thai-heading text-lg">กำหนดการวันนี้</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-accent/5 rounded-lg border border-accent/10">
                  <div className="w-2 h-8 bg-accent rounded-full"></div>
                  <div>
                    <div className="font-thai font-medium">14:00 - 18:00</div>
                    <div className="text-sm text-muted-foreground font-thai">การดูแลทั่วไป</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="w-2 h-8 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="font-thai font-medium">19:00</div>
                    <div className="text-sm text-muted-foreground font-thai">ทานยาตอนเย็น</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeniorDashboard;
