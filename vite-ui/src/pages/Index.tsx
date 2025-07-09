
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Shield, Clock } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

const Index = () => {
  const navigate = useNavigate();
  const { setUserRole, setUser, isAuthenticated, userRole } = useApp();

  const handleRoleSelection = (role: 'senior' | 'family') => {
    setUserRole(role);
    // Immediately set a mock user and navigate to dashboard
    const mockUser = {
      id: Math.random().toString(36).substr(2, 9),
      role: role,
      nameTH: role === 'senior' ? 'คุณผู้สูงอายุ' : 'สมาชิกครอบครัว',
      email: role === 'senior' ? 'senior@example.com' : 'family@example.com',
    };
    setUser(mockUser);
    if (role === 'senior') {
      navigate('/senior-dashboard');
    } else {
      navigate('/family-dashboard');
    }
  };

  React.useEffect(() => {
    if (isAuthenticated && userRole) {
      navigate(userRole === 'senior' ? '/senior-dashboard' : '/family-dashboard');
    }
  }, [isAuthenticated, userRole, navigate]);

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
                <p className="text-sm text-muted-foreground font-thai">อุ่นใจดูแล</p>
              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <Button variant="ghost" onClick={() => navigate('/packages')} className="font-thai">
                แพ็กเกจ
              </Button>
              {/* {isAuthenticated ? (
                <> */}
                  <Button onClick={() => navigate('/profile')} className="font-thai touch-button">
                    โปรไฟล์
                  </Button>
                  <select
                    value={userRole || ''}
                    onChange={e => setUserRole(e.target.value as 'senior' | 'family')}
                    className="ml-2 border rounded px-2 py-1 text-sm font-thai focus:outline-primary"
                  >
                    <option value="senior">ผู้สูงอายุ</option>
                    <option value="family">สมาชิกครอบครัว</option>
                  </select>
                {/* </>
              ) : null} */}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-thai-heading font-bold text-gray-800 mb-6 caring-pulse">
            ดูแลผู้สูงอายุ<br />
            <span className="text-primary">ด้วยความอุ่นใจ</span>
          </h2>
          <p className="text-xl text-gray-600 font-thai mb-12 leading-relaxed">
            เชื่อมโยงครอบครัวกับผู้ดูแลมืออาชีพ<br />
            ติดตามการดูแลแบบเรียลไทม์ พร้อมความปลอดภัยสูงสุด
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
              <Shield className="w-5 h-5 text-accent mr-2" />
              <span className="font-thai font-medium">ผู้ดูแลที่ได้รับการตรวจสอบ</span>
            </div>
            <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
              <Clock className="w-5 h-5 text-highlight mr-2" />
              <span className="font-thai font-medium">ติดตามแบบเรียลไทม์</span>
            </div>
            <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
              <Users className="w-5 h-5 text-primary mr-2" />
              <span className="font-thai font-medium">เชื่อมโยงครอบครัว</span>
            </div>
          </div>

          {/* Role Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card 
              className="bg-white/80 backdrop-blur-sm border-2 border-white/30 hover:border-primary/30 transition-all duration-300 cursor-pointer group transform hover:scale-105"
              onClick={() => handleRoleSelection('senior')}
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
                  <Heart className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-thai-heading font-bold text-gray-800 mb-3">
                  สำหรับผู้สูงอายุ
                </h3>
                <p className="text-gray-600 font-thai mb-6 leading-relaxed">
                  เข้าถึงบริการดูแลที่อบอุ่น<br />
                  ติดต่อผู้ดูแลและครอบครัวได้ง่าย
                </p>
                <Button className="touch-button font-thai w-full bg-accent hover:bg-accent/90">
                  เข้าใช้งาน
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="bg-white/80 backdrop-blur-sm border-2 border-white/30 hover:border-primary/30 transition-all duration-300 cursor-pointer group transform hover:scale-105"
              onClick={() => handleRoleSelection('family')}
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-thai-heading font-bold text-gray-800 mb-3">
                  สำหรับครอบครัว
                </h3>
                <p className="text-gray-600 font-thai mb-6 leading-relaxed">
                  จองบริการดูแล ติดตามสถานะ<br />
                  และรับอัปเดตแบบเรียลไทม์
                </p>
                <Button className="touch-button font-thai w-full">
                  เข้าใช้งาน
                </Button>
              </CardContent>
            </Card>
          </div>
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

export default Index;
