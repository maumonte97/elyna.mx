import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch(
    process.env.DEMO_CALL_WEBHOOK_URL!,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );

  return NextResponse.json({ ok: res.ok }, { status: res.ok ? 200 : 500 });
}
