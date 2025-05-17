import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Thermometer, Stethoscope } from "lucide-react";

const VitalSign = () => {
    return (
        <div className="min-h-screen bg-black text-white p-6">
            <div className="flex items-center justify-between mb-8">
                <div className="text-4xl font-bold">Vital Sign</div>
                <div className="w-10 h-10 bg-white rounded-full" /> {/* Logo placeholder */}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Heart Rate */}
                <Card className="bg-[#2d2d2d] text-white">
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-2">
                            <Heart className="w-5 h-5" />
                            <span className="text-lg">Heart Rate</span>
                        </div>
                        <div className="text-3xl font-bold">110 bpm</div>
                    </CardContent>
                </Card>
                
                {/* Temperature */}
                <Card className="bg-[#2d2d2d] text-white">
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-2">
                            <Thermometer className="w-5 h-5" />
                            <span className="text-lg">Temperature</span>
                        </div>
                        <div className="text-3xl font-bold">28.2°</div>
                    </CardContent>
                </Card>
                
                {/* Blood Pressure */}
                <Card className="bg-[#2d2d2d] text-white">
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-2">
                            <Stethoscope className="w-5 h-5" />
                            <span className="text-lg">Blood Pressure</span>
                        </div>
                        <div className="text-3xl font-bold">
                            80 <span className="text-base font-normal">/ 120</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default VitalSign;
