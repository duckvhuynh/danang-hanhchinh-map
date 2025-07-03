import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

interface LayerControlProps {
  onLayerToggle: (layerId: string, enabled: boolean) => void;
  onAddManualCircle: () => void;
}

export const LayerControl: React.FC<LayerControlProps> = ({
  onLayerToggle,
  onAddManualCircle,
}) => {
  const [layers, setLayers] = useState({
    layerA: true,
    layerB: true,
    layerC: true,
  });

  const handleLayerToggle = (layerId: string, enabled: boolean) => {
    setLayers(prev => ({ ...prev, [layerId]: enabled }));
    onLayerToggle(layerId, enabled);
  };

  const layerConfig = [
    {
      id: 'layerA',
      name: 'Trung tâm Hành chính cấp Huyện',
      description: '22 trung tâm (17 QN cũ + 5 Quận DN)',
      radius: '7km',
      color: 'bg-blue-500',
      count: 22,
    },
    {
      id: 'layerB',
      name: 'Trung tâm Xã mới',
      description: '93 trung tâm xã sau sáp nhập',
      radius: '5km',
      color: 'bg-green-500',
      count: 93,
    },
    {
      id: 'layerC',
      name: 'Trung tâm Xã cũ',
      description: 'Các xã cũ (trừ Tam Hải, Tân Hiệp)',
      radius: '5km',
      color: 'bg-orange-500',
      count: 'Nhiều',
    },
  ];

  return (
    <Card className="w-80 shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Bản đồ Trung tâm Hành chính
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          TP. Đà Nẵng và các huyện cũ thuộc Quảng Nam
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Layer Controls */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm">Lớp dữ liệu</h4>
          {layerConfig.map((layer) => (
            <div key={layer.id} className="flex items-start space-x-3">
              <Checkbox
                id={layer.id}
                checked={layers[layer.id as keyof typeof layers]}
                onCheckedChange={(checked) =>
                  handleLayerToggle(layer.id, checked as boolean)
                }
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-3 h-3 rounded-full ${layer.color} opacity-70`}
                  />
                  <Label htmlFor={layer.id} className="text-sm font-medium">
                    {layer.name}
                  </Label>
                </div>
                <p className="text-xs text-muted-foreground">
                  {layer.description}
                </p>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    {layer.count} điểm
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Bán kính {layer.radius}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Separator />

        {/* Analysis Tools */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm">Công cụ phân tích</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-purple-500 opacity-50" />
              <span className="text-xs">Vùng chồng lấn</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500 opacity-50" />
              <span className="text-xs">Vùng trống</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Manual Tools */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm">Thao tác thủ công</h4>
          <Button
            onClick={onAddManualCircle}
            variant="outline"
            size="sm"
            className="w-full"
          >
            Thêm vòng tròn tùy chỉnh
          </Button>
        </div>

        <Separator />

        {/* Legend */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Chú thích</h4>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>• Nhấp để bật/tắt lớp dữ liệu</p>
            <p>• Vùng chồng lấn hiển thị bằng màu tím</p>
            <p>• Vùng trống hiển thị bằng màu đỏ</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
