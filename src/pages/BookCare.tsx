
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar } from '@/components/ui/calendar';
import { 
  ArrowLeft, 
  Heart, 
  Car, 
  Moon, 
  ShoppingBag, 
  Bed, 
  User, 
  Star,
  Shield,
  Clock,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

type ServiceType = 'hospital-escort' | 'overnight-stay' | 'errand-trip' | 'bedridden-care' | 'companion-activity';
type Step = 'service' | 'datetime' | 'caregiver' | 'confirm';

interface Caregiver {
  id: string;
  name: string;
  rating: number;
  price: number;
  image: string;
  certifications: string[];
  experience: number;
  distance: number;
}

const BookCare = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>('service');
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedCaregiver, setSelectedCaregiver] = useState<Caregiver | null>(null);
  const [loading, setLoading] = useState(false);

  const services = [
    {
      id: 'hospital-escort' as ServiceType,
      title: 'พาไปโรงพยาบาล',
      description: 'พาไปหาหมอ รอ และดูแลระหว่างการรักษา',
      icon: Car,
      price: 'เริ่มต้น 1,200 บาท',
      duration: '4-8 ชั่วโมง',
      color: 'primary'
    },
    {
      id: 'overnight-stay' as ServiceType,
      title: 'ดูแลตลอดคืน',
      description: 'ดูแลอย่างใกล้ชิดตลอด 12-24 ชั่วโมง',
      icon: Moon,
      price: 'เริ่มต้น 2,800 บาท',
      duration: '12-24 ชั่วโมง',
      color: 'accent'
    },
    {
      id: 'errand-trip' as ServiceType,
      title: 'ไปซื้อของ/ธุระ',
      description: 'ช่วยซื้อของจำเป็น หรือจัดการธุระต่างๆ',
      icon: ShoppingBag,
      price: 'เริ่มต้น 800 บาท',
      duration: '2-4 ชั่วโมง',
      color: 'highlight'
    },
    {
      id: 'bedridden-care' as ServiceType,
      title: 'ดูแลผู้ป่วยติดเตียง',
      description: 'ดูแลผู้ป่วยที่ไม่สามารถลุกเดินได้',
      icon: Bed,
      price: 'เริ่มต้น 1,800 บาท',
      duration: '4-12 ชั่วโมง',
      color: 'destructive'
    },
    {
      id: 'companion-activity' as ServiceType,
      title: 'เพื่อนคู่คิด',
      description: 'คุยเล่น ทำกิจกรรม และให้กำลังใจ',
      icon: User,
      price: 'เริ่มต้น 600 บาท',
      duration: '2-6 ชั่วโมง',
      color: 'secondary'
    }
  ];

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

  const mockCaregivers: Caregiver[] = [
    {
      id: '1',
      name: 'คุณกมลวรรณ จันทร์เพ็ญ',
      rating: 4.9,
      price: 180,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      certifications: ['ใบประกาศนียบัตรการพยาบาล', 'การปฐมพยาบาลเบื้องต้น'],
      experience: 5,
      distance: 2.3
    },
    {
      id: '2',
      name: 'คุณสมจิตต์ ใจดี',
      rating: 4.8,
      price: 160,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      certifications: ['การดูแลผู้สูงอายุ', 'การปฐมพยาบาลเบื้องต้น'],
      experience: 3,
      distance: 1.8
    },
    {
      id: '3',
      name: 'คุณวิไล อ่อนโยน',
      rating: 4.7,
      price: 150,
      image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098',
      certifications: ['การดูแลผู้สูงอายุ'],
      experience: 2,
      distance: 3.1
    }
  ];

  const handleNext = () => {
    if (currentStep === 'service' && selectedService) {
      setCurrentStep('datetime');
    } else if (currentStep === 'datetime' && selectedDate && selectedTime) {
      setCurrentStep('caregiver');
    } else if (currentStep === 'caregiver' && selectedCaregiver) {
      setCurrentStep('confirm');
    }
  };

  const handleConfirm = () => {
    setLoading(true);
    
    // Simulate booking process
    setTimeout(() => {
      toast({
        title: 'จองสำเร็จ!',
        description: 'ระบบจะแจ้งเตือนเมื่อผู้ดูแลยืนยันการจอง',
      });
      navigate('/family-dashboard');
      setLoading(false);
    }, 2000);
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 'service': return 'เลือกประเภทบริการ';
      case 'datetime': return 'เลือกวันและเวลา';
      case 'caregiver': return 'เลือกผู้ดูแล';
      case 'confirm': return 'ยืนยันการจอง';
      default: return '';
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
                <h1 className="text-lg font-thai-heading font-bold text-primary">จองบริการดูแล</h1>
              </div>
            </div>
            
            {/* Progress Steps */}
            <div className="hidden md:flex items-center space-x-2">
              {['service', 'datetime', 'caregiver', 'confirm'].map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep === step ? 'bg-primary text-white' : 
                    ['service', 'datetime', 'caregiver', 'confirm'].indexOf(currentStep) > index ? 'bg-accent text-white' : 
                    'bg-gray-200 text-gray-500'
                  }`}>
                    {index + 1}
                  </div>
                  {index < 3 && <div className="w-8 h-px bg-gray-200 mx-2"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Step Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-thai-heading font-bold text-gray-800 mb-2">
              {getStepTitle()}
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
          </div>

          {/* Step 1: Service Selection */}
          {currentStep === 'service' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.id}
                    className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                      selectedService === service.id
                        ? 'ring-2 ring-primary bg-primary/5 border-primary/30'
                        : 'bg-white/80 backdrop-blur-sm border border-white/30 hover:border-primary/20'
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                          service.color === 'primary' ? 'bg-primary/20' :
                          service.color === 'accent' ? 'bg-accent/20' :
                          service.color === 'highlight' ? 'bg-highlight/20' :
                          service.color === 'destructive' ? 'bg-red-100' :
                          'bg-gray-100'
                        }`}>
                          <Icon className={`w-8 h-8 ${
                            service.color === 'primary' ? 'text-primary' :
                            service.color === 'accent' ? 'text-accent' :
                            service.color === 'highlight' ? 'text-highlight' :
                            service.color === 'destructive' ? 'text-red-500' :
                            'text-gray-600'
                          }`} />
                        </div>
                        <h3 className="font-thai-heading font-bold text-lg mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-thai mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="space-y-2">
                          <Badge variant="outline" className="font-thai">{service.price}</Badge>
                          <div className="flex items-center justify-center text-xs text-muted-foreground font-thai">
                            <Clock className="w-3 h-3 mr-1" />
                            {service.duration}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Step 2: Date and Time Selection */}
          {currentStep === 'datetime' && (
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
                <CardHeader>
                  <CardTitle className="font-thai-heading">เลือกวันที่</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
                <CardHeader>
                  <CardTitle className="font-thai-heading">เลือกเวลา</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        className="font-thai touch-button"
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 3: Caregiver Selection */}
          {currentStep === 'caregiver' && (
            <div className="space-y-6">
              {mockCaregivers.map((caregiver) => (
                <Card
                  key={caregiver.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedCaregiver?.id === caregiver.id
                      ? 'ring-2 ring-primary bg-primary/5 border-primary/30'
                      : 'bg-white/80 backdrop-blur-sm border border-white/30 hover:border-primary/20'
                  }`}
                  onClick={() => setSelectedCaregiver(caregiver)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={caregiver.image} />
                        <AvatarFallback className="bg-accent text-white font-thai-heading">
                          {caregiver.name.charAt(2)}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-thai-heading font-bold text-lg">{caregiver.name}</h3>
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary">{caregiver.price} บาท/ชม.</div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="w-3 h-3 mr-1" />
                              {caregiver.distance} กม.
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium ml-1">{caregiver.rating}</span>
                          </div>
                          <div className="text-sm text-muted-foreground font-thai">
                            ประสบการณ์ {caregiver.experience} ปี
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {caregiver.certifications.map((cert, index) => (
                            <Badge key={index} variant="secondary" className="font-thai text-xs">
                              <Shield className="w-3 h-3 mr-1" />
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 'confirm' && selectedService && selectedCaregiver && selectedDate && selectedTime && (
            <Card className="bg-white/80 backdrop-blur-sm border border-white/30">
              <CardHeader>
                <CardTitle className="font-thai-heading">สรุปการจอง</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-thai-heading font-semibold mb-3">รายละเอียดบริการ</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between font-thai">
                        <span className="text-muted-foreground">บริการ:</span>
                        <span>{services.find(s => s.id === selectedService)?.title}</span>
                      </div>
                      <div className="flex justify-between font-thai">
                        <span className="text-muted-foreground">วันที่:</span>
                        <span>{selectedDate.toLocaleDateString('th-TH')}</span>
                      </div>
                      <div className="flex justify-between font-thai">
                        <span className="text-muted-foreground">เวลา:</span>
                        <span>{selectedTime} น.</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-thai-heading font-semibold mb-3">ผู้ดูแล</h4>
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={selectedCaregiver.image} />
                        <AvatarFallback className="bg-accent text-white font-thai-heading">
                          {selectedCaregiver.name.charAt(2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-thai font-medium">{selectedCaregiver.name}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                          {selectedCaregiver.rating} • {selectedCaregiver.distance} กม.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-thai-heading font-bold">
                    <span>รวมทั้งหมด:</span>
                    <span className="text-primary">{selectedCaregiver.price * 4} บาท</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-thai mt-1">
                    *ประมาณการ 4 ชั่วโมง
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => {
                if (currentStep === 'datetime') setCurrentStep('service');
                else if (currentStep === 'caregiver') setCurrentStep('datetime');
                else if (currentStep === 'confirm') setCurrentStep('caregiver');
              }}
              disabled={currentStep === 'service'}
              className="font-thai touch-button"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              ย้อนกลับ
            </Button>

            <Button
              onClick={currentStep === 'confirm' ? handleConfirm : handleNext}
              disabled={
                (currentStep === 'service' && !selectedService) ||
                (currentStep === 'datetime' && (!selectedDate || !selectedTime)) ||
                (currentStep === 'caregiver' && !selectedCaregiver) ||
                loading
              }
              className="font-thai touch-button"
            >
              {loading ? 'กำลังจอง...' : 
               currentStep === 'confirm' ? 'ยืนยันการจอง' : 'ถัดไป'}
              {currentStep !== 'confirm' && !loading && <ArrowRight className="w-4 h-4 ml-2" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCare;
