
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Heart, 
  User, 
  Phone, 
  Mail, 
  MapPin,
  AlertTriangle,
  Pill,
  Plus,
  LogOut
} from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { toast } from '@/hooks/use-toast';

const Profile = () => {
  const navigate = useNavigate();
  const { user, userRole, setUser, setUserRole } = useApp();

  const handleLogout = () => {
    setUser(null);
    setUserRole(null);
    toast({
      title: 'ออกจากระบบแล้ว',
      description: 'ขอบคุณที่ใช้บริการ Unjai Care',
    });
    navigate('/');
  };

  const handleSave = () => {
    toast({
      title: 'บันทึกข้อมูลสำเร็จ',
      description: 'ข้อมูลโปรไฟล์ได้รับการอัปเดตแล้ว',
    });
  };

  // Mock seniors data for family users
  const managedSeniors = [
    {
      id: '1',
      name: 'คุณยายสมหญิง จันทร์เพ็ญ',
      age: 75,
      avatar: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
      medications: ['ยาต้านการแข็งตัวของเลือด', 'ยาลดความดันโลหิต', 'วิตามินบี12'],
      allergies: ['เพนิซิลิน', 'กุ้ง'],
      emergencyContact: '02-123-4567'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="font-thai"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                กลับ
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-lg font-thai-heading font-bold text-primary">โปรไฟล์</h1>
              </div>
            </div>
            
            <Button
              variant="outline"
              onClick={handleLogout}
              className="font-thai text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              ออกจากระบบ
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* User Profile Card */}
          <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
            <CardHeader>
              <CardTitle className="font-thai-heading flex items-center">
                <User className="w-5 h-5 mr-2 text-primary" />
                ข้อมูลส่วนตัว
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-6 mb-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={user?.avatarURL} />
                  <AvatarFallback className="bg-primary text-white font-thai-heading text-xl">
                    {user?.nameTH?.charAt(0) || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-thai-heading font-bold text-xl">{user?.nameTH}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className={`font-thai ${userRole === 'senior' ? 'bg-accent' : 'bg-primary'}`}>
                      {userRole === 'senior' ? 'ผู้สูงอายุ' : 'สมาชิกครอบครัว'}
                    </Badge>
                    <select
                      value={userRole || ''}
                      onChange={e => setUserRole(e.target.value as 'senior' | 'family')}
                      className="ml-2 border rounded px-2 py-1 text-sm font-thai focus:outline-primary"
                    >
                      <option value="senior">ผู้สูงอายุ</option>
                      <option value="family">สมาชิกครอบครัว</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="font-thai">ชื่อ-นามสกุล</Label>
                    <Input
                      id="name"
                      defaultValue={user?.nameTH}
                      className="font-thai touch-button"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-thai">อีเมล</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="email"
                        type="email"
                        defaultValue={user?.email}
                        className="pl-10 font-thai touch-button"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="phone" className="font-thai">เบอร์โทรศัพท์</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="phone"
                        type="tel"
                        defaultValue={user?.phone || ''}
                        className="pl-10 font-thai touch-button"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address" className="font-thai">ที่อยู่</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                      <Textarea
                        id="address"
                        placeholder="กรอกที่อยู่"
                        className="pl-10 font-thai"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Button onClick={handleSave} className="mt-6 font-thai touch-button">
                บันทึกข้อมูล
              </Button>
            </CardContent>
          </Card>

          {/* Senior-specific medical information */}
          {userRole === 'senior' && (
            <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
              <CardHeader>
                <CardTitle className="font-thai-heading flex items-center">
                  <Pill className="w-5 h-5 mr-2 text-accent" />
                  ข้อมูลทางการแพทย์
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="medications" className="font-thai mb-2 block">ยาประจำ</Label>
                  <Textarea
                    id="medications"
                    placeholder="ระบุชื่อยา ขนาด และเวลาที่ต้องทาน"
                    className="font-thai"
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="allergies" className="font-thai mb-2 block">
                    <div className="flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2 text-red-500" />
                      ประวัติแพ้ยา/อาหาร
                    </div>
                  </Label>
                  <Textarea
                    id="allergies"
                    placeholder="ระบุสิ่งที่แพ้และอาการ"
                    className="font-thai"
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="emergency" className="font-thai">เบอร์ติดต่อฉุกเฉิน</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="emergency"
                      type="tel"
                      placeholder="เบอร์โทรญาติใกล้ชิด"
                      className="pl-10 font-thai touch-button"
                    />
                  </div>
                </div>

                <Button onClick={handleSave} className="font-thai touch-button bg-accent hover:bg-accent/90">
                  บันทึกข้อมูลทางการแพทย์
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Family-specific: Managed Seniors */}
          {userRole === 'family' && (
            <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
              <CardHeader>
                <CardTitle className="font-thai-heading flex items-center justify-between">
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-accent" />
                    ผู้สูงอายุที่ดูแล
                  </div>
                  <Button size="sm" className="font-thai">
                    <Plus className="w-4 h-4 mr-2" />
                    เพิ่มผู้สูงอายุ
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {managedSeniors.map((senior) => (
                  <Card key={senior.id} className="bg-gray-50/50 border border-gray-100">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={senior.avatar} />
                          <AvatarFallback className="bg-accent text-white font-thai-heading">
                            {senior.name.charAt(2)}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 space-y-3">
                          <div>
                            <h4 className="font-thai-heading font-semibold text-lg">{senior.name}</h4>
                            <p className="text-muted-foreground font-thai">อายุ {senior.age} ปี</p>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <h5 className="font-thai font-medium flex items-center mb-2">
                                <Pill className="w-3 h-3 mr-1 text-accent" />
                                ยาประจำ:
                              </h5>
                              <div className="space-y-1">
                                {senior.medications.map((med, index) => (
                                  <Badge key={index} variant="outline" className="font-thai text-xs mr-1 mb-1">
                                    {med}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h5 className="font-thai font-medium flex items-center mb-2">
                                <AlertTriangle className="w-3 h-3 mr-1 text-red-500" />
                                แพ้:
                              </h5>
                              <div className="space-y-1">
                                {senior.allergies.map((allergy, index) => (
                                  <Badge key={index} variant="secondary" className="font-thai text-xs mr-1 mb-1 bg-red-100 text-red-700">
                                    {allergy}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-sm text-muted-foreground font-thai">
                            <Phone className="w-3 h-3 mr-1" />
                            ติดต่อฉุกเฉิน: {senior.emergencyContact}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
