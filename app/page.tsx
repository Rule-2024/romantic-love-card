"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Heart, Sparkles, Star, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
      <div className="absolute top-20 right-20 opacity-20">
        <div className="w-32 h-32 bg-gradient-radial from-amber-200/30 via-amber-100/20 to-transparent rounded-full blur-2xl animate-moonlight"></div>
        <Crown className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-amber-200/40 animate-royal-glow" />
      </div>

      {/* 飘落的玫瑰花瓣 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-petal-fall opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${-10 + Math.random() * 20}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-br from-rose-300/80 to-pink-400/60 rounded-full shadow-lg backdrop-blur-sm"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-md mx-auto px-8 py-12">
        {/* 奢华标题区域 */}
        <div className="text-center mb-20 pt-16">
          <div className="relative">
            {/* 皇冠光环 - 暂时隐藏以修复显示问题 */}
            <div className="hidden absolute -inset-12 bg-gradient-to-r from-amber-400/10 via-rose-400/10 to-purple-400/10 rounded-full blur-3xl animate-royal-pulse opacity-50"></div>

            <div className="relative">
              {/* 钻石星星装饰 */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-4">
                  <Star className="w-4 h-4 text-amber-300 fill-current animate-diamond-twinkle drop-shadow-lg" />
                  <Star className="w-6 h-6 text-amber-200 fill-current animate-diamond-twinkle-delayed drop-shadow-lg" />
                  <Star className="w-4 h-4 text-amber-300 fill-current animate-diamond-twinkle drop-shadow-lg" />
                </div>
              </div>

              <h1 className="text-6xl font-handwriting-bold bg-gradient-to-r from-amber-200 via-rose-200 to-purple-200 bg-clip-text text-transparent mb-8 tracking-wider drop-shadow-2xl">
                Lumière d'Amour
              </h1>

              <div className="relative mb-10">
                <p className="text-slate-200 text-lg font-handwriting tracking-wide leading-relaxed">
                  为我心中最珍贵的缪斯
                  <br />
                  <span className="text-amber-200/80 text-base">九年时光，一生挚爱</span>
                </p>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent"></div>
              </div>

              {/* 优雅的爱心环绕 */}
              <div className="flex justify-center mt-12">
                <div className="relative">
                  {[...Array(6)].map((_, i) => (
                    <Heart
                      key={i}
                      className="absolute w-3 h-3 text-rose-300/70 fill-current animate-elegant-orbit drop-shadow-sm"
                      style={{
                        transform: `rotate(${i * 60}deg) translateX(45px) rotate(-${i * 60}deg)`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  ))}
                  <Heart className="w-8 h-8 text-rose-300 fill-current animate-gentle-heartbeat drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 奢华选择卡片 */}
        <div className="space-y-16">
          {/* 情话卡 */}
          <Link href="/love-cards" className="block group">
            <div className="relative">
              {/* 奢华光环 */}
              <div className="absolute -inset-8 bg-gradient-to-r from-rose-500/30 via-purple-500/20 to-amber-500/30 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-luxury-glow"></div>

              {/* 钻石粒子 */}
              <div className="absolute inset-0 overflow-hidden rounded-[3rem] pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-amber-300 rounded-full animate-diamond-sparkle opacity-0 group-hover:opacity-100 shadow-lg"
                    style={{
                      left: `${15 + Math.random() * 70}%`,
                      top: `${15 + Math.random() * 70}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  ></div>
                ))}
              </div>

              <Card className="relative bg-gradient-to-br from-slate-800/40 via-purple-900/30 to-rose-900/40 backdrop-blur-xl border border-rose-300/20 shadow-2xl rounded-[3rem] overflow-hidden group-hover:scale-[1.02] transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-rose-500/5 to-purple-500/5"></div>

                {/* 奢华边框 */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-300/50 to-transparent"></div>

                <CardContent className="relative p-12 text-center">
                  {/* 图标区域 */}
                  <div className="relative mb-12">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-rose-500/80 via-purple-600/70 to-rose-700/80 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:shadow-rose-500/40 transition-all duration-700 border border-rose-300/30">
                      <Heart className="w-12 h-12 text-white fill-current group-hover:scale-110 transition-transform duration-500 drop-shadow-lg" />
                    </div>

                    {/* 奢华圆环 */}
                    <div className="absolute inset-0 w-24 h-24 mx-auto">
                      <div className="absolute inset-0 border border-rose-300/30 rounded-full animate-luxury-spin"></div>
                      <div className="absolute inset-2 border border-purple-300/20 rounded-full animate-luxury-spin-reverse"></div>
                      <div className="absolute inset-4 border border-amber-300/10 rounded-full animate-luxury-spin"></div>
                    </div>

                    {/* 光芒效果 */}
                    <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-radial from-rose-400/30 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-3xl font-handwriting-bold text-amber-100 drop-shadow-2xl tracking-wide">
                      💌 时光情书
                    </h2>
                    {/* CURSOR: 改动：text-rose-200 改为 text-white/95；原因：提高与卡片背景的对比度和可读性 */}
                    <p className="text-white/95 text-base leading-relaxed font-handwriting drop-shadow-lg">
                      九年相伴的每一个瞬间
                      <br />
                      {/* CURSOR: 改动：text-amber-200/90 改为 text-amber-100/95；原因：增强小字的可读性 */}
                      <span className="text-sm text-amber-100/95">都化作最美的诗句</span>
                    </p>
                  </div>

                  <Button className="mt-10 w-full bg-gradient-to-r from-rose-600/80 via-purple-600/80 to-rose-700/80 hover:from-rose-500 hover:via-purple-500 hover:to-rose-600 text-white font-handwriting py-4 text-lg rounded-2xl shadow-xl hover:shadow-rose-500/30 transition-all duration-500 backdrop-blur-sm border border-rose-300/20 tracking-wide">
                    <Heart className="w-5 h-5 mr-3 fill-current animate-gentle-heartbeat" />
                    开启时光之门
                  </Button>
                </CardContent>
              </Card>
            </div>
          </Link>

          {/* 服务卡 */}
          <Link href="/service-cards" className="block group">
            <div className="relative">
              {/* 奢华光环 */}
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/30 via-amber-500/20 to-rose-500/30 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-luxury-glow"></div>

              {/* 钻石粒子 */}
              <div className="absolute inset-0 overflow-hidden rounded-[3rem] pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-300 rounded-full animate-diamond-sparkle opacity-0 group-hover:opacity-100 shadow-lg"
                    style={{
                      left: `${15 + Math.random() * 70}%`,
                      top: `${15 + Math.random() * 70}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  ></div>
                ))}
              </div>

              <Card className="relative bg-gradient-to-br from-slate-800/40 via-purple-900/30 to-amber-900/40 backdrop-blur-xl border border-purple-300/20 shadow-2xl rounded-[3rem] overflow-hidden group-hover:scale-[1.02] transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-purple-500/5 to-amber-500/5"></div>

                {/* 奢华边框 */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent"></div>

                <CardContent className="relative p-12 text-center">
                  {/* 图标区域 */}
                  <div className="relative mb-12">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500/80 via-amber-600/70 to-purple-700/80 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:shadow-purple-500/40 transition-all duration-700 border border-purple-300/30">
                      <Sparkles className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-500 drop-shadow-lg" />
                    </div>

                    {/* 奢华圆环 */}
                    <div className="absolute inset-0 w-24 h-24 mx-auto">
                      <div className="absolute inset-0 border border-purple-300/30 rounded-full animate-luxury-spin"></div>
                      <div className="absolute inset-2 border border-amber-300/20 rounded-full animate-luxury-spin-reverse"></div>
                      <div className="absolute inset-4 border border-rose-300/10 rounded-full animate-luxury-spin"></div>
                    </div>

                    {/* 光芒效果 */}
                    <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-radial from-purple-400/30 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-3xl font-handwriting-bold text-amber-100 drop-shadow-2xl tracking-wide">
                      🎁 专属典藏
                    </h2>
                    {/* CURSOR: 改动：text-purple-200 改为 text-white/95；原因：避免与紫色背景混淆，提高可读性 */}
                    <p className="text-white/95 text-base leading-relaxed font-handwriting drop-shadow-lg">
                      为你精心准备的珍贵时光
                      <br />
                      {/* CURSOR: 改动：text-amber-200/90 改为 text-amber-100/95；原因：保持与第一个卡片一致的高对比度 */}
                      <span className="text-sm text-amber-100/95">每一刻都是独一无二的宠爱</span>
                    </p>
                  </div>

                  <Button className="mt-10 w-full bg-gradient-to-r from-purple-600/80 via-amber-600/80 to-purple-700/80 hover:from-purple-500 hover:via-amber-500 hover:to-purple-600 text-white font-handwriting py-4 text-lg rounded-2xl shadow-xl hover:shadow-purple-500/30 transition-all duration-500 backdrop-blur-sm border border-purple-300/20 tracking-wide">
                    <Sparkles className="w-5 h-5 mr-3 animate-diamond-twinkle" />
                    解锁专属典藏
                  </Button>
                </CardContent>
              </Card>
            </div>
          </Link>
        </div>

        {/* 底部优雅装饰 */}
        <div className="text-center mt-20 space-y-6">
          <div className="flex justify-center items-center space-x-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-rose-300/40"></div>
            <Heart className="w-4 h-4 text-rose-300/70 fill-current animate-gentle-heartbeat drop-shadow-sm" />
            <div className="w-16 h-px bg-gradient-to-r from-rose-300/40 via-amber-300/40 to-transparent"></div>
          </div>
          <p className="text-slate-300/80 text-sm font-handwriting tracking-wider leading-relaxed">
            时光荏苒，唯爱永恒
            <br />
            <span className="text-xs text-amber-300/60">Created with infinite love for my eternal muse</span>
          </p>
        </div>
      </div>
    </div>
  )
}
