import { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CasesSection() {
  // 初始化6个LOGO位置，每个位置存储图片URL
  const [logos, setLogos] = useState<string[]>(Array(6).fill(''));

  // 处理图片上传
  const handleImageUpload = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 验证文件类型
    if (!file.type.startsWith('image/')) {
      alert('请上传图片文件！');
      return;
    }

    // 验证文件大小（限制1MB）
    if (file.size > 1024 * 1024) {
      alert('图片大小不能超过1MB！');
      return;
    }

    // 读取文件并转换为Base64
    const reader = new FileReader();
    reader.onload = (e) => {
      const newLogos = [...logos];
      newLogos[index] = e.target?.result as string;
      setLogos(newLogos);
    };
    reader.readAsDataURL(file);
  };

  // 删除图片
  const handleRemoveImage = (index: number) => {
    const newLogos = [...logos];
    newLogos[index] = '';
    setLogos(newLogos);
  };

  return (
    <section className="bg-muted py-20">
      <div className="section-container">
        <h2 className="mb-12 text-center text-4xl font-bold text-foreground">合作案例</h2>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="group relative flex aspect-video items-center justify-center rounded-lg border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                {logo ? (
                  // 显示已上传的图片
                  <>
                    <img
                      src={logo}
                      alt={`合作伙伴 ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                    {/* 删除按钮 */}
                    <Button
                      size="icon"
                      variant="destructive"
                      className="absolute right-2 top-2 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </>
                ) : (
                  // 显示上传区域
                  <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center bg-muted/50 transition-colors hover:bg-muted">
                    <Upload className="mb-2 h-8 w-8 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">点击上传LOGO</span>
                    <span className="mt-1 text-xs text-muted-foreground">支持JPG、PNG，最大1MB</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(index, e)}
                    />
                  </label>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
