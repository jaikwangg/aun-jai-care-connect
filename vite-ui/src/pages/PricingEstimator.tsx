import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const PricingEstimator = () => {
  const [hours, setHours] = useState([4]);
  const [days, setDays] = useState([1]);
  const [serviceType, setServiceType] = useState("companion");

  const serviceRates = {
    companion: { base: 400, name: "พาเที่ยว/ทำธุระ", unit: "ชั่วโมง" },
    hospital: { base: 800, name: "พาส่งโรงพยาบาล", unit: "วัน" },
    homecare: { base: 600, name: "ดูแลประจำบ้าน", unit: "ชั่วโมง" },
    visit: { base: 1200, name: "เยี่ยมบ้าน", unit: "แพ็กเกจ" }
  };

  const calculatePrice = () => {
    const rate = serviceRates[serviceType as keyof typeof serviceRates];
    if (serviceType === "visit") {
      return rate.base * days[0];
    } else if (serviceType === "hospital") {
      return rate.base * days[0];
    } else {
      return rate.base * hours[0] * days[0];
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="pricing" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-kanit font-bold text-gray-900 mb-4">
            คำนวณราคาบริการ
          </h2>
          <p className="text-lg text-gray-600 font-thai max-w-2xl mx-auto">
            เลือกประเภทบริการและระยะเวลา เพื่อดูราคาโดยประมาณ
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-2 border-white bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-kanit text-center text-gray-900">
                เครื่องคำนวณราคา
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Service Type Selection */}
              <div>
                <h3 className="text-lg font-kanit font-semibold mb-4 text-gray-900">
                  เลือกประเภทบริการ
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {Object.entries(serviceRates).map(([key, service]) => (
                    <Button
                      key={key}
                      variant={serviceType === key ? "default" : "outline"}
                      className={`h-auto p-4 flex flex-col items-center space-y-2 font-thai ${
                        serviceType === key 
                          ? "bg-primary text-white" 
                          : "border-primary text-primary hover:bg-primary hover:text-white"
                      }`}
                      onClick={() => setServiceType(key)}
                    >
                      <div className="text-sm leading-tight text-center">
                        {service.name}
                      </div>
                      <div className="text-xs opacity-80">
                        {service.base} บาท/{service.unit}
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Hours Slider */}
              {(serviceType === "companion" || serviceType === "homecare") && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-kanit font-semibold text-gray-900">
                      จำนวนชั่วโมงต่อวัน
                    </h3>
                    <div className="text-2xl font-kanit font-bold text-primary">
                      {hours[0]} ชั่วโมง
                    </div>
                  </div>
                  <Slider
                    value={hours}
                    onValueChange={setHours}
                    max={12}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2 font-thai">
                    <span>1 ชั่วโมง</span>
                    <span>12 ชั่วโมง</span>
                  </div>
                </div>
              )}

              {/* Days Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-kanit font-semibold text-gray-900">
                    จำนวนวัน
                  </h3>
                  <div className="text-2xl font-kanit font-bold text-secondary">
                    {days[0]} วัน
                  </div>
                </div>
                <Slider
                  value={days}
                  onValueChange={setDays}
                  max={30}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2 font-thai">
                  <span>1 วัน</span>
                  <span>30 วัน</span>
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white text-center">
                <div className="space-y-2">
                  <div className="text-lg font-thai">ราคาโดยประมาณ</div>
                  <div className="text-4xl md:text-5xl font-kanit font-bold">
                    {formatPrice(calculatePrice())}
                  </div>
                  <div className="text-sm opacity-90 font-thai">
                    * ราคาอาจแตกต่างกันตามความต้องการเฉพาะ
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-primary hover:bg-primary/90 font-thai text-lg h-14"
                >
                  จองบริการเลย
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-white font-thai text-lg h-14"
                >
                  ปรึกษาฟรี
                </Button>
              </div>

              {/* Additional Info */}
              <div className="text-center text-sm text-gray-600 font-thai">
                <p>มีคำถามเพิ่มเติม? โทร 02-XXX-XXXX หรือ Line: @unjaicareu</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingEstimator; 