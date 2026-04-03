import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Pencil, Check } from 'lucide-react';

export function AboutSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(
    '　　DPSTO专注于中日游戏本地化翻译，我们的团队由经验丰富的游戏本地化专家、资深译者和技术工程师组成，拥有多年的游戏行业从业经验。"让每一款游戏都能打破语言与文化的边界"是DPSTO始终坚持的核心理念。持续关注开发者核心诉求，帮助开发者重塑游戏的真实温度。\n　　公司通过专业的项目管理、缜密的工作流程，为游戏厂商量身打造最适配的高品质本地化解决方案。不仅提供精准的语言翻译服务，更注重游戏文化内涵的传递和玩家体验的优化。从游戏文本翻译、UI适配到漫画/小说的本地化、质量保证（QA）、LQA测试、图片设计、运营推广等，我们提供全方位的本地化服务，帮助独立游戏开发者在竞争激烈的国际市场中脱颖而出。'
  );

  return (
    <section className="relative bg-muted py-20">
      <div className="section-container">
        <h2 className="mb-12 text-center text-4xl font-bold text-foreground">关于我们</h2>
        
        <div className="mx-auto max-w-6xl">
          {/* 主要内容卡片 */}
          <div className="relative overflow-hidden rounded-lg bg-card p-8 shadow-sm md:p-12">
            {/* 装饰性渐变背景 */}
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            
            <div className="relative">
              {/* 编辑按钮 */}
              <div className="absolute right-0 top-0 z-10">
                <Button
                  size="sm"
                  variant={isEditing ? 'default' : 'outline'}
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      完成
                    </>
                  ) : (
                    <>
                      <Pencil className="mr-2 h-4 w-4" />
                      编辑
                    </>
                  )}
                </Button>
              </div>

              {/* 内容区域 */}
              {isEditing ? (
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[300px] text-base leading-relaxed"
                  placeholder="请输入关于我们的内容..."
                />
              ) : (
                <p className="whitespace-pre-wrap text-base leading-relaxed text-foreground">
                  {content}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
