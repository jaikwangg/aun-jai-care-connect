
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Heart, 
  MapPin, 
  Clock, 
  Camera, 
  Phone, 
  Plus, 
  Navigation,
  User,
  Bell,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';

const FamilyDashboard = () => {
  const { user } = useApp();
  const navigate = useNavigate();

  // Mock data for timeline updates
  const timelineUpdates = [
    {
      id: 1,
      timestamp: '14:30',
      text: 'เดินทางถึงบ้านแล้ว กำลังเริ่มดูแลคุณยาย',
      mediaURL: null,
      type: 'arrival'
    },
    {
      id: 2,
      timestamp: '15:15',
      text: 'ให้ยาตามเวลาแล้ว คุณยายทานครบทุกเม็ด',
      mediaURL: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      type: 'medication'
    },
    {
      id: 3,
      timestamp: '16:00',
      text: 'กำลังพาไปเดินในสวนเพื่อออกกำลังกาย',
      mediaURL: null,
      type: 'activity'
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
                <h1 className="text-xl font-thai-heading font-bold text-primary">Unjai Care</h1>
                <p className="text-sm text-muted-foreground font-thai">สวัสดี คุณ{user?.nameTH}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 text-xs bg-highlight">3</Badge>
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
            {/* Live Tracking Card */}
            <Card className="bg-white/80 backdrop-blur-sm border border-white/30 warm-glow">
              <CardHeader>
                <CardTitle className="font-thai-heading flex items-center justify-between">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    การติดตามสด
                  </div>
                  <Badge className="bg-accent font-thai caring-pulse">กำลังดูแล</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-4 relative overflow-hidden">
                  {/* Mock map with route */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100"></div>
                  <div className="relative z-10 text-center">
                    <Navigation className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-thai text-sm text-gray-600">แผนที่จะแสดงที่นี่</p>
                    <p className="font-thai text-xs text-gray-500">ตำแหน่งผู้ดูแลและเส้นทาง</p>
                  </div>
                  
                  {/* Mock location pins */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 right-6 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" />
                      <AvatarFallback className="bg-accent text-white font-thai-heading text-sm">กมล</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-thai font-medium">คุณกมลวรรณ</p>
                      <p className="text-sm text-muted-foreground font-thai">อยู่ที่บ้าน • 2.5 กม.</p>
                    </div>
                  </div>
                  <Button size="sm" className="font-thai touch-button">
                    <Phone className="w-4 h-4 mr-2" />
                    โทรหา
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Timeline Feed */}
            <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
              <CardHeader>
                <CardTitle className="font-thai-heading flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  อัปเดตการดูแล
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timelineUpdates.map((update) => (
                    <div key={update.id} className="flex items-start space-x-3 p-4 bg-gray-50/50 rounded-lg border border-gray-100">
                      <div className="flex-shrink-0">
                        {update.type === 'arrival' && <CheckCircle className="w-5 h-5 text-accent" />}
                        {update.type === 'medication' && <AlertCircle className="w-5 h-5 text-primary" />}
                        {update.type === 'activity' && <Camera className="w-5 h-5 text-highlight" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-500">{update.timestamp}</span>
                        </div>
                        <p className="font-thai text-gray-800">{update.text}</p>
                        {update.mediaURL && (
                          <div className="mt-2">
                            <img 
                              src={update.mediaURL} 
                              alt="อัปเดตรูปภาพ" 
                              className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Package Status */}
            <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
              <CardHeader>
                <CardTitle className="font-thai-heading text-lg">สถานะแพ็กเกจ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/10">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-thai-heading font-semibold text-accent mb-2">
                    Peace-of-Mind Monthly
                  </h3>
                  <p className="text-sm text-muted-foreground font-thai mb-3">
                    เหลือ 18 วัน
                  </p>
                  <Badge className="bg-accent font-thai">ใช้งานได้ 2/4 ครั้ง</Badge>
                </div>
                
                <Button 
                  className="w-full mt-4 font-thai touch-button"
                  onClick={() => navigate('/packages')}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  เพิ่มบริการ
                </Button>
              </CardContent>
            </Card>

            {/* Quick Book Care */}
            <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
              <CardHeader>
                <CardTitle className="font-thai-heading text-lg">จองบริการด่วน</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start font-thai touch-button bg-primary/5 hover:bg-primary/10 border-primary/20"
                  onClick={() => navigate('/book-care')}
                >
                  <Car className="w-4 h-4 mr-3 text-primary" />
                  พาไปโรงพยาบาล
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start font-thai touch-button bg-accent/5 hover:bg-accent/10 border-accent/20"
                  onClick={() => navigate('/book-care')}
                >
                  <Heart className="w-4 h-4 mr-3 text-accent" />
                  ดูแลตลอดคืน
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start font-thai touch-button bg-highlight/5 hover:bg-highlight/10 border-highlight/20"
                  onClick={() => navigate('/book-care')}
                >
                  <User className="w-4 h-4 mr-3 text-highlight" />
                  เพื่อนคู่คิด
                </Button>
              </CardContent>
            </Card>

            {/* Senior Info */}
            <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
              <CardHeader>
                <CardTitle className="font-thai-heading text-lg">ข้อมูลผู้สูงอายุ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" />
                    <AvatarFallback className="bg-primary text-white font-thai-heading">ยาย</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-thai-heading font-semibold">คุณยายสมหญิง</h3>
                    <p className="text-sm text-muted-foreground font-thai">อายุ 75 ปี</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between font-thai">
                    <span className="text-muted-foreground">ยาประจำ:</span>
                    <span>3 ชนิด</span>
                  </div>
                  <div className="flex justify-between font-thai">
                    <span className="text-muted-foreground">แพ้ยา:</span>
                    <span>เพนนืิซิลิน</span>
                  </div>
                  <div className="flex justify-between font-thai">
                    <span className="text-muted-foreground">ติดต่อฉุกเฉิน:</span>
                    <span>02-XXX-XXXX</span>
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

export default FamilyDashboard;
