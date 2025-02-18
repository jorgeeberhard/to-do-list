import { NextRequest, NextResponse } from "next/server";
import { fetchTasks } from "@/app/lib/data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  if (!searchParams.get("userId"))
    return NextResponse.json({ error: "User ID needed" }, { status: 500 });
  const userId = searchParams.get("userId") || "";
  const data = await fetchTasks(userId);

  if (!data) {
    return NextResponse.json({ error: "No tasks Found" }, { status: 404 });
  }

  return NextResponse.json({ tasks: data }, { status: 200 });
}
