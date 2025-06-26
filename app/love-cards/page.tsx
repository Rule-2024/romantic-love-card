"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Heart,
  Sparkles,
  RotateCcw,
  Star,
  Crown,
  Calendar,
  Home,
  Coffee,
  Plane,
  BellRingIcon as Ring,
  Camera,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// CURSOR: 改动：删除智能断句函数；原因：改为完全手动断句，只保留居中功能
// 智能断句函数已删除，改为手动断句

const loveCards = [
  {
    text: "我永远忘不了\n2014年那个秋天，\n你走进了我兼职的世界，\n然后彻底住进了我心里。",
    icon: Calendar,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    text: "你是我人生中第一个客户，\n却成了我唯一的爱人。",
    icon: Heart,
    gradient: "from-rose-400 to-pink-500",
  },
  {
    text: "2月3日，是我一生中最幸福的节日。",
    icon: Calendar,
    gradient: "from-red-400 to-rose-500",
  },
  {
    text: "穷学生的我们靠着奖学金和爱，\n一起撑起了最温柔的青春。",
    icon: Heart,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    text: "那些日子你陪我逛过最破的街，\n却从不觉得委屈，我感激一辈子。",
    icon: Home,
    gradient: "from-blue-400 to-purple-500",
  },
  {
    text: "珠海的月亮很美，但你来过，比月亮还亮。",
    icon: Star,
    gradient: "from-yellow-400 to-amber-500",
  },
  {
    text: "你从东莞搬来深圳实习，\n只为了离我近一点。\n我这一生值了。",
    icon: Plane,
    gradient: "from-green-400 to-blue-500",
  },
  {
    text: "周末的龙华，是我最期待的时空，\n只因你在那头等我。",
    icon: Home,
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    text: "一周见一次，我像过节一样准备见你。",
    icon: Calendar,
    gradient: "from-pink-400 to-rose-500",
  },
  {
    text: "我们在深圳的租房虽小，\n却是最温暖的家。",
    icon: Home,
    gradient: "from-orange-400 to-red-500",
  },
  {
    text: "你喜欢稳定，我喜欢探索，\n幸好我们都爱彼此。",
    icon: Heart,
    gradient: "from-purple-400 to-rose-500",
  },
  {
    text: "你让我知道，\n义无反顾这四个字有多温柔。",
    icon: Heart,
    gradient: "from-rose-400 to-pink-500",
  },
  {
    text: "我一直想告诉你，\n你是我最坚定的选择，\n也是最幸运的遇见。",
    icon: Ring,
    gradient: "from-amber-400 to-yellow-500",
  },
  {
    text: "农历12月初四，\n是我第二次爱上你\n——这次是嫁给我的你。",
    icon: Ring,
    gradient: "from-red-400 to-rose-500",
  },
  {
    text: "你是我人生\n所有计划中，\n唯一不变的那一项。",
    icon: Heart,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    text: "回头看，\n我们什么都没多要，\n却拥有了一切。",
    icon: Heart,
    gradient: "from-green-400 to-blue-500",
  },
  {
    text: "9年的爱情长跑，每一步都值。",
    icon: Calendar,
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    text: "哪怕重来一次，\n我还是愿意在大学门口（QQ上）\n等你买电脑。",
    icon: Heart,
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    text: "比起浪漫的餐厅，\n我更爱我们在小摊前并肩吃夜宵。",
    icon: Coffee,
    gradient: "from-orange-400 to-red-500",
  },
  {
    text: "世界那么大，\n我只想和你\n一起回汕头吃牛肉丸。",
    icon: Home,
    gradient: "from-green-400 to-teal-500",
  },
  {
    text: "想你时，我就想起我们\n坐车奔波\n只为见一面的那些日子。",
    icon: Plane,
    gradient: "from-pink-400 to-rose-500",
  },
  {
    text: "我们的爱不是童话，\n是现实世界里\n最温柔的坚持。",
    icon: Heart,
    gradient: "from-purple-400 to-rose-500",
  },
  {
    text: "你在松岗，我在南山，\n我愿意走遍整个深圳\n只为见你一面。",
    icon: Plane,
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    text: "龙华的那间出租屋里，\n有我为你洗的草莓和做的早餐。",
    icon: Home,
    gradient: "from-red-400 to-pink-500",
  },
  {
    text: "没钱也要爱你，有钱更想宠你。",
    icon: Heart,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    text: "谢谢你嫁给\n那个曾经什么都没有的我。",
    icon: Ring,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    text: "你说你喜欢安稳，\n我说我喜欢未来\n——我们把安稳变成了未来。",
    icon: Home,
    gradient: "from-green-400 to-blue-500",
  },
  {
    text: "你是我做过最不后悔的决定。",
    icon: Heart,
    gradient: "from-rose-400 to-red-500",
  },
  {
    text: "九年的时光，\n不够我爱你一生。",
    icon: Calendar,
    gradient: "from-purple-400 to-rose-500",
  },
  {
    text: "有你在的地方，才叫家。",
    icon: Home,
    gradient: "from-orange-400 to-red-500",
  },
  {
    text: "别人都说我变了，\n我说是因为有了你。",
    icon: Heart,
    gradient: "from-pink-400 to-purple-500",
  },
  {
    text: "我曾想过未来\n很多种样子，\n都不及你说我愿意。",
    icon: Ring,
    gradient: "from-amber-400 to-rose-500",
  },
  {
    text: "谢谢你把我\n从一个毛头小伙\n宠成现在的先生模样。",
    icon: Heart,
    gradient: "from-blue-400 to-purple-500",
  },
  {
    text: "我从来不羡慕别人，\n因为我已经有你了。",
    icon: Heart,
    gradient: "from-green-400 to-teal-500",
  },
  {
    text: "想牵你手走过下一个10年。",
    icon: Heart,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    text: "你的每一次迁就，\n我都记在心里。",
    icon: Heart,
    gradient: "from-rose-400 to-pink-500",
  },
  {
    text: "你信任我、支持我，\n是我最大的底气。",
    icon: Heart,
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    text: "我喜欢惊喜，\n但最爱每天醒来你都在的平凡日子。",
    icon: Home,
    gradient: "from-orange-400 to-red-500",
  },
  {
    text: "世界上最好的风景，\n是你笑起来的样子。",
    icon: Camera,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    text: "你不是我生命的过客，\n而是唯一的主角。",
    icon: Star,
    gradient: "from-purple-400 to-rose-500",
  },
  {
    text: "每一张合照，每一个视频，\n我都偷偷收藏好。",
    icon: Camera,
    gradient: "from-pink-400 to-purple-500",
  },
  {
    text: "你教会我什么是爱，\n也让我明白责任。",
    icon: Heart,
    gradient: "from-red-400 to-rose-500",
  },
  {
    text: "谢谢你没有放弃，\n也谢谢你不嫌弃。",
    icon: Heart,
    gradient: "from-green-400 to-blue-500",
  },
  {
    text: "有你在，\n我再也不怕\n未来的任何变动。",
    icon: Heart,
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    text: "我愿意一直探索，\n但心会永远留在你那里。",
    icon: Plane,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    text: "如果你累了，我来扛一切。",
    icon: Heart,
    gradient: "from-orange-400 to-red-500",
  },
  {
    text: "我永远记得你站在我家门口\n笑着说我们终于结婚了。",
    icon: Ring,
    gradient: "from-rose-400 to-pink-500",
  },
  {
    text: "陪你看月亮，陪你挤地铁，\n陪你过春夏秋冬。",
    icon: Calendar,
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    text: "就算全世界都说\n不可能，\n我还是选你。",
    icon: Heart,
    gradient: "from-red-400 to-rose-500",
  },
  {
    text: "这辈子娶到你，我赚大了。",
    icon: Ring,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    text: "爱你，是我最坚定的习惯。",
    icon: Heart,
    gradient: "from-purple-400 to-rose-500",
  },
  {
    text: "下个10年，我们一起走。",
    icon: Calendar,
    gradient: "from-green-400 to-blue-500",
  },
]

export default function LoveCardsPage() {
  const [currentCard, setCurrentCard] = useState<any>(null)
  const [isFlipping, setIsFlipping] = useState(false)
  const [hasDrawn, setHasDrawn] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const drawCard = () => {
    setIsFlipping(true)
    setHasDrawn(true)

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * loveCards.length)
      setCurrentCard(loveCards[randomIndex])
      setIsFlipping(false)
    }, 2000)
  }

  const resetCard = () => {
    setCurrentCard(null)
    setHasDrawn(false)
    setIsFlipping(false)
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-rose-900">
      {/* 奢华背景效果 */}
      <div className="absolute inset-0">
        <div className="luxury-aurora"></div>
        <div className="diamond-sparkles"></div>
        <div className="floating-petals"></div>
      </div>

      {/* 月光效果 */}
      <div className="absolute top-16 right-16 opacity-15">
        <div className="w-24 h-24 bg-gradient-radial from-amber-200/20 via-amber-100/10 to-transparent rounded-full blur-2xl animate-moonlight"></div>
        <Crown className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-amber-200/30 animate-royal-glow" />
      </div>

      {/* 飘落的玫瑰花瓣 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-petal-fall opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${-10 + Math.random() * 20}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          >
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-rose-300/60 to-pink-400/40 rounded-full shadow-sm backdrop-blur-sm"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-md mx-auto px-8 py-6">
        {/* 返回按钮 */}
        <Link href="/">
          <Button
            variant="ghost"
            className="mb-10 text-slate-300 hover:text-slate-100 hover:bg-slate-800/50 rounded-full px-6 py-3 backdrop-blur-sm border border-slate-600/30 transition-all duration-500 font-handwriting"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回
          </Button>
        </Link>

        {/* 奢华标题 */}
        <div className="text-center mb-16">
          <div className="relative">
            {/* 标题光环 */}
            <div className="absolute -inset-10 bg-gradient-to-r from-rose-400/20 via-purple-400/20 to-amber-400/20 rounded-full blur-3xl animate-royal-pulse"></div>

            <div className="relative">
              {/* CURSOR: 改动：星星装饰改为爱心装饰；原因：用户要求将红色框里的图标换成爱心 */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex space-x-3">
                  <Heart className="w-3 h-3 text-rose-300/80 fill-current animate-diamond-twinkle drop-shadow-sm" />
                  <Heart className="w-4 h-4 text-rose-200/80 fill-current animate-diamond-twinkle-delayed drop-shadow-sm" />
                  <Heart className="w-3 h-3 text-rose-300/80 fill-current animate-diamond-twinkle drop-shadow-sm" />
                </div>
              </div>

              {/* CURSOR: 改动：给emoji添加浪漫的浮动动画效果；原因：用户希望信封emoji有动态效果 */}
              <h1 className="text-4xl font-handwriting-bold mb-4 tracking-wider drop-shadow-lg">
                <span 
                  className="inline-block animate-gentle-heartbeat"
                  style={{ 
                    fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif',
                    animation: 'gentle-float 3s ease-in-out infinite'
                  }}
                >💌</span> 
                <span className="luxury-text-gradient">时光情书</span>
              </h1>
              <p className="text-slate-300/80 text-base font-handwriting">九年相伴的每一个瞬间</p>
            </div>
          </div>
        </div>

        {/* 抽卡区域 */}
        <div className="text-center">
          {!hasDrawn ? (
            <div className="mb-16">
              {/* 未抽卡状态 - 奢华卡片背面 */}
              <div className="relative mb-16 group cursor-pointer" onClick={drawCard}>
                {/* 奢华光环 */}
                <div className="absolute -inset-10 bg-gradient-to-r from-rose-500/30 via-purple-500/20 to-amber-500/30 rounded-[4rem] blur-3xl opacity-60 group-hover:opacity-100 transition-all duration-1000 animate-luxury-glow"></div>

                {/* 钻石粒子环绕 */}
                <div className="absolute inset-0 overflow-hidden rounded-[4rem] pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-amber-300 rounded-full animate-diamond-orbit shadow-lg"
                      style={{
                        left: `${50 + 50 * Math.cos((i * 18 * Math.PI) / 180)}%`,
                        top: `${50 + 50 * Math.sin((i * 18 * Math.PI) / 180)}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    ></div>
                  ))}
                </div>

                <div className="relative w-80 h-[32rem] mx-auto bg-gradient-to-br from-slate-800/60 via-purple-900/40 to-rose-900/50 backdrop-blur-xl rounded-[4rem] shadow-2xl border border-rose-300/20 group-hover:scale-105 transition-all duration-700">
                  {/* 卡片装饰纹理 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-rose-500/5 to-purple-500/5 rounded-[4rem]"></div>
                  <div className="absolute inset-8 border border-rose-300/20 rounded-[3rem]"></div>
                  <div className="absolute inset-16 border border-purple-300/10 rounded-[2rem]"></div>

                  <div className="relative h-full flex flex-col items-center justify-center p-16">
                    {/* 顶部装饰 */}
                    <div className="absolute top-20 left-20 right-20 flex justify-between">
                      <Heart className="w-5 h-5 fill-current text-rose-300/60 animate-gentle-heartbeat drop-shadow-sm" />
                      <Sparkles className="w-5 h-5 text-purple-300/60 animate-diamond-twinkle drop-shadow-sm" />
                      <Heart className="w-5 h-5 fill-current text-rose-300/60 animate-gentle-heartbeat drop-shadow-sm" />
                    </div>

                    {/* 中心内容 */}
                    <div className="text-center space-y-12">
                      <div className="relative">
                        <Heart className="w-32 h-32 mx-auto fill-current drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 text-rose-300/80" />

                        {/* 奢华圆环 */}
                        <div className="absolute inset-0 w-32 h-32 mx-auto">
                          <div className="absolute inset-0 border border-rose-300/30 rounded-full animate-luxury-spin"></div>
                          <div className="absolute inset-4 border border-purple-300/20 rounded-full animate-luxury-spin-reverse"></div>
                        </div>

                        {/* 光芒效果 */}
                        <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-radial from-rose-400/40 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                      </div>

                      <div className="space-y-6">
                        <p className="text-3xl font-handwriting-bold tracking-wide text-slate-200 drop-shadow-lg">
                          轻触开启
                        </p>
                        <p className="text-lg font-handwriting text-slate-300/80">时光之门</p>
                      </div>
                    </div>

                    {/* 底部装饰 */}
                    <div className="absolute bottom-20 left-20 right-20 flex justify-between">
                      <Heart className="w-5 h-5 fill-current text-rose-300/60 animate-gentle-heartbeat drop-shadow-sm" />
                      <Sparkles className="w-5 h-5 text-purple-300/60 animate-diamond-twinkle drop-shadow-sm" />
                      <Heart className="w-5 h-5 fill-current text-rose-300/60 animate-gentle-heartbeat drop-shadow-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mb-8">
              {/* 抽卡后状态 */}
              <div className="relative mb-4">
                <div
                  className={`w-80 h-[32rem] mx-auto transition-all duration-2000 ${isFlipping ? "animate-luxury-flip" : ""}`}
                >
                  {isFlipping ? (
                    /* 翻转中 - 奢华效果 */
                    <div className="relative w-full h-full bg-gradient-to-br from-slate-800/60 via-purple-900/40 to-rose-900/50 backdrop-blur-xl rounded-[4rem] shadow-2xl border border-rose-300/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-rose-500/5 to-purple-500/5 rounded-[4rem]"></div>

                      {/* 奢华粒子 */}
                      <div className="absolute inset-0 overflow-hidden rounded-[4rem]">
                        {[...Array(30)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-gradient-to-r from-amber-300 to-rose-300 rounded-full animate-luxury-particle shadow-lg"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random() * 3}s`,
                            }}
                          ></div>
                        ))}
                      </div>

                      <div className="h-full flex items-center justify-center">
                        <div className="text-center space-y-10">
                          <Heart className="w-28 h-28 mx-auto fill-current animate-luxury-heartbeat text-rose-300/80 drop-shadow-2xl" />
                          <p className="text-2xl font-handwriting text-slate-200">时光流转中...</p>
                          <div className="flex justify-center space-x-4">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="w-3 h-3 bg-rose-400 rounded-full animate-bounce shadow-lg"
                                style={{ animationDelay: `${i * 0.3}s` }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : currentCard ? (
                    /* 显示卡片内容 - 奢华展示 */
                    <div className="relative card-container group">
                      {/* 奢华光环 */}
                      <div className="absolute -inset-8 bg-gradient-to-r from-rose-300/50 via-purple-300/40 to-amber-300/50 rounded-[4rem] blur-2xl animate-luxury-glow"></div>

                      {/* CURSOR: 改动：增强卡片样式类名；原因：应用新的浪漫美观样式增强效果 */}
                      <Card className="relative w-full h-full bg-gradient-to-br from-slate-800/70 via-purple-900/50 to-rose-900/60 backdrop-blur-xl border border-rose-300/30 shadow-2xl rounded-[4rem] overflow-hidden romantic-card-enhanced floating-sparkles">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-rose-500/8 to-purple-500/8"></div>

                                                {/* CURSOR: 改动：优化卡片内容布局结构；原因：为文字提供更合理的空间分配 */}
                        <CardContent className="relative h-full p-8 flex flex-col">
                          {/* 右上角翻转按钮 - 始终显示 */}
                          <button
                            onClick={resetCard}
                            className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white/70 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/10 z-10"
                          >
                            <RotateCcw className="w-4 h-4" />
                          </button>

                          {/* 顶部装饰 */}
                          <div className="flex justify-between mb-6 px-4">
                            <Heart className="w-4 h-4 text-rose-300/60 fill-current animate-gentle-heartbeat drop-shadow-sm" />
                            <Sparkles className="w-4 h-4 text-purple-300/60 animate-diamond-twinkle drop-shadow-sm" />
                            <Heart className="w-4 h-4 text-rose-300/60 fill-current animate-gentle-heartbeat drop-shadow-sm" />
                          </div>

                          {/* 图标区域 */}
                          <div className="text-center mb-6">
                            <div className="relative">
                              <div
                                className={`w-16 h-16 mx-auto bg-gradient-to-r ${currentCard.gradient} rounded-full flex items-center justify-center shadow-2xl animate-gentle-heartbeat`}
                              >
                                <currentCard.icon className="w-8 h-8 text-white drop-shadow-lg" />
                              </div>
                              <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-radial from-white/20 to-transparent rounded-full blur-xl"></div>
                            </div>
                          </div>

                          {/* CURSOR: 改动：使用更直接的换行处理方式，将\n转换为br标签；原因：确保手动换行100%生效，不受CSS样式干扰 */}
                          <div className="flex-1 flex items-center justify-center px-2 py-4">
                            <div className="text-container text-center w-full max-w-none">
                              <p 
                                className="text-white text-xl font-handwriting tracking-wide drop-shadow-lg"
                                style={{ 
                                  whiteSpace: 'pre-line',
                                  wordBreak: 'keep-all',
                                  overflowWrap: 'normal',
                                  lineHeight: '1.8'
                                }}
                              >
                                {currentCard.text}
                              </p>
                            </div>
                          </div>

                          {/* 底部装饰 */}
                          <div className="flex justify-center mt-6 mb-4">
                            <div className="flex space-x-2">
                              <div className="w-1.5 h-1.5 bg-rose-400/80 rounded-full animate-pulse shadow-sm"></div>
                              <div
                                className="w-1.5 h-1.5 bg-purple-400/80 rounded-full animate-pulse shadow-sm"
                                style={{ animationDelay: "0.5s" }}
                              ></div>
                              <div
                                className="w-1.5 h-1.5 bg-amber-400/80 rounded-full animate-pulse shadow-sm"
                                style={{ animationDelay: "1s" }}
                              ></div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* 动态跟随的装饰文字 */}
              {currentCard && (
                <div className="text-center mt-0 space-y-4 animate-fade-in-up">
                  <div className="flex justify-center items-center space-x-4">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300/40 to-amber-300/40"></div>
                    <Heart className="w-3 h-3 text-rose-300/70 fill-current animate-gentle-heartbeat drop-shadow-sm" />
                    <div className="w-12 h-px bg-gradient-to-r from-amber-300/40 via-rose-300/40 to-transparent"></div>
                  </div>
                  <p className="text-slate-300/70 text-sm font-handwriting tracking-wide">每一句话都来自心底最深处</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
