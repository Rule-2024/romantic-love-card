"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Gift,
  Sparkles,
  Star,
  Crown,
  Coffee,
  Home,
  Heart,
  Camera,
  Utensils,
  Music,
  Gamepad2,
  ShoppingBag,
  GiftIcon as Massage,
  RotateCcw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

{/* CURSOR: 改动：重新设计数据结构；原因：将卡片名称和描述分开，避免混淆 */}
const serviceCards = [
  {
    title: '今日"闭嘴卡"',
    description: "老婆说啥都对，老公自动闭麦",
    icon: Heart,
    gradient: "from-pink-400 to-rose-500",
  },
  {
    title: "洗碗豁免卡",
    description: "今晚碗我刷，老婆休息",
    icon: Home,
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    title: "想吃啥就点卡",
    description: "不限价格，老婆想吃就吃",
    icon: Utensils,
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "睡懒觉许可证",
    description: "起床时间由你定",
    icon: Home,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "任性发火日",
    description: "允许老婆无理由生气1次\n（老公不还嘴）",
    icon: Heart,
    gradient: "from-red-400 to-rose-500",
  },
  {
    title: "拥抱时间无限卡",
    description: "不管几点，来抱一会儿",
    icon: Heart,
    gradient: "from-rose-400 to-pink-500",
  },
  {
    title: "深夜宵夜陪吃卡",
    description: "哪怕三更半夜，\n也奉陪到底",
    icon: Coffee,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "老婆专属按摩卡",
    description: "肩颈/腰/腿随你选",
    icon: Massage,
    gradient: "from-green-400 to-teal-500",
  },
  {
    title: "拍照拍到满意卡",
    description: "今天自拍，\n直到老婆满意为止",
    icon: Camera,
    gradient: "from-yellow-400 to-amber-500",
  },
  {
    title: "冲奶茶券",
    description: "随时随地买你爱喝的\n奶茶一杯",
    icon: Coffee,
    gradient: "from-pink-400 to-purple-500",
  },
  {
    title: "公主接送券",
    description: "不管刮风下雨\n都来接你",
    icon: Heart,
    gradient: "from-purple-400 to-rose-500",
  },
  {
    title: "情绪低落陪伴卡",
    description: "你低落时我在，什么也不问",
    icon: Heart,
    gradient: "from-blue-400 to-purple-500",
  },
  {
    title: "任性撒娇卡",
    description: "可以无条件撒娇一次",
    icon: Heart,
    gradient: "from-rose-400 to-pink-500",
  },
  {
    title: "听歌抱抱卡",
    description: "放你喜欢的歌，抱着听完",
    icon: Music,
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    title: "家务全包卡",
    description: "今天家务老公全包",
    icon: Home,
    gradient: "from-green-400 to-blue-500",
  },
  {
    title: "全身心陪你卡",
    description: "关手机，陪你一整天",
    icon: Heart,
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "老婆说了算卡",
    description: "今天所有决定你定",
    icon: Crown,
    gradient: "from-amber-400 to-yellow-500",
  },
  {
    title: "压马路聊天券",
    description: "陪你散步，边走边聊",
    icon: Heart,
    gradient: "from-teal-400 to-green-500",
  },
  {
    title: "女王一日卡",
    description: "今天你说的就是圣旨",
    icon: Crown,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "老公小厨卡",
    description: "亲手给你做一顿饭",
    icon: Utensils,
    gradient: "from-red-400 to-orange-500",
  },
  {
    title: "表白十连发卡",
    description: "夸你十句不重样的情话",
    icon: Heart,
    gradient: "from-pink-400 to-rose-500",
  },
  {
    title: "独享电影夜卡",
    description: "选你想看的，爆米花我来搞定",
    icon: Camera,
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    title: "嘴甜暴击卡",
    description: "今天老公只会说好听的",
    icon: Heart,
    gradient: "from-rose-400 to-pink-500",
  },
  {
    title: "洗头发护理卡",
    description: "给老婆洗头+吹干+抚慰",
    icon: Massage,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "情侣头像定制卡",
    description: "我们今天换情侣头像吧",
    icon: Camera,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "老婆彩虹屁卡",
    description: "十分钟专属夸夸时间",
    icon: Heart,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "一起看日出/日落卡",
    description: "找个时间，静静看看",
    icon: Star,
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "老公快递卡",
    description: "你随手网购，\n我来签收和拆箱服务",
    icon: ShoppingBag,
    gradient: "from-green-400 to-teal-500",
  },
  {
    title: "求生欲爆棚卡",
    description: "老婆提问\n一律回答满分答案",
    icon: Heart,
    gradient: "from-red-400 to-rose-500",
  },
  {
    title: "甜蜜早安晚安卡",
    description: "整天对你说情话\n都不腻",
    icon: Heart,
    gradient: "from-pink-400 to-purple-500",
  },
  {
    title: "一小时不许摸手机卡",
    description: "这一个小时，只看你",
    icon: Heart,
    gradient: "from-blue-400 to-purple-500",
  },
  {
    title: "老公变造型卡",
    description: "今天你说我穿啥\n我就穿啥",
    icon: Heart,
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    title: "全程听你讲卡",
    description: "不打断、全神贯注、点头回应",
    icon: Heart,
    gradient: "from-teal-400 to-blue-500",
  },
  {
    title: "情侣自拍任务卡",
    description: "今天我们拍十张可爱合照！",
    icon: Camera,
    gradient: "from-pink-400 to-rose-500",
  },
  {
    title: "老婆喊一声到卡",
    description: "你喊我干嘛我就出现干嘛",
    icon: Heart,
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "睡前背故事卡",
    description: "今晚讲一个我们之间的\n故事给你听",
    icon: Heart,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "给你写一封情书卡",
    description: "明天之前交给你",
    icon: Heart,
    gradient: "from-rose-400 to-red-500",
  },
  {
    title: "暖宝宝抱紧卡",
    description: "你冷了，\n我就是你的暖手宝",
    icon: Heart,
    gradient: "from-orange-400 to-yellow-500",
  },
  {
    title: "超长语音回复卡",
    description: "今天你的每条语音\n我都认真回复超长",
    icon: Heart,
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    title: "随你购物卡",
    description: "你挑，我买，\n今天你是VVIP",
    icon: ShoppingBag,
    gradient: "from-green-400 to-emerald-500",
  },
  {
    title: "手机壁纸换你卡",
    description: "今天我手机背景\n就只放你照片",
    icon: Camera,
    gradient: "from-pink-400 to-purple-500",
  },
  {
    title: "傻瓜陪练卡",
    description: "今天你练啥\n我都一起陪着练",
    icon: Gamepad2,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "你躺我干卡",
    description: "今天你就是葛优躺，\n我来忙前忙后",
    icon: Home,
    gradient: "from-purple-400 to-rose-500",
  },
  {
    title: "跟拍摄影卡",
    description: "你是女主角，\n我是摄影师",
    icon: Camera,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "任性装傻卡",
    description: "你不开心我装傻\n耍宝哄你笑",
    icon: Heart,
    gradient: "from-pink-400 to-rose-500",
  },
  {
    title: "生日专属惊喜卡",
    description: "我来安排你下一次\n生日的全部",
    icon: Gift,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "我来安排卡",
    description: "你什么都别管，\n今天我带你玩一天",
    icon: Heart,
    gradient: "from-blue-400 to-purple-500",
  },
  {
    title: "任意点歌卡",
    description: "你点，我唱，\n跑调也唱给你听",
    icon: Music,
    gradient: "from-red-400 to-rose-500",
  },
  {
    title: "静静陪你坐卡",
    description: "什么都不做，\n就陪你坐着",
    icon: Heart,
    gradient: "from-teal-400 to-green-500",
  },
  {
    title: "偷亲十次卡",
    description: "今天我要偷偷亲你十次！",
    icon: Heart,
    gradient: "from-rose-400 to-pink-500",
  },
  {
    title: "突袭午餐送达卡",
    description: "哪天你上班累了，\n我亲送爱心午餐",
    icon: Utensils,
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "未来小愿望卡",
    description: "告诉我一个你的小梦想，\n我来一起实现",
    icon: Star,
    gradient: "from-purple-400 to-rose-500",
  },
]

export default function ServiceCardsPage() {
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
      const randomIndex = Math.floor(Math.random() * serviceCards.length)
      setCurrentCard(serviceCards[randomIndex])
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-amber-900">
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

      {/* 飘落的魔法粒子 */}
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
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-purple-300/60 to-amber-400/40 rounded-full shadow-sm backdrop-blur-sm"></div>
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
            <div className="absolute -inset-10 bg-gradient-to-r from-purple-400/20 via-amber-400/20 to-rose-400/20 rounded-full blur-3xl animate-royal-pulse"></div>

            <div className="relative">
              {/* 钻石星星装饰 */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex space-x-3">
                  <Star className="w-3 h-3 text-amber-300/80 fill-current animate-diamond-twinkle drop-shadow-sm" />
                  <Star className="w-4 h-4 text-amber-200/80 fill-current animate-diamond-twinkle-delayed drop-shadow-sm" />
                  <Star className="w-3 h-3 text-amber-300/80 fill-current animate-diamond-twinkle drop-shadow-sm" />
                </div>
              </div>

              {/* CURSOR: 改动：标题添加渐变效果；原因：提升页面标题的浪漫美观度 */}
              <h1 className="text-4xl font-handwriting-bold mb-4 tracking-wider drop-shadow-lg luxury-text-gradient">
                🎁 专属典藏
              </h1>
              <p className="text-slate-300/80 text-base font-handwriting">为你精心准备的珍贵时光</p>
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
                <div className="absolute -inset-10 bg-gradient-to-r from-purple-500/30 via-amber-500/20 to-rose-500/30 rounded-[4rem] blur-3xl opacity-60 group-hover:opacity-100 transition-all duration-1000 animate-luxury-glow"></div>

                {/* 钻石粒子环绕 */}
                <div className="absolute inset-0 overflow-hidden rounded-[4rem] pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-300 rounded-full animate-diamond-orbit shadow-lg"
                      style={{
                        left: `${50 + 50 * Math.cos((i * 18 * Math.PI) / 180)}%`,
                        top: `${50 + 50 * Math.sin((i * 18 * Math.PI) / 180)}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    ></div>
                  ))}
                </div>

                <div className="relative w-80 h-[32rem] mx-auto bg-gradient-to-br from-slate-800/60 via-purple-900/40 to-amber-900/50 backdrop-blur-xl rounded-[4rem] shadow-2xl border border-purple-300/20 group-hover:scale-105 transition-all duration-700">
                  {/* 卡片装饰纹理 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-purple-500/5 to-amber-500/5 rounded-[4rem]"></div>
                  <div className="absolute inset-8 border border-purple-300/20 rounded-[3rem]"></div>
                  <div className="absolute inset-16 border border-amber-300/10 rounded-[2rem]"></div>

                  <div className="relative h-full flex flex-col items-center justify-center p-16">
                    {/* 顶部装饰 */}
                    <div className="absolute top-20 left-20 right-20 flex justify-between">
                      <Gift className="w-5 h-5 text-purple-300/60 animate-luxury-bounce drop-shadow-sm" />
                      <Sparkles className="w-5 h-5 text-amber-300/60 animate-diamond-twinkle drop-shadow-sm" />
                      <Gift className="w-5 h-5 text-purple-300/60 animate-luxury-bounce drop-shadow-sm" />
                    </div>

                    {/* 中心内容 */}
                    <div className="text-center space-y-12">
                      <div className="relative">
                        <Gift className="w-32 h-32 mx-auto drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 text-purple-300/80" />

                        {/* 奢华圆环 */}
                        <div className="absolute inset-0 w-32 h-32 mx-auto">
                          <div className="absolute inset-0 border border-purple-300/30 rounded-full animate-luxury-spin"></div>
                          <div className="absolute inset-4 border border-amber-300/20 rounded-full animate-luxury-spin-reverse"></div>
                        </div>

                        {/* 光芒效果 */}
                        <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-radial from-purple-400/40 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                      </div>

                      <div className="space-y-6">
                        <p className="text-3xl font-handwriting-bold tracking-wide text-slate-200 drop-shadow-lg">
                          轻触开启
                        </p>
                        <p className="text-lg font-handwriting text-slate-300/80">专属典藏</p>
                      </div>
                    </div>

                    {/* 底部装饰 */}
                    <div className="absolute bottom-20 left-20 right-20 flex justify-between">
                      <Gift className="w-5 h-5 text-purple-300/60 animate-luxury-bounce drop-shadow-sm" />
                      <Sparkles className="w-5 h-5 text-amber-300/60 animate-diamond-twinkle drop-shadow-sm" />
                      <Gift className="w-5 h-5 text-purple-300/60 animate-luxury-bounce drop-shadow-sm" />
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
                    <div className="relative w-full h-full bg-gradient-to-br from-slate-800/60 via-purple-900/40 to-amber-900/50 backdrop-blur-xl rounded-[4rem] shadow-2xl border border-purple-300/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-purple-500/5 to-amber-500/5 rounded-[4rem]"></div>

                      {/* 奢华粒子 */}
                      <div className="absolute inset-0 overflow-hidden rounded-[4rem]">
                        {[...Array(30)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-gradient-to-r from-purple-300 to-amber-300 rounded-full animate-luxury-particle shadow-lg"
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
                          <Gift className="w-28 h-28 mx-auto animate-luxury-bounce text-purple-300/80 drop-shadow-2xl" />
                          <p className="text-2xl font-handwriting text-slate-200">典藏开启中...</p>
                          <div className="flex justify-center space-x-4">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="w-3 h-3 bg-purple-400 rounded-full animate-bounce shadow-lg"
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
                      <div className="absolute -inset-8 bg-gradient-to-r from-purple-300/50 via-amber-300/40 to-rose-300/50 rounded-[4rem] blur-2xl animate-luxury-glow"></div>

                      {/* CURSOR: 改动：增强卡片样式类名；原因：应用新的浪漫美观样式增强效果 */}
                      <Card className="relative w-full h-full bg-gradient-to-br from-slate-800/70 via-purple-900/50 to-amber-900/60 backdrop-blur-xl border border-purple-300/30 shadow-2xl rounded-[4rem] overflow-hidden romantic-card-enhanced floating-sparkles">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-purple-500/8 to-amber-500/8"></div>

                        <CardContent className="relative h-full p-12 flex flex-col justify-center">
                          {/* 右上角翻转按钮 - 始终显示 */}
                          <button
                            onClick={resetCard}
                            className="absolute top-6 right-6 w-8 h-8 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white/70 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/10"
                          >
                            <RotateCcw className="w-4 h-4" />
                          </button>

                          {/* 顶部装饰 */}
                          <div className="absolute top-12 left-12 right-12 flex justify-between">
                            <Gift className="w-4 h-4 text-purple-300/60 animate-luxury-bounce drop-shadow-sm" />
                            <Sparkles className="w-4 h-4 text-amber-300/60 animate-diamond-twinkle drop-shadow-sm" />
                            <Gift className="w-4 h-4 text-purple-300/60 animate-luxury-bounce drop-shadow-sm" />
                          </div>

                          {/* 中心内容 */}
                          <div className="text-center space-y-8">
                            <div className="relative">
                              <div
                                className={`w-16 h-16 mx-auto bg-gradient-to-r ${currentCard.gradient} rounded-full flex items-center justify-center shadow-2xl animate-gentle-heartbeat`}
                              >
                                <currentCard.icon className="w-8 h-8 text-white drop-shadow-lg" />
                              </div>
                              <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-radial from-white/20 to-transparent rounded-full blur-xl"></div>
                            </div>

                            {/* CURSOR: 改动：重新设计文字布局；原因：分离标题和描述，提升可读性 */}
                            <div className="text-container">
                              <h3 className="card-title font-handwriting-bold">
                                {currentCard.title}
                              </h3>
                              <p className="card-description font-handwriting elegant-chinese-text">
                                {currentCard.description}
                              </p>
                            </div>
                          </div>

                          {/* 底部装饰 */}
                          <div className="absolute bottom-12 left-12 right-12 flex justify-center">
                            <div className="flex space-x-2">
                              <div className="w-1.5 h-1.5 bg-purple-400/80 rounded-full animate-pulse shadow-sm"></div>
                              <div
                                className="w-1.5 h-1.5 bg-amber-400/80 rounded-full animate-pulse shadow-sm"
                                style={{ animationDelay: "0.5s" }}
                              ></div>
                              <div
                                className="w-1.5 h-1.5 bg-rose-400/80 rounded-full animate-pulse shadow-sm"
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
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-300/40 to-amber-300/40"></div>
                    <Gift className="w-3 h-3 text-purple-300/70 animate-luxury-bounce drop-shadow-sm" />
                    <div className="w-12 h-px bg-gradient-to-r from-amber-300/40 via-purple-300/40 to-transparent"></div>
                  </div>
                  <p className="text-slate-300/70 text-sm font-handwriting tracking-wide">你的每一个愿望都是我的使命</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
