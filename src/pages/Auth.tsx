
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Heart, Mail, Lock } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { toast } from '@/hooks/use-toast';

const Auth = () => {
  const navigate = useNavigate();
  const { userRole, setUser } = useApp();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate authentication
    setTimeout(() => {
      const mockUser = {
        id: Math.random().toString(36).substr(2, 9),
        role: userRole,
        nameTH: name || 'ผู้ใช้งาน',
        email,
        phone,
      };

      setUser(mockUser);
      toast({
        title: isLogin ? 'เข้าสู่ระบบสำเร็จ' : 'สมัครสมาชิกสำเร็จ',
        description: `ยินดีต้อนรับเข้าสู่ Unjai Care`,
      });

      // Navigate based on role
      if (userRole === 'senior') {
        navigate('/senior-dashboard');
      } else if (userRole === 'family') {
        navigate('/family-dashboard');
      } else {
        navigate('/');
      }
      setLoading(false);
    }, 1500);
  };

  const getRoleText = () => {
    switch (userRole) {
      case 'senior':
        return 'ผู้สูงอายุ';
      case 'family':
        return 'ครอบครัว';
      default:
        return 'ผู้ใช้งาน';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="absolute top-4 left-4 font-thai"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            กลับ
          </Button>
          
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center warm-glow">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-thai-heading font-bold text-primary">Unjai Care</h1>
              <p className="text-sm text-muted-foreground font-thai">อุ่นใจดูแล</p>
            </div>
          </div>
        </div>

        {/* Auth Card */}
        <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
          <CardHeader>
            <CardTitle className="text-center font-thai-heading">
              {isLogin ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}
              <div className="text-sm font-normal text-muted-foreground mt-1">
                สำหรับ{getRoleText()}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-thai">ชื่อ-นามสกุล</Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required={!isLogin}
                      className="font-thai touch-button"
                      placeholder="กรอกชื่อ-นามสกุล"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-thai">เบอร์โทรศัพท์</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="font-thai touch-button"
                      placeholder="กรอกเบอร์โทรศัพท์"
                    />
                  </div>
                </>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="font-thai">อีเมล</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 font-thai touch-button"
                    placeholder="กรอกอีเมล"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="font-thai">รหัสผ่าน</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-10 font-thai touch-button"
                    placeholder="กรอกรหัสผ่าน"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full touch-button font-thai"
                disabled={loading}
              >
                {loading ? 'กำลังดำเนินการ...' : (isLogin ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก')}
              </Button>
            </form>

            <div className="text-center mt-6">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:underline font-thai"
              >
                {isLogin ? 'ยังไม่มีบัญชี? สมัครสมาชิก' : 'มีบัญชีแล้ว? เข้าสู่ระบบ'}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
