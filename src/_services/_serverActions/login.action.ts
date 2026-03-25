

"use server"

import { logInDataType } from "@/app/(Auth)/login/schema"
import axios from "axios"
import { cookies } from "next/headers"

export default async function logInAction(userData: logInDataType) {

  try {

    // إرسال بيانات تسجيل الدخول للـ API
    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",
      userData
    )

    console.log(data)

    // لو تسجيل الدخول نجح
    if (data.message === "success") {

      const cookieStore = await cookies()

      // حفظ التوكن في الكوكي
      cookieStore.set("userToken", data.token, {
        httpOnly: true, // يمنع الوصول للكوكي من الـ JS
        maxAge: 60 * 60 * 24, // مدة الصلاحية يوم
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production", // يعمل فقط في https
      })

      return {
        success: true,
        message: "Logged in successfully",
      }
    }

    return {
      success: false,
      message: data.message,
    }

  } catch (error: any) {

    // لو حصل error من السيرفر
    return {
      success: false,
      message: error?.response?.data?.message || "Login failed",
    }

  }

}