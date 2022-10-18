import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  try {
    const token = request.cookies.get("miToken");
    if (!token) {
      throw new Error("Token invalida");
    }
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    if (!payload) {
      throw new Error("Token invalida");
    }

    return NextResponse.next();

  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/home", "/courses/:path*"],
};
