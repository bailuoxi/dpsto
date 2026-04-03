import { useState } from 'react';
import { Mail, Phone, MessageCircle, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactData, footerData } from '@/data/content';

export function ContactSection() {
  const [qrCode, setQrCode] = useState(contactData.qrCodeImage);

  // 处理二维码上传
  const handleQrCodeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      setQrCode(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  // 删除二维码
  const handleRemoveQrCode = () => {
    setQrCode('');
  };

  return (
    <section id="contact" className="bg-background py-20">
      <div className="section-container">
        <h2 className="mb-12 text-center text-4xl font-bold text-foreground">联系我们</h2>
        <div className="mx-auto max-w-4xl">
          {/* 二维码 */}
          <div className="mb-12 flex justify-center">
            <div className="group relative">
              {qrCode ? (
                <>
                  <img
                    src={qrCode}
                    alt="微信二维码"
                    className="h-64 w-64 rounded-lg object-cover"
                  />
                  {/* 删除按钮 */}
                  <Button
                    size="icon"
                    variant="destructive"
                    className="absolute right-2 top-2 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
                    onClick={handleRemoveQrCode}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </>
              ) : (
                <label className="flex h-64 w-64 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted transition-colors hover:bg-muted/80">
                  <Upload className="mb-2 h-8 w-8 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">点击上传二维码</span>
                  <span className="mt-1 text-xs text-muted-foreground">支持JPG、PNG，最大1MB</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleQrCodeUpload}
                  />
                </label>
              )}
            </div>
          </div>

          {/* 联系方式 - 并列一行 */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center gap-3 rounded-lg bg-card p-6 shadow-sm">
              <Phone className="h-6 w-6 text-primary" />
              <div className="text-center">
                <p className="mb-1 text-sm text-muted-foreground">手机号码</p>
                <p className="text-lg font-medium text-foreground">{contactData.phone}</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-lg bg-card p-6 shadow-sm">
              <MessageCircle className="h-6 w-6 text-primary" />
              <div className="text-center">
                <p className="mb-1 text-sm text-muted-foreground">QQ号</p>
                <p className="text-lg font-medium text-foreground">{contactData.qq}</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-lg bg-card p-6 shadow-sm">
              <Mail className="h-6 w-6 text-primary" />
              <div className="text-center">
                <p className="mb-1 text-sm text-muted-foreground">电子邮箱</p>
                <p className="text-lg font-medium text-foreground">{contactData.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <div className="mt-20 border-t border-border pt-8 text-center">
        <p className="text-sm text-muted-foreground">{footerData.copyright}</p>
      </div>
    </section>
  );
}
