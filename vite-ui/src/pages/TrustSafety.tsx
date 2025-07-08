import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TrustSafety = () => {
  const vettingSteps = [
    {
      step: 1,
      title: "ตรวจสอบประวัติ",
      description: "ตรวจสอบประวัติอาชญากรรม เอกสารทางการ และประสบการณ์การทำงาน",
      icon: "📋",
      color: "bg-blue-100 text-blue-600"
    },
    {
      step: 2,
      title: "ทดสอบความรู้",
      description: "ประเมินความรู้การดูแลผู้สูงวัย การปฐมพยาบาล และจริยธรรม",
      icon: "📚",
      color: "bg-green-100 text-green-600"
    },
    {
      step: 3,
      title: "สัมภาษณ์เจาะลึก",
      description: "สัมภาษณ์เพื่อประเมินบุคลิกภาพ ความเป็นมิตร และทักษะการสื่อสาร",
      icon: "👥",
      color: "bg-orange-100 text-orange-600"
    },
    {
      step: 4,
      title: "ฝึกอบรมเพิ่มเติม",
      description: "อบรมเฉพาะทาง การใช้แอปพลิเคชัน และมาตรฐานการบริการ",
      icon: "🎓",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const safetyFeatures = [
    {
      title: "ประกันภัยครอบคลุม",
      description: "ประกันภัยอุบัติเหตุและความรับผิดชอบ ครอบคลุมทุกการให้บริการ",
      icon: "🛡️"
    },
    {
      title: "ติดตามแบบเรียลไทม์",
      description: "ติดตาม GPS และรายงานสถานะทุก 30 นาที พร้อมภาพถ่ายยืนยัน",
      icon: "📍"
    },
    {
      title: "ปุ่มฉุกเฉิน SOS",
      description: "ปุ่มฉุกเฉินพร้อมแจ้งเตือนครอบครัวและทีมงานทันที",
      icon: "🚨"
    },
    {
      title: "ระบบรีวิวและคะแนน",
      description: "ระบบให้คะแนนและรีวิวโปร่งใส เพื่อคุณภาพการบริการที่ดีที่สุด",
      icon: "⭐"
    }
  ];

  return (
    <section id="trust" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-kanit font-bold text-gray-900 mb-4">
            ความปลอดภัยและความไว้วางใจ
          </h2>
          <p className="text-lg text-gray-600 font-thai max-w-3xl mx-auto">
            เราเข้าใจว่าการมอบหมายให้คนอื่นดูแลคนที่เรารักเป็นเรื่องสำคัญ 
            จึงมีกระบวนการคัดกรองผู้ดูแลอย่างเข้มงวด 4 ขั้นตอน
          </p>
        </div>

        {/* Vetting Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-kanit font-semibold text-center mb-8 text-gray-900">
            กระบวนการคัดกรองผู้ดูแล 4 ขั้นตอน
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vettingSteps.map((step) => (
              <Card key={step.step} className="relative border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${step.color} rounded-full mx-auto mb-4 flex items-center justify-center text-2xl`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg font-kanit text-gray-900">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 font-thai text-center leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety Features */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-kanit font-semibold text-center mb-8 text-gray-900">
            มาตรการความปลอดภัยเพิ่มเติม
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg">
                <div className="text-3xl flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-kanit font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 font-thai leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 font-thai mb-6">
            ต้องการทราบรายละเอียดเพิ่มเติมเกี่ยวกับมาตรการความปลอดภัย?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-primary hover:bg-primary/90 font-thai"
              size="lg"
            >
              ดาวน์โหลดเอกสารประกันภัย
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white font-thai"
              size="lg"
            >
              ติดต่อทีมงาน
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSafety; 